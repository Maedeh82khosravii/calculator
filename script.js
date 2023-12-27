//about this project:
// developer : maedeh khosravi
// teacher: MR. khatri
// start date:1402/10/05
// end of the project:1402/10/07
// email:khosraviniamaedeh@gmail.com



// har amalgar ra function joda tarif mikonim
function jam(number1, number2) {
    return number1 + number2;
  }
  
  function zarb(number1, number2) {
    return number1 * number2;
  }
  
  function taghseim(number1, number2) {
    return number1 / number2;
  }
  
  function menha(number1, number2) {
    return number1 - number2;
  }
//  meghdar ke mikhad ro va amalgar ra vard vard kon 
  let javad = Number(prompt(" جواد جان عدد را وارد کن  :"));
  let jevad = prompt("جواد جان عملگر را وارد کن");
  let parsajan = Number(prompt(": جواد جان عدد را وارد کن "));

//   dar if ha meghdar k dade ro dar dastor ha migaede va pida mikone va natije ro neshon mide
  if (jevad == "+") {
    console.log(jam(javad, parsajan));
  }
  if (jevad == "*") {
    console.log(zarb(javad, parsajan));
  }
  if (jevad == "/") {
    console.log(taghseim(javad, parsajan));
  }
  if (jevad == "-") {
    console.log(menha(javad, parsajan));
  }