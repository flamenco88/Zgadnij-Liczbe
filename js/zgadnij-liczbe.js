var formTab = document.getElementsByTagName('form')[0];
formTab.setAttribute('id','formularz');
var form = document.getElementById('formularz');
var wyswietlWynik = document.createElement('p');
var proba = 0;
var Licznik = document.createElement('p');
var Timer = document.createElement('p');
var szukana = Math.floor((Math.random() * 100) + 1);


document.body.appendChild(wyswietlWynik);
document.body.appendChild(Licznik);
document.body.appendChild(Timer);

function odliczaj(o,sek){
o.innerHTML='Czas w sekundach: ' + sek
if(sek>=0)setTimeout(function(){odliczaj(o,++sek)},1e3)
}

odliczaj(Timer,0);

form.addEventListener('submit', function(e) {
  var liczba = form.liczba.value; // Przypisaliśmy wartość podaną przez użytkownika do zmiennej
  e.preventDefault(); // Zapobiegamy domyślnej akcji przeglądarki, czyli przeładowania strony
  wyswietlWynik.innerText = ZgadnijLiczbe(szukana,liczba);
  Licznik.innerText = 'Liczba prob: ' + proba;
  form.reset();

  // Tutaj będziemy wywoływać funkcję i przypisywać wynik do elementu.
});

function ZgadnijLiczbe(szukana,wprowadzona){
  proba = proba + 1;
  if (szukana == wprowadzona){
    return 'Brawo znalazles ta liczbe!'
  }
  else if (szukana > wprowadzona){
    return 'Szukana jest większa niż wprowadzona'
  }
  else if (szukana < wprowadzona){
    return 'Szukana jest mniejsza niż wprowadzona'
  }
  else{
    return 'Cos poszlo nie tak!'
  }
}
