class ConectStyles {
    constructor(jsonPath) {
        this.jsonPath = jsonPath;
    }

    async loadJSON() {
        try {
            const response = await fetch(this.jsonPath);
            this.styles = await response.json();
            console.log("JSON cargado correctamente.");
            return this.styles;
            
        } catch (error) {
            console.error("Error cargando el JSON:", error);
        }
    }
}

export async function GetJson(url, collection) {
    const styleJson = new ConectStyles(url);
    const Json = await styleJson.loadJSON();
    return Json[collection];
}



