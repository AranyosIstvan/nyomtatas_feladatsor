
function kalkulal() {
  const szelesseg = parseInt(document.getElementById("szelesseg").value);
  const magassag = parseInt(document.getElementById("magassag").value);
  const papir = parseInt(document.getElementById("papirtipus").value);

  const terulet = Math.round((szelesseg * magassag) / 100) / 100; // cm2 -> dm2
  const koltseg = Math.round(terulet * papir);

  document.getElementById("terulet").innerText = terulet;
  document.getElementById("papir").innerText = papir;
  document.getElementById("koltseg").innerText = koltseg;

    document.getElementById("valasz").style.display = "block";
    document.getElementById("valasz").style.visibility = "visible";
    
}
