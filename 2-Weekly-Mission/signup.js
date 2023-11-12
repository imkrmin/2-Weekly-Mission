/** 이메일 */
const signInputBox = document.querySelector(".sign-input-box");
const inputUserEmail = document.querySelector("#sign-email");
const errorMessageEmail = document.querySelector(".error-message-email");

function validateEmail() {
  const userEmail = inputUserEmail.value;
  if (userEmail === "") {
    errorMessageEmail.textContent = "이메일을 입력해주세요.";
    errorMessageEmail.style.color = "red";
    errorMessageEmail.style.display = "block";
    inputUserEmail.style.border = "1px solid var(--linkbrary-red, #FF5B56)";
    return noneMessageEmail;
  } else if (!isValidEmail()) {
    errorMessageEmail.textContent = "올바른 이메일 주소가 아닙니다.";
    errorMessageEmail.style.color = "red";
    errorMessageEmail.style.display = "block";
    inputUserEmail.style.border = "1px solid var(--linkbrary-red, #FF5B56)";
    return wrongMessageEmail;
  } else if (userEmail === "test@codeit.com") {
    errorMessageEmail.textContent = "이미 사용 중인 이메일입니다.";
    errorMessageEmail.style.color = "red";
    errorMessageEmail.style.display = "block";
    inputUserEmail.style.border = "1px solid var(--linkbrary-red, #FF5B56)";
  } else {
    errorMessageEmail.style.display = "none";
    inputUserEmail.style.border = "1px solid var(--gray20)";
  }
}

function isValidEmail() {
  const regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(inputUserEmail.value);
}

inputUserEmail.addEventListener("focusout", validateEmail);

/** 비밀번호 */
const inputUserPassword = document.querySelector("#sign-password");
const errorMessagePassword = document.querySelector(".error-message-password");
const eyeButton = document.querySelector(".eye-button");

function validatePassword() {
  const userPassword = inputUserPassword.value;
  if (userPassword === "") {
    errorMessagePassword.textContent = "비밀번호를 입력해주세요.";
    errorMessagePassword.style.color = "red";
    errorMessagePassword.style.display = "block";
    inputUserPassword.style.border = "1px solid var(--linkbrary-red, #FF5B56)";
  } else if (!strongPassword(userPassword)) {
    errorMessagePassword.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    errorMessagePassword.style.color = "red";
    errorMessagePassword.style.display = "block";
    inputUserPassword.style.border = "1px solid var(--linkbrary-red, #FF5B56)";
  } else {
    errorMessagePassword.style.display = "none";
    inputUserPassword.style.border = "1px solid var(--gray20)";
  }
}

function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

inputUserPassword.addEventListener("focusout", validatePassword);

/** 비밀번호 확인 */
const inputUserPasswordAgain = document.querySelector("#sign-password-again");
const errorMessagePasswordAgain = document.querySelector(
  ".error-message-password-again"
);

function validatePasswordAgain() {
  const userPasswordAgain = inputUserPasswordAgain.value;
  if (userPasswordAgain === "") {
    errorMessagePasswordAgain.textContent = "비밀번호를 입력해주세요.";
    errorMessagePasswordAgain.style.color = "red";
    errorMessagePasswordAgain.style.display = "block";
    inputUserPassword.style.border = "1px solid var(--linkbrary-red, #FF5B56)";
  } else if (userPasswordAgain !== inputUserPassword.value) {
    errorMessagePasswordAgain.textContent = "비밀번호가 일치하지 않아요.";
    errorMessagePasswordAgain.style.color = "red";
    errorMessagePasswordAgain.style.display = "block";
  } else {
    errorMessagePasswordAgain.style.display = "none";
    inputUserPasswordAgain.style.border = "1px solid var(--gray20)";
  }
}

inputUserPasswordAgain.addEventListener("focusout", validatePasswordAgain);

/** 회원가입 버튼 */
