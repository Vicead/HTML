/* -------------------------------------------------------------------------- */
//!                             EXPRESSION FUNCTION                           */
/* -------------------------------------------------------------------------- */

//! İsimsiz fonksiyondur
//! Bir değişkene atanan bir fonksyiondur. Bu nedenle bir dönüş değeri olmalıdır.
//! Parametre göndermek için değişken adını yazıp parantez içinde parametreler veriyoruz.

const EvenOdd=function(num){
    return num%2===0?`Even`:`Odd`;
}
console.log(EvenOdd(32));

//arguments kelismesi exp functionlarda da geçerlidir
const v1=function(){
    for(let i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }

}
v1(45,68,21)

//3 sayıdan en büyüğünü bulduran fonksiyonu expression function yöntemi ile oluşturalım

const maxOfThree = function(num1, num2, num3){
    if(num1 > num2) {
      if(num1 > num3) {
        return num1;
      } else {
        return num3;
      }
    } else {
      if(num2 > num3) {
        return num2;
      } else {
        return num3;
      }
    }
  }
  
  console.log(maxOfThree(1, 5, 3)); 
  
  /* -------------------------------------------------------------------------- */

  const findBig=function(n1,n2,n3){
    let big=n1
    if(n2>big)big=n2
    if(n3>big)big=n3
    return big
  }
  console.log(findBig(5,6,3));
  
  /* -------------------------------------------------------------------------- */

  const enbBul=function(){
    let enb=arguments[0]
    for(let i=1;i<arguments.length;i++){
        if(arguments[i]>enb){
            enb=arguments[i]
        }
    }
    return enb
  }
console.log(enbBul(400,600,100));

console.clear();

/* -------------------------------------------------------------------------- */
//!Bir fonksiyon içinde başka fonksiyonlar çağırılabilir

const add=function(n1,n2){
  return n1+n2 
}
const sub=function(n1,n2){
  return n1-n2
}
const mul=function(n1,n2){
  return n1*n2
}
const div=function(n1,n2){
  return n1/n2 
}
const compute=function(n1,n2,op){
  let result=0;
  switch(op){
    case "+":
      result=add(n1,n2)
      break;
    case "-":
      result=sub(n1,n2)
      break;
    case "*":
      result=mul(n1,n2)
      break;
    case "/":
      result=div(n1,n2)
      break;
    default:
      break;
  }
  console.log(result);
}
compute(34,12,"/")

 /* -------------------------------------------------------------------------- */

 // Dollars and cents
// çalıştığınız şirket ürün tutarları girecek .Sizde girilen tutarları biçimlendirmesini dolar ve sent olarak döndürecek bir program yazacaksınız

// 39.99 becomes $39.99
// 3 needs to become $3.00
// 3.1 needs to become $3.10

function formatMoney(amount){
  return "$"+amount.toFixed(2)
}
console.log(formatMoney(43));

/* -------------------------------------------------------------------------- */


//Bir ülkedeki ortalama yaşam ömrü 75 yıl olduğuna göre, 
// doğum yılı girilen kişinin yaşını hesaplattıran
// yaşına göre ortalama ... ömrünüz kaldı yazıp önerilerde bulunan program

// 0-10 : " Sen bu değerleri önemseme hayatın tadını çıkar"
// 10-20 : " Gezmek görmek istediğin yerler varsa yola çıkma zamanı.. "


const cal=function(dob){
  const year=new Date().getFullYear()
  const age=year-dob
  const avgAge=75
  const leftAgeSpend=avgAge-age
  if(leftAgeSpend>=0&&leftAgeSpend<=10){
    return "You dont need to care about this value, enjoy your life"
  }
  else if(leftAgeSpend>10&&leftAgeSpend<=20){
    return "If u wanna see and travel some places its time to hit the road"
  }
  else if(leftAgeSpend>20&&leftAgeSpend<=30){
    return "Enjoy your retirement"
  }
  else{
    return "You need to work hard for retirement"
  }
}
const dob=prompt("Enter date of birth and see our advice")
console.log(cal(dob));
