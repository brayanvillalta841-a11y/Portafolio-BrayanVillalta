const proyectos = document.querySelectorAll('.proyecto');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

proyectos.forEach((proyecto) => observador.observe(proyecto));

document.querySelectorAll('.nav-links a').forEach((enlace) => {
  enlace.addEventListener('click', (e) => {
    e.preventDefault();
    const destino = document.querySelector(enlace.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth' });
  });
});