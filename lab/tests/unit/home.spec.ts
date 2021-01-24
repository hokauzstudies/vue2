import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('renders props.msg when passed', async () => {
    const wrapper = shallowMount(Home)
    const btn = wrapper.find('[name="clickme"]')
    await btn.trigger('click')
    const text = wrapper.find('[name="name-error"]')
    expect(text.exists()).toBe(true)
  })
})
