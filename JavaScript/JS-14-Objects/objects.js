/* -------------------------------------------------------------------------- */
//!                                  OBJECTS                                  */
/* -------------------------------------------------------------------------- */

// Diziler : index numaraları ile erişim sağlanıyor. 0'dan başlayarak artan bir sıralama.

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için Object(nesne) kullanılır
const dizi=[1,2,3,4,5,6]

//! Objectlerde key-value ( Property-value) değerlerini içerir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erişim için property (key) adı kullanılır.

//Object Oluşturma Yöntemleri

//? 1.Object() classından türetme

const car= new Object() //boş bir object ürettik

car.brand="BMW"
car.model=1990
car.speed=6
console.log(car);

const car1=new Object()
car1.brand="Volvo"
car1.model=2020
car1.speed=8
console.log(car1);

/* -------------------------------------------------------------------------- */

//? 2. Constructor metodu ile object oluşturma

function personelList(id,ad,maas){
    this.id=id;
    this.ad=ad;
    this.maas=maas;
}
const personel1=new personelList(1001,"Ali",10000)
console.log(personel1);
const personel2=new personelList(2002,"Veli",20000)
console.log(personel2);

//Her nesne için ayrı bir kopya oluşturulan metodlar, bellek kullanımını artırabilir

/* -------------------------------------------------------------------------- */

//? 3. Object Literal

let personelYapısı={} //Boş bir object tanımlamak
console.log(personelYapısı);

// Objectler içinde farklı veri türlerini barındırabiliriz. String, number, boolean, dizi, funtion, object
let personel={
    name:"Henry",
    lastName:"Edward",
    dateOfBirth:1995,
    isMarried:false,
    workExperiences:["tester","developer","team lead"],
    address:{
        city:"London",
        street:"Baker Street",
        no:"221b",
        postalCode:"NW1 6XE",
    },
    calculateAge:function(){
        return new Date().getFullYear()-this.dateOfBirth
    },
// Objectler içinde arrow function kullanarak this metoduyla object içindeki değerlere ulaşılmaz
    selam:()=>{
        return "Merhaba"
    },
    arrowFunction:()=>{
        return `${this.workExperiences}`
    },
    classicFunction:function(){
        return `${this.workExperiences}`
    },
// Arrow function üretilirken this keyword ünden kurtulmak için yapılmıştır
// Arrow functionda this window objesine karşılık gelir
// Window objesi içinde workExperiencess isimli bir özellik bulamadığımdam undefined
}

console.log(personel.name);
console.log(personel.dateOfBirth);
console.log(personel.calculateAge());
console.log(personel.selam());
console.log(personel.arrowFunction());
console.log(personel.classicFunction());

const obj={
    name:"Mehmet",
    age:40,

    fullname:function(){
        // Klasik function tanımında this objedeki elemanlardır
        return this.age
    },
    formattedName:()=>{
        // Arrow functionda this window objesine karşılık gelir
        return this
    }
}
console.log(obj.fullname());
console.log(obj.formattedName());

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                 Object içindeki özelliğe erişim yöntemleri                 */
/* -------------------------------------------------------------------------- */

//? 1. Dot notation . Nokta gösterimi

console.log(personel.dateOfBirth);
console.log(personel);

//? 2. Köşeli parantezler içinde özellik belirterek erişim
// Değişken kullanımına olanak sağlar

console.log(personel["dateOfBirth"]);


/* -------------------------------------------------------------------------- */

// NOT: object içinde array varsa array metodlarıda kullanılabilir

console.log(personel.workExperiences[0]);
personel.workExperiences.forEach((a)=>console.log(a));

/* -------------------------------------------------------------------------- */

//? 3.Destructuring yöntemi ile erişim

// Tanımlama yaparken istenilen bilgiler object içinden parçalanıp alınabilir

const {name,lastName,isMarried}=personel
console.log(name);
console.log(lastName);
console.log(isMarried);
// console.log(workExperiences); Uncaught

/* -------------------------------------------------------------------------- */

//! Objelere kolaylıkla yeni değer eklenebilir

personel.phoneNumber="454-659-6969"
console.log(personel);

//! Bir objeyi başka bir obje içine aktarabiliriz

const elemanListesi=personel
console.log(personel);
console.log(elemanListesi);

personel.title="Full Stack Developer"
console.log("Kopyalama Yapıldıktan sonra ************");
console.log("Personel Listesi:",personel);
console.log("Eleman Listesi:",elemanListesi);""

//Shallow copying 
//Yukaridaki şekilde yapıldığında değişimlerden etkilenir

