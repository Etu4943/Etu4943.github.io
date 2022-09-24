function verifJour(){
    let dateObtenue = document.getElementById("inpute_date").value;
    let nouvelleDate = new Date(dateObtenue);
    boucleAffichageHeure(dateObtenue, nouvelleDate.getDay() == 6 || nouvelleDate.getDay() == 0);
}

function boucleAffichageHeure(dateObtenue, estWeekEnd){
    let iHeure = estWeekEnd ? 1200 : 1800;
    let estDemiHeure = false;
    document.getElementById("hour").innerHTML = "";
    while(iHeure <= 2100){
        let heure = Math.floor(iHeure/100);
        let minutes = iHeure%100;
        let estHeurePrise = estDejaPrit(dateObtenue, heure, (minutes + (!estDemiHeure ? "0" : "")));
        if(estHeurePrise === false){
            document.getElementById("hour").innerHTML += '<option value="'+iHeure+'">'+ heure + 'h'+ minutes + (!estDemiHeure ? "0" : "") +'</option>';
        }
        iHeure += estDemiHeure ? 70 : 30;
        estDemiHeure = !estDemiHeure;
    }

    function estDejaPrit(date,heure,minutes){
        let dateAAfficher = date+heure+minutes;
        for(let iDate = 0 ; iDate < datesPrisesJS.length ; iDate ++){
            if(dateAAfficher === datesPrisesJS[iDate])
                return true;
        }
        return false;
    }
}