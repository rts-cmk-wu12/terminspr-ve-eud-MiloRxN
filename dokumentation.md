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

### Server-side utility funktion

```javascript
// src/utils/get-user-info.js
'use server';
import { cookies } from 'next/headers';

export async function getUserInfo(request = null) {
  let userInfoCookie;
  
  if (request) {
    userInfoCookie = request.cookies.get('user_info');
  } else {
    const cookieStore = await cookies();
    userInfoCookie = cookieStore.get('user_info');
  }
  
  if (!userInfoCookie) {
    return { 
      isAuthenticated: false, 
      isInstructor: false, 
      userId: null,
      username: null,
      role: null
    };
  }
  
  try {
    const userInfo = JSON.parse(userInfoCookie.value);
    const isInstructor = userInfo.role === 'instructor';
    
    return {
      isAuthenticated: true,
      isInstructor: isInstructor,
      userId: userInfo.userId,
      username: userInfo.username,
      role: userInfo.role
    };
  } catch (error) {
    console.error('Error parsing user info:', error);
    return { 
      isAuthenticated: false, 
      isInstructor: false, 
      userId: null,
      username: null,
      role: null
    };
  }
}
```
*Server-side utility der håndterer userauth via cookies. Funktionen kan bruges både i server komponenter og middleware, og returnerer brugerinfo med rolle-baseret adgang.*

### Genanvendelig komponent

```jsx
// src/components/ui/button/index.jsx
"use client"

export default function Button({type="", event, disabled = false, text, className=""}) {
  const variants = {
    default: "bg-primary-background text-button-text min-h-13.5 min-w-62 rounded-button"
  }

  function clickHandler(event) {
    console.log("Clicked", event.target)
  }

  return(
    <button 
      disabled={disabled} 
      type={type || "button"} 
      className={`${variants.default} ${className}`} 
      onClick={event || clickHandler}
    >
      {text || "Needs text property"}
    </button>
  )
}
```
*Sikrer ensartet styling og genbrug på tværs af projektet. Knap-komponenten håndterer forskellige props som tekst, styling, events og disabled state.*

---