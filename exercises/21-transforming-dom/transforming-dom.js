/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  const img = document.querySelector('img')
  img.src = 'https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif'
  const link = document.querySelector('.mozilla-link')
  link.href = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  const victoriousText = document.querySelector('.alert-success')
  victoriousText.textContent = 'I am victorious!'
  let buttonElement = document.getElementById("button");
  if (buttonElement.classList.contains("btn-primary")) {
      buttonElement.innerHTML = "✓ blue";
  }
})();
