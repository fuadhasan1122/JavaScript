const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const maxLength = 50;

textInput.addEventListener('input', () => {
  let content = textInput.value;

  
  if (content.length > maxLength) {
    content = content.substring(0, maxLength);
    textInput.value = content;
  }

  
  const count = content.length;
  charCount.textContent = `Character Count: ${count}/50`;

  
  if (count >= maxLength) {
    charCount.classList.add('red');
  } else {
    charCount.classList.remove('red');
  }
});
