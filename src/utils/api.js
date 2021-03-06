import config from './config.json'

/**
 * Validates a File object, if it is a CSS or HTML file.
 * @async
 * @param {File} file - The file to attempt to validate.
 * @returns {Promise<Object>} - Object containing errors, each with message, line, and type properties.
 */
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

/**
 * Validates an HTML5 string. Mostly for use by the validate() function.
 * @async
 * @param {string} codeToValidate - HTML code to validate.
 * @returns {Promise<Object>} - Object containing errors, each with message, line, and type properties.
 */
export async function validateHTML (codeToValidate) {
  const resp = await window.fetch(config.html.endpoint, {
    method: 'POST',
    credentials: 'omit',
    headers: {
      'Content-Type': 'text/html'
    },
    mode: 'cors',
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
/**
 * Validates a CSS string.
 * @async
 * @param {string} codeToValidate - CSS code to validate. Mostly for use by the validate() function.
 * @returns {Promise<Object>} - Object containing errors, each with message, line, and type properties.
 */
export async function validateCSS (codeToValidate) {
  const resp = await window.fetch(config.css.endpoint + '?profile=css3&output=soap12&text=' + encodeURIComponent(codeToValidate), {
    credentials: 'omit',
    mode: 'cors'
  })
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

/*
 * Helper function that wraps the FileReader interface into a Promise.
 * @param {File} file - File to read to a string.
 * @returns {Promise|string} - Promise which resolves to the file string.
 */
export async function readFile (file) {
  return new Promise((resolve, reject) => {
    let reader = new window.FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.readAsText(file)
  })
}
