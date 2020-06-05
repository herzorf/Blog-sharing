<template>
    <div id="app">
        <Header id="header"></Header>
        <main id="main">
            <router-view/>
        </main>
        <Footer id="footer"></Footer>
    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {}
    }
</script>

<style scoped lang="less">
@import "assets/reset.css";
    #app {
        display: grid;
        grid-template-columns: 12% auto 12%;
        grid-template-rows: auto 1fr 8%;
        grid-template-areas: "header header header" " .  main  . " "footer footer footer";

        #header {
            grid-area: header;
            padding-left: 12%;
            padding-right: 12%;
        }

        #main {
            grid-area: main;
        }

        #footer {
            grid-area: footer;
            padding-left: 12%;
            padding-right: 12%;
        }
      @media (max-width: 768px){
        #app{
          grid-template-columns: 10px auto 10px;
        }
        #header,#footer{
          padding-left: 12px;
          padding-right: 12px;
        }
      }
    }
</style>
