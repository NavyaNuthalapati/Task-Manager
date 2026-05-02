let users = [];   // empty array for now to store user entry
let currentUser = null; // to remember who loggined

let statusText = document.getElementById("status"); //check whether logged or not

// Login part
let loginDiv = document.getElementById("login");
let loginEmailInput = document.getElementById("user_name");
let loginPasswordInput = document.getElementById("pass");
let loginButton = document.getElementById("loginbutton");

// Signup part
let signupDiv = document.getElementById("signup");
let signupNameInput = document.getElementById("name");
let signupEmailInput = document.getElementById("email");
let signupPasswordInput = document.getElementById("pas");
let signupRoleSelect = document.getElementById("role");
let signupButton = document.getElementById("signupbutton");

// Dashboard part
let dashboardDiv = document.getElementById("dashboard");
let totalProjectsInput = document.getElementById("Tprojects");
let totalTasksInput = document.getElementById("Ttasks");

statusText.textContent = "Not logged in";
loginDiv.style.display = "block";
signupDiv.style.display = "block";
dashboardDiv.style.display = "none";//hide dashboard on the web page before logging in


signupButton.addEventListener("click", function (event) {
     event.preventDefault();  // stop form from reloading

  let name = signupNameInput.value.trim();
  let email = signupEmailInput.value.trim();
  let password = signupPasswordInput.value.trim();
  let role = signupRoleSelect.value;

  if (name === "" || email === "" || password === "") {
    alert("Please fill all signup fields.");
    return;
  }

   for ( let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      alert("This email is already registered. Please login.");
      return;
    }
  }

  // make new user object
  let newUser = {
    id: users.length + 1,
    name: name,
    email: email,
    password: password,
    role: role
  };

  // put it into the users array
  users.push(newUser);

  // clear form for new logings
  signupNameInput.value = "";
  signupEmailInput.value = "";
  signupPasswordInput.value = "";
  signupRoleSelect.value = "member";

  alert("Signup successful! Now login.");
});


// 6. Login button click
loginButton.addEventListener("click", function (event) {
  event.preventDefault();  // stop form from reloading

  let email = loginEmailInput.value.trim();
  let password = loginPasswordInput.value.trim();

  if (email === "" || password === "") {
    alert("Please enter email and password.");
    return;
  }

  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      foundUser = users[i];
      break; // stop loop when found
    }
  }

  if (foundUser === null) {
    alert("Not signed up.");
    return;
  }

  // login success when above condition satisfies
  currentUser = foundUser;

  // change in header text
  statusText.textContent = "Logged in as " + currentUser.name + " (" + currentUser.role + ")";

  loginDiv.style.display = "none";
  signupDiv.style.display = "none";//hode them and show dashboard
  dashboardDiv.style.display = "block";
  document.getElementById("foot").style.textContent=" Thank You ";

  loginEmailInput.value = "";
  loginPasswordInput.value = "";

  totalProjectsInput.value = 1;
  totalTasksInput.value = 1;
});