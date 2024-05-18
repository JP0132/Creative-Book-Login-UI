// DOM Elements

const prev_btn = document.querySelectorAll(".prev-button");
const next_btn = document.querySelectorAll(".next-button");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

const loginToSignUp = document.querySelector("#goToSignUpBook");
const signUpToLogin = document.querySelector("#goToLoginBook");

const mobileLoginBtn = document.querySelector("#goToSignUp");
const mobileSignBtn = document.querySelector("#goToLogin");

const mobileLoginForm = document.querySelector("#mobile-login");
const mobileSignForm = document.querySelector("#mobile-sign");

const goToSignUp = document.getElementById("goToSignUp");
const goToLogin = document.getElementById("goToLogin");
const loginForm = document.getElementById("mobile-login");
const signUpForm = document.getElementById("mobile-sign");

goToSignUp.addEventListener("click", () => {
  loginForm.classList.remove("show");
  loginForm.classList.add("remove");
  signUpForm.classList.remove("remove");
  signUpForm.classList.add("show");
});

goToLogin.addEventListener("click", () => {
  signUpForm.classList.remove("show");
  signUpForm.classList.add("remove");
  loginForm.classList.remove("remove");
  loginForm.classList.add("show");
});

// const switchForms = (formType) => {
//   if (formType === 1) {
//     mobileLoginForm.classList.add("show");
//     mobileSignForm.classList.remove("show");
//     mobileSignForm.classList.add("remove");
//   } else {
//     mobileSignForm.classList.add("show");
//     mobileLoginForm.classList.remove("show");
//     mobileLoginForm.classList.add("remove");
//   }
// };

// mobileSignBtn.addEventListener("click", switchForms(1));
// mobileLoginBtn.addEventListener("click", switchForms(2));

let current_location = 1;
let num_of_pages = 3;
let max_location = num_of_pages + 1;

const openBook = () => {
  book.style.transform = "translateX(50%)";
};

const closeBook = (is_at_start) => {
  if (is_at_start) {
    book.style.transform = "translateX(0%)";
  } else {
    book.style.transform = "translateX(100%)";
  }
};

const goNextPage = () => {
  let turningOver = false;
  if (current_location === 4) {
    turningOver = true;
    while (current_location > 1) {
      goPreviousPage();
    }
  }
  if (current_location < max_location && !turningOver) {
    // console.log("In Next");
    switch (current_location) {
      case 1:
        // console.log("In 1");
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;

      case 2:
        // console.log("In 2");
        paper2.classList.add("flipped");
        paper2.style.zIndex = 1;
        break;

      case 3:
        // console.log("In 3");
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        closeBook(false);
        break;

      default:
        throw new Error("unknown state");
    }

    current_location++;
  }
};

const goPreviousPage = () => {
  let turningOver = false;
  if (current_location === 1) {
    turningOver = true;
    while (current_location <= num_of_pages) {
      goNextPage();
    }
  }

  if (current_location > 1 && !turningOver) {
    // console.log("In Prev");
    switch (current_location) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 3;

        break;

      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 2;

        break;

      case 4:
        openBook();
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 1;

        break;

      default:
        throw new Error("unknown state");
    }

    current_location--;
  }
};

loginToSignUp.addEventListener("click", goNextPage);
signUpToLogin.addEventListener("click", goPreviousPage);

// Event Listeners
prev_btn.forEach((button) => {
  button.addEventListener("click", goPreviousPage);
});
next_btn.forEach((button) => {
  button.addEventListener("click", goNextPage);
});
