document.getElementById('registrationForm').addEventListener('submit', function(event) {
event.preventDefault(); // предотвращаем стандартное поведение формы
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const data = { username, email, password };
fetch('register.php', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
if (data.success) {
alert('Регистрация успешна!');
} else {
alert('Ошибка: ' + data.message);
}
})
.catch((error) => {
console.error('Ошибка:', error);
});
});

