// Створити об'єкт calculator з трьома методами:

// read() викликає prompt для кількості значень і записуємо в 
//    властивість об'єкта numberOfVariable, після чого задопомогою prompt 
//    запитуємо таку кількість значень скільки в numberOfVariable і записуємо в властивості об'єкта;
// sum() виводить суму всіх значень;
// mul() виводить добуток всіх значень;

  var calculator = {
    numberOfVariable: 0,
    numbers: [],

    read: function () {

      while (true) {
        this.numberOfVariable = prompt( "Введите число", "" );
        if (  this.numberOfVariable === null ||
              this.numberOfVariable === "" || 
              isNaN(this.numberOfVariable) ) {
      break
        } 
        else if ( isNaN(this.numberOfVariable) ) {
            console.log("Вы ввели не число");
        };
      this.numbers.push( +this.numberOfVariable );
      };
    },

    sum: function () {
      var summa = 0;

      for (var i = 0; i < this.numbers.length; i++) {
        summa += this.numbers[i];
      };

    console.log( "Сумма элементов: " + summa );
    },

    mul: function () {
      var multResult = 1;

      for (var i = 0; i < this.numbers.length; i++) {
        multResult *= this.numbers[i];
      };

    console.log( "Сумма элементов: " + multResult );
    },
    

  };

  calculator.read();
  calculator.sum();
  calculator.mul();




  // Створити об'єкт calculator такий як в 4 завданні через конструктор.

  var calculator1 = new Calculator(),
      calculator2 = new Calculator();

      calculator1.read();
      calculator1.sum();
      calculator1.mul();

      calculator2.read();
      calculator2.sum();
      calculator2.mul();


  function Calculator() {
    this.numberOfVariable = 0,
    this.numbers = [],

    this.read = function () {

      while (true) {
        this.numberOfVariable = prompt( "Введите число", "" );
        if (  this.numberOfVariable === null ||
              this.numberOfVariable === "" || 
              isNaN(this.numberOfVariable) ) {
      break
        } 
        else if ( isNaN(this.numberOfVariable) ) {
            console.log("Вы ввели не число");
        };
      this.numbers.push( +this.numberOfVariable );
      };
    },

    this.sum = function () {
      var summa = 0;

      for (var i = 0; i < this.numbers.length; i++) {
        summa += this.numbers[i];
      };

    console.log( "Сумма элементов: " + summa );
    },

    this.mul = function () {
      var multResult = 1;

      for (var i = 0; i < this.numbers.length; i++) {
        multResult *= this.numbers[i];
      };

    console.log( "Сумма элементов: " + multResult );
    }
  
  };



