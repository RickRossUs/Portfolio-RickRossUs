<template>
    <div class="social-media h-c">
        <IconSocialMediaComponentVue 
            v-for="(item, index) in iconSocialMedia" 
            :key="index" 
            :color="item.color" 
            :socialMedia="item.name"
            :href="item.link"
        />
    </div>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>
import ISocialMedia from '@/interfaces/ISocialMedia';
import IconSocialMediaComponentVue from './IconSocialMediaComponent.vue'

const iconSocialMedia:Array<ISocialMedia> = [
    {   
        id: 0,
        name: 'phone',
        color: '#64bd00',
        link: 'tel:+5354717218',
    },
    {   
        id: 1,
        name: 'whatsapp',
        color: '#25D366',
        link: 'https://wa.me/+5354717218',
    },
    {   
        id: 2,
        name: 'facebook',
        color: '#3b5998',
        link: ' https://www.facebook.com/ricardosotolongorosabal',
    },
    /*{
        id: 3,
        name: 'twitter',
        color: '#1DA1F2 ',
        link: '',
    },*/
    {
        id: 4,
        name: 'instagram',
        color: '#ac2bac  ',
        link: 'https://www.instagram.com/rickros19',
    },
    {
        id: 5,
        name: 'google',
        color: '#ea4335',
        link: 'mailto:rsotolongog@gmail.com',
    },
    {
        id: 6,
        name: 'linkedin',
        color: '#0082ca ',
        link: 'https://www.linkedin.com/in/ricardosotolongo',
    },
    {
        id: 7,
        name: 'github',
        color: '#333333 ',
        link: 'https://github.com/rickrossus',
    },
]
</script>

=============================================STYLE=========================================================================
<style scoped lang="scss">

</style>