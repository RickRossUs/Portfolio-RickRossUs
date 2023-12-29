import ISkill from "@/interfaces/ISkill";
import { Ref, ref } from "vue";

const skills:Ref<Array<ISkill>> = ref([
    {
        id: 0,
        language: 'HTML5',
        porcentaje: 100
    },
    {
        id: 1,
        language: 'CSS3',
        porcentaje: 95
    },
    {
        id: 2,
        language: 'Vue3',
        porcentaje: 90
    },
    {
        id: 3,
        language: 'Nuxt',
        porcentaje: 70
    },
    {
        id: 4,
        language: 'Javascript',
        porcentaje: 85
    },
    {
        id: 5,
        language: 'TypeScript',
        porcentaje: 70
    },
    {
        id: 6,
        language: 'Python',
        porcentaje: 90
    },
    {
        id: 7,
        language: 'Django',
        porcentaje: 95
    },
    {
        id: 8,
        language: 'Java',
        porcentaje: 100
    },
    {
        id: 9,
        language: 'C++',
        porcentaje: 50
    },
    {
        id: 10,
        language: 'PostgreSQL',
        porcentaje: 100
    },
    {
        id: 11,
        language: 'SQLite',
        porcentaje: 85
    },
    {
        id: 12,
        language: 'MySQL',
        porcentaje: 95
    },
    {
        id: 13,
        language: 'Drupal',
        porcentaje: 75
    },
])

export default {
    skills
}