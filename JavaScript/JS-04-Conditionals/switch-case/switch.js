//! ---------------------------------------------
//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------

// Switch -case bloğu if-else gibi kullanılacak if-else alternatif bir yöntemdir.
// Burda bir şart durumunun karşılacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey;  bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak sadece sonuncu değeri yazar
//! bu bloktan çıkması için break kelimesi ile switch alanından çıkmasını sağlarız

// switch(değişken){
//     case durum1:
//         değişken durum1 e eşit olduğunda yapılacaklar break
//     case durum2:
//         değişken durum2 e eşit olduğunda yapılacaklar break
//     . 
//     . 
//     . 
//     case durumN 
//         değişken durumN e eşit olduğunda yapılacaklar break
//     default
//         yukarıdaki durumlar hiçbiri gerçekleşmediğinde yapılacaklar
// }

const product=`eraser`
let message;

switch(product){
    case`pen`:
        message=`Pen is $2.25`; break
    case`eraser`:
        message=`Eraser is $3.15`; break
    case`notebook`:
        message=`Notebook is $5.45`; break
    default:
        message=`Select a product`
}
console.log(message);

/* -------------------------------------------------------------------------- */
let day;

switch (new Date().getDay()){
    case 0:
        day=`Sunday`;
        break;
    case 1:
        day=`Monday`;
        break;
    case 2:
        day=`Tuesday`;
        break;
    case 3:
        day=`Wednesday`;
        break;
    case 4:
        day=`Thursday`;
        break;
    case 5:
        day=`Friday`;
        break;
    case 6:
        day=`Saturday`;
        break;
    default:
        day=`Not valid`
}
console.log(day);

//Kitap türü girildiğinde bir kitap adı öneren kod yapısını switch-case ile oluşturun

// novel 
// Anna Karennina 
// fiction 
// Notre Dame 
// poetry 
// Pillow Thought

let bookgenre=`novel`;
let book;

switch(bookgenre){
    case `novel`:
        book=`Anna Karennina`;
        break;
    case `fiction`:
        book=`Notre Dame`;
        break;
    case `poetry`:
        book=`Pillow Thought`
        break;
    default:
        book=`Not valid`
}
console.log(book);

/* -------------------------------------------------------------------------- */
//Mevsim Bulma

let month=5;
let season;

switch(month){
    case 12:
    case 1:
    case 2:
        season=`Winter`;
        break;
    case 3:
    case 4:
    case 5:
        season=`Spring`;
        break;
    case 6:
    case 5:
    case 8:
        season=`Summer`;
        break;
    case 9:
    case 10:
    case 11:
        season=`Fall`;
        break;
    default:
        season=`Not valid`

}
console.log(`${month}. month is ${season} season`);

const s=`fall`
switch(s){
    case `summer`&& `spring`:
        console.log(`Flowers bloom`);break;
    case `winter` && `fall`:
        console.log(`Leaves fall`);break;
    default:
        console.log(`Not valid`);
}

