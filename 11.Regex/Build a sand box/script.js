const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flags = "";
  if (caseInsensitiveFlag.checked) flags += "i";
  if (globalFlag.checked) flags += "g";
  return flags;
}

function highlightMatches(text, regex) {
  if (regex.global) {
    // For global flag, replace all matches
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
  } else {
    // For non-global, replace only the first match
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
  }
}

function getMatches(text, regex) {
  const matches = text.match(regex);
  return matches ? matches.join(", ") : "no match";
}

testButton.addEventListener("click", () => {
  const patternText = regexPattern.value.trim();
  const testText = stringToTest.textContent.trim();

  if (!patternText) {
    testResult.textContent = "Please enter a regex pattern.";
    return;
  }

  try {
    const regex = new RegExp(patternText, getFlags());
    stringToTest.innerHTML = highlightMatches(testText, regex);
    testResult.textContent = getMatches(testText, regex);
  } catch (e) {
    testResult.textContent = "Invalid regex pattern.";
  }
});