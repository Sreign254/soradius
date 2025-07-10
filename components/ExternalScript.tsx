import { useEffect } from "react";

export default function ExternalChatScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//uae.fw-cdn.com/40239696/149314.js";
    script.setAttribute("chat", "true");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; 
}
