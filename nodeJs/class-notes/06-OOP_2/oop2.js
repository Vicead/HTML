"use strict";

/* --------------------------------------------------------------------------

        OOP - Object Oriented Programming

-------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------
    CLASSES 
-------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- 

//? OPP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon

// Class Declaration:
// class PascalNamedClass { ... }

// Class Expression:
// const PascalNamedClass = class { ... }

const ExampleClass = class {
    property = 'value1'
    field = 'value2'
    attribute = 'value3'

    method1() {
        return this
    }

    method2() {
        this.property = 'new-value'
        return true
    }
}

//? INSTANCE: Class'tan üretilen nesnelere denir

const InstanceName = new ExampleClass()
console.log(InstanceName)
console.log(InstanceName.property)
console.log(InstanceName.attribute)
InstanceName.attribute = 'new-attr'
console.log(InstanceName.attribute)

console.log(InstanceName.property)
console.log(InstanceName.method2())
console.log(InstanceName.property)

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- 
//? constructor() method:

class Car {
  isRunning = false
  constructor(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
  }
  runEngine() {
    this.isRunning = true
    console.log("Engine runned")
    return this.isRunning
  }
}

const Ford = new Car("Ford", "Mustang", 1967)
console.log(Ford)
console.log(Ford.isRunning)
Ford.runEngine()
console.log(Ford.isRunning)

const Mercedes = new Car ('Mercedes', 'CLK200', 2000)
console.log(Mercedes)

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- 
//? INHERITANCE: MirasAlma Başka bir class'ın tüm özelliklerini devalma (patent-child ilişkisi kurma)
//* THIS = Child (current) Class
//* SUPER = Parent Class

class Vehicle {
  vehicleIsActive = false;

  constructor(vehicleType) {
    this.vehicleType = vehicleType;
  }
  sayHello() {
    console.log("Hello");
  }
}

class Car extends Vehicle {
  isRunning = false;
  constructor(brand, model, year, vehicleType = "Car") {
    //? super() parametresi en tepede yer almalıdır
    // super('Car')
    super(vehicleType);
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  runEngine() {
    this.isRunning = true;
    console.log("Engine runned");
    return this.isRunning;
  }
}

const Ford = new Car("Ford", "Mustang", 1967);
console.log(Ford);

const Mercedes = new Car("Mercedes", "G300", 2010, "Truck");
console.log(Mercedes);
console.log(Mercedes.vehicleIsActive);
Mercedes.sayHello();

class Accesory extends Car {
  constructor(accesoryName, brand, model, year, vehicleType = "Car") {
    super(brand, model, year, vehicleType);
    this.accesoryName = accesoryName;
  }
}

const fordAc = new Accesory('Bosh AC', 'Ford', 'Mustang', 1967, 'Car')
console.log(fordAc)
fordAc.runEngine()
fordAc.sayHello()

/* -------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------
//? Polymorphism: Miras aldığımız sınıfın özellik/methodlarını yeniden yazabilme.
//? Override: Üst metodla aynı isim ve yapıda yeni bir metod yazma. (ezme / iptal etme / önceliğini alma)
//? Overload: Üst metodla aynı isimde ama farklı yapıda (farklı adet/tip) yeni method oluşturma. (aynı anda ikisi de aktif) (JS desteklemez)

class Vehicle {
  vehicleIsActive = false;

  constructor(vehicleType) {
    this.vehicleType = vehicleType;
  }
  getDetails() {
    console.log('Vehicle getDetails runned.')
    return this;
  }
  getType(vehicleType) {
    console.log('Vehicle type' + this.vehicleType)
  }
}

class Car extends Vehicle {
  isRunning = false;
  constructor(brand, model, year, vehicleType = "Car") {
    //? super() parametresi en tepede yer almalıdır
    // super('Car')
    super(vehicleType);
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  runEngine() {
    this.isRunning = true;
    console.log("Engine runned");
    return this.isRunning;
  }
  //? Override: Parent method ile aynı isimde yeni bir method tanımlanması (Artık bu geçerli)
  getDetails() {
   //super.getDetails() // Parent class'daki getDetails() çağırdık
    console.log('Car/Vehicle getDetails runned')
    return this
  }
  //? Overload: Parent method ile aynı isimde ama farklı yapıda yeni bir method tanımlanması
  //? Her iki methodda geçerlidir Yapı farklılığına göre ilgili method çağırılır
  getType(vehicleType, brand) {
    console.log('Vehicle type' + this.vehicleType + this.brand)
  }
   
}

const Mercedes = new Car("Mercedes", "G300", 2010, "Truck");
console.log(Mercedes);
console.log(Mercedes.vehicleIsActive);
Mercedes.getDetails();
//* JS Overload desteklemiyor
Mercedes.getType('Truck')
Mercedes.getType('Truck', 'Mercedes')

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- 
//? PUBLIC/PRIVATE
//? JS PUBLIC: Genel erişime açık
//? JS PRIVATE: Sadece tanımlı olduğu calss içinde erişim var
//? JS PROTECTED: Sadece tanımlı olduğu class ve inherit edilen child-class erişebilir


class Vehicle {

    vehicleIsActive = false // PUBLIC PROPERTY (DEFAULT)
    #privateProperty = 'no-access' // PRIVATE PROPERTY (starts with #)
    _protectedProperty = 'limited-access' // PROTECTED PROPERTY (starts with _) (JS not supporting)


    constructor(vehicleType) {
        this.vehicleType = vehicleType
        console.log('privateProperty', this.#privateProperty) // undefined // NO-ACCESS TO PRIVATE
        console.log('protectedProperty', this._protectedProperty)
    }
}

class Car extends Vehicle {

    isRunning = false

    constructor(brand, model, year, vehicleType = 'Car') {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Engine runned')
        // console.log('privateProperty', this.#privateProperty) // Error. // NO-ACCESS TO PRIVATE
        console.log('privateProperty', this.privateProperty) // undefined // NO-ACCESS TO PRIVATE
        return this.isRunning
    }
}

const Mercedes = new Car('Mercedes', 'M300', 2010, 'Track')
console.log(Mercedes)
Mercedes.runEngine()
console.log(Mercedes.vehicleIsActive)
// console.log('privateProperty', Mercedes.#privateProperty) // Error. // NO-ACCESS TO PRIVATE
console.log('privateProperty', Mercedes.privateProperty) // undefined. // NO-ACCESS TO PRIVATE

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */

