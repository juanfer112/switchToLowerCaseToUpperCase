
//Ejecicio de jade cambio lowerCase a upperCase.
var quotes = "How can mirrors be real if our eyes aren't real";
 function toJadenCase(quotes) {
  var arr = quotes.split(" ");
  var result = arr.map(
    function(val){
      
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
  
  
  return result.join(" ");
};
console.log(toJadenCase(quotes));

//soluciones alternativas
/*String.prototype.toJadenCase = function () {
  var newStr = "";
  
  this.split(" ").forEach(function(s) { 
      newStr = newStr + " " + s.substring(0,1).toUpperCase() + s.substring(1); 
  });

  return newStr.substr(1);
}

//FIRST SOLUTION

String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

//SECOND SOLUTION

String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};

//THIRD SOLUTION

String.prototype.toJadenCase = function () {

  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  return this.split(' ').map(capitalizeFirstLetter).join(' ');*/

