import React from 'react'

const Events = () => {
  //!javascript alanı

  let baslik = "MERHABA";
  let count = 0;

  const increase = () => {
    count += 1;
    console.log(count);
    document.querySelector("span").textContent = count;
  };

  //! react alanında parametreli fonksiyon çağıracaksak, fonksiyonun adının önüne ()=> işaretini koymalıyız, yoksa fonksiyonu event ı beklemeden çalıştırıyor
  const buttonTitle = (date) => {
    console.log(date);
    count=0
    document.querySelector("span").textContent = count;
    document.querySelector(".btn-danger").textContent=date
  };

  return (
    //!JSX alanı
    <div className="text-center container">
      <h1>INFO: {baslik}</h1>
      <h2>
        SAYAC: <span className="text-danger">{count} </span>
      </h2>

      <button className="btn btn-primary" onClick={increase}>
        ARTTIR
      </button>
      <button
        className="btn btn-danger"
        onClick={() => buttonTitle(new Date().getFullYear())}
      >
        TEMİZLE
      </button>
      <button className="btn btn-info" onClick={()=>alert("buton tıklandı")}>TIKLANDI</button>
    </div>
  );
}


//?-------------------------------------------------------------------
//! Konsolda, güncellenen değişen count u görebiliriz ancak web sayfasında (biz görüntüle demeden) görüntülenmiyor..
//* Çünkü, REACT herhangi bir element i default olarak static sayar
//*DOM manipülasyonunu en aza indirmek için bunu yapar
//* Hangi elementin interactive olduğu konusunda React'e bilgi vermeliyiz.
//! REACT'i interactive elements hakkında bilgilendirmek için iki yöntem kullanıyoruz
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?--------------------------------------------------------------------
export default Events