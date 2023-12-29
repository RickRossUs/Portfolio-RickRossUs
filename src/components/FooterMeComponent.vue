<template>
    <div class="footer-me">
        <a href="#">RickRoosUs - All rights reserved.</a>
    </div>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>

</script>

=============================================STYLE=========================================================================
<style scoped lang="scss">
.footer-me {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    margin-top: -10px;
    background-color: rgb(40, 40, 40);
    border-top: 1px solid rgba($color: white, $alpha: 0.1);
    border-radius: 10px 10px 0 0;
    
    p {
        color: rgb(216, 216, 216);
        margin: 0;
    }
    a {
        padding: 10px;
        color: transparent;
        background-image: linear-gradient(to left, white, rgb(150, 150, 150), rgb(50, 50, 50));
        background-size: 300%;
        -webkit-background-clip: text;
        text-decoration: none;
        animation: moveDiv 30s linear infinite;
    }

    @keyframes moveDiv {
        100% {
            background-position: 2000px 0;
        }
    }
}
</style>