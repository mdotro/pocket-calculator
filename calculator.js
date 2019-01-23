let string = "";
var number = 0
let saved = "";
let operator = 0;
var decimal = false;
var clear = false;

function zero() {
  if (number == 1) {
    string = "0"
  } else {
    if (operator == 1) {
      operator = 0;
      string = saved;
    }
    if (decimal == 1) {
      decimal = 0;
      string = saved;
    }
    string += "0"
  }
  var div = document.getElementById("real-input");
  div.innerHTML = string;
} 
  
function one() {
  if (number == 1) {
    string = "1"
  } else {
    if (operator == 1) {
      operator = 0;
      string = saved;
    }
    if (decimal == 1) {
      decimal = 0;
      string = saved;
    }
    string += "1"
  }
  var div = document.getElementById("real-input");
  div.innerHTML = string;
}

function two() {
  if (number == 1) {
    string = "2"
  } else {
    if (operator == 1) {
      operator = 0;
      string = saved;
    }
    if (decimal == 1) {
      decimal = 0;
      string = saved;
    }
    string += "2"
  }
  var div = document.getElementById("real-input");
  div.innerHTML = string;
}

function three() {
  if (number == 1) {
    string = "3"
  } else {
    if (operator == 1) {
      operator = 0;
      string = saved;
    }
    if (decimal == 1) {
      decimal = 0;
      string = saved;
    }
  string += "3"
  }
  var div = document.getElementById("real-input");
  div.innerHTML = string;
}

function four() {
  if (number == 1) {
    string = "4"
  } else {
    if (operator == 1) {
      operator = 0;
      string = saved;
    }
    if (decimal == 1) {
      decimal = 0;
      string = saved;
    }
  string += "4"
  }
  var div = document.getElementById("real-input");
  div.innerHTML = string;
}

function five() {
  if (number == 1) {
    string = "5"
  } else {
    if (operator == 1) {
      operator = 0;
      string = saved;
    }
     if (decimal == 1) {
      decimal = 0;
      string = saved;
    }
  string += "5"
  }
  var div = document.getElementById("real-input");
  div.innerHTML = string;
}

function six() {
  if (number == 1) {
    string = "6"
  } else {
    if (operator == 1) {
    operator = 0;
    string = saved;
    }
    if (decimal == 1) {
      decimal = 0;
      string = saved;
    }
  string += "6"
  }
  var div = document.getElementById("real-input");
  div.innerHTML = string;
}

function seven() {
  if (number == 1) {
    string = "7"
  } else {
    if (operator == 1) {
      operator = 0;
      string = saved;
    }
    if (decimal == 1) {
      decimal = 0;
      string = saved;
    }
  string += "7"
  }
  var div = document.getElementById("real-input");
  div.innerHTML = string;
}

function eight() {
  if (number == 1) {
    string = "8"
  } else {
    if (operator == 1) {
      string = saved;
      operator = 0;
    }
    if (decimal == 1) {
      decimal = 0;
      string = saved;
    }
  string += "8"
  }
  var div = document.getElementById("real-input");
  div.innerHTML = string;
}

function nine() {
  if (number == 1) {
    string = "9"
  } else {
    if (operator == 1) {
      string = saved;
      operator = 0;
    }
    if (decimal == 1) {
      decimal = 0;
      string = saved;
    }
    string += "9"
  }
  var div = document.getElementById("real-input");
  div.innerHTML = string;
}

function clears() {
  var div = document.getElementById("real-input");
  console.log(1)
  div.innerHTML = '0';
  string = " "
  saved = ""
  operator = 0;
  clear = true;
  number = 0;
  if (clear == true) {
    decimal = false;
    document.getElementById("decimal").disabled = false;
  }
}

function mult() {
  var div = document.getElementById("real-input");
  saved = string;
  saved += "*"
  div.innerHTML = saved;
  number = 0;
  operator = 1;
  if (operator == 1) {
    document.getElementById("decimal").disabled = false;
  }
}

function add() {
  var div = document.getElementById("real-input");
  saved = string;
  saved += "+"
  div.innerHTML = saved;
  number = 0;
  operator = 1;
  if (operator == 1) {
    document.getElementById("decimal").disabled = false;
  }
}

function div() {
  var div = document.getElementById("real-input");
  saved = string;
  saved += "/"
  div.innerHTML = saved;
  number = 0;
  operator = 1;
  if (operator == 1) {
    document.getElementById("decimal").disabled = false;
  }
}

function sub() {
  var div = document.getElementById("real-input");
  saved = string;
  saved += "-"
  div.innerHTML = saved;
  number = 0;
  operator = 1;
  if (operator == 1) {
    document.getElementById("decimal").disabled = false;
  }
}

function equal() {
  var div= document.getElementById("real-input");
  string = eval(string);
  div.innerHTML = Number(string).toLocaleString();
  if (Number(string) > 999999999 || Number(string) < 0.000000001) {
    div.innerHTML = Number(string).toExponential()
  }
  number = 1;
}

function posNeg() {
  var div= document.getElementById("real-input");
  string = Number(string) * (-1);
  div.innerHTML = string;
  number = 0;
}

function decimal() {
  if (decimalUsed == false){
    var div = document.getElementById("real-input");
    saved = string;
    saved += ".";
    div.innerHTML = saved;
    decimal = true;
  }
  if (decimal == true) {
    document.getElementById("decimal").disabled = true;
  }
}

function perc() {
  var div = document.getElementById("real-input");
  string = Number(string) * (0.01)
  div.innerHTML = string;
  number = 0;
}
