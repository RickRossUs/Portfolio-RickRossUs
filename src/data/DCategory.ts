import ICategory from "@/interfaces/ICategory"
import { Ref, ref } from "vue"

const EnCategories:Ref<Array<ICategory>> = ref([
    {   
        id: 0,
        name: 'degree',
    },
    {
        id: 1,
        name: 'job',
    },
    {
        id: 2,
        name: 'ALL WORK',
    },
    {
        id: 3,
        name: 'DESIGNE',
    },
    {
        id: 4,
        name: 'MUSIC',
    },
    {
        id: 5,
        name: 'VIDEOS',
    },
])
const EsCategories:Ref<Array<ICategory>> = ref([
    {
        id: 0,
        name: 'titulo',
    },
    {
        id: 1,
        name: 'trabajo',
    },
    {
        id: 2,
        name: 'TODOS',
    },
    {
        id: 3,
        name: 'DISEÑO',
    },
    {
        id: 4,
        name: 'MÚSICA',
    },
    {
        id: 5,
        name: 'VIDEO',
    },
])

export default {
    EnCategories,
    EsCategories
}