import ISubtitle from "@/interfaces/ISubtitle";
import { Ref, ref } from "vue";

const EnSubtitles:Ref<Array<ISubtitle>> = ref([
    {
        id: 0,
        name1: 'About',
        name2: 'me'
    },
    {
        id: 1,
        name1: 'EDUCATION ',
        name2: 'EXPERIENCE'
    },
    {
        id: 2,
        name1: 'SKILLS',
        name2: ''
    },
    {
        id: 3,
        name1: 'MY',
        name2: 'SERVICES'
    },
    {
        id: 3,
        name1: 'CONTACT',
        name2: 'ME'
    },
])
const EsSubtitles:Ref<Array<ISubtitle>> = ref([
    {
        id: 0,
        name1: 'Sobre',
        name2: 'mi'
    },
    {
        id: 1,
        name1: 'Educaión ',
        name2: 'experiencia'
    },
    {
        id: 2,
        name1: 'habilidades',
        name2: ''
    },
    {
        id: 3,
        name1: 'Mis',
        name2: 'Servicios'
    },
    {
        id: 4,
        name1: 'CONTÁCTAME',
        name2: ''
    },
])

export default {
    EnSubtitles,
    EsSubtitles
}