//? -------------------------------------------------------------------------- */
// Kopyasının etkilenmesini istemiyorsak - Deep Copy yöntemi kullanılır.

const deepCopyPersonel=JSON.parse(JSON.stringify(personel))
console.log(deepCopyPersonel);
personel.salary=300000
console.log("Personel:",personel);
console.log("Deep Copy:",deepCopyPersonel);

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               OBJECT METHODS                               */
/* -------------------------------------------------------------------------- */

//? 1.İç içe (nested) Object kullanımı

let workerList={
    person1:{
        name:"Harward",
        lastName:"Ferty",
        dateOfBirth:1990,
        salary:10000,
        job:"Developer",
    },
    person2:{
        name:"Ferdinand",
        lastName:"Ferty",
        dateOfBirth:1990,
        salary:40000,
        job:"Developer",
    },
    person3:{
        name:"Lucy",
        lastName:"Ferty",
        dateOfBirth:1990,
        salary:20000,
        job:"Developer",
    },
}
//Bu şekilde bir yapının içine girmek
console.log(workerList.person3.name);
console.log(workerList["person3"].name);
let x=1
console.log(workerList[`person${x}`].name);
// console.log(workerList[x].name);

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                             // FOR - OF Yapısı                             */
/* -------------------------------------------------------------------------- */

//for-of sıralı olan dizilerde kullanılır ama objectler 
// for(const x of workerList){
//     console.log("for of ile objenin değerleri",x);
// }
// objects.js:218  Uncaught TypeError: workerList is not iterable

/* -------------------------------------------------------------------------- */
//! Object kendi içinde var olan özelliklerdir
// Object.keys
// Object.values
// Object.entries

console.log(Object.keys(workerList));
console.log(Object.values(workerList));
console.log(Object.entries(workerList));

let newValue=Object.entries(workerList)
console.log(newValue[0]);

/* -------------------------------------------------------------------------- */
for(const y of Object.keys(workerList)){
    console.log(y);
}
for(const k of Object.values(workerList)){
    console.log(k);
}
for([n,m]of Object.entries(workerList)){
    console.log(`${n} değeri için ${m.name}`);
}

/* -------------------------------------------------------------------------- */

const devFilter=Object.values(workerList).filter((p)=>p.job==="Developer")
console.log(devFilter);

const devName=Object.values(workerList).filter((p)=>p.name[0]==="H")
console.log(devName);

const filterSalary=Object.values(workerList).filter((p)=>p.salary>30000)
console.log(filterSalary);

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                  //FOR IN                                  */
/* -------------------------------------------------------------------------- */

for(x in workerList){
    console.log("for in:",x);
    console.log(workerList[x].name);
}

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                      JSON - Javascript Object Notation                     */
/* -------------------------------------------------------------------------- */

//JSON ile iç içe obje karıştırmayalım
console.clear();
const team = [
    {
      id:1,
      name: "Harold",
      lastname: "Strevy",
      DateOfBirth: 2000,
      job: "developer",
      salary: 8000,
      drivingLicense: true,
    },
  
    {
      id:2,
      name: "Farold",
      lastname: "Strevy",
      DateOfBirth: 2002,
      job: "developer",
      salary: 40000,
      drivingLicense: true,
    },
    {
      id:3,
      name: "Ketty",
      lastname: "Strevy",
      DateOfBirth: 2000,
      job: "devOps",
      salary: 30000,
      drivingLicense: true,
    },
  ];

// JSON ile farklı veri türleri barındırılabilir
// Dillerden bağımsızdır.
//nesnelerin (objelerin) temsil edilmesi için anahtar-değer çiftlerini kullanır. Bu, verilerin daha iyi organize edilmesini ve ilişkilendirilmesini sağlar.
//JSON, veri  işleme açısından hızlıdır. Bu nedenle web uygulamalarında ve servislerde yaygın olarak kullanılır.

//JSON yeni bir eleman ekleme:

team.push({
    id:4,
    name: "Ferdinand",
    lastname: "Strevy",
    DateOfBirth: 2002,
    job: "tester",
    salary: 30000,
    drivingLicense: true,
  })
  console.log(team);

  team.forEach((t)=>console.log(t.name))

  /* -------------------------------------------------------------------------- */

  team.forEach((t)=>console.log(`${t.name} ${t.lastname}`))

  // Team objesindeki her elemanon maasına %10 zam yapılmış halini göster

  const zam=team.map((m)=>m.salary*1.1)
  console.log(zam);
  