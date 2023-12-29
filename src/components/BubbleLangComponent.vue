<template>
    <div class="lang h-c" @click="handleLang()">
        <i class="bi bi-translate"></i>
    </div>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { i18n } from '../main';

const activeLang:Ref<Boolean> = ref(true)
    
const handleLang = () => {
    if(activeLang.value)
        i18n.global.locale = 'es'
    else
        i18n.global.locale = 'en'
    activeLang.value = !activeLang.value
}
</script>

=============================================STYLE=========================================================================
<style scoped lang="scss">
.lang {
    position: fixed;
    top: 40%;
    right: 0;
    transform: translateY(-50%);
    padding: 5px 10px;
    background-color: $primary-color;
    box-shadow: 0 0 8px -2px white;
    border-radius: 10px 0 0 10px;
    cursor: pointer;
    z-index: 999;

    &:hover {
        background-color: $second-color;
    }

    i {
        color: white;
        width: 100%;
        height: 100%;
    }
}
</style>