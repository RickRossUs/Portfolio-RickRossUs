<template>
    <a :href="href" :style="{'--a-color':color}"><i :class="'bi bi-'+socialMedia"></i></a>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>
const prop = defineProps({
    color: {
        type: String,
        required: true,
    },
    socialMedia: {
        type: String,
        required: true,
    },
    href: {
        type: String,
        required: true,
    },
})
</script>

=============================================STYLE=========================================================================
<style scoped lang="scss">
a {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 1.2rem;
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
a i {
    color: white;
    transition: all 0.4s ease-in-out;
}
a:hover{
    background-color: transparent;
}
a:hover i {
    color: var(--a-color);
    transform: scale(1.8);
    transition: all 0.4s ease-in-out;
}
</style>