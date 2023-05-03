window.addEventListener('scroll', e => {
  const elem = document.getElementById('menu');
  console.log(scrollY);
  if (scrollY > 1000) {
    elem.style.display = 'block';
  }
  if (scrollY < 1000) {
    elem.style.display = 'none';
  }
});
