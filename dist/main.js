var Client;(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t);const n=(e,t)=>{let n,r;const a=new Date,i=new Date(e),o=new Date(t),d=Math.ceil((i.getTime()-a.getTime())/864e5),s=1+Math.ceil((o.getTime()-i.getTime())/864e5);return d<0?(r=!1,n="Start Date already passed. Check your input!"):s<1?(r=!1,n="End Date before Start Date. Check your input!"):(r=!0,n=""),{valid:r,start:e,end:t,daysToTrip:d,lengthOfTrip:s,error:n}},r=()=>{const e=document.getElementById("tripLocation").value,t=document.getElementById("startDate").value,r=document.getElementById("endDate").value,a=n(t,r);if(!0===a.valid){const t={city:e,dates:a};fetch("http://localhost:3000/api-req",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json())).then((e=>{(e=>{const t=document.getElementById("formError"),r=document.getElementById("destWeather"),a=document.getElementById("destForecast"),i=document.getElementById("tripInfo"),o=document.getElementById("tripImage"),d=document.getElementById("tripCount"),s=document.getElementById("tripLength"),l=n(e.start,e.end);!0===e.valid?(i.style.display="flex",o.style.display="flex",r.style.display="block",o.style.backgroundImage=`url(${e.cityImageUrl||e.countryImageUrl})`,o.innerHTML=`\n            <h4>${e.city}, ${e.country}</h4>\n            <p>Current Weather:</p>\n            `,r.innerHTML=`\n            <div class="weather-report">\n                <img src="/img/icons/${e.currentWeather[0].weather.icon}.png" alt="weather-icon.jpg">\n                <p><br>${e.currentWeather[0].weather.description}</p>\n                <p><br>${e.currentWeather[0].temp} °C</p>\n            </div>\n            `,s.innerHTML=l.lengthOfTrip,d.innerHTML=l.daysToTrip,l.daysToTrip<16?a.innerHTML=`\n                <div class="weather-report">\n                    <img src="/img/icons/${e.forecastWeather[l.daysToTrip].weather.icon}.png" alt="weather-icon.jpg">\n                    <p><br>${e.forecastWeather[l.daysToTrip].weather.description}</p>\n                    <p><br>${e.forecastWeather[l.daysToTrip].temp} °C</p>\n                </div>\n                `:(a.innerHTML=`Forecast available in ${l.daysToTrip-15} Day/s`,a.style.textAlign="center"),t.innerHTML=""):(t.innerHTML='<span class="errorMsg">Couldn\'t find results for destination! Check your input!</span>',results.innerHTML="")})(e)}))}else{document.getElementById("formError").innerHTML=a.error}};document.getElementById("addTrip").addEventListener("submit",(e=>{e.preventDefault(),r()})),Client=t})();