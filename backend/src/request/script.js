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
const btncrateUser = document.getElementById("crateUser");
btncrateUser.addEventListener("click", crateUser);
function crateUser(e) {
  console.log("crateUser");

  const ajaxData = {
    type: "mentor",
    name: "ahmet",
    email: "ahmet@hotmail.com",
    password: 1234,
  };

  beforeSubmit();

  $.ajax({
    url: `${url}/user/create`,
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(ajaxData),

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

// user type

const btncrateUserType = document.getElementById("crateUserType");
btncrateUserType.addEventListener("click", crateUserType);
function crateUserType(e) {
  console.log("crateUserType");
  beforeSubmit();

  ajaxData = {
    type: "mentee",
  };

  $.ajax({
    url: `${url}/user-type/create`,
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(ajaxData),

    success: function (response) {
      onSuccess(response);
    },
    error: function (response) {
      onError(response);
    },
  });
  scrollToHeader();
}

const btngetUserTypes = document.getElementById("getUserTypes");
btngetUserTypes.addEventListener("click", getUserTypes);
function getUserTypes(e) {
  console.log("getUserTypes");
  beforeSubmit();

  $.ajax({
    url: `${url}/user-type/`,
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

const btngetlimitedUserTypes = document.getElementById("getlimitedUserTypes");
btngetlimitedUserTypes.addEventListener("click", getlimitedUserTypes);
function getlimitedUserTypes(e) {
  console.log("getlimitedUserTypes");
  beforeSubmit();

  $.ajax({
    url: `${url}/user-type/limited?sort=desc&limit=2`,
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

const btngetUserType = document.getElementById("getUserType");
btngetUserType.addEventListener("click", getUserType);
function getUserType(e) {
  console.log("getUserType");
  beforeSubmit();

  $.ajax({
    url: `${url}/user-type/65afc535a38f9d3388ab3662`,
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

const btnupdateUserType = document.getElementById("updateUserType");
btnupdateUserType.addEventListener("click", updateUserType);
function updateUserType(e) {
  console.log("updateUserType");
  beforeSubmit();

  ajaxData = {
    id: "65afc535a38f9d3388ab3662",
    type: "NEW TYPE",
  };

  $.ajax({
    url: `${url}/user-type/update`,
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(ajaxData),

    success: function (response) {
      onSuccess(response);
    },
    error: function (response) {
      onError(response);
    },
  });
  scrollToHeader();
}

const btnupdateUserTypeMany = document.getElementById("updateUserTypeMany");
btnupdateUserTypeMany.addEventListener("click", updateUserTypeMany);
function updateUserTypeMany(e) {
  console.log("updateUserTypeMany");
  beforeSubmit();

  ajaxData = {
    type: "mentee",
    newType: "NEW TYPES",
  };

  $.ajax({
    url: `${url}/user-type/update-many`,
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(ajaxData),

    success: function (response) {
      onSuccess(response);
    },
    error: function (response) {
      onError(response);
    },
  });
  scrollToHeader();
}

const btndeleteUserType = document.getElementById("deleteUserType");
btndeleteUserType.addEventListener("click", deleteUserType);
function deleteUserType(e) {
  console.log("deleteUserType");
  beforeSubmit();

  ajaxData = {
    id: "65afc535a38f9d3388ab3662",
  };

  $.ajax({
    url: `${url}/user-type/delete`,
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(ajaxData),

    success: function (response) {
      onSuccess(response);
    },
    error: function (response) {
      onError(response);
    },
  });
  scrollToHeader();
}

const btndeleteUserTypeMany = document.getElementById("deleteUserTypeMany");
btndeleteUserTypeMany.addEventListener("click", deleteUserTypeMany);
function deleteUserTypeMany(e) {
  console.log("deleteUserTypeMany");
  beforeSubmit();

  ajaxData = {
    type: "mentee",
  };

  $.ajax({
    url: `${url}/user-type/delete-many`,
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(ajaxData),

    success: function (response) {
      onSuccess(response);
    },
    error: function (response) {
      onError(response);
    },
  });
  scrollToHeader();
}

// user type end

// login
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
// login end
