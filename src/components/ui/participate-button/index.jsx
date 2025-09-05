'use client'
import { useEffect, useState } from "react";
import Button from "../button";
import updateUserActivity from "@/utils/update-user-activity";

export default function ParticipateButton({ userStatus = {} }) {
  const { tooOld, tooYoung, available, participating, userId, activityId } = userStatus;
  const [text, setText] = useState("Tilmeld")
  const [message, setMessage] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [method, setMethod] = useState("POST")
  const [isLoading, setIsLoading] = useState(false)

  async function handleclick() {
    setIsLoading(true)
    const result = await updateUserActivity({ userId, activityId, method });
    if (result && result.status !== 200){
      setMessage("Noget gik galt, prøv igen")
    }
    setIsLoading(false)
  }

  // Status conditon er fra et tidligere discord bot project, 
  // som jeg har taget og lavet om så det matchede denne opgaves struktur.
  useEffect(() => {
    setText("Tilmeld")
    setMethod("POST")
    setMessage(null)
    setDisabled(false)

    const statusConditions = [
      {
        condition: participating,
        updates: {
          text: "Forlad",
          method: "DELETE",
        }
      },
      {
        condition: !available,
        updates: {
          disabled: true,
          message: "Du allerede tilmeldt en aktivitet på denne dag.",
        }
      },
      {
        condition: tooYoung,
        updates: {
          message: "Du er for ung til denne aktivitet",
          disabled: true,
        }
      },
      {
        condition: tooOld,
        updates: {
          message: "Du er for gammel til denne aktivitet",
          disabled: true,
        }
      }
    ];

    const matched = statusConditions.find(item => item.condition);
    if (matched) {
      const { updates } = matched;
      if (updates.text) setText(updates.text);
      if (updates.method) setMethod(updates.method);
      if (updates.message !== undefined) setMessage(updates.message);
      if (updates.disabled !== undefined) setDisabled(updates.disabled);
    }
  }, [participating, available, tooYoung, tooOld]);

  const buttonText = (
    <span className={disabled || isLoading ? "opacity-70" : ""}>
      {isLoading ? "Behandler..." : (message ? message : text)}
    </span>
  );

  return (
    <div className={`absolute bottom-5 right-5 gap-1 place-items-center ${message ? "animate-pulse" : ""}`}>
      <Button
        text={buttonText}
        event={disabled || isLoading ? null : handleclick}
        disabled={disabled || isLoading}
        className={`
          ${disabled || isLoading ? "bg-opacity-30 cursor-not-allowed" : ""}
          ${message ? "bg-red-600/60" : ""}
          transition-all duration-200
        `}
      />
    </div>
  )
} 