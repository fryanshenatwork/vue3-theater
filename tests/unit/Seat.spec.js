import { shallowMount, mount } from '@vue/test-utils'

import Seat from '@/components/SeatSelector/Seat.vue'

describe('Seat.vue', () => {
  describe('render test | expect: match snapshot', () => {
    test('with no prop | expect: toMatchSnapshot', () => {
      const wrapper = shallowMount(Seat)
      expect(wrapper).toMatchSnapshot()
    })

    test('with prop: selected | expect: toMatchSnapshot', () => {
      const wrapper = shallowMount(Seat, { props: { selected: true }})
      expect(wrapper).toMatchSnapshot()
    })

    test('with prop: selected | expect: toMatchSnapshot', () => {
      const wrapper = shallowMount(Seat, { props: { disabled: true }})
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('state test', () => {
    test('with no prop | expect: not having selected and disabled', async () => {
      const wrapper = await shallowMount(Seat)
      expect(wrapper.classes()).not.toContain('selected')
      expect(wrapper.attributes().disabled).not.toBeDefined()
    })

    test('with prop: selected | expect: selected in className', async () => {
      const wrapper = await shallowMount(Seat, { props: { selected: true }})
      expect(wrapper.classes()).toContain('selected')
    })

    test('with prop: disabled | expect: is disabled', async () => {
      const wrapper = await shallowMount(Seat, { props: { disabled: true }})
      expect(wrapper.find('button').attributes()).toBeDefined()
    })
  })

  describe('onClick test', () => {
    test('with no prop | expect: onClick toHaveBeenCalled', async () => {
      const jestFn = jest.fn()
      const wrapper = mount({
        template: `<Seat @click="onClick" />`,
        components: { Seat },
        methods: { onClick: jestFn },
      })
      await wrapper.find('button').trigger('click')
      expect(jestFn).toHaveBeenCalledTimes(1)
    })

    test('with prop: selected | expect: onClick toHaveBeenCalled', async () => {
      const jestFn = jest.fn()
      const wrapper = mount({
        template: `<Seat @click="onClick" selected />`,
        components: { Seat },
        methods: { onClick: jestFn },
      })
      await wrapper.find('button').trigger('click')
      expect(jestFn).toHaveBeenCalledTimes(1)
    })

    test('with prop: disabled | expect: onClick not toHaveBeenCalled', async () => {
      const jestFn = jest.fn()
      const wrapper = mount({
        template: `<Seat @click="onClick" disabled />`,
        components: { Seat },
        methods: { onClick: jestFn },
      })
      await wrapper.find('button').trigger('click')
      expect(jestFn).not.toHaveBeenCalled()
    })
    
  })
})
