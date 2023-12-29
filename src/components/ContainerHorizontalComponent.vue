<template>
    <div v-if="prop.container=='SKILLS'" class="container-horizontal h-c">
        <h2>{{ $t("subtitle[2].name1") }}</h2>
        <div class="h-c">
            <ProgessiveBarComponent 
                v-for="(skill, index) in DSkill.skills.value" :key="index"
                :msg="skill.language"
                :porcentaje="skill.porcentaje" />
        </div>
    </div>
    <div id="services" v-if="prop.container=='SERVICES'" class="container-horizontal bg-third-color h-c mt-4">
        <h2>{{ $t("subtitle[3].name1") }} <span>{{ $t("subtitle[3].name2") }}</span></h2>
        <div class="h-c">
            <CardSimpleIconComponent 
                v-for="(service) in DService.EnServices.value" :key="service.id"
                :icon="$t(`services[${service.id}].icon`)"
                :rol="$t(`services[${service.id}].rol`)"
                :description="$t(`services[${service.id}].description`)"
                class="services"/>
        </div>
    </div>
    <!-- <div id="portfolio" v-if="prop.container=='PORTFOLIO'" class="container-horizontal h-c mt-4">
        <h2>MY <span>PORTFOLIO</span></h2>
        <div class="h-c w-100">
            <ButtonComponent
                v-for="(category, index) in DCategory.EnCategories.value.slice(2)" 
                :key="$t(`categories[${category.id}].id`)"
                :msg="$t(`categories[${category.id}].name`)"
                icon=""
                :btnActive="activeButton === index"
                href="javascript:void(0)"
                @click="handleCategory(category.name, index)" 
                class="button"
            />
        </div>
        <TransitionGroup name="card" tag="div" class="h-c">
            <CardImageComponent 
            v-for="(work, index) in filterPortfolio" 
            :key="index"
            :name="work.name"
            :img="work.img"
            :category="work.category.name"
            :link="work.link"
            :description="work.description"/>
        </TransitionGroup>
    </div> -->
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>
import { Ref, ref } from 'vue';
import ButtonComponent from './ButtonComponent.vue';
import CardImageComponent from './CardImageComponent.vue';
import CardSimpleIconComponent from './CardSimpleIconComponent.vue';
import ProgessiveBarComponent from './ProgessiveBarComponent.vue';
import DSkill from '../data/DSkill';
import DService from '../data/DService';
import DCategory from '@/data/DCategory';
import DPortfolio from '../data/DPortfolio';
import IPortfolio from '@/interfaces/IPortfolio';

const activeButton = ref(0)
const prop = defineProps({
    container : {
        type: String, 
        required: true,
    }
})
const filterPortfolio:Ref<Array<IPortfolio>> = ref([])
filterPortfolio.value = DPortfolio.EnPortfolio.value

const handleCategory = (category:String, index:number) => {
    activeButton.value = index
    if (category !== 'ALL WORK')
        filterPortfolio.value = DPortfolio.EnPortfolio.value.filter(job => job.category.name === category)
    else
        filterPortfolio.value = DPortfolio.EnPortfolio.value
}
</script>

=============================================STYLE=========================================================================
<style scoped lang="scss">
.container-horizontal {
    flex-direction: column;
    padding: 30px 0;

    @media (min-width:1300px) {
        & {
            padding: 30px 10vw;
        }
    }

    h2 {
        margin: 20px 0 20px 0;
        font-size: 2rem;
        text-transform: uppercase;
    }
    & > div {
        flex-wrap: wrap;
    }
    .button {
        width: 45%;

        @media (min-width: 768px) {
            & {
                width: 20%;
            }
        }
    }
    .card-enter-active, .card-leave-active {
        transition: all .5s ease-in-out;
    }
    .card-enter-from, .card-leave-to {
        opacity: 0;
        transform: translateY(20px);
    }
}
span {
    color: $primary-color;
}
.bg-third-color {
    background-color: $third-color;
}
</style>