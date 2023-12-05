const form = document.getElementById("form");

const username = document.getElementById("username");

const birthday = document.getElementById("birthday");

const gender = document.getElementById("gender");

const momname = document.getElementById("momname");

const cpf = document.getElementById("cpf");

const telnumber = document.getElementById("telnumber");

const celnumber = document.getElementById("celnumber");

const address = document.getElementById("address");

const login = document.getElementById("login");

const password = document.getElementById("password");

const passwordtwo = document.getElementById("passwordtwo");

const msgError = document.querySelector("#msgError");
const msgSuccess = document.querySelector("#msgSuccess");

const btn = document.querySelector("#seePassword");
const btnHidden = document.querySelector("#hidePassword");

const btnConfirm = document.querySelector("#seePasswordTwo");
const btnConfirmHidden = document.querySelector("#hidePasswordTwo");

btn.addEventListener("click", () => {
  const inputPassword = document.querySelector("#password");
  btn.setAttribute("style", "visibility: hidden");
  btnHidden.setAttribute("style", "visibility: visible");

  if (inputPassword.getAttribute("type") == "password") {
    inputPassword.setAttribute("type", "text");
  } else {
    inputPassword.setAttribute("type", "password");
  }
});

btnHidden.addEventListener("click", () => {
  const inputPassword = document.querySelector("#password");
  btnHidden.setAttribute("style", "visibility: hidden");
  btn.setAttribute("style", "visibility: visible");

  if (inputPassword.getAttribute("type") == "password") {
    inputPassword.setAttribute("type", "text");
  } else {
    inputPassword.setAttribute("type", "password");
  }
});

btnConfirm.addEventListener("click", () => {
  const inputPassword = document.querySelector("#passwordtwo");
  btnConfirm.setAttribute("style", "visibility: hidden");
  btnConfirmHidden.setAttribute("style", "visibility: visible");

  if (inputPassword.getAttribute("type") == "password") {
    inputPassword.setAttribute("type", "text");
  } else {
    inputPassword.setAttribute("type", "password");
  }
});

btnConfirmHidden.addEventListener("click", () => {
  const inputPassword = document.querySelector("#passwordtwo");
  btnConfirmHidden.setAttribute("style", "visibility: hidden");
  btnConfirm.setAttribute("style", "visibility: visible");

  if (inputPassword.getAttribute("type") == "password") {
    inputPassword.setAttribute("type", "text");
  } else {
    inputPassword.setAttribute("type", "password");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
});

username.addEventListener("blur", () => {
  checkInputUsername();
});
username.addEventListener("keyup", () => {
  checkInputUsername();
});

birthday.addEventListener("blur", () => {
  checkInputBirthday();
});

gender.addEventListener("blur", () => {
  checkInputGender();
});

momname.addEventListener("blur", () => {
  checkInputMomName();
});
momname.addEventListener("keyup", () => {
  checkInputMomName();
});

cpf.addEventListener("blur", () => {
  checkInputCpf();
});
cpf.addEventListener("keyup", () => {
  checkInputCpf();
});

//------------------------MÁSCARA DO CPF------------------
cpf.addEventListener("input", () => {
  // Remover os caracteres não númericos usando a expressão regular /\D/g e limitar a 11 digitos.
  var clearValue = cpf.value.replace(/\D/g, "").substring(0, 11);

  // Dividir a string em um array de caracteres individuais.
  var arrayNumbers = clearValue.split("");

  // Criar uma varíavel para receber o número formatado.
  var formattedNumber = "";

  // (12) 94567-8910
  // Acessa o IF quando a quantidade de números é maior do que zero.
  if (arrayNumbers.length > 0) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += `${arrayNumbers.slice(0, 3).join("")}`;
  }

  // Acessa o IF quando a quantidade de números é maior do que três.
  if (arrayNumbers.length > 3) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += `.${arrayNumbers.slice(3, 6).join("")}`;
  }

  // Acessa o IF quando a quantidade de números é maior do que seis.
  if (arrayNumbers.length > 6) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += `.${arrayNumbers.slice(6, 9).join("")}`;
  }

  // Acessa o IF quando a quantidade de números é maior do que nove.
  if (arrayNumbers.length > 9) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += `-${arrayNumbers.slice(9, 11).join("")}`;
  }

  // Enviar para o campo o número formatado.
  cpf.value = formattedNumber;
});

celnumber.addEventListener("blur", () => {
  checkInputCelNumber();
});

//--------------------------MÁSCARA DO TELEFONE CELULAR----------------------
celnumber.addEventListener("input", () => {
  //Remover os caracteres não númericos usando a expressão regular /\D/g e limitar a 11 dígitos.
  var clearValue = celnumber.value.replace(/\D/g, "").substring(0, 11);

  // Dividir a string em um array de caracteres individuais.
  var arrayNumbers = clearValue.split("");

  // Criar uma varíavel para receber o número formatado.
  var formattedNumber = "";

  // (12) 94567-8910
  // Acessa o IF quando a quantidade de números é maior do que zero.
  if (arrayNumbers.length > 0) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += `(${arrayNumbers.slice(0, 2).join("")})`;
  }

  // Acessa o IF quando a quantidade de números é maior do que dois.
  if (arrayNumbers.length > 2) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += ` ${arrayNumbers.slice(2, 7).join("")}`;
  }

  // Acessa o IF quando a quantidade de números é maior do que sete.
  if (arrayNumbers.length > 7) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += `-${arrayNumbers.slice(7, 11).join("")}`;
  }

  // Enviar para o campo o número formatado.
  celnumber.value = formattedNumber;
});

