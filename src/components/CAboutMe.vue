<template>
    <div id="information-me" class="information-me h-c">
        <h2>{{ $t("subtitle[0].name1") }} <span>{{ $t("subtitle[0].name2") }}</span></h2>
        <div class="h-c">
            <div class="descrption h-c">
                <h4>{{ $t("presentationAboutMe.hello") }} <span>RICK</span>ROSS</h4>
                <p>{{ $t("presentationAboutMe.content") }}</p>
                <ButtonComponent  
                    :msg="$t('presentationAboutMe.btn')" 
                    icon="cloud-download" 
                    :btnActive="true" 
                    href="/curriculum/Currículum_Vitae_Ricardo_Sotolongo_Rosabal.pdf" 
                    download="Currículum_Vitae_Ricardo_Sotolongo_Rosabal.pdf"
                    target="_blank"
                />
            </div>
            <div class="info h-c">
                <ul>
                    <li v-for="me in DAboutMe.EnAboutMe.value.slice(0, (DAboutMe.EnAboutMe.value.length/2))" :key="me.id">
                        <p class="etiqueta">{{ $t(`aboutMe[${me.id}].etiqueta`) }} :</p>
                        <a class="valor" :href="$t(`aboutMe[${me.id}].link`)">{{ $t(`aboutMe[${me.id}].valor`) }}</a>
                    </li>
                </ul>
                <ul>
                    <li v-for="me in DAboutMe.EnAboutMe.value.slice((DAboutMe.EnAboutMe.value.length/2), (DAboutMe.EnAboutMe.value.length))" :key="me.id">
                        <p class="etiqueta">{{ $t(`aboutMe[${me.id}].etiqueta`) }} :</p>
                        <a class="valor" :href="$t(`aboutMe[${me.id}].link`)">{{ $t(`aboutMe[${me.id}].valor`) }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>
import ButtonComponent from './ButtonComponent.vue';
import DAboutMe from '@/data/DAboutMe';
</script>

=============================================STYLE=========================================================================
<style scoped lang="scss">
.information-me {
    height: auto !important;
    flex-direction: column;
    padding: 0 3vw;

    h2 {
        font-size: 2rem;
        font-weight: 700;
        margin: 50px 0 20px 0;
        text-transform: uppercase;
    }

    & > div {
        flex-direction: column;

        @media (min-width:1200px) {
            flex-direction: row;
            
        }

        .descrption {
            width: 100%;
            margin: 10px 20px;
            flex-direction: column;
    
            h4{
                margin: 20px 0;
                font-size: 1.5rem;
            }
            p {
                font-size: .9rem;
                text-align: justify;
                color: rgba(white, 0.5);
                line-height: 30px;
            }
        }
    
        .info {
            width: 100%;
            margin: 10px 20px;
            justify-content: space-around;
            flex-direction: column;

            @media (min-width: 700px) {
                & {
                    flex-direction: row;
                }
            }
    
            ul {
                width: 90%;
                list-style: none;
                padding: 0;
                margin: 0 10px;

                @media (min-width: 700px) {
                & {
                        width: 47%;
                    }
                }
    
                li {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    font-size: .9rem;
                    margin: 10px 0;
    
                    .etiqueta {
                        margin: 0;
                        color: rgba(white, 0.5);
                    }
                    .valor {
                        margin: 0 6px;
                        color: white;
                        text-decoration: none;
                        cursor: pointer;
                        transition: all .5s ease-in-out;

                        &:hover {
                            color: $primary-color;
                            transition: all .5s ease-in-out;
                        }
                    }
                    .active {
                        cursor: pointer;
                    }
                    .active:hover {
                        color: $primary-color;
                        transition: all .5s ease-in-out;
                    }
                }
            }
        }
    }
}
span {
    color: $primary-color;
}
</style>