<template>
    <div class="progessive-bar-circular h-c" :style="{'--porcentaje':porcentaje+'%', '--porcentaje-10':(porcentaje-10)+'%'}">
        <div class="center h-c">
            <p class="languaje">{{ msg }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
const prop = defineProps({
    msg: {
        type: String,
        required: true,
    },
    porcentaje: {
        type: Number,
        required: true,
    }
})
</script>

<style scoped lang="scss">
.progessive-bar-circular {
    height: 90px;
    width: 90px;
    margin: 15px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, $primary-color 0%, $primary-color 0% var(--porcentaje-10), $second-color var(--porcentaje), $second-color 100%);
    box-shadow: 10px 10px 10px 1px rgba($color: black, $alpha: .2), 
                -3px -3px 3px -1px rgba($color: rgb(100, 100, 100), $alpha: .2);
.center {
    width: 70px;
    height: 70px;
    background-color: $second-color;
    border-radius: 50%;
    box-shadow: inset 10px 10px 10px 2px rgba($color: black, $alpha: .2), 
                inset -3px -3px 3px -1px rgba($color: rgb(100, 100, 100), $alpha: .2);
    transition: all 0.5s ease-in-out;
    &:hover .languaje {
        font-size: 1.2rem;
        transition: all 0.5s ease-in-out;
    }
    .languaje {
        margin: 0;
        padding: 0 10px;
        color: white;
        //background-color: rgba($color: $second-color, $alpha: 0.3);
        //backdrop-filter: blur(10px);
        //border-radius: 20px;
        font-size: 1rem;
        transition: all 0.5s ease-in-out;
    }
    }
}
</style>