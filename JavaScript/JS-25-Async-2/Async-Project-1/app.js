let showList = [];

//https://www.themealdb.com/
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((response) => response.json())
  .then((veri) => {
    showList = veri;
    ekranaBastir(showList.meals);
  });

function ekranaBastir(data) {
  const food = document.querySelector(".food");
    food.innerHTML=""
  data.forEach((w) => {
    food.innerHTML += `
<div class="col-md-3 m-1">
<p> ${w.strMeal}</p>
<img  src=${w.strMealThumb} />
</div>`;

  });
}
//!arama inputunda arama yapma (oninput=kullanıcı input elemanına her veri girişinde çalışmaktadır)

document.querySelector("#ara").oninput = (e) => {
  const veri = showList.meals.filter((a) => a.strMeal.toLowerCase().includes(e.target.value.toLowerCase()));
  ekranaBastir(veri);
};

//!bayraklara tıklanınca, tıklanan bayrağın yemekleri gelsin api adresi, endpoint olarak ülkenin vatandaş ismini istiyor o da img lerin id sinde var

document.querySelectorAll(".ülke").forEach((country)=>country.onclick=()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country.id}`).then((res)=>res.json()).then((data)=>ekranaBastir(data.meals))
})

