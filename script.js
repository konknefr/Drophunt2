function toggleMenu() {
  const nav = document.getElementById('menu');
  nav.classList.toggle('active');
}





function copyText() {
            const partialTextElement = document.querySelector('.partial-copy-text');
            const fullTextElement = document.querySelector('.full-copy-text');
            
            // Toggle visibility of partial and full text
            partialTextElement.style.display = 'none';
            fullTextElement.style.display = 'inline';

            const text = fullTextElement.innerText;

            navigator.clipboard.writeText(text).then(function() {
                alert('Text copied to clipboard: ' + text);
                
                // Reset visibility after copying
                partialTextElement.style.display = 'inline';
                fullTextElement.style.display = 'none';
            }, function(err) {
                console.error('Unable to copy text: ', err);
                
                // Reset visibility on error
                partialTextElement.style.display = 'inline';
                fullTextElement.style.display = 'none';
            });
        }







document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.toggle-btn');
  const tocContainer = document.querySelector('.Tcontainer');

  toggleBtn.addEventListener('click', function() {
    tocContainer.classList.toggle('toc-expanded');
  });
});