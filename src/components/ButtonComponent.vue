<template>
    <a 
        v-if="String(download) === 'false'"
        @click='setIndex(href)'
        class="button h-c"
        :class="{'btnActive ': btnActive}">
        <i :class="'bi bi-'+icon"></i>
        {{ msg }}
    </a>
    <a  
        v-else
        :href="href"
        :download="download"
        class="button h-c"
        :class="{'btnActive ': btnActive}">
        <i :class="'bi bi-'+icon"></i>
        {{ msg }}
    </a>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>
import { Ref, onUnmounted, ref } from 'vue';
const prop = defineProps({
    msg: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true,
    },
    btnActive: {
        type: Boolean,
        required: true,
    },
    href: {
        type: String,
        required: true,
    },
    download: {
        type: String,
        default: false,
        required: false,
    },
})
let scrolling = ref(false);

function handleScroll() {
    scrolling.value = window.scrollY > 0;
}

window.addEventListener('scroll', handleScroll);

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const setIndex = (id:string) => {
    if(id[0] == '#'){
        const el = document.querySelector(`${id}`) as HTMLElement;
        if (el) {
            window.scrollTo({
            top: el.offsetTop - 60,
            behavior: 'smooth'
            });
        }
    }
}
</script>

=============================================STYLE=========================================================================
<style scoped lang="scss">
.button {
    width: 280px;
    padding: 10px 20px;
    margin: 8px;
    color: $primary-color !important;
    background-color: transparent;
    border: 1px solid $primary-color;
    border-radius: 20px;
    font-size: .9rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all .3s ease-in-out;

    & * {
        color: $primary-color;
        transition: all .3s ease-in-out;
    }

    i {
        padding-right: 10px;
    }
}
.btnActive, .button:hover {
    color: white !important;
    background-color: $primary-color;
    border: 1px solid $primary-color;
    transition: all .3s ease-in-out;

    & * {
        color: white;
    }
}
</style>