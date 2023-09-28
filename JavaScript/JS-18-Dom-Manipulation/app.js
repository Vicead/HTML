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
})
//! mouse ile resmin üzeriden ayrılınca

resim.addEventListener("mouseout", ()=>{
    resim.src="./img/aslan1.jpeg"
    document.querySelector(".ses2").pause()
})
//! klavyeden inputa ver girişi yapılırken elimizi tuştan çektiğimizde varolan değişiklik

const textInput=document.querySelector(".textbox")
const checkInput=document.querySelector(".checkbox")

// textInput.onkeyup=()=>{
//     if(checkInput.checked){
//     textInput.value=textInput.value.toUpperCase()
//     }else{
//         textInput.value=textInput.value.toLowerCase()
//     }
// }


checkInput.addEventListener('change', function() {
    if(checkInput.checked){
        textInput.value= textInput.value.toUpperCase()
    } else {
        textInput.value= textInput.value.toLowerCase()
    }
});
