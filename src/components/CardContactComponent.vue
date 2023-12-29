<template>
    <div class="card-contact" :style="{'--number':'.0'}">
        <h5>{{ etiqueta }}<i :class="'bi bi-'+icon"></i></h5>
        <a :href="link">{{ valor }}</a>
        <p>.0{{ number }}</p>
    </div>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>
const prop = defineProps({
    etiqueta: {
        type: String,
        required: true,
    },
    valor: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
})
</script>

=============================================STYLE=========================================================================
<style scoped lang="scss">
.card-contact {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 130px;
    margin: 10px;
    padding: 20px 30px;
    background-color: $second-color;
    border-radius: 3px;
    transition: all .5s ease-in-out;

    &:hover {
        box-shadow: 0 0 10px rgba($color: white, $alpha: 0.5);
        transition: all .5s ease-in-out;
    }
    &:hover i{
        color: $second-color;
        background-color: $primary-color;
        transition: all .5s ease-in-out;
    }
    &:hover p {
        color: lighten($color: $second-color, $amount: 15);
        border-bottom: 1px dashed lighten($color: $second-color, $amount: 20);
        border-right: 1px dashed lighten($color: $second-color, $amount: 20);
        transition: all .5s ease-in-out;
    }

    @media (min-width:768px) {
        & {
            width: 45%;
        }
    }
    @media (min-width:1200px) {
        & {
            width: 30%;
        }
    }

    h5 {
        font-size: 1.2rem;
        text-transform: uppercase;
        i {
            margin-left: 20px;
            padding: 10px 13px;
            color: $primary-color;
            background-color: $third-color;
            border: 1px solid rgba($color: white, $alpha: 0.1);
            border-radius: 50%;
            transition: all .5s ease-in-out;
        }
    }
    a {
        margin: 20px 0 -10px 0;
        font-size: .85rem;
        color: rgba($color: white, $alpha: 0.5) !important;
        text-decoration: none;
        cursor: pointer;
        transition: all .3s ease-in-out;

        &:hover {
            color: $primary-color !important;
            transition: all .3s ease-in-out;
        }
    }
    p {
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px;
        font-size: 1.8rem;
        font-weight: bold;
        color: lighten($color: $second-color, $amount: 6);
        background-color: darken($color: $second-color, $amount: 1.8);
        border-bottom: 1px dashed lighten($color: $second-color, $amount: 8);
        border-right: 1px dashed lighten($color: $second-color, $amount: 8);
        border-radius: 0 50% 50% 0;
        transition: all .5s ease-in-out;
    }
}
</style>