import IMenu from "@/interfaces/IMenu"
import { Ref, ref } from "vue"

const EnNavbar:Ref<Array<IMenu>> = ref([
    {
        id: 0,
        name:'HOME', 
        icon:'bi-house-fill',
        link: '#home',
    }, 
    {
        id: 1,
        name:'ABOUT ME',
        icon:'bi-person-fill',
        link: '#about-me',
    }, 
    {
        id: 2,
        name:'SERVICES',
        icon:'bi-rocket-takeoff-fill',
        link: '#services',
    },
    /*{
        id: 3,
        name:'PORTFOLIO',
        icon:'bi-briefcase-fill',
        link: '#portfolio',
    },*/
    {
        id: 3,
        name:'CONTACT',
        icon:'bi-person-vcard-fill',
        link: '#contact',
    }
])

const EsNavbar:Ref<Array<IMenu>> = ref([
    {
        id: 0,
        name:'INICIO', 
        icon:'bi-house-fill',
        link: '#home',
    }, 
    {
        id: 1,
        name:'SOBRE MI',
        icon:'bi-person-fill',
        link: '#about-me',
    }, 
    {
        id: 2,
        name:'SERVICIOS',
        icon:'bi-rocket-takeoff-fill',
        link: '#services',
    },
    /*{
        id: 3,
        name:'PORTAFOLIO',
        icon:'bi-briefcase-fill',
        link: '#portfolio',
    },*/
    {
        id: 3,
        name:'CONTACTO',
        icon:'bi-person-vcard-fill',
        link: '#contact',
    }
])

export default {
    EnNavbar,
    EsNavbar
}