<template>
    <div class="card-image">
        <img :src="img" :alt="name">
        <div class="overlay h-c">
            <div class="container h-c">
                <h4>{{ name }}</h4>
                <p>{{ category }}</p>
                <ButtonComponent
                    class="btn" 
                    msg="" 
                    icon="link" 
                    :btnActive="true"
                    href="javascript:void(0)"
                />
            </div>
        </div>
    </div>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>
import ButtonComponent from './ButtonComponent.vue';

const prop = defineProps({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})
</script>

=============================================STYLE=========================================================================
<style scoped lang="scss">
.card-image {
    position: relative;
    height: 300px;
    max-width: 350px;
    margin: 10px;

    &:hover .overlay {
        width: 101%;
        height: 101%;
        opacity: 1;
        transition: all 0.5s ease-in-out;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        height: 80%;
        opacity: 0;
        background-color: rgba($color: black, $alpha: 0.6);
        transform: translate(-50%, -50%);
        transition: all 0.5s ease-in-out;

        .container {
            flex-direction: column;
            width: 90%;
            height: 90%;
            border: 1px dashed white;

            p {
                font-size: 0.8rem;
            }
            .btn {
                width: 40px;
                height: 40px;
                padding: 8px 12px;

                &:hover {
                    background-color: transparent;
                }
            }
        }
    }
}
</style>