/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */



function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function sum(a, b) {
        return a + b;
    };
    this.subtraction = function subtraction(a, b) {
        return a - b;
    }
    this.multiplication = function multiplication(a, b) {
        return a * b;
    }
    this.division = function divisionn(a, b) {
        return Math.round( a / b * 100) / 100;
    }
  };
  
  let calculator1 = new Calculator();

  console.log('the sum is ' + calculator1.sum(4, 5));
  console.log('the subtraction is ' + calculator1.subtraction(4, 5));
  console.log('the multiplication is ' + calculator1.multiplication(4, 5));
  console.log('the division is ' + calculator1.division(4, 5));