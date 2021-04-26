let api_1 =
    "https://api.happi.dev/v1/generate-password?apikey=6e0312p4eNHzmqWVr1Z6tSo7B5ZuY0BRm7iWz1Qn3E9rBxOz33bdWBTg",
  api_2 =
    "https://api.happi.dev/v1/generate-password?apikey=6e0312p4eNHzmqWVr1Z6tSo7B5ZuY0BRm7iWz1Qn3E9rBxOz33bdWBTg&num=1",
  api_3 =
    "https://api.happi.dev/v1/generate-password?apikey=6e0312p4eNHzmqWVr1Z6tSo7B5ZuY0BRm7iWz1Qn3E9rBxOz33bdWBTg&symbols=1",
  api_4 =
    "https://api.happi.dev/v1/generate-password?apikey=6e0312p4eNHzmqWVr1Z6tSo7B5ZuY0BRm7iWz1Qn3E9rBxOz33bdWBTg&upper=1",
  api_5 =
    "https://api.happi.dev/v1/generate-password?apikey=6e0312p4eNHzmqWVr1Z6tSo7B5ZuY0BRm7iWz1Qn3E9rBxOz33bdWBTg&num=1&symbols=1&upper=1",
  api_6 =
    "https://api.happi.dev/v1/generate-password?apikey=6e0312p4eNHzmqWVr1Z6tSo7B5ZuY0BRm7iWz1Qn3E9rBxOz33bdWBTg&num=1&symbols=1",
  api_7 =
    "https://api.happi.dev/v1/generate-password?apikey=6e0312p4eNHzmqWVr1Z6tSo7B5ZuY0BRm7iWz1Qn3E9rBxOz33bdWBTg&num=1&upper=1",
  api_8 =
    "https://api.happi.dev/v1/generate-password?apikey=6e0312p4eNHzmqWVr1Z6tSo7B5ZuY0BRm7iWz1Qn3E9rBxOz33bdWBTg&symbols=1&upper=1",
  api_9 =
    "https://api.happi.dev/v1/generate-password?apikey=6e0312p4eNHzmqWVr1Z6tSo7B5ZuY0BRm7iWz1Qn3E9rBxOz33bdWBTg&length=",
  api_10 =
    "https://api.happi.dev/v1/generate-password?apikey=6e0312p4eNHzmqWVr1Z6tSo7B5ZuY0BRm7iWz1Qn3E9rBxOz33bdWBTg&num=1&symbols=1&upper=1&length=",
  api_11 =
    "https://api.happi.dev/v1/generate-password?apikey=6e0312p4eNHzmqWVr1Z6tSo7B5ZuY0BRm7iWz1Qn3E9rBxOz33bdWBTg&num=1&symbols=1&length=",
  api_12 =
    "https://api.happi.dev/v1/generate-password?apikey=6e0312p4eNHzmqWVr1Z6tSo7B5ZuY0BRm7iWz1Qn3E9rBxOz33bdWBTg&num=1&upper=1&length=",
  api_13 =
    "https://api.happi.dev/v1/generate-password?apikey=6e0312p4eNHzmqWVr1Z6tSo7B5ZuY0BRm7iWz1Qn3E9rBxOz33bdWBTg&symbols=1&upper=1&length=",
  api_14 =
    "https://api.happi.dev/v1/generate-password?apikey=6e0312p4eNHzmqWVr1Z6tSo7B5ZuY0BRm7iWz1Qn3E9rBxOz33bdWBTg&num=1&length=",
  api_15 =
    "https://api.happi.dev/v1/generate-password?apikey=6e0312p4eNHzmqWVr1Z6tSo7B5ZuY0BRm7iWz1Qn3E9rBxOz33bdWBTg&symbols=1&length=",
  api_16 =
    "https://api.happi.dev/v1/generate-password?apikey=6e0312p4eNHzmqWVr1Z6tSo7B5ZuY0BRm7iWz1Qn3E9rBxOz33bdWBTg&upper=1&length=";

