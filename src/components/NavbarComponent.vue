<template>
    <nav class="navbar navbar-expand-lg" :class="{'bg-scroll':scrolling}">
        <div class="container-fluid">
            <a class="navbar-brand" @click="moveScroll('#home')"><span>RICK</span>Ross</a>
            <button @click="click=!click" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="bi" :class="iconClass()"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li 
                    v-for="(item) in DNavbar.EnNavbar.value" 
                    :key="item.id" 
                    @click="setIndex(item.id, $t(`navbar[${item.id}].link`))" 
                    class="nav-item">
                        <a 
                            class="nav-link" 
                            :class="{'active':item.id === activeIndex}" 
                            aria-current="page">
                            <i class="bi" :class="$t(`navbar[${item.id}].icon`)"></i>
                            {{ $t(`navbar[${item.id}].name`) }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>
import { Ref, onMounted, onUnmounted, ref } from 'vue';
import { i18n } from '../main';
import DNavbar from '@/data/DNavbar';

const activeIndex:Ref<number> = ref(0)
const click:Ref<boolean> = ref(true)
let scrolling = ref(false);

function handleScroll() {
    scrolling.value = window.scrollY > 0;
}

window.addEventListener('scroll', handleScroll);

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const iconClass = () => {
    return click.value ? 'bi-list': 'bi-x-lg'
}

const setIndex = (index:number, id:string) => {
    activeIndex.value = index

    moveScroll(id)
}

const moveScroll = (id:string) => {
    const el = document.querySelector(`${id}`) as HTMLElement;
    if (el) {
        window.scrollTo({
        top: el.offsetTop - 60, 
        behavior: 'smooth'
        });
    }
}

const watchScroll = () => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        for(let i=0; i<DNavbar.EnNavbar.value.length; i++) {
            const targetElement = document.querySelector(i18n.global.t(`navbar[${i}].link`)) as HTMLElement;

            if (targetElement) {
                const targetOffset = targetElement.offsetTop - 100; // Posición a verificar

                if (scrollPosition >= targetOffset) {
                    activeIndex.value = i;
                }
            }
        }
    }

    onMounted(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });
};

watchScroll();
</script>

=============================================STYLE=========================================================================
<style scoped lang="scss">
.navbar {
    position: fixed;
    width: 100%;
    background-color: transparent;
    z-index: 1000;
    transition: background .5s ease-in-out;

    .navbar-brand {
        margin-left: 20px;
        font-size: 1.4rem;
        font-weight: 600;
        text-transform: uppercase;
        color: white;
        cursor: pointer;

        @media (min-width: 768px) {
            font-size: 2rem;
        }

        span {
            color: $primary-color;
        }
    }
    .navbar-toggler {
        color: transparent;
        border: 0;

        .bi {
            font-size: 2.2rem;
            color: white !important;
            transition: all .3s ease-in-out !important;

        }
    }

    .navbar-nav {
        margin-top: 10px;
        background: rgba(white, 0.05);
        backdrop-filter: blur(10px);
        border-radius: 10px;

        @media (min-width:768px) {
            & {
                margin: 0 5vw 0 auto;
                background-color: transparent;
                backdrop-filter: none;
            }
        }

        .nav-item {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 0.8rem;
            border-top: 1px solid rgba(white, 7%);
            cursor: pointer;
    
            @media (min-width:768px) {
                & {
                    border: 0;
                }
            }
            & .active, & .active  i, &:hover a, &:hover a i {
                color: $primary-color !important;
            }
    
            i {
                margin: 0 10px;
                color: white;
            }
            a {
                color: white;
            }
        }
    }
}
.bg-scroll {
        background: rgb(white, 0.05);
        backdrop-filter: blur(10px);
        transition: background 1s ease-in-out;
    }
</style>