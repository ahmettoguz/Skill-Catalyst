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

// login
const btnLogin = document.getElementById("login");
btnLogin.addEventListener("click", login);
function login(e) {
  console.log("login");

  // mentee
  // const ajaxData = {
  //   email: "sena@hotmail.com",
  //   password: "1234",
  // };

  // mentor
  const ajaxData = {
    email: "ahmet@hotmail.com",
    password: "1234",
  };

  // const ajaxData = {};

  // const ajaxData = {
  //   email: undefined,
  //   password: undefined,
  // };

  // const ajaxData = {
  //   email: null,
  //   password: null,
  // };

  // const ajaxData = {
  //   email: "",
  //   password: "",
  // };

  beforeSubmit();

  $.ajax({
    url: `${url}/auth/login`,
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

const btnprivateMentee = document.getElementById("privateMentee");
btnprivateMentee.addEventListener("click", privateMentee);
function privateMentee(e) {
  console.log("privateMentee");

  beforeSubmit();

  const jwt =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDcwNDYyNTksImRhdGEiOnsiaWQiOiI2NWIwNTUzOTM0NTMyNTgxNDg0YzY1ZTEifSwiaWF0IjoxNzA2OTU5ODU5fQ.TdYnjM0DKocFNFXxUCBiuQUh25EvpQy5C42NRNgrUDg";
  $.ajax({
    url: `${url}/private/mentee`,
    type: "get",
    contentType: "application/json",
    headers: {
      Authorization: jwt,
    },
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

const btnprivateMentor = document.getElementById("privateMentor");
btnprivateMentor.addEventListener("click", privateMentor);
function privateMentor(e) {
  console.log("privateMentor");

  beforeSubmit();

  const jwt =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDcwNDYyMTUsImRhdGEiOnsiaWQiOiI2NWIwNTUzOTM0NTMyNTgxNDg0YzY1ZTEifSwiaWF0IjoxNzA2OTU5ODE1fQ.GaCYWkn5ba9SlUzjOiS2Uh_VTEzB_4k5QHojhVl8X2M";

  $.ajax({
    url: `${url}/private/mentor`,
    type: "get",
    contentType: "application/json",
    // data: JSON.stringify(ajaxData),
    headers: {
      Authorization: jwt,
    },

    success: function (response) {
      onSuccess(response);
    },
    error: function (response) {
      onError(response);
    },
  });
  scrollToHeader();
}
// login end

// user
const btncrateUser = document.getElementById("crateUser");
btncrateUser.addEventListener("click", crateUser);
function crateUser(e) {
  console.log("crateUser");

  const ajaxData = {
    type: "mentee",
    name: "hazal",
    email: "hazal@hotmail.com",
    password: "1234",
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

const btnreadUsers = document.getElementById("readUsers");
btnreadUsers.addEventListener("click", readUsers);
function readUsers(e) {
  console.log("readUsers");

  beforeSubmit();

  $.ajax({
    url: `${url}/user`,
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

const btnreadlimitedUsers = document.getElementById("readlimitedUsers");
btnreadlimitedUsers.addEventListener("click", readlimitedUsers);
function readlimitedUsers(e) {
  console.log("readlimitedUsers");

  beforeSubmit();

  $.ajax({
    url: `${url}/user/limited?sort=desc&limit=2`,
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

const btnreadUsersInRange = document.getElementById("readUsersInRange");
btnreadUsersInRange.addEventListener("click", readUsersInRange);
function readUsersInRange(e) {
  console.log("readUsersInRange");

  beforeSubmit();

  $.ajax({
    url: `${url}/user/in-range?sort=asc&startRange=0&endRange=1`,
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

const btnreadUserById = document.getElementById("readUserById");
btnreadUserById.addEventListener("click", readUserById);
function readUserById(e) {
  console.log("readUserById");

  beforeSubmit();

  $.ajax({
    url: `${url}/user/65b0553934532581484c65e1`,
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

const btnupdateUser = document.getElementById("updateUser");
btnupdateUser.addEventListener("click", updateUser);
function updateUser(e) {
  console.log("updateUser");
  beforeSubmit();

  ajaxData = {
    id: "65b0553934532581484c65e1",

    user_type: "mentee",
    name: "ahmo",
    email: "ahmo@hotmail.com",
    gender: "male",
  };

  $.ajax({
    url: `${url}/user/update`,
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

const btnupdateUsers = document.getElementById("updateUsers");
btnupdateUsers.addEventListener("click", updateUsers);
function updateUsers(e) {
  console.log("updateUsers");
  beforeSubmit();

  ajaxData = {
    filterGender: "none",
    newGender: "male",
  };

  $.ajax({
    url: `${url}/user/update-many`,
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

const btndeleteUser = document.getElementById("deleteUser");
btndeleteUser.addEventListener("click", deleteUser);
function deleteUser(e) {
  console.log("deleteUser");
  beforeSubmit();

  ajaxData = {
    id: "65b0553934532581484c65e1",
  };

  $.ajax({
    url: `${url}/user/delete`,
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

const btndeleteUsers = document.getElementById("deleteUsers");
btndeleteUsers.addEventListener("click", deleteUsers);
function deleteUsers(e) {
  console.log("deleteUsers");
  beforeSubmit();

  ajaxData = {
    gender: "none",
  };

  $.ajax({
    url: `${url}/user/delete-many`,
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

const btnreadUserTypes = document.getElementById("readUserTypes");
btnreadUserTypes.addEventListener("click", readUserTypes);
function readUserTypes(e) {
  console.log("readUserTypes");
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

const btnreadUserType = document.getElementById("readUserType");
btnreadUserType.addEventListener("click", readUserType);
function readUserType(e) {
  console.log("readUserType");
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
