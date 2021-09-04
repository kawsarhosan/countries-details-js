const loadCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    console.log(countries);
    const countriesDiv = document.getElementById('load-countries');
    countries.forEach(country =>{
        // console.log(country);

        // countriesDiv.innerHTML = `
        //     <div>
        //         <img style="width: 200px;" src="${country.flag}">
        //         <h4> ${country.name} </h4>
        //         <p> ${country.capital} </p>
        //     </div>
        // `;

        //set div,img,h3,p tag in dynamically.
        const div = document.createElement('div');
        div.classList.add('maindiv');
        countriesDiv.appendChild(div);

        const div1 = document.createElement('div');
        div1.classList.add('img-div');
        div1.innerHTML =`
            <img  src="${country.flag}">
        `;
        div.appendChild(div1);

        // const flagUrl = country.flag;
        // const img = document.createElement('img');
        // img.setAttribute('src', flagUrl);
        // div1.appendChild(img);

        const div2 = document.createElement('div');
        div2.classList.add('title-div');
        div2.innerHTML =`
            <h4><span>Name:</span> ${country.name}</h4>
            <p><span>Capital:</span> ${country.capital}</p>
            <p><span>Short Name:</span> ${country.cioc}</p>
            <p><span>Popultaion:</span> ${country.population}</p>
        `;
        div.appendChild(div2);

        // const h4 = document.createElement('h4');
        // h4.innerText = country.name;
        // div2.appendChild(h4);

        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div2.appendChild (p);

        // const p2 = document.createElement('p');
        // p2.innerText = country.cioc;
        // div2.appendChild (p2);

        // const p3 = document.createElement('p');
        // p3.innerHTML = `Population: ${country.population}`;
        // div2.appendChild (p3);




    })


}
