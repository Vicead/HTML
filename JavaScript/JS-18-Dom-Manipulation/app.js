document.querySelector("h1").style.color="red"
document.querySelector("h1").style.textAlign="center"

let resim=document.querySelector(".resim")
let ses1=document.querySelector(".ses1")

//! ara butonuna tıklandığında

document.querySelector(".ara").onclick=()=>{
    resim.src="./img/img.gif"
    //play() komutu html deki audio etiketini js de çalıştırır
    ses1.play()
    ses1.volume=0.1
}
//! baglat butonu tıklandığında

document.querySelector(".baglat").onclick=()=>{
    ses1.pause()
    resim.src="./img/telbağla.gif"
}
//! konus butonu tıklandığında

document.querySelector(".konus").onclick=()=>{
    resim.src="./img/telefon.gif"
    ses1.pause()
}
//! mouse ile resmin üzerine gelince

resim.addEventListener("mouseover", ()=>{
    resim.src="./img/aslan2.jpeg"
    document.querySelector(".ses2").play()
    ses1.pause()
})
//! mouse ile resmin üzeriden ayrılınca

resim.addEventListener("mouseout", ()=>{
    resim.src="./img/aslan1.jpeg"
    document.querySelector(".ses2").pause()
})
//! klavyeden inputa ver girişi yapılırken elimizi tuştan çektiğimizde varolan değişiklik

const textInput=document.querySelector(".textbox")
const checkInput=document.querySelector(".checkbox")

textInput.onkeyup=()=>{
    if(checkInput.checked){
    textInput.value=textInput.value.toUpperCase()
    }else{
        textInput.value=textInput.value.toLowerCase()
    }
}


// checkInput.addEventListener('change', function() {
//     if(checkInput.checked){
//         textInput.value= textInput.value.toUpperCase()
//     } else {
//         textInput.value= textInput.value.toLowerCase()
//     }
// });

//! listemin başına "programlaama dilleri" h1 etiketi eklemek ***** uzun yol*****

//? HTML de h1 elementi oluştur 
const baslik=document.createElement("h1")

//? oluşan h1 elementine class ismi ata
baslik.className="baslik2"

//? Programlama Dilleri text i oluştur
const yazi=document.createTextNode("Programlama Dilleri")

//? h1 elementi için oluşturduğum text i h1 e child yapalım
baslik.appendChild(yazi)

//? input-div class isimli div in son child ı yapalım
// document.querySelector(".input-div").appendChild(baslik)

//? input-div clas isimli div den hemen sonraya ekle
// document.querySelector(".input-div").after(baslik)

//!!  "append" metodu ile seçtiğimiz Html etiketi bitmeden önceki son kısma ekleme yapabiliriz (<div>merhaba -buraya-  </div>).  "prepend" metodu ile seçtiğimiz Html etiketi başladıktan sonraki ilk kısma ekleme yapabiliriz  (<div> -buraya-  merhaba   </div>).  "after" metodu ile ile seçtiğimiz Html etiketi bittikten sonraki ilk kısma ekleme yapabiliriz (<div> merhaba </div>  -buraya-). before ile de etiketin önüne ekleyebiliriz

// document.querySelector(".input-div").innerHTML=document.querySelector(".input-div").innerHTML+`<h1 class="title text-danger">Programlama Dilleri</h1`

// document.querySelector(".input-div").innerHTML=`<h1 class="title text-danger">Programlama Dilleri</h1`+document.querySelector(".input-div").innerHTML


document.querySelector(".input-div").innerHTML+=`<h1 class="title text-danger mt-4">Programlama Dilleri</h1>`

//! languages inputuna girilen değerleri, ul ye eklemek

//! uzun yol

const dilInput=document.querySelector(".languages")

// //* oluşan yeni li mizi ul nin son child ı yapalım
const liste=document.querySelector(".liste")

document.querySelector(".ekle").onclick=()=>{
//     //? inputu js ye çağıralım


// //* yeni girilen satırı saklamak için li create edelim
// const yenili=document.createElement("li")

// //* yenili için text oluşturduk
// const text=document.createTextNode(dilInput.value)

// //* oluşturduğumuz text i yeni li ye bağladık
// yenili.appendChild(text)

// liste.appendChild(yenili)

// dilInput.value=""


//! kısa yol

liste.innerHTML+=`<li>${dilInput.value}</li>`
dilInput.value=""

}

//! sil butonuna basılınca ul listesinden li elemanını silmek için removeChild metodunu kullanacağız


document.querySelector(".sil").onclick=()=>{
    liste.removeChild(liste.lastElementChild)
}

//! klavyedeki keycode ları kullanarak kod yazma 

dilInput.onkeydown=(tus)=>{
    if(tus.keyCode==13){
        document.querySelector(".ekle").click()
    }
    if(tus.keyCode==46){
        document.querySelector(".sil").click()
    }
}     