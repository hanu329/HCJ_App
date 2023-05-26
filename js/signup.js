let signup_data = JSON.parse(localStorage.getItem("users")) || [];
function submitForm(e) {
  e.preventDefault();
  let formData = {};
  let txt = document.querySelector("#txt").value;
  let email = document.querySelector("#email").value;
  let h3=document.createElement("h3")
  for(let i=0; i<signup_data.length; i++){
    if(signup_data[i].text==txt){
       
        h3.innerText="user already exist";
        document.querySelector("#message").append(h3)
        break;
    }
    else if(signup_data[i].email==email){
        h3.innerText="email already exist";
        document.querySelector("#message").append(h3)
        break;
    }
    else{
        formData.text = txt;
        formData.email = email;
        signup_data.push(formData);
     localStorage.setItem("users", JSON.stringify(signup_data));
     window.location.href="login.html"
    }
  }

}