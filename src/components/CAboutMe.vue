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
                    href="/curriculum/curriculum_vitae_ricardo_sotolongo_rosabal.pdf" 
                    download="Currículum_Vitae_Ricardo_Sotolongo_Rosabal.pdf"
                    target="_blank"
                /> 
            </div>
            <CTwoColumnAboutMe />
        </div>
    </div>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>
import ButtonComponent from './ButtonComponent.vue';
import CTwoColumnAboutMe from './CTwoColumnAboutMe.vue';
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
    }
}
span {
    color: $primary-color;
}
</style>