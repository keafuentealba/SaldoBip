window.login  = () => {
  let email = document.getElementById('staticEmail');
  let password = document.getElementById('inputPassword');
  let login = document.getElementById('login');
  let options = document.getElementById('options');

  if(email.checkValidity() && password.value.length > 0){
    login.classList.add('hide');
    options.classList.remove('hide');
  }
  else{
    alert('Credenciales invalidas.');
  }
}


window.optionsToBalance = () => {
  let balance = document.getElementById('balance');
  let options = document.getElementById('options');

  options.classList.add('hide');
  balance.classList.remove('hide');
}


window.balance = () => {
  let balance = document.getElementById('inputBalance').value;


  fetch("http://www.psep.cl/api/Bip.php?&numberBip="+balance)
  .then((result) => {
    return result.json();
  }).then((result) => {
    let resultDiv = document.getElementById('balanceResult');
    resultDiv.innerHTML = result["Saldo  tarjeta"];
  });
}


window.optionToRate = () => {
  document.getElementById('rate');
  document.getElementById('options');

  options.classList.add('hide');
  balance.classList.remove('hide');
}


window.rate = () => {
  let rates = document.getElementById('rate').value;
  let balance = document.getElementById('inputBalance').value;


  fetch("http://www.psep.cl/api/Bip.php?&numberBip="+balance)
  .then((result) => {
    return result.json();
  }).then((result) => {
    let resultDiv = document.getElementById('balanceResult');
    resultDiv.innerHTML = result["Saldo  tarjeta"];

    let rate = document.getElementById('rateResult');
    rate.innerHTML = (resultDiv - rates);
    //esto esta sospecchosamente muy mal
  })
}
