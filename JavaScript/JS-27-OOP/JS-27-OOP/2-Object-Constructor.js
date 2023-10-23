//* ======================================================
//*          OOPS- Object Constructor (ES5)
//* ======================================================

//*Object Constructor
//* Javascript is a prototype-based language.
//* Tüm JavaScript nesneleri, bir prototipten (ilk örnek)özellikleri ve yöntemleri devralır (inherit)
//* Object prototipi, prototip miras zincirinin en üstündedir.(Hz. Adem)
//* For example, Date and Array objects,   Object prototype den devralır

//* Object Constructor
//! Book ismi büyük harfle,constructor olduğu biz tarafından anlaşılsın diye. anne karnında bebek var doğarsa değeri olur (üstte constructor anne karnındaki bebek, altta book1 oluşturmak=bebeğin doğması)
//!arrow function this keyword unu desteklemediği için burada function decleration yazımını tercih ettik

function Book(a,b,c){
    (this.author=b),
    (this.title=a),
    (this.year=c),

    (this.ozetFunction=function(){
        return `${this.title} kitabını ${this.year} yılında ${this.author} yazmıştır.`
    })
}

const book1=new Book("karamazov","dostyevski",1980)
const book2=new Book("yaprak dokümü","reşat nuri",1950)
console.log(book1);
document.querySelector("h2").textContent=book1.ozetFunction()

//?new keyword ü Book Constructor ı parametrelerle çağırır.
//?Constructor, Book object in bir örneği kalıbını oluşturur.
//?Constructor daki tüm variablelar ve functionlar, oluşturulan her single örneğe (instance) eklenir.

//*Book un prototype alanına yeni bir parametre ekledik ama bellekte yer kaplamaz, ihtiyaç olunca child lar kullanılır

Book.prototype.tür="roman"
Book.prototype.yılHesapla=function(){
    return 2023-this.year
}
console.log(book2);
console.log(book2.tür);
document.querySelector("h2").textContent=book2.tür  

//?direk object lerime açıktan bir value eklemek istersem, bellekte yer kaplar, alttaki gibi yazılır

book1.fiyat=100

console.log(book1);

//! OKUL YÖNETİMİ HATIRLA
//?INNHERITANCE(miras)

function Dergi(title,author,year,d){
    Book.call(this,title,author,year)

    this.month=d
}

//*Book object inden (kalıbından) türetilen Dergi kalıbına, Book un prototype alanındaki bilgiler (ES5 te) direk gelmez,gelmesini istiyorsak alttaki kodu (daha child oluşturmadan önce)yazmalıyız

Dergi.prototype=Object.create(Book.prototype)

const dergi1=new Dergi("kafa","ibrahim büyükak",1980,"eylül")
const dergi2=new Dergi("nokta","hasan can",1960,"kasım")
console.log(dergi1);
console.log(dergi2.ozetFunction());
console.log(dergi1.yılHesapla());
