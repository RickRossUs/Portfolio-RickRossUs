import '@/components/Contador'
import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue';


describe('Componente Contador', ()=>{
    const wrapper = shallowMount(Counter)
    test('debe hacer match con el snapshot', ()=>{
        expect(wrapper.html()).toMatchSnapshot()
    })
})