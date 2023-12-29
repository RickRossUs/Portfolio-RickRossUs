<template>
    <div class="two-column h-c">
        <h2>{{ $t('subtitle[1].name1') }} <span>&</span> {{ $t('subtitle[1].name2') }}</h2>
        <div class="h-c">
            <div class="column h-c">
                <h4>{{ $t('subtitle[1].name1') }}</h4>
                <div>
                    <CardSimpleComponent
                        v-for="(job) in DJobs.EnJobs.value.filter(job => job.category.name === ('degree' || 'titulo'))" 
                        :key="job.id"
                        :job="$t(`jobs[${job.id}].job`)"
                        :company="$t(`jobs[${job.id}].company`)"
                        :date="$t(`jobs[${job.id}].date`)"
                        :description="$t(`jobs[${job.id}].description`)"
                    />
                </div>
            </div>
            <div class="column h-c">
                <h4>{{ $t('subtitle[1].name2') }}</h4>
                <div>
                    <CardSimpleComponent
                        v-for="(job) in DJobs.EnJobs.value.filter(job => job.category.name === ('job' || 'trabajo'))" 
                        :key="job.id"
                        :job="$t(`jobs[${job.id}].job`)"
                        :company="$t(`jobs[${job.id}].company`)"
                        :date="$t(`jobs[${job.id}].date`)"
                        :description="$t(`jobs[${job.id}].description`)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

=============================================SCRIPT========================================================================
<script lang="ts" setup>
import CardSimpleComponent from './CardSimpleComponent.vue';
import DJobs from '../data/DJobs';

</script>

=============================================STYLE=========================================================================
<style scoped lang="scss">
.two-column {
    flex-direction: column;

    & > div {
        flex-direction: column;
        align-items: flex-start;
    }

    @media (min-width:768px) {
        & {
            padding: 0 6vw;
        }
        & > div {
            flex-direction: row;
        }
    }
    h2 {
        margin: 20px 0;
        font-size: 1.5rem;
        text-transform: uppercase;
    }

    .column {
        height: auto;
        width: 100%;
        flex-direction: column;

        & > div {
            position: relative;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 11px;
                height: 100%;
                width: 1px;
                background-color: rgba($color: white, $alpha: 0.2);
            }
        }
        h4 {
            margin: 10px 0;
            font-size: 1.4rem;
            text-transform: uppercase;
        }
    }
}
span {
    color: $primary-color;
}
</style>