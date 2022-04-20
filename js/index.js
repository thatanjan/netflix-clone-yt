const membershipForm = document.querySelector('.membership__form')
const membershipInput = document.querySelector('.membership__input')
const membershipInputContainer = document.querySelector(
	'.membership__input__container'
)
const membershipInputLabel = document.querySelector('.membership__placeholder')
const membershipInputMessage = document.querySelector(
	'.membership__input__message'
)

const accordionQuestionEls = document.querySelectorAll('.accordion__question')

const ON_FOCUS = 'on__focus'
const FOCUS_IN = 'focusin'

const validateEmail = (email) =>
	/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

const handleFocus = (e) => {
	const {
		target: { value },
		type,
	} = e

	if (value) return true

	if (type === FOCUS_IN) {
		membershipInputContainer.classList.add(ON_FOCUS)
		return true
	}

	membershipInputContainer.classList.remove(ON_FOCUS)
}

const handleSubmit = (e) => {
	e.preventDefault()

	const { value } = membershipInput

	const validEmail = validateEmail(value)

	if (validEmail) {
		membershipInputMessage.innerText = 'Thank you for subscribing!'
		membershipInput.value = ''
		membershipInputContainer.classList.remove(ON_FOCUS)
	} else {
		membershipInputMessage.innerText = 'Please enter a valid email'
	}

	setTimeout(() => {
		membershipInputMessage.innerText = ''
	}, 3000)
}

membershipInput.addEventListener(FOCUS_IN, handleFocus)
membershipInput.addEventListener('focusout', handleFocus)
membershipForm.addEventListener('submit', handleSubmit)

accordionQuestionEls.forEach((element) => {
	const handler = (e) => {
		const parent = e.target.parentElement
		parent.classList.toggle('active')
	}

	element.addEventListener('click', handler)
})
