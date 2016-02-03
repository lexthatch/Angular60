var first = firstName()
var last = lastName()
var name = first + " " + last;
var visit = 0;

function setName(firstName, lastName) {
  name = firstName + " " + lastName
}

function saveData(firstName, lastName, visitCount) {
  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("visitCount", visitCount);
  
  var data = {
    firstName: firstName,
    lastName: lastName,
    visitCount: visitCount
  };
  
  localStorage.setItem("data", JSON.stringify(data));
}

function getItem(keyName, defaultValue) {
  return localStorage.getItem(keyName) || defaultValue;
}

function lastName() {
  return getItem("lastName", "Coward");
}

function firstName() {
  return getItem("firstName", "Anonymous");
}

function visitCount() {
  visit = parseInt(getItem("visitCount"), 10) || 0;
  return visit;
}

function updateName(id) {
  var newFirst = prompt("First Name", first);
  var newLast = last = prompt("Last Name", last);
  
  if (newFirst && newFirst !== first) {
    first = newFirst;
  }
  
  if (newLast && newLast !== last) {
    last = newLast;
  }
  
  setName(first, last);
  document.getElementById(id).textContent = name;
  
  saveData(first, last, visit);
  localStorage.setItem("_version", "1.0");
}

function getData() {
  var data = localStorage.getItem("data") || {};
  first = data.firstName || "Anonymous";
  last = data.lastName || "Coward";
  setName(first, last);
  visit = parseInt(data.visitCount, 10) || 0; 
}

function clearLocalStorage() {
  var key;
  for(var i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);
    if (!key.startsWith("_")) {
      //localStorage.removeItem(key);
      console.log("I would have deleted " + key);
    } else {
      console.log(key + " would have been safe");
    }
  }
}