const formularz = document.querySelector("#formularz");
const sztuki = document.querySelector("#sztuki");
const okladka = document.querySelector("#okladka");
const koszt = document.querySelector("#koszt");
const wynik = document.querySelector("#wynik");

function obliczCene() {
  const liczba = sztuki.valueAsNumber;

  if (!Number.isInteger(liczba) || liczba < 1 || liczba > 20) {
    return null;
  }

  let cenaSztuki = 8;
  if (okladka.checked) {
    cenaSztuki += 2;
  }

  return liczba * cenaSztuki;
}

function aktualizujPodglad() {
  const cena = obliczCene();
  wynik.textContent = "";

  if (cena === null) {
    koszt.textContent = "Podaj całkowitą liczbę od 1 do 20.";
  } else {
    koszt.textContent = "Przewidywany koszt: " + cena.toFixed(2) + " zł";
  }
}

sztuki.addEventListener("input", aktualizujPodglad);
okladka.addEventListener("change", aktualizujPodglad);

formularz.addEventListener("submit", function (event) {
  event.preventDefault();
  const cena = obliczCene();

  if (cena !== null) {
    wynik.textContent = "Podsumowanie: " + sztuki.valueAsNumber
      + " zeszytów, razem " + cena.toFixed(2) + " zł.";
  }
});

formularz.addEventListener("reset", function () {
  wynik.textContent = "";
  setTimeout(aktualizujPodglad, 0);
});

aktualizujPodglad();