<template>
    <div id="home" class="banner">
        <div class="container h-c">
            <div class="overlay"></div>
            <img src="../assets/20231227_020507.jpg" alt="">
            <div class="description">
                <h5>{{ $t("banner.hello") }}</h5>
                <h1>{{ $t("banner.me") }} <span>RICK</span>ROSS</h1>
                <p>{{ $t("banner.content") }}</p>
                <ContainerSocialMediaComponent />
                <div class="btns h-c">
                    <ButtonComponent :msg="$t('banner.btnAboutMe')" icon="person-fill" :btnActive="false" href="#about-me"/>
                    <ButtonComponent :msg="$t('banner.btnPortfolio')" icon="rocket-takeoff-fill" :btnActive="true" href="#portfolio"/>
                </div>
            </div>
        </div>
    </div>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>
import ButtonComponent from './ButtonComponent.vue';
import ContainerSocialMediaComponent from './ContainerSocialMediaComponent.vue';

</script>

=============================================STYLE=========================================================================
<style scoped lang="scss">
.banner {
    position: relative;
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    background-attachment: fixed !important;
    background: url(../assets/home-banner-mio.jpg) center / cover no-repeat;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(black, 0.8);
        z-index: 0;
    }
    & * {
        color: white;
    }
    .container {
        position: relative;
        width: 100%;
        height: 100%;
        flex-direction: column;
        z-index: 1;

        @media (min-width:1200px) {
            flex-direction: row;
        }

        img {
            height: 160px;
            width: 160px;
            border: 10px solid rgba(white, .1);
            border-radius: 50%;
            margin: 20px;

            @media (min-width:1200px) {
                height: 300px;
                width: 300px;
                margin-left: 12vw;
            }
        }

        .description {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            @media (min-width:1200px) {
                align-items: flex-start;
            }

            h1 {
                font-size: 2.3rem;
                padding: 20px;

                @media (min-width:1200px) {
                    padding: 20px 0;
                }
    
                span {
                    color: $primary-color;
                }
            }
            p {
                text-align: center;

                @media (min-width:1200px) {
                    text-align: start;
                }
            }
            .btns {
                flex-direction: column;

                @media (min-width:1200px) {
                    flex-direction: row;
                }
            }
            .social-media {
                margin-bottom: 20px;
            }
        }
    }


}
</style>