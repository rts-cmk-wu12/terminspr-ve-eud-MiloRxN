'use client'
import { useEffect, useState } from "react";
import Button from "../button";
import updateUserActivity from "@/utils/update-user-activity";

export default function ParticipateButton({userStatus = {}}){
  const {tooOld, tooYoung, available, participating, userId, activityId} = userStatus;
  const [text, setText] = useState("Tilmeld")
  const [message, setMessage] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [method, setMethod] = useState("POST")
  const [isLoading, setIsLoading] = useState(false)

  async function handleclick(){
    setIsLoading(true)
    try {
      const result = await updateUserActivity({ userId, activityId, method});
      // console.log("Success:", result)
    } catch (error) {
      // console.log("fetch error: ", error)
      setMessage("Der skete en fejl. Prøv igen.")
    } finally {
      setIsLoading(false)
    }
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

  return (
    <>
      <div className="absolute bottom-5 right-5 gap-1">
      <Button 
        text={isLoading ? "Behandler..." : text} 
        event={disabled || isLoading ? null : handleclick} 
        disabled={disabled || isLoading}
      />
      {message && <p className="text-sm text-red-500 mt-2">{message}</p>}
    </div>
    </>
  )
} 