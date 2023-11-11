/** 로그인 */
const InputUserEmail = document.querySelector("#sign-email");
const noneMessageEmail = document.querySelector(".none-message-email");
const wrongMessageEmail = document.querySelector(".wrong-message-email");

function validateEmail() {
  const userEmail = InputUserEmail.value;
  if (userEmail === "") {
    noneMessageEmail.style.color = "red";
    noneMessageEmail.style.display = "block";
    InputUserEmail.style.border = "1px solid var(--linkbrary-red, #FF5B56)";
  } else if (!isValidEmail()) {
    noneMessageEmail.style.display = "none";
    wrongMessageEmail.style.color = "red";
    wrongMessageEmail.style.display = "block";
    InputUserEmail.style.border = "1px solid var(--linkbrary-red, #FF5B56)";
  } else {
    noneMessageEmail.style.display = "none";
    wrongMessageEmail.style.display = "none";
  }
}

function isValidEmail() {
  let regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(InputUserEmail.value);
}

InputUserEmail.addEventListener("focusout", validateEmail);
