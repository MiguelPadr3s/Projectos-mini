const toggleButton = document.getElementById('toggle-dark-mode');

// Al cargar la página, restaurar preferencia si existe
if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = 'Modo Claro';
} else {
  toggleButton.textContent = 'Modo Oscuro';
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Modo Claro';
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    toggleButton.textContent = 'Modo Oscuro';
    localStorage.setItem('dark-mode', 'disabled');
  }
});
