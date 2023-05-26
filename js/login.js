let signin_data = JSON.parse(localStorage.getItem("users")) || [];
let flag = 1;
let signin_form = (e) => {
  e.preventDefault();
  let txt = document.querySelector("#txt").value;
  let email = document.querySelector("#email").value;
  for (let i = 0; i < signin_data.length; i++) {
    if (signin_data[i].text == txt && signin_data[i].email == email) {
      window.location.href = "index.html";
      flag = 2;
    }
  }
  if (flag != 2) {
    window.alert("Wrong Credentials");
  }
};