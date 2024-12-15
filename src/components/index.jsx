import React from "react";

import { useState } from "react";
import QRCode from "react-qr-code";
export default function QRRaman() {
  const [qrcode, setQrcode] = useState("");
  const [input, setInput] = useState("");
  function handleGenerateCode() {
    setQrcode(input);
    setInput('');
  }

  return (
    <div>
      
      <div className="raman">
        <input 
          onChange={(e) => setInput(e.target.value)} //e.target.value: This refers to the current value of the input field. When a user types into the input field, e.target.value will be updated with the new value.
          type="text"
          value={input}
          placeholder="Enter your URl"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateCode}
        >
          Generate QR
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrcode} size={400}  />
      </div>
    </div>
  );
}
