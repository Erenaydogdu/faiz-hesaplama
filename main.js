function krediHesapla(){
    var cekilecekTutar,vadeSayisi;
    var aylikTaksit,odenecekToplamTutar;

    cekilecekTutar=document.querySelector("#txtKrediTutari").value;
    var liste=document.querySelector("#listeVade");
    vadeSayisi=liste.options[liste.selectedIndex].value;

    (vadeSayisi==12 ? odenecekToplamTutar=cekilecekTutar*1.1 :(vadeSayisi==24 ? odenecekToplamTutar=cekilecekTutar*1.2 :(vadeSayisi==36 ? odenecekToplamTutar=cekilecekTutar*1.3 :(vadeSayisi==48 ? odenecekToplamTutar=cekilecekTutar*1.4 :""))));
    aylikTaksit=odenecekToplamTutar/vadeSayisi;

    document.querySelector("#sonuc").innerHTML=`
    Geri ödenecek tutar : ${odenecekToplamTutar} <br>
    Aylık ödenecek tutar : ${aylikTaksit.toFixed(2)}
    `
}