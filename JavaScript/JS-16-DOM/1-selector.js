//* ======================================================
//*                   GETELEMENTBYID()
//* ======================================================

//*example1 (buton style)

const buton=document.getElementById("btn")
buton.style.width="200px"
buton.style.height="80px"
buton.style.fontSize="40px"
buton.style.backgroundColor="red"

//*example2 (paragrag style)

const par=document.getElementById("par")

par.style.width="200px"
par.style.height="80px"
par.style.fontSize="40px"
par.style.color="red"
par.style.marginBottom="200px"

//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//* tag ismiyle çağırıyoruz.aynı tag den çok olacağı için index le hangisini seçtiğimizi belirtiyoruz (HTMLCollection- Array özellikleri gösterir)
//*================================================

//*example3 (img style)

const img=document.getElementsByTagName("img")
img[0].style.width="300px"
img[1].style.border="5px solid red"


//* ======================================================
//*                   GETELEMENTSBYCLASSNAME()
//* class ismiyle çağırıyoruz
//*======================================================

const H1=document.getElementsByClassName("H1")
H1[0].style.color="purple"
H1[1].style.fontSize="50px"

//*array i değiştirmeyen metodları kullanabilirsiniz

for(let i=0;i<H1.length;i++){
    H1[i].style.color="red"
    H1[i].style.textAlign="center"
    H1[i].style.backgroundColor="gray"
}