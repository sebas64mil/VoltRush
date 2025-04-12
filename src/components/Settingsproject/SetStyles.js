import { GetJson } from './ConectStyles.js';

class LoadRootStyles {
    constructor() {
        this.root = document.documentElement;
    }
    async init() {
        this.tailwind = await GetJson("../public/lybraries/static/tailwind.json", "Tailwind Colors/Mode 1");
        this.pallets = await GetJson("../public/lybraries/variables/colors.json", "ColorsPage/Mode 1");
        this.spaced = await GetJson("../public/lybraries/variables/GlobalSpacing.json", "Spacing/light");
        this.SettingScreen = await GetJson("../public/lybraries/variables/SettingsScreen.json", "SettingsScreen");
        this.typography = await GetJson("../public/lybraries/variables/Typography.json", "Typography");
    }
    async Loadpallet() {
        
        for (const namePallete in this.pallets) {

            const palette = this.pallets[namePallete];
            
            for (const color in palette) {   

            const value = palette[color]?.value;
            const cleanToken = value.replace(/[{}]/g, "");
            const [group, shade] = cleanToken.split(".");
            const actualColor = this.tailwind?.[group]?.[shade]?.value;

            if (actualColor) {
                this.root.style.setProperty(`--${color}`, actualColor);
                console.log(`--${color}: ${actualColor}`);
            } else {
                console.warn(`Color not found for ${group}.${shade}`);
            }

            }
        }
    }

    async LoadSpaced() {
        for (const type in this.spaced) {
        const TypeSpacing = this.spaced[type];
        console.log(`${type}`);
        
        for(const spacing in TypeSpacing) {
            const value = TypeSpacing[spacing]?.value;
            console.log(`--${spacing}: ${value}`);
            this.root.style.setProperty(`--${spacing}`, value);
            

        }
    }
}

    async LoadSettings() {
    for(Screen in this.SettingScreen) {
        const ScreenSettings = this.SettingScreen[Screen];
        console.log(`${Screen}`);
        
        for(const Settings in ScreenSettings) {
            const value = ScreenSettings[Settings]?.value;
            console.log(`--${Settings}: ${value}`);
            this.root.style.setProperty(`--${Settings}`, value);
            

        }
    }
}
async LoadTypography() {
    for (const type in this.typography) {
        const TypeTypography = this.typography[type];
        console.log(`${type}`);
        
        for (const typography in TypeTypography) {
            let value = TypeTypography[typography]?.value;

            // Verifica si el value es un número puro (sin letras, unidades, etc.)
            if (!isNaN(value) && value.trim() !== "") {
                value +="px"; // Agrega "px" si es un número puro;
            }

            console.log(`--${typography}:`, value);
            this.root.style.setProperty(`--${typography}`, value);
        }
    }
}

}

const LoadStyles = new LoadRootStyles();
await LoadStyles.init();
await LoadStyles.Loadpallet();
await LoadStyles.LoadSpaced();
await LoadStyles.LoadSettings();
await LoadStyles.LoadTypography();
