// script.js
function scrollToHeader() {
  const header = document.getElementById("topHeader");
  header.scrollIntoView({ behavior: "smooth" });
}

function onSuccess(response) {
  console.log(response);
  const out = JSON.stringify(response, null, 3);
  $("#httpResponse").html("<pre class='p-2 m-0 fs-6 border'>" + out + "</pre>");

  $("#httpResponse").removeClass("border-danger");
  $("#httpResponse").addClass("border-success");
}

function onError(response) {
  console.log(response);
  const out = JSON.stringify(response, null, 3);
  $("#httpResponse").html("<pre class='p-2 m-0 fs-6 border'>" + out + "</pre>");

  $("#httpResponse").removeClass("border-success");
  $("#httpResponse").addClass("border-danger");
}

const domain = "localhost";
const port = 3000;
const url = `http://${domain}:${port}`;

const btnCheckServer = document.getElementById("checkServer");
btnCheckServer.addEventListener("click", checkServer);
function checkServer(e) {
  e.preventDefault();
  console.log("check server");

  // const ajaxData = {};

  $.ajax({
    url: `${url}/health-check/backend`,
    type: "GET",
    contentType: "application/json",
    // data: JSON.stringify(ajaxData),

    success: function (response) {
      onSuccess(response);
    },
    error: function (response) {
      onError(response);
    },
  });
  scrollToHeader();
}

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", loginFormSubmit);
function loginFormSubmit(e) {
  e.preventDefault();
  console.log("login");

  const ajaxData = {
    userName: $("#loginuserName").val(),
    password: $("#loginpassword").val(),
  };

  $.ajax({
    url: `${url}/api/login`,
    type: "POST",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    data: JSON.stringify(ajaxData),
    contentType: "application/json",

    success: function (response) {
      // set token in localstorage because we cannot use cookie
      localStorage.setItem("token", response.data.Authorization);

      onSuccess(response);
    },
    error: function (response) {
      onError(response);
    },
  });
  scrollToHeader();
}
