// This class is responsible for handling styles loaded from a JSON file.
class ConectStyles {
    // The constructor initializes the class with the path to the JSON file.
    constructor(jsonPath) {
        this.jsonPath = jsonPath; // Store the JSON file path for later use.
    }

    // This asynchronous method loads the JSON file from the specified path.
    async loadJSON() {
        try {
            // Fetch the JSON file from the provided path (this.jsonPath).
            const response = await fetch(this.jsonPath);

            // Parse the JSON response and store it in the 'styles' property.
            this.styles = await response.json();

            // Log a success message to the console.
            console.log("JSON cargado correctamente."); // "JSON loaded successfully."

            // Return the parsed JSON object.
            return this.styles;
        } catch (error) {
            // If an error occurs during fetching or parsing, log the error to the console.
            console.error("Error cargando el JSON:", error); // "Error loading the JSON."
        }
    }
}

// This is a helper function to retrieve a specific collection from the JSON file.
export async function GetJson(url, collection) {
    // Create an instance of the ConectStyles class with the provided URL.
    const styleJson = new ConectStyles(url);

    // Call the loadJSON method to fetch and parse the JSON file.
    const Json = await styleJson.loadJSON();

    // Return the specific collection (key) from the loaded JSON object.
    return Json[collection];
}