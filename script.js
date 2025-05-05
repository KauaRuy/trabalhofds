
const showMessageBtn = document.getElementById('botao');
const messageElement = document.getElementById('mensagem');


showMessageBtn.addEventListener('click', function() {
   
    messageElement.style.display = 'block';  
    messageElement.textContent = 'Seja bem-vindo à minha página! Aqui falo um pouco de quem sou e gostod'; 
});
