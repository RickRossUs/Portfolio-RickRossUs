import { Ref, ref } from "vue";

const EnContactForm:Ref = ref({
    text: 'Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.',
    name: 'Name',
    email: 'E-mail',
    phone: 'Phone Number',
    subject: 'Subject',
    textarea: 'Type your message here',
    btn: 'SEND MESSAGE',
})
const EsContactForm:Ref = ref({
    text: 'No dudes en ponerte en contacto conmigo. Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.',
    name: 'Nombre',
    email: 'Correo electrónico',
    phone: 'Número de teléfono',
    subject: 'Asunto',
    textarea: 'Escribe tu mensaje aquí',
    btn: 'ENVIAR MENSAJE',
})

export default {
    EnContactForm,
    EsContactForm
}