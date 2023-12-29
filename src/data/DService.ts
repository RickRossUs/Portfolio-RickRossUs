import IService from "@/interfaces/IService";
import { Ref, ref } from "vue";

const EnServices:Ref<Array<IService>> = ref([
    {
        id: 0,
        icon: 'filetype-html',
        rol: 'WEB DESIGN',
        description: 'Creating attractive and functional interfaces with HTML.',    
    },
    {
        id: 1,
        icon: 'code-slash',
        rol: 'WEB DEVELOPMENT',
        description: 'Implementation of robust solutions for dynamic websites.',    
    },
    {
        id: 2,
        icon: 'brush',
        rol: 'GRAPHIC DESIGN',
        description: 'Creation of attractive and effective visual and graphic elements.',    
    },
    {
        id: 3,
        icon: 'phone',
        rol: 'RESPONSIVE DESIGN',
        description: 'Development of designs that adapt to different devices and screens.',    
    },
    {
        id: 4,
        icon: 'graph-up-arrow',
        rol: 'MEDIA MARKETING',
        description: 'Strategies to promote and position content in various media.',    
    },
    {
        id: 5,
        icon: 'patch-check',
        rol: 'EASY TO CUSTOMIZE',
        description: 'Diseños adaptables y modificables para diferentes necesidades.',
    },
    {
        id: 6,
        icon: 'palette',
        rol: 'UNLIMITED COLOR',
        description: 'Adaptable and modifiable designs for different needs.',    
    },
    {
        id: 7,
        icon: 'file-earmark-code',
        rol: 'UNIQUE DESIGN',
        description: 'Development of exclusive and distinctive designs for each project.',    
    },
    {
        id: 8,
        icon: 'hourglass-split',
        rol: 'LIFE TIME SUPPORT',
        description: 'Provide ongoing assistance and long-term support for projects.',    
    },
])

const EsServices:Ref<Array<IService>> = ref([
    {
        id: 0,
        icon: 'filetype-html',
        rol: 'DISEÑO WEB',
        description: 'Creación de interfaces atractivas y funcionales con HTML.',
    },
    {
        id: 1,
        icon: 'code-slash',
        rol: 'DESARROLLO WEB',
        description: 'Implementación de soluciones robustas para sitios web dinámicos.',
    },
    {
        id: 2,
        icon: 'brush',
        rol: 'DISEÑO GRÁFICO',
        description: 'Creación de elementos visuales y gráficos atractivos y efectivos.',
    },
    {
        id: 3,
        icon: 'phone',
        rol: 'DISEÑO DE RESPUESTA',
        description: 'Desarrollo de diseños que se adaptan a diferentes dispositivos y pantallas.',
    },
    {
        id: 4,
        icon: 'graph-up-arrow',
        rol: 'MARKETING DE MEDIOS',
        description: 'Estrategias para promover y posicionar contenido en diversos medios.',
    },
    {
        id: 5,
        icon: 'patch-check',
        rol: 'FÁCIL DE PERSONALIZAR',
        description: 'Diseños adaptables y modificables para diferentes necesidades.',
    },
    {
        id: 6,
        icon: 'palette',
        rol: 'COLOR ILIMITADO',
        description: 'Uso de paletas de colores flexibles y adaptables en el diseño.',
    },
    {
        id: 7,
        icon: 'file-earmark-code',
        rol: 'DISEÑO UNICO',
        description: 'Desarrollo de diseños exclusivos y distintivos para cada proyecto.',
    },
    {
        id: 8,
        icon: 'hourglass-split',
        rol: 'SOPORTE DE POR VIDA',
        description: 'Proporcionar asistencia continua y soporte a largo plazo para los proyectos.',
    },
])

export default {
    EnServices,
    EsServices
}