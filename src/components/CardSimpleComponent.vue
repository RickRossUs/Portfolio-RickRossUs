<template>
    <div class="card-simple">
        <h5>{{ job }}</h5>
        <p><i class="bi bi-buildings"></i>{{ company }}</p>
        <p><i class="bi bi-calendar-check"></i>{{ date }}</p>
        <p>{{ description }}</p>
    </div>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>
const prop = defineProps({
    job: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    date: {
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
.card-simple {
    position: relative;
    margin: 10px 10px 10px 30px;
    padding: 15px 20px;
    height: auto;
    width: 90%;
    background-color: $second-color;
    border: 1px solid rgba($color: white, $alpha: 0.1);
    border-left: 3px solid $primary-color;
    border-radius: 5px;
    transition: all .5s ease-in-out;

    &::before {
        content: '';
        position: absolute;
        top: 15px;
        left: -30px;
        width: 15px;
        height: 15px;
        background-color: $second-color;
        border: 2px solid $primary-color;
        border-radius: 50%;
    }
    &::after {
        content: '';
        position: absolute;
        top: 22px;
        left: -15px;
        width: 15px;
        height: 2px;
        background-color: $primary-color;
    }
    &:hover::before {
        background-color: $primary-color;
    }
    &:hover {
        box-shadow: 0 0 7px 1px rgba(white, 0.1);
        transition: all .5s ease-in-out;
    }
    h5 {
        font-size: 1.2rem;
        text-transform: uppercase;
        margin-bottom: 20px;
    }
    p {
        font-size: .85rem;
        text-align: justify;
        color: rgba(white, 0.5);
        margin: 10px 0;

        i {
            margin-right: 9px;
            color: rgba(white, 0.5);
        }
    }
}
</style>