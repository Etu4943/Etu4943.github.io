// Utilise les données de data.js. Rien n'est chargé depuis Internet.
// Affichage au chargement de la page (un rafraîchissement suffit pour tout recalculer).
afficher(DATA);
ceSoir(DATA);
 
// Bandeau « Cours ce soir » selon la date du jour (heure de l'ordinateur)
function ceSoir(data) {
  const t = new Date();
  const aujourdhui = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
  const c = data.cours.find(x => x.date === aujourdhui);
  const bandeau = document.getElementById("ce-soir");
  if (c) {
    const m = data.matieres[c.matiere];
    bandeau.className = "oui" + (c.examen ? " examen" : "");
    bandeau.innerHTML = (c.examen ? "Examen ce soir" : "Cours ce soir") +
      `<small>${c.matiere}${m ? " – " + m.nom : ""}</small>`;
  } else {
    bandeau.className = "non";
    bandeau.textContent = "Pas cours ce soir";
  }
}
 
function afficher(data) {
  document.getElementById("titre").textContent = data.titre;
  document.getElementById("sous-titre").textContent = data.sousTitre;
 
  // Légende
  document.getElementById("legende").innerHTML = Object.entries(data.matieres)
    .map(([code, m]) => `<span><i class="pastille" style="background:${m.couleur}"></i><b>${code}</b> ${m.nom}</span>`)
    .join("");
 
  // Index des cours par date
  const t = new Date();
  const auj = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
  const parDate = {};
  data.cours.forEach(c => parDate[c.date] = c);
 
  // Mois à afficher : du premier au dernier cours
  const dates = data.cours.map(c => c.date).sort();
  const debut = new Date(dates[0] + "T12:00");
  const fin = new Date(dates[dates.length - 1] + "T12:00");
  const noms = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  let html = "";
 
  for (let d = new Date(debut.getFullYear(), debut.getMonth(), 1); d <= fin; d.setMonth(d.getMonth() + 1)) {
    const an = d.getFullYear(), mois = d.getMonth();
    const nbJours = new Date(an, mois + 1, 0).getDate();
    const decalage = (new Date(an, mois, 1).getDay() + 6) % 7;
    html += `<div class="mois"><h3>${d.toLocaleDateString("fr-BE", { month: "long", year: "numeric" })}</h3><div class="jours">`;
    html += noms.map(n => `<div class="nom-jour">${n}</div>`).join("") + "<div></div>".repeat(decalage);
    for (let j = 1; j <= nbJours; j++) {
      const cle = `${an}-${String(mois + 1).padStart(2, "0")}-${String(j).padStart(2, "0")}`;
      const c = parDate[cle];
      if (c) {
        const m = data.matieres[c.matiere] || { couleur: "#888" };
        html += `<div class="jour cours${c.examen ? " examen" : ""}${cle === auj ? " aujourdhui" : ""}"><span class="num">${j}</span><span class="code" style="background:${m.couleur}">${c.matiere}</span>${c.examen ? '<span class="badge">EXAMEN</span>' : ""}</div>`;
      } else {
        html += `<div class="jour${cle === auj ? " aujourdhui" : ""}"><span class="num">${j}</span></div>`;
      }
    }
    html += "</div></div>";
  }
  document.getElementById("calendrier").innerHTML = html;
 
  // Liste des examens
  document.getElementById("examens").innerHTML = data.cours
    .filter(c => c.examen).sort((a, b) => a.date.localeCompare(b.date))
    .map(c => {
      const jour = new Date(c.date + "T12:00").toLocaleDateString("fr-BE", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
      const m = data.matieres[c.matiere];
      return `<li><b>${jour}</b> – ${c.matiere} ${m ? m.nom : ""}</li>`;
    }).join("");
}
 