//task1 Calculator
var firstnumber;
var secondnumber;
var result;
var operations;

function numone() {
  if (
    document.lcdform.lcds.value == "0" ||
    document.lcdform.lcds.value == result
  ) {
    document.lcdform.lcds.value = "1";
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "1";
  }
}

function numtwo() {
  if (
    document.lcdform.lcds.value == "0" ||
    document.lcdform.lcds.value == result
  ) {
    document.lcdform.lcds.value = "2";
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "2";
  }
}

function numthree() {
  if (
    document.lcdform.lcds.value == "0" ||
    document.lcdform.lcds.value == result
  ) {
    document.lcdform.lcds.value = "3";
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "3";
  }
}

function numfour() {
  if (
    document.lcdform.lcds.value == "0" ||
    document.lcdform.lcds.value == result
  ) {
    document.lcdform.lcds.value = "4";
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "4";
  }
}

function numfive() {
  if (
    document.lcdform.lcds.value == "0" ||
    document.lcdform.lcds.value == result
  ) {
    document.lcdform.lcds.value = "5";
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "5";
  }
}

function numsix() {
  if (
    document.lcdform.lcds.value == "0" ||
    document.lcdform.lcds.value == result
  ) {
    document.lcdform.lcds.value = "6";
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "6";
  }
}

function numseven() {
  if (
    document.lcdform.lcds.value == "0" ||
    document.lcdform.lcds.value == result
  ) {
    document.lcdform.lcds.value = "7";
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "7";
  }
}

function numeight() {
  if (document.lcdform.lcds.value == "0") {
    document.lcdform.lcds.value = "8";
  } else if (document.lcdform.lcds.value == result) {
    document.lcdform.lcds.value = "8";
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "8";
  }
}

function numnine() {
  if (
    document.lcdform.lcds.value == "0" ||
    document.lcdform.lcds.value == result
  ) {
    document.lcdform.lcds.value = "9";
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "9";
  }
}

function numzero() {
  if (document.lcdform.lcds.value == "0") {
    document.lcdform.lcds.value = "0";
  } else if (document.lcdform.lcds.value == result) {
    document.lcdform.lcds.value = "0";
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "0";
  }
}

function doute() {
  if (
    document.lcdform.lcds.value == "." ||
    document.lcdform.lcds.value == result
  ) {
    return;
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + ".";
  }
}

function clr() {
  document.lcdform.lcds.value = "0";
  document.lcdform.lcdsu.value = "";
  return;
}

function operationplus() {
  operation = "+";
  firstnumber = parseInt(document.lcdform.lcds.value);
  document.lcdform.lcds.value = "0";
  document.lcdform.lcdsu.value = firstnumber + operation;
}

function operationmult() {
  operation = "*";
  firstnumber = parseInt(document.lcdform.lcds.value);
  document.lcdform.lcds.value = "0";
  document.lcdform.lcdsu.value = firstnumber + operation;
}

function operationminus() {
  operation = "-";
  firstnumber = parseInt(document.lcdform.lcds.value);
  document.lcdform.lcds.value = "0";
  document.lcdform.lcdsu.value = firstnumber + operation;
}

function operationdivid() {
  operation = "/";
  firstnumber = parseInt(document.lcdform.lcds.value);
  document.lcdform.lcds.value = "0";
  document.lcdform.lcdsu.value = firstnumber + operation;
}

function operationperc() {
  operation = "%";
  firstnumber = parseInt(document.lcdform.lcds.value);
  document.lcdform.lcds.value = "0";
  document.lcdform.lcdsu.value = firstnumber + operation;
}

function equalsto() {
  secondnumber = parseInt(document.lcdform.lcds.value);

  if (operation == "+") {
    result = firstnumber + secondnumber;
  } else if (operation == "*") {
    result = firstnumber * secondnumber;
  } else if (operation == "-") {
    result = firstnumber - secondnumber;
  } else if (operation == "/") {
    result = firstnumber / secondnumber;
  } else if (operation == "%") {
    if (document.lcdform.lcds.value == "0") {
      result = firstnumber / 100;
      document.lcdform.lcdsu.value = firstnumber + operation + "100";
    } else if (document.lcdform.lcds.value != "0") {
      result = (firstnumber / secondnumber) * 100;
      document.lcdform.lcdsu.value =
        firstnumber + operation + secondnumber + "*100 = " + result;
    }
  }
  document.lcdform.lcds.value = "";
  document.lcdform.lcds.value = result.toString();
  document.lcdform.lcdsu.value =
    firstnumber + operation + secondnumber + " = " + result.toString();
  return;
}

function sqrots() {
  firstnumber = document.lcdform.lcds.value;
  result = Math.sqrt(parseInt(document.lcdform.lcds.value));
  document.lcdform.lcds.value = result;
  document.lcdform.lcdsu.value = "sqrt(" + firstnumber + ") = " + result;
}
function abs() {
  firstnumber = document.lcdform.lcds.value;
  result = Math.abs(parseInt(document.lcdform.lcds.value));
  document.lcdform.lcds.value = result;
  document.lcdform.lcdsu.value = "abs(" + firstnumber + ") = " + result;
}

//end of task1

//task2 form
function allLetter(inputtxt) {
  var letters = /^[A-Za-z]+$/;
  if (inputtxt.value.match(letters)) {
    return true;
  } else {
    alert("Please input alphabet characters only");
    return false;
  }
}
//end of task2

//task3 palindrome and anagram
function palindrome() {
  str = document.getElementById("text").value;
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] == str[j]) {
      i++;
      j--;
    } else {
      window.alert(" not palindrome");
    }
  }
  window.alert(" palindrome");
}
function Anagram() {
  stringA = document.getElementById("stringA").value;
  stringB = document.getElementById("stringB").value;
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
  if (stringA.length !== stringB.length) {
    alert(" Not an Anagram.");
  }

  let arrB = stringB.split("");

  for (let char of stringA) {
    if (!arrB.includes(char)) {
      alert(" Not an Anagram.");
      break;
    } else {
      arrB.splice(arrB.indexOf(char), 1);
      alert(" Is an Anagram.");
    }
  }
}
//end of task3

//task4
function Object1() {
  var Human, Cockroach, Nuclearbomb;
  Object1 = Number(document.getElementById("object1").value);
  if (Object1 % 3 == 0) {
    window.alert("Human");
  } else if (Object1 % 2 == 0) {
    window.alert("Cockroach");
  } else {
    window.alert("NuclearBomb");
  }
  return;
}
function Object2() {
  var Human, Cockroach, Nuclearbomb;
  Object2 = Number(document.getElementById("Object2").value);
  if (Object2 % 3 == 0) {
    window.alert("Human");
  } else if (Object2 % 2 == 0) {
    window.alert("Cockroach");
  } else {
    window.alert("NuclearBomb");
  }
  return;
}
function survival() {
  var Human, Cockroach, Nuclearbomb;
  Object1 = Number(document.getElementById("object1").value);
  Object2 = Number(document.getElementById("Object2").value);
  if (
    (Object1 % 3 == 0 || Object2 % 3 == 0) &&
    (Object1 % 2 == 0 || Object2 % 2 == 0)
  ) {
    window.alert("Human Survives..!");
  } else if (
    (Object1 % 1 == 0 || Object2 % 1 == 0) &&
    (Object1 % 2 == 0 || Object2 % 2 == 0)
  ) {
    window.alert("Cockroach Survives..!");
  } else {
    window.alert("NuclearBomb Survives..!");
  }
  return;
}
//end of task4
//end
