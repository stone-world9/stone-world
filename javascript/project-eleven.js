const form = document.getElementById('inquiryForm')
const submitButton = document.querySelector('.submit')
const successMessage = document.getElementById('form-submitted-msg')

const formElements = [ ...form.elements ]

const handleChange = () => {
  formElements.forEach((element) => {
    if (!element.checkValidity()
          && element.nodeName !== 'BUTTON'
          && element.type !== 'checkbox'
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'
      element.nextElementSibling.style.display = 'block'
      element.previousElementSibling.style.color = 'red'
    }

    if (element.checkValidity()
          && element.nodeName !== 'BUTTON'
          && element.type !== 'checkbox'
    ) {
      element.style.borderColor = '#C4D8E2'
      element.nextElementSibling.style.color = '#C4D8E2'
      element.nextElementSibling.style.display = 'none'
      element.previousElementSibling.style.color = '#000'
    }

    if (!element.checkValidity()
          && (element.type === 'checkbox')
     {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'
    }

    if (element.checkValidity()
          && (element.type === 'checkbox')
     {
      element.style.borderColor = '#CED4DA'
      element.nextElementSibling.style.color = '#000'
    }

  if (allInputsValid()) {
    submitButton.removeAttribute('disabled', '')
  } else {
    submitButton.setAttribute('disabled', '')
  }
}

const handleSubmit = (e) => {

  if (allInputsValid()) {
    successMessage.style.display = 'block'
    form.reset()
    submitButton.setAttribute('disabled', '')

    setTimeout(() => {
      successMessage.style.display = 'none'
    }, 3500)
    
    clearTimeout(successMessage);
    
  }
}

formElements.forEach((element) => {
  element.addEventListener('change', handleChange)
})

form.addEventListener('submit', (e) => handleSubmit(e))