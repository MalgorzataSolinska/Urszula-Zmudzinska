document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  // Toggle visibility of menu on click
  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Zapobiega propagacji kliknięcia na dokument
    menu.classList.toggle('hidden');
  });

  // Ukrywamy menu po kliknięciu w link w menu
  const menuItems = menu.querySelectorAll('.menu-item');
  menuItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      const link = item.querySelector('a');
      if (link) {
        window.location.href = link.href; // Przekierowanie do linku w kafelku
      }
      menu.classList.add('hidden'); // Ukrywamy menu po kliknięciu w kafelek
    });
  });

  // Ukrywamy menu po kliknięciu w jakiekolwiek miejsce poza menu i przyciskiem
  document.addEventListener('click', (event) => {
    // Sprawdzamy, czy kliknięcie nie miało miejsca w menu ani przycisku do otwierania menu
    if (!menu.contains(event.target) && event.target !== menuToggle) {
      menu.classList.add('hidden');
    }
  });

  // Zapobiegamy zamknięciu menu po kliknięciu wewnątrz samego menu
  menu.addEventListener('click', (event) => {
    event.stopPropagation(); // Zapobiega zamknięciu menu przy kliknięciu w menu
  });
});
window.addEventListener('scroll', function () {
  let offset = window.scrollY; // Używamy scrollY zamiast pageYOffset

  // Sprawdzamy szerokość okna (dla małych ekranów)
  if (window.innerWidth < 768) {
    // Pobieramy dwa różne elementy
    let background1 = document.getElementById('background-image');

    background1.style.backgroundPosition = `center ${offset * 0.7}px`;
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const namePlaceholder = document.getElementById('name-placeholder');
  const firstImage = document.getElementById('background-image');
  const aboutMe = document.getElementById('about-me');
  const education = document.getElementById('education');
  const viewportHeight = window.innerHeight;

  if (!namePlaceholder || !firstImage) {
    console.error('Elementy name-placeholder lub background-image nie zostały znalezione.');
    return;
  }

  window.addEventListener('scroll', () => {
    const namePlaceholderView =  viewportHeight;
    const aboutMeTop = aboutMe.offsetTop - viewportHeight * 0.95;
    const aboutMeBottom = aboutMe.offsetTop + aboutMe.offsetHeight - viewportHeight * 0.15;
    const educationTop = education.offsetTop - (viewportHeight * 0.97);
    const educationBottom = education.offsetTop + education.offsetHeight - (viewportHeight * 0.15);

    if (window.scrollY > namePlaceholderView) {
      namePlaceholder.classList.add('opacity-100', 'translate-x-0');
      namePlaceholder.classList.remove('-translate-x-5', 'opacity-0');
    } else {
      namePlaceholder.classList.add('-translate-x-5', 'opacity-0');
      namePlaceholder.classList.remove('opacity-100', 'translate-x-0');
    }
    if (window.scrollY > aboutMeTop && window.scrollY < aboutMeBottom) {
      aboutMe.classList.add('opacity-100', 'translate-x-0');
      aboutMe.classList.remove('-translate-x-5', 'opacity-0');
    } else {
      aboutMe.classList.add('-translate-x-5', 'opacity-0');
      aboutMe.classList.remove('opacity-100', 'translate-x-0');
    }
    if (window.scrollY > educationTop && window.scrollY < educationBottom) {
      education.classList.add('opacity-100', 'translate-x-0');
      education.classList.remove('-translate-x-5', 'opacity-0');
    } else {
      education.classList.add('-translate-x-5', 'opacity-0');
      education.classList.remove('opacity-100', 'translate-x-0');
    }
  });
});
