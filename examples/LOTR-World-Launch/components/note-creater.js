const noteCreatorComponent = {
    schema: {
      type: 'array',
      default: [],
    },
    init() {
      const submitButton = document.querySelector('#submitButton')
      const wrapper = document.querySelector('#wrapper')
      const htmlTxt = document.querySelector('#htmlElement')
      const inputAnswer = document.querySelector('#inputAnswer')
      const box = document.querySelector('#name-label')
      submitButton.onclick = function () {
        console.log(inputAnswer.value)
        wrapper.innerHTML = `<div id="htmlElement" style="position: relative; top: 20px; color: orange; font-size: 72px">${inputAnswer.value}</div>`
        box.removeAttribute('material')
        box.setAttribute('material', 'shader: html; target: #htmlElement; side: double; width: 500; height: 300; transparent: true')
        setTimeout(() => {
          document.getElementById('htmlElement').remove()
  
          // or alert(inputAnswer.value);
        }, 100)
      }
    },
  }
  export {noteCreatorComponent}