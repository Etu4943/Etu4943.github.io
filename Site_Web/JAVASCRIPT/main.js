function changeLang(lang){
    let langue = document.documentElement.lang;
    document.documentElement.lang = lang;
    console.log(langue);
    document.location.reload();
}


function year_copyright(){
    let current_date = new Date();
    let current_year = current_date.getFullYear();
    document.getElementById("copyright").innerHTML = "© " + current_year + " - " + (current_year + 1);
}