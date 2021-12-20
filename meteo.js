
const url ="https://www.prevision-meteo.ch/services/json/";
const btnSend = document.querySelector("form input[value = 'envoyer']");

btnSend.addEventListener("click", event => requestApi(event));

function requestApi(event) {
    event.preventDefault();
    const city = document.querySelector("form input[name = 'city']");
    console.log(city.value);
    fetch(`${url}${city.value}`)
        .then(response => response.json())
        .then(data => {
            display.textContent = (city.value);

            let date = document.createElement("div");
                date.textContent = `${data.current_condition.date}`,`${data.current_condition.hour}`;
                display.appendChild(date);

            let condi = document.createElement("p");
                condi.textContent = "Conditions actuelles";
                display.appendChild(condi);

            let img = document.createElement("img");
                img.src = data.current_condition.icon;
                display.appendChild(img);

            let tmp = document.createElement("div");
                tmp.textContent = `${data.current_condition.tmp}°C`;
                display.appendChild(tmp);

    let tab = [data.fcst_day_1,data.fcst_day_2,data.fcst_day_3,data.fcst_day_4] 
        for (i=0 ; i<=tab.length-1 ; i++){
            let date1 = document.createElement("div");
                date1.textContent = `${tab[i].date}`;
                display.appendChild(date1);

            let img1 = document.createElement("img");
                img1.src = tab[i].icon;
                display.appendChild(img1);

            let condi1 = document.createElement("div");
                condi1.textContent = tab[i].condition;
                display.appendChild(condi1);

            let tmp1 = document.createElement("div");
                tmp1.textContent = `${tab[i].tmin}°C ${tab[i].tmax}°C`;
                display.appendChild(tmp1);

//let tab2 = [tab[i].hourly_data[j]];
            //for (j=1 ; j<=23 ; j++){
                
                //let date2 = document.createElement("div");
                    //date2.textContent = `${tab[i].tab2[j]}`;
                   // display.appendChild(date2);
    
                //let img2 = document.createElement("img");
                    //img2.src = tab[J].hourly_data['[j]H00'].icon;
                    //display.appendChild(img2);
    
                //let condi2 = document.createElement("div");
                    //condi2.textContent = tab[j].condition;
                    //display.appendChild(condi2);
            //}
        }

    console.log();('success:', data);
        })
    .catch((error) => {
        console.error('Error:', error);
    });
}
