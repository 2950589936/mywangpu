<template>
    <div id="login">
        <div id="content">
            <div style="height:25%;width:100%;border-bottom:1px solid #ddd;padding-bottom:10px;">
                <h1 style="text-align:center;padding-top:20px;">登录</h1>
                 </div>
            <div style="height:55%;width:100%;"> 
            </div>
            <div style="height:20%;width:100%;text-align:center"> 
                <button @click="login">确认登陆</button>
            </div>

            </div>
        
    </div>
</template>

<script>
export default {
    methods:{
        login(){
            this.$router.push({path:'/index'})
    }
}
}
</script>

<style lang="scss" scoped>
#content{
width: 30%;
margin-left: 35%;
height: 90vh;
margin-top: 5vh;
background-color: white;
border-radius: 5px;
box-shadow: 0 0 10px #bbb;
}
</style>