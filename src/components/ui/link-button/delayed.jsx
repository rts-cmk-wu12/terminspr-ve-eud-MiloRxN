'use client'
import { useEffect, useState } from "react";
import LinkButton from ".";

export default function DelayedLink() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LinkButton
      href="/"
      text="Kom i gang"
      className={`absolute bottom-15 self-center transition-opacity duration-1000 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
    />
  );
}
