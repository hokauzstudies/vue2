import { shallowMount } from '@vue/test-utils'
import VButton from '@/components/Button.vue'

describe('VButton.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(VButton, {
      slots: { default: msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it('click', async () => {
    const fs = jest.fn()
    const w = shallowMount(VButton, { slots: { default: 'btn' }, mocks: { handleClick: fs } })
    await w.trigger('click')
    expect(w.emitted().click?.length).toBe(1)
    expect(w.emitted().click).toBeTruthy()
  })
})
