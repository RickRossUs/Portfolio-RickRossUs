<template>
    <div class="card-simple-icon h-c">
        <i :class="'bi bi-'+icon"></i>
        <h4>{{ rol }}</h4>
        <p>{{ description }}</p>
    </div>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>
const prop = defineProps({
    icon: {
        type: String,
        required: true,
    },
    rol: {
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
.card-simple-icon {
    flex-direction: column;
    width: 90%;
    margin: 10px;
    padding: 5px 10px;
    border: 1px solid rgba(white, 0.1);
    border-radius: 5px;
    transition: all 0.5s ease-in-out;

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

    &:hover {
        transform: translateY(-10px);
        background: lighten($second-color, 0.3);
        transition: all 0.5s ease-in-out;
    }

    i {
        font-size: 3.5rem;
        color: $primary-color;
    }
    h4 {
        margin: 10px;
    }
    p {
        text-align: center;
        color: rgba(white, 0.5);
    }
}
</style>