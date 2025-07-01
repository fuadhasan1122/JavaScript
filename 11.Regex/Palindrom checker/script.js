const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
  const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

checkBtn.addEventListener("click", () => {
  const userInput = textInput.value;

  if (userInput.trim() === "") {
    alert("Please input a value.");
    return;
  }

  const message = isPalindrome(userInput)
    ? `${userInput} is a palindrome.`
    : `${userInput} is not a palindrome.`;

  result.textContent = message;
});
