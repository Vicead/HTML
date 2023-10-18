const getirCountry = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const veri = await res.json();
    ekranaBastir(veri);
  };
  
  getirCountry();
  
  const ekranaBastir = (ülke) => {
    ülke.forEach((country) => {
      document.querySelector(".countries").innerHTML += `
      <div class="card text-start w-50 shadow-lg bg-light my-4">
        <img src=${country.flags.png} class="card-img-top" alt="..." />
        <div class="card-body">
           <h5 class="card-title">${country.name.common} </h5>
           <p class="card-text"></p>
        </div>
        <ul class="list-group list-group-flush">
           <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i> ${country.capital}  </li>
            <li class="list-group-item"><i class="fas fa-lg fa-comments"></i> ${Object.values(country.languages)}</li>
            <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i> ${Object.values(country.currencies)[0].name} ${Object.values(country.currencies)[0].symbol}</li>
        </ul>
     </div>`;
    });
  };