const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(appAdd) {
      this.appetizers.push(appAdd);
    },
    get mains() {
      return this._courses.mains;
    },
    set mains(mainAdd) {
      this.mains.push(mainAdd);    
    },
    get desserts() {
      return this._courses.desserts;
    },
    set desserts(dessertAdd) {
      this._courses.desserts.push(dessertAdd);
    },
    
    get courses() {
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts
      }
    },
    
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
          price: dishPrice
            };           
        this._courses[courseName].push(dish);
    },
    
    getRandomDishFromCourse: function(courseName) {
        const dishes = this._courses[courseName];
      const randomDishIndex = Math.floor(Math.random()*dishes.length)
      return dishes[randomDishIndex];
    },
    
    generateRandomMeal: function() {
      const appetizer = this.getRandomDishFromCourse("appetizers");     
      const main = this.getRandomDishFromCourse("mains");    
          const dessert = this.getRandomDishFromCourse("desserts");
      const totalPrice = appetizer.price + main.price + dessert.price;
      
      return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is $${totalPrice}.`;
    }
  };
  
  // create menu objects:
  menu.addDishToCourse('appetizers', 'Impepata di Cozze', 12);
  menu.addDishToCourse('appetizers', 'Bruschetta', 8);
  menu.addDishToCourse('appetizers', 'Arancini', 8);
  menu.addDishToCourse('appetizers', 'Misto Italiano', 14);
  menu.addDishToCourse('appetizers', 'Crostino', 10);
  menu.addDishToCourse('mains', 'Osso Bucco', 26);
  menu.addDishToCourse('mains', 'Tagliata di Manzo', 28);
  menu.addDishToCourse('mains', 'Eggplant Parmigiana', 15);
  menu.addDishToCourse('mains', 'Pomodoro', 12);
  menu.addDishToCourse('mains', 'Lasagna', 13);
  menu.addDishToCourse('mains', 'Carbonara', 14);
  menu.addDishToCourse('desserts', 'Tiramisu', 6);
  menu.addDishToCourse('desserts', 'Cannoli', 6);
  menu.addDishToCourse('desserts', 'Gelato', 6);
  
  // generate random meal assigned to variable
  let meal = menu.generateRandomMeal();
  
  // print random meal + total price
  console.log(meal);