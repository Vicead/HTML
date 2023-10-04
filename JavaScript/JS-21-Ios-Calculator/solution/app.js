//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================
const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operator");
const equalButtons = document.querySelector(".equal");
const acButtons = document.querySelector(".ac");
const pmButtons = document.querySelector(".pm");
const percentButtons = document.querySelector(".percent");
const ustEkran = document.querySelector(".previous-display");
const altEkran = document.querySelector(".current-display");



//?operator değişkenleri
let ustEkranYazi = "";
let altEkranYazi = "";
let islem = "";

//?eşittir yada percent e basıldıktan sonra yeni işleme yeni sayılar girmek için, tıklandı tıklanmadı boolean değişkeni hazırladık, eşittir (ve de percent) butonunda bu true yani tıklandı olacak
let esittirPressed

numberButtons.forEach((number) => {
  number.onclick = () => {
    ekranaHazirlik(number.textContent);
    updateEkran();
  };
});


const ekranaHazirlik = (num) => {
  if (altEkranYazi === "0" && num !== "0" && num !== ".") {
    altEkranYazi = num;
    return
  } 

  //?kullanıcı herhangi bir yerde . girmişken, tekrar nokta girmeye kalkarsa giremesin
  if(num==="."&&altEkranYazi.includes("."))return

  //?kullanıcı 10 haneden sonra girmesin

  if(altEkranYazi.length>9)return

  //?kullanıcı ilk başta 0 girer ardından tekrar 0 girerse, girilmesin, tek 0 döndürsün

  if(altEkranYazi==="0"&&num==="0")return

  //?eşittir yada percent a basıldıktan sonra girilen number tek başına ekranda görünsün,çünkü yeni işlem başlıyor(ekranda 72 yazan işlem sonucu varken 5 e basınca 725 olmasın)

  if(esittirPressed){
    altEkranYazi=num;
    return
  }
  
  //?bütün şartları başarı ile geçtiyse basılan numaraları arka arkaya ekle
  
  altEkranYazi += num;
}

//?BURADA YAPILANLARI EKRANA BASTIRMA
const updateEkran = () => {
  altEkran.textContent = altEkranYazi;
  //? işlem sonucu 8 haneyi geçmesin

  //?işlem girilince

 ustEkran.textContent = `${ustEkranYazi}  ${islem} ${altEkranYazi}`;

};


//?herhangi bir işleme tıklandığında

operationButtons.forEach((op)=>{

  op.onclick=()=>{
    //?eşittire basılmadan arka arkaya işleme basılırsa (alt ve üst ekran doluyken işleme basılmaya devam edilirse)

    if(altEkranYazi&&ustEkranYazi)hesapla()
    if(!altEkranYazi)return;
    
    islem=op.textContent;

    ustEkranYazi=altEkranYazi;

    altEkranYazi="";
    updateEkran();

  }
})







//?eşittir butonuna tıklandığında

equalButtons.onclick=()=>{

  hesapla()
  updateEkran()
  esittirPressed=true
}

const hesapla=()=>{
let sonuc;
switch (islem) {
  case "+":
   sonuc= +ustEkranYazi + Number(altEkranYazi);
    break;
  case "-":
   sonuc= ustEkranYazi - altEkranYazi;
    break;

  case "x":
  sonuc=  ustEkranYazi * altEkranYazi;
    break;
  case "÷":
  sonuc=  ustEkranYazi / altEkranYazi;
    break;

  default:
    return;
}

 altEkranYazi=sonuc

ustEkranYazi=""
islem=""
}


//?AC butonuna basıldığında

acButtons.onclick=()=>{
  window.location.reload()
}

pmButtons.onclick = () => {
  togglePlusMinus();
  updateEkran();
};

percentButtons.onclick = () => {
  calculatePercent();
  updateEkran();
};

const togglePlusMinus = () => {
  altEkranYazi = (-1 * parseFloat(altEkranYazi)).toString();
};

const calculatePercent = () => {
  altEkranYazi = (parseFloat(altEkranYazi) / 100).toString();
};