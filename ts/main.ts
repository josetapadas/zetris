const outputElement = document.getElementById('output')

if (outputElement) {
  outputElement.innerHTML = new Date().toISOString()
}