// src/services/MongoService.js

import axios from 'axios';
const url = process.env.VUE_APP_API_URL;

export default {

    createItem(item) {
        return axios.post(`${url}/items`, item) },
    listItems() {
        return axios.get(`${url}/items`) },
    retrieveItem(id) {
        return axios.get(`${url}/items/${id}`) },
    updateItem(item) {
        return axios.put(`${url}/items/${item._id}`, item) },
    destroyItem(id) {
        return axios.delete(`${url}/items/${id}`) },

    // createDashboard(dashboard) {
    //     return axios.post(`${url}/dashboards`, dashboard) },
    // listDashboards() {
    //     return axios.get(`${url}/dashboards`) },
    // retrieveDashboard(id) {
    //     return axios.get(`${url}/dashboards/${id}`) },
    // updateDashboard(dashboard) {
    //     return axios.put(`${url}/dashboards/${dashboard._id}`, dashboard) },
    // destroyDashboard(id) {
    //     return axios.delete(`${url}/dashboards/${id}`) },

    addChild(id, child) {
        return axios.post(`${url}/items/${id}/children`, child) },
    removeChild(id, childId) {
        return axios.delete(`${url}/items/${id}/children/${childId}`) },
    //
    // createTodoItem(todoItem) {
    //     return axios.post(`${url}/todos/${todoItem.todoId}/items`, todoItem) },
    // listTodoItems(todoId) {
    //     return axios.get(`${url}/todos/${todoId}/items`) },
    // retrieveTodoItem(todoId, todoItemId) {
    //     return axios.get(`${url}/todos/${todoId}/items/${todoItemId}`) },
    // updateTodoItem(todoItem) {
    //     return axios.put(`${url}/todos/${todoItem.todoId}/items/${todoItem.id}`, todoItem) },
    // destroyTodoItem(todoItem) {
    //     return axios.delete(`${url}/todos/${todoItem.todoId}/items/${todoItem.id}`) },
    //
    // addTag(itemId, tagId) {
    //     return axios.post(`${url}/tags/${tagId}/items/${itemId}`) },
    //
    // removeTag(itemId, tagId) {
    //     return axios.delete(`${url}/tags/${tagId}/items/${itemId}`) },
}