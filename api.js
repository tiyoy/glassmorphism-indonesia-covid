const base_url = 'https://covid19.mathdro.id/api/countries/indonesia/confirmed';

function formatNumber(number) {
    return new Intl.NumberFormat('id').format(number);
}

function formatDateFromMilisecond(milisecond) {
    return new Date(milisecond).toLocaleString("id", {timeZoneName: "short"});
}

function getData() {
  fetch(base_url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach(function (d) {
        let dataHTML = '';
        let lastUpdatedHTML = '';
        let cecepHTML ='';

        dataHTML += `
            <div class="card">
            <div class="card-content">
                <div class="card-title">
                    <p>POSITIF</p>
                </div>
                <div class="card-number">
                    <h3>
                        ${formatNumber(d.confirmed)} 
                    </h3>
                    <span class="orang">ORANG</span>
                </div>
            </div>
            
            <div class="card-image">
                <img src="images/positif.png" alt="">
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <div class="card-title">
                    <p>SEMBUH</p>
                </div>
                <div class="card-number">
                    <h3>
                        ${formatNumber(d.recovered)}
                    </h3>
                    <span class="orang">ORANG</span>
                </div>
            </div>
            
            <div class="card-image">
                <img src="images/sembuh.png" alt="">
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <div class="card-title">
                    <p>MENINGGAL</p>
                </div>
                <div class="card-number">
                    <h3>
                        ${formatNumber(d.deaths)} 
                    </h3>
                    <span class="orang">ORANG</span>
                </div>
            </div>
            
            <div class="card-image">
                <img src="images/meninggal.png" alt="">
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <div class="card-title">
                    <p>KASUS AKTIF</p>
                </div>
                <div class="card-number">
                    <h3>${formatNumber(d.active)} </h3>
                    <span class="orang">ORANG</span>
                </div>
            </div>
            
            <div class="card-image">
                <img src="images/positif.png" alt="">
            </div>
        </div>`;

        lastUpdatedHTML += `
            Update Terakhir: ${formatDateFromMilisecond(d.lastUpdate)}`;
        
        cecepHTML += 'Made With ❤ By Cecep Maulanaツ';

        document.getElementById("update").innerHTML += lastUpdatedHTML;
        document.getElementById("card-container").innerHTML += dataHTML;
        document.getElementById("cecep").innerHTML +=
          cecepHTML;
      });
    })
    .catch(function(error) {
        console.log("Error" + err);
    })
}

// Test
