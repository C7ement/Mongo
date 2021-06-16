<script>

    export default {
        name: "VNavbar",
    }

</script>

<template>
    <div id="VNavbar">
        <div class="left">
        </div>

        <div class="links">
          <router-link to="/login">Login</router-link> |
          <router-link to="/">Mongo</router-link>
        </div>

        <div class="right">
        </div>
    </div>
</template>

<style scoped>
    #VNavbar {
        padding: 30px;
        display: flex;
        align-items: center;
        /*color: var(--primary-light);*/
    }

    .left>* {
        vertical-align:middle;
    }

    .left, .right {
        flex: 1;
    }
    .left {
        text-align: left;
    }
    .right {
        text-align: right;
    }

    a {
        /*color: var(--primary-light);*/
        outline:none;
    }
    a.authRouter-link-exact-active {
        font-weight: bold;
        /*color: var(--secondary);*/
    }

    .toggle-btn {
        font-size:30px;
        cursor:pointer;
        margin-right: 15px;
    }

    button{
        display: inline-block;
        vertical-align: top;
        background: transparent;
        /*color: var(--secondary);*/
        /*border: solid 1px var(--secondary);*/
        border-radius: 5px;
        height: 2em;

    }
    button:hover{
        /*background: var(--secondary);*/
        /*color: var(--primary);*/
        border: solid 1px transparent;
        border-radius: 5px;
        height: 2em;
       }
</style>