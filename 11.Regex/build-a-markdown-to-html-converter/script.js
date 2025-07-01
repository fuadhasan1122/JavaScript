const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let text = markdownInput.value;

  // Headings
  text = text.replace(/^###\s+(.*)$/gm, "<h3>$1</h3>");
  text = text.replace(/^##\s+(.*)$/gm, "<h2>$1</h2>");
  text = text.replace(/^#\s+(.*)$/gm, "<h1>$1</h1>");

  // Blockquote
  text = text.replace(/^\s*>\s+(.*)$/gm, "<blockquote>$1</blockquote>");

  // Bold
  text = text.replace(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>");

  // Italic
  text = text.replace(/(\*|_)(.*?)\1/g, "<em>$2</em>");

  // Images
  text = text.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

  // Links
  text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  return text;
}

// Update on input
markdownInput.addEventListener("input", () => {
  const converted = convertMarkdown();
  htmlOutput.textContent = converted;
  preview.innerHTML = converted;
});