// Grabbing elements and setting to variables
const generate = document.getElementById("generatePassword");
const displayField = document.getElementById("password_Gen");
const copy = document.getElementById("copy");
const checked = document.getElementById("symbol");
const defineButton = document.getElementById("defined");
const generateDefinedButton = document.getElementById("generateDefined");
const displayHiddenChecklist = document.getElementById("showChecklist");
const yes_button_1 = document.getElementById("yes_button_1");
const yes_button_2 = document.getElementById("yes_button_2");
const yes_button_3 = document.getElementById("yes_button_3");
const lengthOfPassword = document.getElementById("length");

// Event Listeners
defineButton.addEventListener("click", defineDisplay);
generate.addEventListener("click", getPassword);
copy.addEventListener("click", copyToClipboard);
generateDefinedButton.addEventListener("click", checklistInput);

// async functions
async function getPassword() {
  const res = await fetch(api_1);
  const data = await res.json();
  console.log(data);
  displayPasswords(data);
}

async function getPasswordAPI_2() {
  const res = await fetch(api_2);
  const data = await res.json();
  console.log(data);
  displayNumberPassword(data);
}

async function getPasswordAPI_3() {
  const res = await fetch(api_3);
  const data = await res.json();
  console.log(data);
  displaySymbolPassword(data);
}

async function getPasswordAPI_4() {
  const res = await fetch(api_4);
  const data = await res.json();
  console.log(data);
  displayUpperPassword(data);
}

async function getPasswordAPI_5() {
  const res = await fetch(api_5);
  const data = await res.json();
  console.log(data);
  displayMixedPassword(data);
}

async function getPasswordAPI_6() {
  const res = await fetch(api_6);
  const data = await res.json();
  console.log(data);
  displayNumSymPassword(data);
}

async function getPasswordAPI_7() {
  const res = await fetch(api_7);
  const data = await res.json();
  console.log(data);
  displayNumUpperPassword(data);
}

async function getPasswordAPI_8() {
  const res = await fetch(api_8);
  const data = await res.json();
  console.log(data);
  displaySymUpperPassword(data);
}

async function getPasswordAPI_9() {
  const res = await fetch(api_9 + lengthOfPassword.value);
  const data = await res.json();
  console.log(data);
  displayLengthPassword(data);
}

async function getPasswordAPI_10() {
  const res = await fetch(api_10 + lengthOfPassword.value);
  const data = await res.json();
  console.log(data);
  displayDieVolleNommer(data);
}

async function getPasswordAPI_11() {
  const res = await fetch(api_11 + lengthOfPassword.value);
  const data = await res.json();
  console.log(data);
  displayOneandTwoandLength(data);
}

async function getPasswordAPI_12() {
  const res = await fetch(api_12 + lengthOfPassword.value);
  const data = await res.json();
  console.log(data);
  displayOneandThreeandLength(data);
}

async function getPasswordAPI_13() {
  const res = await fetch(api_13 + lengthOfPassword.value);
  const data = await res.json();
  console.log(data);
  displayTwoandThreeandLength(data);
}

async function getPasswordAPI_14() {
  const res = await fetch(api_14 + lengthOfPassword.value);
  const data = await res.json();
  console.log(data);
  displayOneandLength(data);
}

async function getPasswordAPI_15() {
  const res = await fetch(api_15 + lengthOfPassword.value);
  const data = await res.json();
  console.log(data);
  displayTwoandLength(data);
}

async function getPasswordAPI_16() {
  const res = await fetch(api_16 + lengthOfPassword.value);
  const data = await res.json();
  console.log(data);
  displayThreeandLength(data);
}

// Function to display single password generated
function displayPasswords(data) {
  let password = data.passwords[0];
  displayField.value = password;
}

// Displays password with numbers
function displayNumberPassword(data) {
  let password = data.passwords[0];
  console.log(password);
  displayField.value = password;
}

function displaySymbolPassword(data) {
  let password = data.passwords[0];
  console.log(password);
  displayField.value = password;
}

