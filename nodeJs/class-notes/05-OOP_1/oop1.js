"use strict";
/*--------------------------------------------

    OOP Object Oriented Programming

----------------------------------------------*/

/*---------------------------------------------

    Objects

----------------------------------------------

const camelCaseNamedObject = {
  propertyName: "value", // field, attribute

  methodName: function () {
    return "this is a method.";
  },
};
console.log(camelCaseNamedObject.propertyName);
console.log(camelCaseNamedObject.methodName());

/* -------------------------------------------------------------------------- */

/*-----------------------------------
//? This Keyword:

const Car = {
  brand: "Ford",
  model: "Mustang",
  year: 1967,
  isAutogGear: true,
  colors: ["white", "red"],
  details: {
    color1: "white",
    color2: "red",
    engineSize: 4900,
  },
  startEngine: function () {
    return "Engine Ran.";
  },
  getDetails: function() {
    return this.brand + ' ' + this.model + ' ' + this.year
  },
  arrowMethod: () => {
    //Arrow function is Global scope
    return 'result' + this
  }
};

// console.log(Car.brand)
// console.log(Car.colors)
// console.log(Car.colors[0])
// console.log(Car.details)
// console.log(Car.details.engineSize)
// console.log(Car.startEngine())

//Alternative style:
console.log(Car["brand"]);
console.log(Car["colors"][0]);
console.log(Car["details"]["engineSize"]);
console.log(Car["startEngine"]());
console.log(Car.getDetails())
console.log(Car.arrowMethod())

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- 
//? Array Destructuring 

const testArray = ['value0', 'value1', 'value2', 'value3', 'value4']

const var1 = testArray[1]
const var2 = testArray[2]
const var3 = testArray.slice(3,5)
console.log(var1, var2, var3)


//? Sıralama önemli:
//const [firstItem, secondItem] = testArray
//console.log(firstItem, secondItem)

//? Rest Operator (Toplayıcı) (Eşittirin sol tarafında) (ensonda olmak zorunda)
const [firstItem, secondItem, ...others] = testArray
console.log(firstItem, secondItem, others)

//? Spread Operator (Dağıtıcı) (Eşittirin sağ tarafında)
const newArray = [...testArray, 'value5', 'value6']
console.log(newArray)
/* -------------------------------------------------------------------------- 

//? Object Destruturing
const Car = {
    brand: "Ford",
    model: "Mustang",
    year: 1967,
    isAutogGear: true,
    colors: ["white", "red"],
    details: {
      color1: "white",
      color2: "red",
      engineSize: 4900,
    },
    startEngine: function () {
      return "Engine Runned.";
    },
  };

//? Rest Operator (key isimleri önemli): 

// const {year, model, brand, ...otherItems} = Car
// console.log(brand, model, year,)

//isim değiştirme
const {year, model, brand:newName, ...otherItems} = Car
console.log(newName, model, year,)

//? Spread Operator:

const newObject = {
    ...Car,
    newKey: 'new-value',
}
console.log(newObject)

//? Object to JSON:

const json = JSON.stringify(Car)
console.log(typeof json,json)

//? JSON to Object:

const obj = JSON.parse(json) 
console.log(obj)

//? Object to Array

//Keys:
const keysInArr = Object.keys(Car)
console.log(keysInArr)

//Values:
const valuesInArr = Object.values(Car)
console.log(valuesInArr)

//(key, value)
// const objInArr = [...Car] // Not working
const objInArr= Object.entries(Car)
console.log(objInArr)


/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- *
    Object Constructor
/* -------------------------------------------------------------------------- */

const ConstructorFunction = function () {
    this.property ='value'
}

/* -------------------------------------------------------------------------- */

//? "NEW" Keyword:

const CarConstructor = function (brand, model, year=1967){
    this.brand = brand
    this.model = model
    this.year = year
    this.isRunning = false
    this.startEngine = function (){
        console.log('Engine Runned')
        this.isRunning = true
    }
}

const newCar = new CarConstructor('Ford', 'Mustang')
console.log(newCar)
console.log(newCar.model)

const newCar2 = new CarConstructor('Mercedes', 'C200', 2010)
console.log(newCar2)

const newCar3 = new CarConstructor('Renault', 'Megane', 2015)
console.log('isRunning', newCar3)
newCar3.startEngine()
console.log('isRunning', newCar3)

/* -------------------------------------------------------------------------- */

