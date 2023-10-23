//* ======================================================
//*                    (OOP)
//* Object Oriented Programming
//* ======================================================

//*object literals

//! arrow funciton this keywordunu doğru çalıştırmaz

const book1={
    title:"karamazov kardeşler",
    yazar:"dostyevski",
    year:1980,

    ozetFunction:function(){
        console.log(`${this.title} kitabını ${this.year} yılında ${this.yazar} yazmıştır.`);
    }
}
console.log(book1);
book1.ozetFunction()

const book2={
    title:"yaprak dokümü",
    yazar:"reşat nuri",
    year:1950,

    ozetFunction:function(){
        console.log(`${this.title} kitabını ${this.year} yılında ${this.yazar} yazmıştır.`);
    }
}
console.log(book2);
book2.ozetFunction()

//? object literals yöntemi ile fazla sayıda yeni  Object ler oluşturmak oldukça zahmetlidir, ayrıca programcılık yaklaşımı açısından da çok tekrar içerdiği için uygun değildir
  // DRY (Dont Repeat Yourself) Prensibi için uygun değildir
//? SOLUTION:  Object Constructor kullan (ES5 and ES6)

