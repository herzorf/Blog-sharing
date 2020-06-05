<template>
    <header :class="{login:isLogin,noLogin:!isLogin}">
        <template v-if="!isLogin">
            <h1>Share your blog</h1>
            <p>来吧，展示</p>
            <div class="buttons">
                <el-button round>立即登录</el-button>
                <el-button round>注册账号</el-button>
            </div>
        </template>
        <template v-else>
            <h1>Share your blog</h1>
            <i class="el-icon-edit"></i>
            <img src="../assets/logo.png" alt="头像">
        </template>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data(){
            return{
                isLogin:true
            }
        }
    }
</script>

<style scoped lang="less">
    header{
        background-color: #58b4ae;
        color: #ffe277;

    }
    header.noLogin{
        border: 1px solid red;
        padding: 0 12% 32px 12%;
        display: grid;
        justify-content: center;
        padding: 2em;
        p {
            margin-top: 1em;
            text-align: center;
            margin-bottom: 2em;
        }

        div {
            margin: 0 auto;
        }
    }
    header.login{
        padding: 0.5em 0.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        h1{
            flex: 1;
        }
        i{
            font-size: 32px;
            margin-right: 1em;
        }
        img{
            height: 50px;
            width: 50px;
            border: 1px solid #ffe277;
            border-radius: 50%;
            background: #ffb367;
        }
        @media (max-width:786px){
            h1{
                font-size: 29px;
            }
        }
    }


</style>
