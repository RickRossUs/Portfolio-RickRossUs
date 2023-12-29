<template>
    <div id="contact" class="footer-contact h-c">
        <h2>{{ $t("subtitle[4].name1") }} <span>{{ $t("subtitle[4].name2") }}</span></h2>
        <div class="cards h-c">
            <CardContactComponent
                v-for="(me, index) in aboutMe" :key="index"
                :etiqueta="$t(`aboutMe[${me.id}].etiqueta`)"
                :valor="me.valor"
                :link="me.link"
                :icon="me.icon"
                :number=String(index+1)
            />
        </div>
        <ContainerSocialMediaComponentVue class="m-4"/>
        <ContactFormComponent />
    </div>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>
import { Ref, ref } from 'vue';
import CardContactComponent from './CardContactComponent.vue';
import ContactFormComponent from './ContactFormComponent.vue';
import ContainerSocialMediaComponentVue from './ContainerSocialMediaComponent.vue';
import IAboutMe from '@/interfaces/IAboutMe';
import DAboutMe from '@/data/DAboutMe';

const aboutMe:Ref<Array<IAboutMe>> = ref([])
aboutMe.value.push(DAboutMe.EnAboutMe.value[2])
aboutMe.value.push(DAboutMe.EnAboutMe.value[6])
aboutMe.value.push(DAboutMe.EnAboutMe.value[5])

</script>

=============================================STYLE=========================================================================
<style scoped lang="scss">
.footer-contact {
    flex-direction: column;
    padding: 20px 10px;
    background-color: $third-color;
    
    h2 {
        margin: 30px 0;
        font-size: 2rem;
        text-transform: uppercase;
    }
    .cards {
        flex-wrap: wrap;
        width: 100%;
    }
}
span {
    color: $primary-color;
}
</style>