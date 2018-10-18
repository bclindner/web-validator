// Validator functions
export function validateHTML (codeToValidate) {
  return window.fetch('https://validator.w3.org/nu/?out=json', {
    method: 'POST',
    credentials: 'omit',
    headers: {
      'Content-Type': 'text/html'
    },
    body: codeToValidate
  })
    .then(resp => resp.json())
}
export function validateCSS (codeToValidate) {
  return window.fetch('https://jigsaw.w3.org/css-validator/validator?profile=css3&output=soap12&text=' + encodeURIComponent(codeToValidate))
    .then(resp => resp.text())
    .then(text => {
      let parser = new window.DOMParser()
      return parser.parseFromString(text, 'application/xml')
    })
    .then(xml => {
      let errors = xml.getElementsByTagName('m:error')
      let response = {
        messages: []
      }
      for (let error of errors) {
        let message = {
          message: error.getElementsByTagName('m:message')[0].innerHTML,
          lastLine: error.getElementsByTagName('m:line')[0].innerHTML,
          type: error.getElementsByTagName('m:errortype')[0].innerHTML
        }
        response.messages.push(message)
      }
      return response
    })
}