telnumber.addEventListener("blur", () => {
  checkInputTelNumber();
});

//-----------------------------MÁSCARA DO TELEFONE FIXO---------------------------
telnumber.addEventListener("input", () => {
  // Remover os caracteres não númericos usando a expressão regular /\D/g e limitar a 11 digitos.
  var clearValue = telnumber.value.replace(/\D/g, "").substring(0, 10);

  // Dividir a string em um array de caracteres individuais.
  var arrayNumbers = clearValue.split("");

  // Criar uma varíavel para receber o número formatado.
  var formattedNumber = "";

  // (12) 94567-8910
  // Acessa o IF quando a quantidade de números é maior do que zero.
  if (arrayNumbers.length > 0) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += `(${arrayNumbers.slice(0, 2).join("")})`;
  }

  // Acessa o IF quando a quantidade de números é maior do que dois.
  if (arrayNumbers.length > 2) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += ` ${arrayNumbers.slice(2, 6).join("")}`;
  }

  // Acessa o IF quando a quantidade de números é maior do que seis.
  if (arrayNumbers.length > 6) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += `-${arrayNumbers.slice(6, 10).join("")}`;
  }

  // Enviar para o campo o número formatado.
  telnumber.value = formattedNumber;
});

address.addEventListener("blur", () => {
  checkInputAddress();
});

password.addEventListener("blur", () => {
  checkInputPassword();
});
password.addEventListener("keyup", () => {
  checkInputPassword();
});

passwordtwo.addEventListener("blur", () => {
  checkInputPasswordTwo();
});
passwordtwo.addEventListener("keyup", () => {
  checkInputPasswordTwo();
});

login.addEventListener("blur", () => {
  checkInputLogin();
});
login.addEventListener("keyup", () => {
  checkInputLogin();
});

// ----------------VERIFICAR SE O NOME ESTÁ CORRETO-----------------------
function checkInputUsername() {
  const usernameValue = username.value;
  const usernameRegex = new RegExp(
    /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
  );

  if (usernameValue === "") {
    errorInput(username, "Nome do usuário é obrigatório.");
    validUsername = false;
  } else if (usernameValue.length < 15) {
    errorInput(
      username,
      "O nome do usuário precisa ter no mínimo 15 caracteres."
    );
    validUsername = false;
  } else if (usernameValue.length > 60) {
    errorInput(
      username,
      "O nome do usuário não pode ultrapassar 60 caracteres."
    );
    validUsername = false;
  } else {
    successInput(username);
    validUsername = true;
  }
}

// ----------------VERIFICAR SE DATA DE NASCIMENTO ESTÁ CORRETO-----------------------
function checkInputBirthday() {
  const birthdayValue = birthday.value;

  if (birthdayValue === "") {
    errorInput(birthday, "Data de nascimento é obrigatória.");
    validBirthday = false;
  } else {
    successInput(birthday);
    validBirthday = true;
  }
}

// ----------------VERIFICAR SE GENÊRO ESTÁ CORRETO-----------------------
function checkInputGender() {
  const genderValue = gender.value;

  if (genderValue === "") {
    errorInput(gender, "Sexo é obrigatório.");
    validGender = false;
  } else {
    successInput(gender);
    validGender = true;
  }
}

function checkInputMomName() {
  const momnameValue = momname.value;

  if (momnameValue === "") {
    errorInput(momname, "Nome materno é obrigatório.");
    validMomName = false;
  } else if (momnameValue.length < 6) {
    errorInput(momname, "O nome materno precisa ter no minimo 6 caracteres.");
    validMomName = false;
  } else {
    successInput(momname);
    validMomName = true;
  }
}

//-----------------VERIFICAÇÃO DO CPF--------------------------
function checkInputCpf() {
  const cpfValue = cpf.value;
  const cpfRegex = new RegExp(/^(?:[0-9]{3}\.){2}(?:[0-9]{3}\-)(?:[0-9]){2}$/);

  if (cpfValue === "") {
    errorInput(cpf, "CPF é obrigatório.");
    validCPF = false;
  } else {
    if (!cpfRegex.test(cpfValue)) {
      errorInput(cpf, "Preencha um CPF válido!");
      validCPF = false;
    }
    if (!isCPF(cpfValue)) {
      errorInput(cpf, "Preencha um CPF válido!");
      validCPF = false;
    } else {
      successInput(cpf);
      validCPF = true;
    }
  }
}

