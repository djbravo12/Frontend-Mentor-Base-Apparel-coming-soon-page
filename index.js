const formData = document.getElementById("form-data");
const emailAdd = document.querySelector("input[type='email']");
const emailReg = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i;
const errorMsg = document.getElementById("error-msg");
const errorIcon = document.getElementById("error-icon");
const submitBtn = document.getElementById("submit");

// formData.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (!emailReg.test(emailAdd.value) || emailAdd.value == "") {
//     console.log("error");
//     errorMsg.classList.add("display-active");
//     errorIcon.classList.add("display-active");
//     setTimeout(() => {
//       errorMsg.classList.remove("display-active");
//       errorIcon.classList.remove("display-active");
//     }, 1000);
//   } else {
//     console.log("correct");
//     console.log(emailAdd.value);
//     emailAdd.value = "";
//     submitBtn.disabled = true;
//   }
// });

// with Jquery method


const emailAddJ = $("#email-data");

$("#form-data").on("submit", (e) => {
  e.preventDefault();
  if (!emailReg.test($(emailAddJ).val()) || emailAddJ.val() == "") {
    console.log("error");
    $("#error-msg").addClass("display-active");
    $("#error-icon").addClass("display-active");

    setTimeout(() => {
      $("#error-msg").removeClass("display-active");
      $("#error-icon").removeClass("display-active");
    }, 1000);
  } else {
    console.log("correct");
    emailAddJ.val("");
    $("#submit").prop("disabled", true);
  }
});
