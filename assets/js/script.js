const buttons = document.querySelectorAll('[data-page]');
const pages = document.querySelectorAll('.page');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetPage = button.dataset.page;

    pages.forEach((page) => {
      page.classList.remove('active');
    });

    buttons.forEach((btn) => {
      btn.classList.remove('is-primary');
    });

    document.getElementById(targetPage).classList.add('active');
    button.classList.add('is-primary');
  });
});