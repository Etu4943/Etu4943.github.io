function verifJour(){
    let dateObtenue = document.getElementById("inpute_date").value;
    let nouvelleDate = new Date(dateObtenue);
    boucleAffichageHeure(nouvelleDate.getDay() == 6 || nouvelleDate.getDay() == 0)
}

function boucleAffichageHeure(estWeekEnd){
    let iHeure = estWeekEnd ? 1200 : 1800;
    let estDemiHeure = false;
    document.getElementById("hour").innerHTML = "";
    while(iHeure <= 2100){
        let heure = Math.floor(iHeure/100);
        let minutes = iHeure%100;
        document.getElementById("hour").innerHTML += '<option value="'+iHeure+'">'+ heure + 'h'+ minutes + (!estDemiHeure ? "0" : "") +'</option>';
        iHeure += estDemiHeure ? 70 : 30;
        estDemiHeure = !estDemiHeure;
    }
}