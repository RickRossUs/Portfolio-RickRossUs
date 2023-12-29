<template>
    <button class="bubble-contact">
        <a href="https://wa.me/+5354717218"><i class="bi bi-whatsapp"></i></a>
    </button>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>

</script>

=============================================STYLE=========================================================================
<style scoped lang="scss">
.bubble-contact {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    color: white;
    background-color: $primary-color;
    border: 1px solid $primary-color;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1000;
    transition: all .5s ease-in-out;
    animation: ring 15s ease-in-out infinite;

    i {
        font-size: 1.4rem;
    }
}
@keyframes ring {
    0% {
        transform: translateY(-3px);
        box-shadow: 0 0 10px 3px $primary-color;
    }
    .5% {
        transform: translateY(-7px);
        box-shadow: 0 0 10px 3px $primary-color;
    }
    1% {
        transform: translateY(-10px);
        box-shadow: 0 0 10px 3px $primary-color;
    }
    1.5% {
        transform: translateY(-7px);
        box-shadow: 0 0 10px 3px $primary-color;
    }
    2% {
        transform: translateY(-3px);
        box-shadow: 0 0 10px 3px $primary-color;
    }
    2.5% {
        transform: translateY(0);
        box-shadow: 0 0 10px 3px $primary-color;
    }
    3% {
        transform: translateY(-3px);
        box-shadow: 0 0 10px 3px $primary-color;
    }
    3.5% {
        transform: translateY(-7px);
        box-shadow: 0 0 10px 3px $primary-color;
    }
    4% {
        transform: translateY(-3px);
        box-shadow: 0 0 10px 3px $primary-color;
    }
    4.5% {
        transform: translateY(0);
        box-shadow: 0 0 10px 3px $primary-color;
    }
    5% {
        transform: translateY(-3px);
        box-shadow: 0 0 10px 3px $primary-color;
    }
    5.5% {
        transform: translateY(0);
        box-shadow: 0 0 10px 3px $primary-color;
    }
    100% {
        transform: translateY(2px);
    }
}
</style>