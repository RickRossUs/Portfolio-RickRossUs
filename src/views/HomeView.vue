<template>
    <NavbarComponent/>
    <BannerComponent />
    <TwoColumnContainer />
    <ContainerHorizontalComponent container="SKILLS"/>
    <ContainerHorizontalComponent container="SERVICES"/>
    <ContainerHorizontalComponent container="PORTFOLIO"/>
    <FooterContactComponent />
    <FooterMeComponent />
    <BubbleLangComponent />
    <BubbleContactComponent />
</template>

<script lang="ts" setup>
import BannerComponent from '@/components/BannerComponent.vue';
import BubbleContactComponent from '@/components/BubbleContactComponent.vue';
import BubbleLangComponent from '@/components/BubbleLangComponent.vue';
import ContainerHorizontalComponent from '@/components/ContainerHorizontalComponent.vue';
import FooterContactComponent from '@/components/FooterContactComponent.vue';
import FooterMeComponent from '@/components/FooterMeComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import TwoColumnContainer from '@/components/TwoColumnContainer.vue';

</script>

<style lang="scss">

</style>
