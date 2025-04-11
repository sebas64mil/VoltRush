// fetch("../../Tokens.json")
//     .then(res => res.json())
//     .then(styles => {
//         const root = document.documentElement;

//         // 1. Access the palette to apply (Palette 2)
//         const collection = styles["GlobalSettingsColors/Mode 1"];
//         //Recorres todas las colecciones de colores y seleccionas la que quieres aplicar
//         const palette = collection["Paleta 2"];

//         // 2. Access the base colors (tailwind colors)
//         const tailwindColors = styles["Tailwind Colors/Mode 1"];

//         for (const color in palette) {
//             const value = palette[color].value; // example: "{emerald.50}"
//             const cleanToken = value.replace(/[{}]/g, ""); // "emerald.50"

//             const [group, shade] = cleanToken.split("."); // ["emerald", "50"]

//             const actualColor = tailwindColors?.[group]?.[shade]?.value;

//             if (actualColor) {
//                 root.style.setProperty(`--${color}`, actualColor);
//                 console.log(`--${color}: ${actualColor}`);
//             } else {
//                 console.warn(`Color not found for ${group}.${shade}`);
//             }
//         }
//     });
