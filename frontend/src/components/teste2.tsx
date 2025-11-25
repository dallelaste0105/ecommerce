import { useState } from "react";

export default function Imgeeexee() {
  const [resposta, setResposta] = useState("");

  async function enviar() {
    try {
      const res = await fetch("http://localhost:3000/test/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: "qualquer valor aqui"
        })
      });

      const json = await res.json();
      setResposta(JSON.stringify(json));
    } catch (err) {
      setResposta("Erro na requisição");
    }
  }

  return (
    <div>
      <h1>Enviar POST</h1>
      <button onClick={enviar}>Enviar</button>
      <p>{resposta}</p>
    </div>
  );
}