function displayUpperPassword(data) {
  let password = data.passwords[0];
  console.log(password);
  displayField.value = password;
}

function displayMixedPassword(data) {
  let password = data.passwords[0];
  console.log(password);
  displayField.value = password;
}

function displayNumSymPassword(data) {
  let password = data.passwords[0];
  console.log(password);
  displayField.value = password;
}

function displayNumUpperPassword(data) {
  let password = data.passwords[0];
  console.log(password);
  displayField.value = password;
}

function displaySymUpperPassword(data) {
  let password = data.passwords[0];
  console.log(password);
  displayField.value = password;
}

function displayLengthPassword(data) {
  let password = data.passwords[0];
  console.log(password);
  displayField.value = password;
}

function displayDieVolleNommer(data) {
  let password = data.passwords[0];
  console.log(password);
  displayField.value = password;
}

function displayOneandTwoandLength(data) {
  let password = data.passwords[0];
  console.log(password);
  displayField.value = password;
}

function displayOneandThreeandLength(data) {
  let password = data.passwords[0];
  console.log(password);
  displayField.value = password;
}

function displayTwoandThreeandLength(data) {
  let password = data.passwords[0];
  console.log(password);
  displayField.value = password;
}

function displayOneandLength(data) {
  let password = data.passwords[0];
  console.log(password);
  displayField.value = password;
}

function displayTwoandLength(data) {
  let password = data.passwords[0];
  console.log(password);
  displayField.value = password;
}

function displayThreeandLength(data) {
  let password = data.passwords[0];
  console.log(password);
  displayField.value = password;
}

// Copy value
function copyToClipboard() {
  let textInput = displayField;
  textInput.select();
  console.log(textInput.value);
  document.execCommand("copy");
  alert("Copied!");
}

// Shows checklist to define a user password
function defineDisplay() {
  console.log("Fire");
  displayHiddenChecklist.style.display = "none";
  if (displayHiddenChecklist.style.display !== "none") {
    displayHiddenChecklist.style.display = "none";
  } else {
    displayHiddenChecklist.style.display = "block";
  }
}

// Generates password with numbers if radio button is selected for yes
function checklistInput() {
  if (
    yes_button_1.checked &&
    yes_button_2.checked &&
    yes_button_3.checked &&
    lengthOfPassword.value !== null
  ) {
    getPasswordAPI_10();
  } else if (
    yes_button_1.checked &&
    yes_button_2.checked &&
    yes_button_3.checked
  ) {
    getPasswordAPI_5();
  } else if (
    yes_button_1.checked &&
    yes_button_2.checked &&
    lengthOfPassword.value !== null
  ) {
    getPasswordAPI_11();
  } else if (
    yes_button_1.checked &&
    yes_button_3.checked &&
    lengthOfPassword.value !== null
  ) {
    getPasswordAPI_12();
  } else if (
    yes_button_2.checked &&
    yes_button_3.checked &&
    lengthOfPassword.value !== null
  ) {
    getPasswordAPI_13();
  } else if (yes_button_1.checked && lengthOfPassword.value !== null) {
    getPasswordAPI_14();
  } else if (yes_button_2.checked && lengthOfPassword.value !== null) {
    getPasswordAPI_15();
  } else if (yes_button_3.checked && lengthOfPassword.value !== null) {
    getPasswordAPI_16();
  } else if (yes_button_1.checked && yes_button_2.checked) {
    getPasswordAPI_6();
  } else if (yes_button_1.checked && yes_button_3.checked) {
    getPasswordAPI_7();
  } else if (yes_button_2.checked && yes_button_3.checked) {
    getPasswordAPI_8();
  } else if (yes_button_2.checked) {
    getPasswordAPI_3();
  } else if (yes_button_3.checked) {
    getPasswordAPI_4();
  } else if (yes_button_1.checked) {
    getPasswordAPI_2();
  } else if (lengthOfPassword.value !== null) {
    getPasswordAPI_9();
  }
}
