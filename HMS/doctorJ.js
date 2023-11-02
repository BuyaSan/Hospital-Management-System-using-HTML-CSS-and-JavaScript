function validation() {
  let x = document.forms["dform"]["fname"].value;
  //var x = document.dform.fname.value
  if (x == "") {
    alert("first name must be filled");
    return false;
  }
}

function AllowOnlyAlpha(input) {
  var regex = /[^a-z,^A-Z]/gi;
  input.value = input.value.replace(regex, "");
}

function AllowOnlyNumeric(input) {
  var numeric = /[^0-9]/gi;
  input.value = input.value.replace(numeric, "");
}

function emailval() {
  var form = document.getElementById("dform");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("Invalid");
    text.innerHTML = "Email address is valid";
  } else {
    form.classList.remove("valid");
    form.classList.add("Invalid");
    text.innerHTML = "Email address is invalid";
  }

  if (email == "") {
    //corrected classList.remove, it was initially clasList.remove:
    form.classList.remove("valid");
    form.classList.add("Invalid");
    text.innerHTML = "";
  }
}

function AllowOnlyNumeric(input) {
  var numeric = /[^0-9]/gi;
  input.value = input.value.replace(numeric, "");
}