function isCPF(cpf) {
  cpf = cpf.replace(/\.|-/g, "");
  soma = 0;
  soma += cpf[0] * 10;
  soma += cpf[1] * 9;
  soma += cpf[2] * 8;
  soma += cpf[3] * 7;
  soma += cpf[4] * 6;
  soma += cpf[5] * 5;
  soma += cpf[6] * 4;
  soma += cpf[7] * 3;
  soma += cpf[8] * 2;
  soma = (soma * 10) % 11;
  if (soma == 10 || soma == 11) soma = 0;
  if (soma != cpf[9]) return false;

  soma = 0;
  soma += cpf[0] * 11;
  soma += cpf[1] * 10;
  soma += cpf[2] * 9;
  soma += cpf[3] * 8;
  soma += cpf[4] * 7;
  soma += cpf[5] * 6;
  soma += cpf[6] * 5;
  soma += cpf[7] * 4;
  soma += cpf[8] * 3;
  soma += cpf[9] * 2;
  soma = (soma * 10) % 11;
  if (soma == 10 || soma == 11) soma = 0;
  if (soma != cpf[10]) return false;
  return true;
}

//-----------------------VERIFICAÇÃO DO TELEFONE CELULAR========================
function checkInputCelNumber() {
  const celnumberValue = celnumber.value;

  if (celnumberValue === "") {
    errorInput(celnumber, "Telefone celular é obrigatório.");
    validCelNumber = false;
  } else {
    successInput(celnumber);
    validCelNumber = true;
  }
}

//============================VERIFICAÇÃO DO TELEFONE FIXO==================
function checkInputTelNumber() {
  const telnumberValue = telnumber.value;

  if (telnumberValue === "") {
    errorInput(telnumber, "Telefone fixo é obrigatório.");
    validTelNumber = false;
  } else {
    successInput(telnumber);
    validTelNumber = true;
  }
}

//===================VERIFICAÇÃO DO ENDEREÇO==========================
function checkInputAddress() {
  const addressValue = address.value;

  if (addressValue === "") {
    errorInput(address, "Endereço é obrigatório.");
    validAddress = false;
  } else {
    successInput(address);
    validAddress = true;
  }
}

//==============================VERIFICAÇÃO DO LOGIN=====================
function checkInputLogin() {
  const loginValue = login.value;

  if (loginValue === "") {
    errorInput(login, "Login é obrigatório.");
    validLogin = false;
  } else if (loginValue.length != 6) {
    errorInput(login, "Login precisa ter exatamente 6 caracteres.");
    validLogin = false;
  } else {
    successInput(login);
    validLogin = true;
  }
}

//============================VERIFICAÇÃO DA SENHA======================
function checkInputPassword() {
  const passwordValue = password.value;

  if (passwordValue === "") {
    errorInput(password, "Senha é obrigatório.");
    validPassword = false;
  } else if (passwordValue.length < 8) {
    errorInput(password, "A senha precisa ter no mínimo 8 caracteres.");
    validPassword = false;
  } else {
    successInput(password);
    validPassword = true;
  }
}

//===========================VERIFICAÇÃO DA CONFIRMAÇÃO DA SENHA===============
function checkInputPasswordTwo() {
  const passwordtwoValue = passwordtwo.value;
  const passwordValue = password.value;

  if (passwordtwoValue === "") {
    errorInput(passwordtwo, "Confirmar senha é obrigatório.");
    validPasswordTwo = false;
  } else if (passwordtwoValue !== passwordValue) {
    errorInput(passwordtwo, "As senhas não são iguais.");
    validPasswordTwo = false;
  } else {
    successInput(passwordtwo);
    validPasswordTwo = true;
  }
}

//========================VERIFICAÇÃO DO FORMULÁRIO (TUDO CORRETO)=======
function checkForm() {
  checkInputUsername();
  checkInputBirthday();
  checkInputGender();
  checkInputMomName();
  checkInputCpf();
  checkInputCelNumber();
  checkInputTelNumber();
  checkInputAddress();
  checkInputLogin();
  checkInputPassword();
  checkInputPasswordTwo();

  const formItems = form.querySelectorAll(".form-content");

  const isValid = [...formItems].every((item) => {
    return item.className === "form-content success";
  });
  if (isValid) {
    let userList = JSON.parse(localStorage.getItem("userList") || "[]");

    userList.push({
      loginCad: login.value,
      passwordCad: password.value,
    });

    localStorage.setItem("userList", JSON.stringify(userList));

    msgSuccess.setAttribute("style", "display: block");
    msgSuccess.innerHTML = "<strong>Cadastrando usuário...</strong>";
    msgError.innerHTML = "";
    msgError.setAttribute("style", "display: none");

    setTimeout(() => {
      window.location.href = "http://127.0.0.1:5501/login.html";
    }, 3000);
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>";
    msgSuccess.innerHTML = "";
    msgSuccess.setAttribute("style", "display: none");
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("small");

  textMessage.innerText = message;

  formItem.className = "form-content error";
}

function successInput(input) {
  const formItem = input.parentElement;

  formItem.className = "form-content success";
}
