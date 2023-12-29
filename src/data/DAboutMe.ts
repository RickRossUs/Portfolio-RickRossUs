import IAboutMe from "@/interfaces/IAboutMe"
import { Ref, ref } from "vue"

const EnAboutMe:Ref<Array<IAboutMe>> = ref([
    {
        id: 0,
        etiqueta: 'Name',
        valor: 'RickRoss',
        link: 'javascript:void(0)',
        icon: 'pen',
    },
    {
        id: 1,
        etiqueta: 'Birthdate',
        valor: '21 July 2001',
        link: 'javascript:void(0)',
        icon: 'cake',
    },
    {
        id: 2,
        etiqueta: 'Address',
        valor: 'Matanzas, Matanzas, Cuba',
        link: 'https://www.google.com/maps/place/Reparto+Armando+Mestre,+Matanzas/data=!4m6!3m5!1s0x88d2fc74a1ed3fe9:0xffe3b48c9b368432!7e2!8m2!3d23.0384033!4d-81.5982934?utm_source=mstt_1&entry=gps&g_ep=CAESCTExLjczLjMwNhgAIIgnKgBCAkNV',
        icon: 'geo-alt-fill',
    },
    {
        id: 3,
        etiqueta: 'Experience',
        valor: '2+ years',
        link: '#portfolio',
        icon: 'pc-display',
    },
    {
        id: 4,
        etiqueta: 'Freelance',
        valor: 'Available',
        link: 'javascript:void(0)',
        icon: 'person-workspace',
    },
    {
        id: 5,
        etiqueta: 'Phone',
        valor: '(+53) 54717218',
        link: 'tel:+5354717218',
        icon: 'phone-fill',
    },
    {
        id: 6,
        etiqueta: 'E-mail',
        valor: `rsotolongog@gmail.com`,
        link: 'mailto:rsotolongog@gmail.com',
        icon: 'envelope-fill',
    },
    {
        id: 7,
        etiqueta: 'Language',
        valor: 'English, Spanish',
        link: 'javascript:void(0)',
        icon: 'translate',
    }
])

const EsAboutMe:Ref<Array<IAboutMe>> = ref([
    {
        id: 0,
        etiqueta: 'Nombre',
        valor: 'RickRoss',
        link: 'javascript:void(0)',
        icon: 'pen',
    },
    {
        id: 1,
        etiqueta: 'Nacimiento',
        valor: '21 de julio de 2001',
        link: 'javascript:void(0)',
        icon: 'cake',
    },
    {
        id: 2,
        etiqueta: 'Dirección',
        valor: 'Matanzas, Matanzas, Cuba',
        link: 'https://www.google.com/maps/place/Reparto+Armando+Mestre,+Matanzas/data=!4m6!3m5!1s0x88d2fc74a1ed3fe9:0xffe3b48c9b368432!7e2!8m2!3d23.0384033!4d-81.5982934?utm_source=mstt_1&entry=gps&g_ep=CAESCTExLjczLjMwNhgAIIgnKgBCAkNV',
        icon: 'geo-alt-fill',
    },
    {
        id: 3,
        etiqueta: 'Experiencia',
        valor: '2+ años',
        link: '#portfolio',
        icon: 'pc-display',
    },
    {
        id: 4,
        etiqueta: 'Freelance',
        valor: 'Disponible',
        link: 'javascript:void(0)',
        icon: 'person-workspace',
    },
    {
        id: 5,
        etiqueta: 'Teléfono',
        valor: '(+53) 54717218',
        link: 'tel:+5354717218',
        icon: 'phone-fill',
    },
    {
        id: 6,
        etiqueta: 'Correo electrónico',
        valor: `rsotolongog@gmail.com`,
        link: 'mailto:rsotolongog@gmail.com',
        icon: 'envelope-fill',
    },
    {
        id: 7,
        etiqueta: 'Idioma',
        valor: 'Inglés, Español',
        link: 'javascript:void(0)',
        icon: 'translate',
    }
])

export default {
    EnAboutMe,
    EsAboutMe
}