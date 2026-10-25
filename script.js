const form = document.querySelector('#login-form');
const message = document.querySelector('#login-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = '로그인 중입니다…';
  window.setTimeout(() => {
    window.location.href = './dashboard.html';
  }, 350);
});
