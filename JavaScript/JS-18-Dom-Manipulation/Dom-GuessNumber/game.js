//* rasgele sayı tutma işleminde 1 ile 20 arasında bir sayıya ihtiyacımız varsa Math.random() ı 20 ile çarpıp yukarı yuvarlamalıyız
let PCsayi=Math.ceil(Math.random()*20)

let mesaj=document.querySelector(".msg")

let score=document.querySelector(".score")

//? her check butonuna basılınca yapılacaklar
document.querySelector(".check").onclick=()=>{
    const tahmin=document.querySelector(".guess").value
    if(!tahmin){
        mesaj.textContent="Lütfen bir tahmin giriniz"
    }
    //* tahmin doğruysa
    else if(PCsayi==tahmin){
        mesaj.textContent="Tebrikler bildiniz🎉"
        document.querySelector("body").style.backgroundColor="green"
        document.querySelector(".number").textContent=PCsayi;
    }
    //* tahmin yanlışsa bizi arttır yada azalt diye yönlendi
else{
    tahmin < PCsayi ? mesaj.textContent="Arttır" : mesaj.textContent="Azalt"
    if(score.textContent>1){
        score.textContent--   
        }else{
            score.textContent=0
            mesaj.textContent="oyunu kaybettiniz"
            document.querySelector("body").style.backgroundColor="red"
            document.querySelector(".number").textContent=PCsayi
        }

    }
}

document.querySelector(".again").onclick=()=>{
    PCsayi=Math.ceil(Math.random()*20)
    document.querySelector("body").style.backgroundColor="#2d3436"
    mesaj.textContent="oyun yeni oyuncu için başlıyor"
    document.querySelector(".number").textContent="?"
    score.textContent=10
    document.querySelector(".guess").value=""
}
