import { shallowMount, Wrapper } from '@vue/test-utils'
import SignIn from '@/views/SignIn.vue'

// [X] Render
// Render with acessibilidade
// [X] Validators Submit
// Logic Submit with mock
// Redirecting
// Intenationalization

const EMAIL_TARGET = 'input[name="email"]'
const EMAIL_ERROR_TARGET = 'p[name="email-error"]'
const PASSWORD_TARGET = 'input[name="password"]'
const PASSWORD_ERROR_TARGET = 'p[name="password-error"]'
const SUBMIT_TARGET = 'button[name="sign-in"]'

let wrapper: Wrapper<SignIn>

beforeEach(() => (wrapper = shallowMount(SignIn)))
afterEach(() => (wrapper.destroy()))

describe('SignIn.vue Render', () => {
  it('Deve existir um campo de email', () => {
    const emailField = wrapper.find(EMAIL_TARGET)
    expect(emailField.exists()).toBe(true)
    expect(emailField.attributes().type).toEqual('email')
  })

  it('Deve existir um campo de senha', () => {
    const passwordField = wrapper.find(PASSWORD_TARGET)
    expect(passwordField.exists()).toBe(true)
    expect(passwordField.attributes().type).toEqual('password')
  })

  it('Deve existir um botão de SignIn', () => {
    expect(wrapper.find(SUBMIT_TARGET).exists()).toBe(true)
  })

  it('Não deve exibir error de email ao iniciar', () => {
    const emailField = wrapper.find(EMAIL_TARGET)
    const emailError = wrapper.find(EMAIL_ERROR_TARGET)
    expect(emailError.exists()).toBe(false)
    expect(emailField.classes()).not.toContain('error')
  })

  it('Não deve exibir error de password ao iniciar', () => {
    const passwordField = wrapper.find(PASSWORD_TARGET)
    const passwordError = wrapper.find(PASSWORD_ERROR_TARGET)
    expect(passwordError.exists()).toBe(false)
    expect(passwordField.classes()).not.toContain('error')
  })
})

describe('SignIn.vue Validators', () => {
  it('[Email] Não pode estar em branco', async () => {
    const emailField = wrapper.find(EMAIL_TARGET)

    const btn = wrapper.find(SUBMIT_TARGET)
    await btn.trigger('click')

    const emailError = wrapper.find(EMAIL_ERROR_TARGET)
    expect(emailError.exists()).toBe(true)
    expect(emailError.text()).toEqual('Email inválido') // TODO pesquisar melhoras palavras de mensagens
    expect(emailField.classes()).toContain('error')
  })

  it('[Email] Não pode ser inválido', async () => {
    const emailField = wrapper.find(EMAIL_TARGET)
    await emailField.setValue('email@email.com')

    const btn = wrapper.find(SUBMIT_TARGET)
    await btn.trigger('click')

    const emailError = wrapper.find(EMAIL_ERROR_TARGET)
    expect(emailError.exists()).toBe(true)
    expect(emailError.text()).toEqual('Email inválido') // TODO pesquisar melhoras palavras de mensagens
    expect(emailField.classes()).toContain('error')
  })

  it('[Email] Deve ser válido', async () => {
    const emailField = wrapper.find(EMAIL_TARGET)
    await emailField.setValue('email@email.com')

    const btn = wrapper.find(SUBMIT_TARGET)
    await btn.trigger('click')

    const emailError = wrapper.find(EMAIL_ERROR_TARGET)
    expect(emailError.exists()).toBe(false)
    expect(emailField.classes()).not.toContain('error')
  })

  it('[Password] Não pode estar em branco', async () => {
    const passwordField = wrapper.find(PASSWORD_TARGET)

    const btn = wrapper.find(SUBMIT_TARGET)
    await btn.trigger('click')

    const passwordError = wrapper.find(PASSWORD_ERROR_TARGET)
    expect(passwordError.exists()).toBe(true)
    expect(passwordError.text()).toEqual('Senha inválida') // TODO pesquisar melhoras palavras de mensagens
    expect(passwordField.classes()).toContain('error')
  })

  it('[Password] Não pode ser menor que 6 caracteres', async () => {
    const passwordField = wrapper.find(PASSWORD_TARGET)
    await passwordField.setValue('12345')

    const btn = wrapper.find(SUBMIT_TARGET)
    await btn.trigger('click')

    const passwordError = wrapper.find(PASSWORD_ERROR_TARGET)
    expect(passwordError.exists()).toBe(true)
    expect(passwordError.text()).toEqual('Senha inválida') // TODO pesquisar melhoras palavras de mensagens
    expect(passwordField.classes()).toContain('error')
  })
})
