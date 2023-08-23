function add() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if (num1 === "" || num2 === "") {
      document.getElementById("error").innerHTML = "Vennligst skriv inn noe i begge felt.";
      document.getElementById("result").innerHTML = "";
    } else {
      document.getElementById("error").innerHTML = "";
      var result = parseFloat(num1) + parseFloat(num2);
      document.getElementById("result").innerHTML = "Resultat: " + result;
    }
  }
  
  function subtract() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if (num1 === "" || num2 === "") {
      document.getElementById("error").innerHTML = "Vennligst skriv inn noe i begge felt.";
      document.getElementById("result").innerHTML = "";
    } else {
      document.getElementById("error").innerHTML = "";
      var result = parseFloat(num1) - parseFloat(num2);
      document.getElementById("result").innerHTML = "Resultat: " + result;
    }
  }
  
  function multiply() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if (num1 === "" || num2 === "") {
      document.getElementById("error").innerHTML = "Vennligst skriv inn noe i begge felt.";
      document.getElementById("result").innerHTML = "";
    } else {
      document.getElementById("error").innerHTML = "";
      var result = parseFloat(num1) * parseFloat(num2);
      document.getElementById("result").innerHTML = "Resultat: " + result;
    }
  }
  
  function divide() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if (num1 === "" || num2 === "") {
      document.getElementById("error").innerHTML = "Vennligst skriv inn noe i begge felt.";
      document.getElementById("result").innerHTML = "";
    } else if (parseFloat(num2) === 0) {
      document.getElementById("error").innerHTML = "Kan ikke dele på null.";
      document.getElementById("result").innerHTML = "";
    } else {
      document.getElementById("error").innerHTML = "";
      var result = parseFloat(num1) / parseFloat(num2);
      document.getElementById("result").innerHTML = "Resultat: " + result;
    }
  }