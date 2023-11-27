const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  //({ target }) foi feito o objection Destruction do event puxando só o target no evento;
  //o span é o irmão anterior do target(no lugar do event), para acessar o span, usamos o previousElementSibling;
  span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
//se não tiver nenhum valor (value) no nosso input(target(event)) ele poderá remover a class do span-active, senão a classe continua;
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
}

const handleChange = () => {
  const [username, password] = inputs;
//username é a primeira variável e o password é a segunda devido a virgula;
  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
}


inputs.forEach((input) => input.addEventListener('focus', handleFocus));
//forEach = pra cada elemento do array uma coisa, dentro do dele se passa uma função anonima que recebe como parametro os elementos  array(lina 1 e 2 no caso o input do arq html linha 25 e 30 até o momento);
//input. addeventlistener passa o evento de focus pois é mais viavel do que o evento de click e em seguida passamos uma função (const handleFocus);
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
//evento para quando o focos sair do input e remover a class do span-active;
inputs.forEach((input) => input.addEventListener('input', handleChange));