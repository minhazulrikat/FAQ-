
let btn = document.querySelectorAll('.accordion-buttons')
btn.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const content = button.nextElementSibling;
let span = button.querySelector('span');
    if (content.style.display === 'block') {
      content.style.display = 'none';
      span.classList.remove("arrow");
    } else {
      document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
      content.style.display = 'block';
      span.classList.add("arrow");
    }
  });
});
