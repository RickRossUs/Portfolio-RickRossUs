import DCategory from './DCategory'
import IExperience from "@/interfaces/IExperience"
import { Ref, ref } from "vue"

const EnJobs:Ref<Array<IExperience>> = ref([
    {
        id: 0,
        job: 'COMPUTER SCIENCE',
        company: 'Universidad de las Ciencias Informaticas',
        date: 'Nov 2021 - Dic 2024',
        description: 'My approach to the field of Computer Science at the University of Computer Science has been an enriching and dynamic experience. During this period, I have deepened my knowledge in fundamental areas such as algorithms, programming, computer systems and emerging technologies. I have had the opportunity to participate in innovative projects, develop strong technical skills, and explore various aspects of computer science, which has provided me with a solid foundation to face challenges in this ever-evolving field.',
        category: DCategory.EnCategories.value.find(category => category.id === 0) || DCategory.EnCategories.value[0],
    },
    {
        id: 1,
        job: 'WEB DESIGNER',
        company: 'CIDI',
        date: 'Nov 2022 - Present',
        description: 'I designed intuitive and attractive interfaces, working closely together to optimize the user experience.',
        category: DCategory.EnCategories.value.find(category => category.id === 1) || DCategory.EnCategories.value[0],
    },
    {
        id: 2,
        job: 'BACK-END DEVELOPER',
        company: 'CIDI',
        date: 'Sept 2022 - Present',
        description: 'Developed robust and scalable solutions, optimizing server logic for large applications.',
        category: DCategory.EnCategories.value.find(category => category.id === 1) || DCategory.EnCategories.value[0],
    },
])

const EsJobs:Ref<Array<IExperience>> = ref([
    {
        id: 0,
        job: 'ING. CIENCIAS INFORMÁTICAS',
        company: 'Universidad de las Ciencias Informaticas',
        date: 'Nov 2021 - Dic 2024',
        description: 'Mi enfoque en el campo de la Informática en la Universidad de las Ciencias Informáticas ha sido una experiencia enriquecedora y dinámica. Durante este periodo, he profundizado mis conocimientos en áreas fundamentales como algoritmos, programación, sistemas informáticos y tecnologías emergentes. He tenido la oportunidad de participar en proyectos innovadores, desarrollar habilidades técnicas sólidas y explorar diversos aspectos de la ciencia computacional, lo que me ha proporcionado una base sólida para enfrentar desafíos en este campo en constante evolución',
        category: DCategory.EsCategories.value.find(category => category.id === 0) || DCategory.EsCategories.value[0],
    },
    {
        id: 1,
        job: 'DISEÑADOR WEB',
        company: 'CIDI',
        date: 'Nov 2022 - Presente',
        description: 'Diseñé interfaces intuitivas y atractivas, colaborando estrechamente para optimizar la experiencia del usuario.',
        category: DCategory.EsCategories.value.find(category => category.id === 1) || DCategory.EsCategories.value[0],
    },
    {
        id: 2,
        job: 'DESARROLLADOR BACK-END',
        company: 'CIDI',
        date: 'Sept 2022 - Presente',
        description: 'Desarrollé soluciones robustas y escalables, optimizando la lógica del servidor para aplicaciones de gran envergadura.',
        category: DCategory.EsCategories.value.find(category => category.id === 1) || DCategory.EsCategories.value[0],
    },
])

export default {
    EnJobs,
    EsJobs,
}