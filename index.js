function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    
    if (username.trim() === "") {
      setError("username", "يرجى إدخال اسم المستخدم");
      return false;
    } else {
      setSuccess("username");
    }
    
  
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("email", "يرجى إدخال بريد إلكتروني صالح");
      return false;
    } else {
      setSuccess("email");
    }
    
    
    var passwordPattern = /^\d{6}$/;
    if (!passwordPattern.test(password)) {
      setError("password", "يجب إدخال رمز صحيح مكون من 6 أرقام");
      return false;
    } else {
      setSuccess("password");
    }
    
    return true;
  }
  
  function setError(field, message) {
    var inputField = document.getElementById(field);
    inputField.classList.remove("success");
    inputField.classList.add("error");
    inputField.nextElementSibling.textContent = message;
  }
  
  function setSuccess(field) {
    var inputField = document.getElementById(field);
    inputField.classList.remove("error");
    inputField.classList.add("success");
    inputField.nextElementSibling.textContent = "";
  }
  