class Car {
  #price;
  isRunning = false;

  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  runEngine() {
    this.isRunning = true;
    console.log("Engine runned");
    return this.isRunning;
  }
  getPrice() {
    return "price is " + this.#price;
  }
  setPrice(newPrice) {
    this.#price = newPrice;
    console.log("price updated.");
  }
  //? Direct class ile erişmek istediklerimizi static ile işaretleriz
  //? Statik property veya methodlara direkt class ile erişilebilir ama instance ile erişilemez
  static staticProp = "static value";

  //?Static methodlarda this ifadesi sadece statikleri çağırır
  static staticMethod() {
    console.log("Static Method çalıştı");
    return this;
  }
}

const Ford = new Car("Ford", "Mustang", 1967);
console.log(Ford);
console.log(Ford.getPrice());
Ford.setPrice(8500);
console.log(Ford.getPrice());

// STATIC:
console.log(Car.isRunning); // undefined
console.log(Car.staticProp); // Class ile static property çağrılabilir
Car.staticMethod(); // Class ile static property çağırılabilir
console.log(Ford.staticProp); //undefined // Instance ile static property çağrılamaz

/* -------------------------------------------------------------------------- */
//? ABSTRACTION: Soyutlama/Modelleme (Class ile obje üretebilme. Aynı amaç için kullanılan değişken ve methodların bir class içinde yazıyor olması)
//? ENCAPCULLATION: Kapsülleme/Ayrıştırma (Kodların gizliliği, private değişkenlere erişilemiyor olması ve birbirinden bağımsız çalışmaları.)
/* -------------------------------------------------------------------------- */

//* HAPPY CODDING :)
