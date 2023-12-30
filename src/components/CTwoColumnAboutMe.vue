<template>
    <div class="info h-c">
        <ul>
            <li v-for="me in DAboutMe.EnAboutMe.value.slice(0, (DAboutMe.EnAboutMe.value.length/2))" :key="me.id">
                <p class="etiqueta">{{ $t(`aboutMe[${me.id}].etiqueta`) }} :</p>
                <a class="valor" :href="$t(`aboutMe[${me.id}].link`)">{{ $t(`aboutMe[${me.id}].valor`) }}</a>
            </li>
        </ul>
        <ul>
            <li v-for="me in DAboutMe.EnAboutMe.value.slice((DAboutMe.EnAboutMe.value.length/2), (DAboutMe.EnAboutMe.value.length))" :key="me.id">
                <p class="etiqueta">{{ $t(`aboutMe[${me.id}].etiqueta`) }} :</p>
                <a class="valor" :href="$t(`aboutMe[${me.id}].link`)">{{ $t(`aboutMe[${me.id}].valor`) }}</a>
            </li>
        </ul>
    </div>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>
import DAboutMe from '@/data/DAboutMe';
</script>

=============================================STYLE=========================================================================
<style scoped lang="scss">
.info {
    width: 100%;
    margin: 10px 20px;
    justify-content: space-around;
    flex-direction: column;
    
    @media (min-width: 700px) {
        & {
            flex-direction: row;
        }
    } 

    ul {
        width: 90%;
        list-style: none;
        padding: 0;
        margin: 0 10px;
        @media (min-width: 700px) {
        & {
                width: 47%;
            }
        }

        li {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: .9rem;
            margin: 10px 0;

            .etiqueta {
                margin: 0;
                color: rgba(white, 0.5);
            }
            .valor {
                margin: 0 6px;
                color: white;
                text-decoration: none;
                cursor: pointer;
                transition: all .5s ease-in-out;
                &:hover {
                    color: $primary-color;
                    transition: all .5s ease-in-out;
                }
            }
            .active {
                cursor: pointer;
            }
            .active:hover {
                color: $primary-color;
                transition: all .5s ease-in-out;
            }
        }
    }
}
</style>