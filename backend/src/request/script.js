// script.js
function scrollToHeader() {
  const header = document.getElementById("topHeader");
  header.scrollIntoView({ behavior: "smooth" });
}

function onSuccess(response) {
  console.log(response);
  const out = JSON.stringify(response, null, 3);
  $("#httpResponse").html("<pre class='p-2 m-0 fs-6 border'>" + out + "</pre>");

  $("#httpResponse").removeClass("border-danger border-primary");
  $("#httpResponse").addClass("border-success");
}

function onError(response) {
  console.log(response);
  const out = JSON.stringify(response, null, 3);
  $("#httpResponse").html("<pre class='p-2 m-0 fs-6 border'>" + out + "</pre>");

  $("#httpResponse").removeClass("border-success border-primary");
  $("#httpResponse").addClass("border-danger");
}

function beforeSubmit() {
  $("#httpResponse").html("<span class='ps-3'> Sending Request... </span> ");

  $("#httpResponse").removeClass("border-success border-danger");
  $("#httpResponse").addClass("border-primary");
}

const domain = "localhost";
const port = 3000;
const url = `http://${domain}:${port}`;

// connection
const btnCheckServer = document.getElementById("checkServer");
btnCheckServer.addEventListener("click", checkServer);
function checkServer(e) {
  e.preventDefault();
  console.log("check server");

  // const ajaxData = {};

  beforeSubmit();
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

const btntest = document.getElementById("test");
btntest.addEventListener("click", test);
function test(e) {
  e.preventDefault();
  console.log("check server");

  // const ajaxData = {};

  beforeSubmit();
  $.ajax({
    url: `https://ipapi.co/json/`,
    type: "get",
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
// connection end

// user
const btngetUserParam = document.getElementById("getUserParam");
btngetUserParam.addEventListener("click", getUserParam);
function getUserParam(e) {
  console.log("getUserParam");

  // const ajaxData = {};

  beforeSubmit();

  $.ajax({
    url: `${url}/user/userParam/24`,
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

const btngetUserQuery = document.getElementById("getUserQuery");
btngetUserQuery.addEventListener("click", getUserQuery);
function getUserQuery(e) {
  console.log("getUserQuery");

  // const ajaxData = {};

  beforeSubmit();

  $.ajax({
    url: `${url}/user/userQuery?id=24`,
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

const btnGetUsers = document.getElementById("getUsers");
btnGetUsers.addEventListener("click", getUsers);
function getUsers(e) {
  console.log("getUsers");

  // const ajaxData = {};

  beforeSubmit();

  $.ajax({
    url: `${url}/user/users`,
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

const btnaddUser = document.getElementById("addUser");
btnaddUser.addEventListener("click", addUser);
function addUser(e) {
  console.log("addUser");

  const ajaxData = {
    email: "ahmet@hotmail.com",
    password: "123",
  };

  beforeSubmit();

  $.ajax({
    url: `${url}/user/add-user`,
    type: "post",
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
// user end

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", loginFormSubmit);
function loginFormSubmit(e) {
  e.preventDefault();
  console.log("login");

  const ajaxData = {
    userName: $("#loginuserName").val(),
    password: $("#loginpassword").val(),
  };

  beforeSubmit();
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
