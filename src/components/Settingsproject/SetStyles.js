import { GetJson } from './ConectStyles.js';

class LoadRootStyles {
    constructor() {
        this.root = document.documentElement; // Reference to the root element of the document
    }
    async init() {
        // Load various JSON files containing style configurations
        this.tailwind = await GetJson("../public/lybraries/static/tailwind.json", "Tailwind Colors/Mode 1");
        this.pallets = await GetJson("../public/lybraries/variables/colors.json", "ColorsPage/Mode 1");
        this.spaced = await GetJson("../public/lybraries/variables/GlobalSpacing.json", "Spacing/light");
        this.SettingScreen = await GetJson("../public/lybraries/variables/SettingsScreen.json", "SettingsScreen");
        this.typography = await GetJson("../public/lybraries/variables/Typography.json", "Typography");
        this.shadows = await GetJson("../public/lybraries/variables/shadows.json", "shadows");
    }
    async Loadpallet() {
        // Iterate through palettes and apply colors to CSS variables
        for (const namePallete in this.pallets) {
            const palette = this.pallets[namePallete];
            
            for (const color in palette) {   
                const value = palette[color]?.value;
                const cleanToken = value.replace(/[{}]/g, ""); // Remove curly braces from the token
                const [group, shade] = cleanToken.split(".");
                const actualColor = this.tailwind?.[group]?.[shade]?.value;

                if (actualColor) {
                    this.root.style.setProperty(`--${color}`, actualColor); // Set CSS variable
                    console.log(`--${color}: ${actualColor}`);
                } else {
                    console.warn(`Color not found for ${group}.${shade}`);
                }
            }
        }
    }

    async LoadSpaced() {
        // Iterate through spacing configurations and apply them to CSS variables
        for (const type in this.spaced) {
            const TypeSpacing = this.spaced[type];
            console.log(`${type}`);
            
            for(const spacing in TypeSpacing) {
                const value = TypeSpacing[spacing]?.value;
                console.log(`--${spacing}: ${value}`);
                this.root.style.setProperty(`--${spacing}`, value); // Set CSS variable
            }
        }
    }

    async LoadSettings() {
        // Iterate through settings configurations and apply them to CSS variables
        for(Screen in this.SettingScreen) {
            const ScreenSettings = this.SettingScreen[Screen];
            console.log(`${Screen}`);
            
            for(const Settings in ScreenSettings) {
                const value = ScreenSettings[Settings]?.value;
                console.log(`--${Settings}: ${value}`);
                this.root.style.setProperty(`--${Settings}`, value); // Set CSS variable
            }
        }
    }

    async LoadTypography() {
        // Iterate through typography configurations and apply them to CSS variables
        for (const type in this.typography) {
            const TypeTypography = this.typography[type];
            console.log(`${type}`);
            
            for (const typography in TypeTypography) {
                let value = TypeTypography[typography]?.value;

                // Check if the value is a pure number (without units, letters, etc.)
                if (!isNaN(value) && value.trim() !== "") {
                    value += "px"; // Add "px" if it's a pure number
                }

                console.log(`--${typography}:`, value);
                this.root.style.setProperty(`--${typography}`, value); // Set CSS variable
            }
        }
    }

    async LoadShadows() {
        // Iterate through shadow configurations and apply them to CSS variables
        for (const shadowName in this.shadows) {
            const shadowData = this.shadows[shadowName];
            const shadowArray = shadowData.value;
        
            if (Array.isArray(shadowArray)) {
                const boxShadowCSS = shadowArray.map(shadow => {
                    const {
                        x = 0,
                        y = 0,
                        blur = 0,
                        spread = 0,
                        color = "#000000"
                    } = shadow;
                    
                    // Construct the box-shadow CSS property
                    return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
                }).join(", ");

                this.root.style.setProperty(`--${shadowName}`, boxShadowCSS); // Set CSS variable
                console.log(`--${shadowName}: ${boxShadowCSS}`);
            }
        }
    }
}

const LoadStyles = new LoadRootStyles(); // Create an instance of the LoadRootStyles class

// Initialize the instance by loading various JSON files containing style configurations
await LoadStyles.init();

// Load and apply color palettes to CSS variables
await LoadStyles.Loadpallet();

// Load and apply spacing configurations to CSS variables
await LoadStyles.LoadSpaced();

// Load and apply screen settings configurations to CSS variables
await LoadStyles.LoadSettings();

// Load and apply typography configurations to CSS variables
await LoadStyles.LoadTypography();

// Load and apply shadow configurations to CSS variables
await LoadStyles.LoadShadows();
