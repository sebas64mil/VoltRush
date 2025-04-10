fetch("../../Tokens.json")
  .then(res => res.json())
  .then(styles => {
    const root = document.documentElement;

    // 1. Accedemos a la paleta a aplicar (Paleta 2)
    const coleccion = styles["GlobalSettingsColors/Mode 1"];
    const paleta = coleccion["Paleta 2"];

    // 2. Accedemos a los colores base (tailwind colors)
    const tailwindColors = styles["Tailwind Colors/Mode 1"];

    for (const color in paleta) {
      const valor = paleta[color].value; // ejemplo: "{emerald.50}"
      const tokenLimpio = valor.replace(/[{}]/g, ""); // "emerald.50"

      const [grupo, tono] = tokenLimpio.split("."); // ["emerald", "50"]

      const realColor = tailwindColors?.[grupo]?.[tono]?.value;

      if (realColor) {
        root.style.setProperty(`--${color}`, realColor);
        console.log(`--${color}: ${realColor}`);
      } else {
        console.warn(`No se encontró color para ${grupo}.${tono}`);
      }
    }
  });
