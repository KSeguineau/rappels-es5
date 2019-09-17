var villes = ['nantes','paris','saint-nazaire','angers','le mans'];
villes.forEach(function (v) { console.log(v) });

var lettreADansToutesLesVilles = villes.every(function (value) { return value.indexOf("a")!==-1 });
console.log(lettreADansToutesLesVilles);

var auMoinsUneVilleAvecUnTiret = villes.some(function (value) { return value.indexOf("-")!==-1 });
console.log(auMoinsUneVilleAvecUnTiret);

var villesSansTiretSansEspace = villes.filter(function (value) { return value.indexOf("-")===-1 && value.indexOf(" ")===-1  });
console.log(villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.filter(function (value) { return value.lastIndexOf("s")===value.length-1 }).map(function (value) { return value.toUpperCase() });
console.log(villesMajusculeSeTerminantParS);

