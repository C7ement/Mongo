// const Todo = require('../models').Todo;
let ObjectID = require('mongodb').ObjectID;
const collection = 'item';
module.exports = {

    create(req, res) {
        req.app.locals.db.collection(collection).insertOne(req.body,
            (err, result) => {
            if (err) {
                res.status(400).send({'error': err})
            }
            res.status(200).send(result)
        })
    },
    list(req, res) {
        req.app.locals.db.collection(collection).find({}).toArray((err, result) => {
            if (err) {
                res.status(400).send({'error': err})
            }
            if (result === undefined || result.length === 0) {
                res.status(400).send({'error':`No ${collection} in database`})
            } else {
                res.status(200).send(result)
            }
        })
    },
    retrieve(req, res) {
        req.app.locals.db.collection(collection).findOne(
            {'_id': { $in: [ObjectID(req.params.id), req.params.id] } },
            (err, result) => {
            if (err) {
                res.status(400).send({'error': err})
            }
            if (result === undefined) {
                res.status(400).send({'error':`No ${collection} matching that id was found`})
            } else {
                console.log(result)
                res.status(200).send(result)
            }
        })
    },
    update(req, res) {
        delete req.body._id;
        req.app.locals.db.collection(collection).updateOne(
            {'_id': { $in: [ObjectID(req.params.id), req.params.id] } },
            {$set: req.body},
            (err, result) => {
                if (err) { res.status(400).send({'error': err}) }
                res.status(200).send(result)
            })
    },
    destroy(req, res) {
        req.app.locals.db.collection(collection).deleteOne(
            {'_id': { $in: [ObjectID(req.params.id), req.params.id] } },
            (err, result) => {
            if (err) { res.status(400).send({'error': err}) }
            res.status(200).send(result)
        })
    },
    addChild(req, res) {
        req.app.locals.db.collection(collection).updateOne(
            { '_id': { $in: [ObjectID(req.params.id), req.params.id] }  },
            {$push: {"children": ObjectID(req.body.child)}},
            (err, result) => {
                console.log(req.body.child)
                console.log(req.params.id)
                console.log(result.result)
                if (err) { res.status(400).send({'error': err}) }
                res.status(200).send(result)
            })
    },
    removeChild(req, res) {
        req.app.locals.db.collection(collection).updateOne(
            { '_id': { $in: [ObjectID(req.params.id), req.params.id] }  },
            {$pull: {"children": ObjectID(req.params.childId)}},
            (err, result) => {
                console.log(req.params.childId)
                if (err) { res.status(400).send({'error': err}) }
                res.status(200).send(result)
            })
    },
};