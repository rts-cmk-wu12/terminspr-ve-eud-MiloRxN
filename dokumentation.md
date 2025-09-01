# Dokumentation for Landrup Dans, terminsprøve
Tobias Nielsen, WU12

# Sådan kommer du i gang

Frontend  

`npm install`

`npm run dev`

Access_point: http://localhost:3000/

Apiet  
`cd landrup-api`

`npm install`

`npm start`

Access_point: http://localhost:4000/
<!-- Jeg har lavet valgfri opgave ? -->

## Tech-stack
* **Next.js.**  
Et front-end framework baseret på React.js som også giver adgang til server-side komponenter og -actions, samt mappebaseret routing.
Server-side komponenter og funktioner giver en større sikkerhed, da al koden afvikles på serveren fremfor i klienten.

* **React**   
Et bibliotek der giver mig mulighed for at lave komponenter og håndtere states på en god og let måde. react har et stort og aktivt community med et stort modul-bibliotek, som er aktivt, vel-dokumenteret og vel-understøttet. Det er også det mest brugte front-end bibliotek i verden, så efterspørgslen på React-udviklere er stor.

* **Git**   
Et versionsstyringsværktøj, som lader mig lave branches og versioner af min kode, så jeg let kan gå tilbage til tidligere versioner, hvis jeg for eksempel har lavet en fejl. Jeg bruger Git sammen med GitHub.

* **Tailwind**   
Et utility-baseret mobile-first css bibliotek, som gør det simpelt og responsivt.

* **React-icons**  
Et ikon-bibliotek, som er beregnet på React.

* **Landrup dans API**  
Et interface til at få adgang til Landrup dans' data. Dette api er udleveret til brug for den webapp, som de har bestilt.

* **Zod**  
Et valideringsBibliotek til objekter og strings. Jeg bruger Zod til blandt andet at validere bruger-input fra formularer.

## Kode-eksempler

### Dynamisk indhold fra API

```jsx
// src/app/page.jsx
// Komponent her
```
*Her hentes data fra et API, som vises dynamisk på siden. Komponentet `...` bruges til ...*

### Genanvendelig komponent

```jsx
// src/components/typography/paragraph/index.jsx
// Komponent her
```
*Sikrer ensartet styling og genbrug på tværs af projektet.*

---