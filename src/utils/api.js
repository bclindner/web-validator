import config from './config.json'

// Main validator function
export async function validate (file) {
  const data = await readFile(file)
  let validation = 'invalid'
  switch (file.type) {
    case 'text/html':
      validation = await validateHTML(data)
      break
    case 'text/css':
      validation = await validateCSS(data)
      break
    default:
      validation = false
      break
  }
  return validation
}

// Validator functions
export async function validateHTML (codeToValidate) {
  const resp = await window.fetch(config.html.endpoint, {
    method: 'POST',
    credentials: 'omit',
    headers: {
      'Content-Type': 'text/html'
    },
    body: codeToValidate
  })
  const json = await resp.json()
  let messages = []
  for (let message of json.messages) {
    messages.push({
      type: message.subType || message.type,
      line: message.lastLine,
      message: message.message
    })
  }
  return messages
}
export async function validateCSS (codeToValidate) {
  const resp = await window.fetch(config.css.endpoint + '?profile=css3&output=soap12&text=' + encodeURIComponent(codeToValidate))
  const text = await resp.text()
  const parser = new window.DOMParser()
  const xml = parser.parseFromString(text, 'application/xml')
  const errors = xml.getElementsByTagName('m:error')
  let messages = []
  for (let error of errors) {
    messages.push({
      message: error.getElementsByTagName('m:message')[0].textContent,
      line: error.getElementsByTagName('m:line')[0].textContent,
      type: error.getElementsByTagName('m:errortype')[0].textContent
    })
  }
  return messages
}

// hate this
export async function readFile (file) {
  return new Promise((resolve, reject) => {
    let reader = new window.FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.readAsText(file)
  })
}
