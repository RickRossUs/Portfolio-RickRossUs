<template>
    <div class="contact-form h-c">
        <p>{{ $t('contactForm.text') }}</p>
        <div class="container h-c">
            <input 
                v-for="([key, placeholder], index) in Object.entries(DContactForm.EnContactForm.value).slice(1,5)" 
                :key="index" 
                class="input" 
                type="text" 
                :placeholder="$t(`contactForm.${key}`)"
                v-model="formData[key]"
            >
            <textarea 
                class="input" 
                type="text" 
                :placeholder="$t('contactForm.textarea')" 
                rows="5"
                v-model="formData['textarea']"
            ></textarea>
        </div>
        <ButtonComponent 
            :msg="$t('contactForm.btn')" 
            icon="" 
            :btnActive="true" 
            class="btn" 
            href="javascript:void(0)"
            @click="sendMessage()"
        />
    </div>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>

interface Form {
    name: string,
    email: string,
    phone: string,
    subject: string,
    textarea: string,
    [key: string]: string
}
import DContactForm from '@/data/DContactForm';
import ButtonComponent from './ButtonComponent.vue';
import { Ref, ref } from 'vue';

const formData:Ref<Form> = ref({
    name: '',
    email: '',
    phone: '',
    subject: '',
    textarea: '',
},)

const sendMessage = () => {
    const { email, phone, name, subject, textarea } = formData.value;
    const contactForm = document.querySelector('.contact-form');
    contactForm?.classList.add('loading')
    contactForm?.classList.remove('false');
    contactForm?.classList.remove('true');
    
    const isEmailFilled:Boolean = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPhoneFilled:Boolean = /^\+?\d{1,3}[-\.\s]??\(?\d{1,4}?\)?[-\.\s]??\d{1,4}[-\.\s]??\d{1,4}[-\.\s]??\d{1,9}$/.test(phone);
    
    if (isPhoneFilled) {
        sendToWhatsApp(phone, name, subject, textarea);
    }
    else if (isEmailFilled) {
        sendEmail(email, name, subject, textarea);
    }
    else {
        contactForm?.classList.add('false');
    }
    
    contactForm?.classList.remove('loading')
}

import emailjs from 'emailjs-com';

const sendEmail = async (email:string, name:string = 'Cliente', subject:string = 'Requiere trabajo', message:string) => {
    const contactForm = document.querySelector('.contact-form');
    contactForm?.classList.add('loading');

    try {
        const response = await emailjs.send('service_s5mg91a', 'template_c94su09', {
            from_name: name,
            subject: subject,
            message: message,
            reply_to: email,
        }, '3tPIGTSavHsTVsl2X');

        console.log('Correo enviado con éxito:', response);
        for (const key in formData.value) {
            formData.value[key] = '';
        }
        contactForm?.classList.add('true'); 
    } catch (error) {
        contactForm?.classList.add('false'); 
    } finally {
        contactForm?.classList.remove('loading');

    }
}

const sendToWhatsApp = (phone:string, name:string='Cliente', subject:string='Requiere trabajo', message:string) => {
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(name + '\n' + subject + '\n' + message)}`;

    window.open(whatsappLink, '_blank');
    document.querySelector('.contact-form')?.classList.remove('loading')
}

</script>

=============================================STYLE=========================================================================
<style scoped lang="scss">
.contact-form {
    flex-direction: column;
    width: 95%;
    margin: 20px 0 30px 0;
    padding: 30px 10px;
    background-color: $second-color;
    border-radius: 10px;
    box-shadow: 0 0 12px -2px rgba($color: white, $alpha: 0.5);

    @media (min-width:900px) {
        & {
            width: 70%;
        }
    }

    p {
        margin: 0 15px 10px 15px;
        color: rgba($color: white, $alpha: 0.5);
        text-align: justify;
    }
    .container {
        flex-wrap: wrap;
        .input {
            width: 90%;
            margin: 7px;
            padding: 10px 20px;
            background-color: $third-color;
            border: 1px solid rgba($color: white, $alpha: 0.15);
            border-radius: 20px;
    
            &:focus {
                outline: none;
            }
    
            @media (min-width:900px) {
                & {
                    width: 45%;
                }
            }
        }
        textarea {
            width: 90% !important;
        }
    }
    .btn {
        width: 200px;
        margin-top: 20px;
    }
}
.true {
    animation: titilarTrue 3s ease-in-out;
}
.false {
    animation: titilarFalse 3s ease-in-out;
}
.loading {
    animation: titilarLoading 3s ease-in-out infinite;
}
@keyframes titilarTrue {
    0%, 40%, 80% {
        box-shadow: 0 0 12px 6px rgba($color: $primary-color, $alpha: 0.5);
    }
    10%, 30%, 50%, 70%, 90% {
        box-shadow: 0 0 6px 2px rgba($color: $primary-color, $alpha: 0.5);
    }
    20%, 60%, 100% {
        box-shadow: 0 0 0 0 rgba($color: $primary-color, $alpha: 0.5);
    }
}
@keyframes titilarFalse {
    0%, 40%, 80% {
        box-shadow: 0 0 12px 6px rgba($color: red, $alpha: 0.5);
    }
    10%, 30%, 50%, 70%, 90% {
        box-shadow: 0 0 6px 2px rgba($color: red, $alpha: 0.5);
    }
    20%, 60%, 100% {
        box-shadow: 0 0 0 0 rgba($color: red, $alpha: 0.5);
    }
}
@keyframes titilarLoading {
    0%, 40%, 80% {
        box-shadow: 0 0 12px 6px rgba($color: yellow, $alpha: 0.5);
    }
    10%, 30%, 50%, 70%, 90% {
        box-shadow: 0 0 6px 2px rgba($color: yellow, $alpha: 0.5);
    }
    20%, 60%, 100% {
        box-shadow: 0 0 0 0 rgba($color: yellow, $alpha: 0.5);
    }
}
</style>