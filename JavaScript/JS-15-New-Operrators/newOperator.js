//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================

const car={
    title:"BMW",
    model:1990,
    engine:1.6,
}
//* 1. klasik yol

console.log(car.title);
console.log(car["model"]);

//* 2. destructuring yol

const {title, model}=car
console.log(title, model, car.engine);

const arabalar = {
    car1: {
      marka: "BMW",
      model: 1990,
      renk: "red",
    },
    car2: {
      marka: "MERCEDES",
      model: 1980,
      renk: "white",
    },
    car3: {
      marka: "AUDI",
      model: 2000,
      renk: "gray",
    },
  };


const {car1,car2,car3}=arabalar
const {marka:marka1,model:model1,renk:renk1}=car1
const {marka:marka2,model:model2,renk:renk2}=car2
const {marka:marka3,model:model3,renk:renk3}=car3
console.log(marka1,model1,renk1);

for(let i in arabalar){
    console.log(i);
    console.log(arabalar[i].marka);
}

//* ornek: Array-Object gezinme-DEST
const people = [
    {
      name: "Mustafa",
      surname: "Gertrud",
      job: "developer",
      age: 30,
    },
    {
      name: "Halo",
      surname: "Müller",
      job: "tester",
      age: 35,
    },
    {
      name: "Mehmet",
      surname: "Rosenberg",
      job: "team lead",
      age: 40,
    },
    {
      name: "Ozkul",
      surname: "Gutenberg",
      job: "developer",
      age: 26,
    },
  
    {
      name: "Baser",
      surname: "Shaffer",
      job: "tester",
      age: 24,
    },
  ];

//* 1.yol
people.forEach((kisi)=>{
    // console.log(kisi.name);
    // console.log(kisi.surname);
    // console.log(kisi.job);

    const{name,surname,job,age}=kisi
    console.log(name);
    console.log(surname);
    console.log(job);
})

//* 2.yol
people.forEach(({name,surname,job,age})=>{
    // const{name,surname,job,age}=kisi
    console.log(name);
    console.log(surname);
    console.log(job);
})

//? Fonksiyonlarda object parametrelerine destructuring yapılabilir

const kontrol=(veri)=>{
    console.log(veri);
    console.log(veri.adi);
    const{adi,renk,yildiz}=veri
    console.log(adi,renk);
}
kontrol({adi:"TS",renk:"bord-mavi",yildiz:1})

/* -------------------------------------------------------------------------- */
const kontrol2=({adi,renk,yildiz})=>{
    console.log(adi);
    console.log(renk);
}
kontrol2({adi:"TS",renk:"bordo-mavi",yildiz:1})


//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST =>>[...name]=diziden (ya da object den) alınmayan, geri kalanları yeni bir (diziyse) diziye,(object se)object e atıyor
//? ------------------------------------------------------

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//*REST OBJECT***************************************

const personel = {
    pName: "Johny",
    surname: "DEEP",
    job: "actor",
    age: 55,
  
};

const {pName,surname,...x}=personel
console.log(pName,surname,x.job);
console.log(x);

const ikizPersonel=personel

const{...personel2}=personel
console.log(personel2);

personel2.age=45

ikizPersonel.job="father"

console.log(personel);
console.log(personel2);
console.log(ikizPersonel);

//* ARRAY Kopya (rest)

const autos=["anadol","renault","tofas","ferrari"]

const ikizAutos=autos

const[...autos2]=autos

autos2.push("bmw")
ikizAutos.unshift("mercedes")

console.log(autos);
console.log(autos2);
console.log(ikizAutos);


//! 2- bir fonksiyonun argumentlerini diziye çevirmek için kullanılabilir

//* ornek1

//*yanlış çözüm
const sum=(x,y)=>x+y
    console.log(sum(1,2,3,4,5,6));

const sum2=(...x)=>console.log(x.reduce((toplam,a)=>toplam+a,0));
sum2(1,2,3,4,5,6)


const show=(name,soyad, ...title)=>{
    console.log(title);
    console.log(name)
    console.log(soyad)
    console.log(`${name} ${soyad} is a ${title.join(" and a ")}`);

}
show("esra","kara","developer","mom","teacher","computer scientist")

//? ------------------------------------------------------
//?  SPREAD==>> parçala (yapısını boz)-> istenilen diziye ekle,içinde gezin vs
//? ------------------------------------------------------

//* Ornek people (object li ) dizisinden yaşları değişmiş olarak yeni bir object li dizi oluşturalım

const insanlar = [
    {
      name: "Mustafa",
      surname: "Gertrud",
      job: "developer",
      age: 30,
    },
    {
      name: "Halo",
      surname: "Müller",
      job: "tester",
      age: 35,
    },
    {
      name: "Mehmet",
      surname: "Rosenberg",
      job: "team lead",
      age: 40,
    },
    {
      name: "Ozkul",
      surname: "Gutenberg",
      job: "developer",
      age: 26,
    },
  
    {
      name: "Baser",
      surname: "Shaffer",
      job: "tester",
      age: 24,
    },
];

const yeniInsanlar=insanlar.map((kisi)=>({
    name:kisi.name,
    surname:kisi.surname,
    job:kisi.job,
    age:kisi.age+5,
    country:"Turkey"

}))
console.log(yeniInsanlar);

//* SPREAD obje de değişmesini istemediğimiz elemanlar için ... kullanıyoruz

const  yeniInsan=insanlar.map((kisi)=>({
    ...kisi,
    age:kisi.age+5,
    
}))
console.log(yeniInsan);

//* örnek

const zeug=["Aircraft","Helicopter","Bicycle"]

const automobiles=["Trucks","Bus","Car","SUV"]

console.log(zeug,automobiles);
console.log(zeug.concat(automobiles));
console.log([...zeug,"Otobüs", ...automobiles,"Tır"]);

/* -------------------------------------------------------------------------- */
//* job:father location:USA(spread ile yapalım)

const Personel={
    pName:"Johnny",
    surname:"Deep",
    job:"Actor",
    age:55,
}
