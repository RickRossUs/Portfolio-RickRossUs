import IPortfolio from "@/interfaces/IPortfolio";
import { Ref, ref } from "vue";
import DCategory from "./DCategory";

const EnPortfolio:Ref<Array<IPortfolio>> = ref([
    {
        id: 0,
        name: 'IMAGINE PROJECT',
        img: require('@/assets/Portfolio/portfolio-1.jpg'),
        category: DCategory.EnCategories.value.find(category => category.id === 5) || DCategory.EnCategories.value[0],
        link: '#',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae. the majority have suffered alteration in some form.'
    },
    {
        id: 1,
        name: 'MUSIC PROJECT',
        img: require('@/assets/Portfolio/portfolio-2.jpg'),
        category: DCategory.EnCategories.value.find(category => category.id === 3) || DCategory.EnCategories.value[0],
        link: '#',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae. the majority have suffered alteration in some form.'
    },
    {
        id: 2,
        name: 'VIDEO PROJECT',
        img: require('@/assets/Portfolio/portfolio-3.jpg'),
        category: DCategory.EnCategories.value.find(category => category.id === 4) || DCategory.EnCategories.value[0],
        link: '#',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae. the majority have suffered alteration in some form.'
    },
    {
        id: 3,
        name: 'IMAGINE PROJECT',
        img: require('@/assets/Portfolio/portfolio-4.jpg'),
        category: DCategory.EnCategories.value.find(category => category.id === 5) || DCategory.EnCategories.value[0],
        link: '#',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae. the majority have suffered alteration in some form.'
    },
    {
        id: 4,
        name: 'MUSIC PROJECT',
        img: require('@/assets/Portfolio/portfolio-5.jpg'),
        category: DCategory.EnCategories.value.find(category => category.id === 3) || DCategory.EnCategories.value[0],
        link: '#',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae. the majority have suffered alteration in some form.'
    },
    {
        id: 5,
        name: 'VIDEO PROJECT',
        img: require('@/assets/Portfolio/portfolio-6.jpg'),
        category: DCategory.EnCategories.value.find(category => category.id === 4) || DCategory.EnCategories.value[0],
        link: '#',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae. the majority have suffered alteration in some form.'
    },
    {
        id: 6,
        name: 'IMAGINE PROJECT',
        img: require('@/assets/Portfolio/portfolio-7.jpg'),
        category: DCategory.EnCategories.value.find(category => category.id === 5) || DCategory.EnCategories.value[0],
        link: '#',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae. the majority have suffered alteration in some form.'
    },
    {
        id: 7,
        name: 'MUSIC PROJECT',
        img: require('@/assets/Portfolio/portfolio-8.jpg'),
        category: DCategory.EnCategories.value.find(category => category.id === 3) || DCategory.EnCategories.value[0],
        link: '#',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae. the majority have suffered alteration in some form.'
    },
    {
        id: 8,
        name: 'VIDEO PROJECT',
        img: require('@/assets/Portfolio/portfolio-9.jpg'),
        category: DCategory.EnCategories.value.find(category => category.id === 4) || DCategory.EnCategories.value[0],
        link: '#',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae. the majority have suffered alteration in some form.'
    },
])

export default {
    EnPortfolio,
}