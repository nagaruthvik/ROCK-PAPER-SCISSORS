document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const closeButton = document.getElementById('closeButton');
    const rulesBox = document.getElementById('rulesBox');
  
    toggleButton.addEventListener('click', () => {
      if (rulesBox.classList.contains('hidden')) {
        rulesBox.classList.remove('hidden');
        toggleButton.textContent = 'Hide Rules';
      } else {
        rulesBox.classList.add('hidden');
        toggleButton.textContent = 'Show Rules';
      }
    });
  
    closeButton.addEventListener('click', () => {
      rulesBox.classList.add('hidden');
      toggleButton.textContent = 'Show Rules';
    });
  });
  