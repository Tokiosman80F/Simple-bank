const btnSumbit = document.getElementById("btn-submit");
const userEmail = document.getElementById("user-email");
const userPassword = document.getElementById("user-password");

// addevent Lister
btnSumbit.addEventListener("click", function () {
  const email = userEmail.value;
  const password = userPassword.value;
  if (email === "toki osman" && password === "toki123") {
    console.log("valid user");
  } else alert("invalid user");
});
