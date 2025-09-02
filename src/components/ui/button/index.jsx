"use client"

export default function Button({ event, text, className=""}) {

  const variants = {
    default: "bg-primary-background text-button-text min-h-13.5 min-w-62 rounded-button"
  }

  // Standard Event
  function clickHandler(event) {
    console.log("Clicked", event.target)
  }

  return(
    <button className={`${variants.default} ${className}`} onClick={event || clickHandler}>
      {text}
    </button>
  )

}