
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('menu').classList.remove('show');
    });
  });