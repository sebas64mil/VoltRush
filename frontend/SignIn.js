// Registrar usuario
document.getElementById("SignInButton").addEventListener("click", () => {
    const idEmployee = document.getElementById("Id").value;
    const name = document.getElementById("SignIn").value;
    const address = document.getElementById("address").value;
    const password = document.getElementById("password").value;
    const passwordRepeat = document.getElementById("passwordRepeat").value;

    if (password !== passwordRepeat) {
        alert("Passwords do not match.");
        return;
    }

    if (!idEmployee || !password || !name || !address) {
        alert("All fields are required.");
        return;
    }

    const data = {
        idEmployee: idEmployee,
        name: name,
        address: address,
        password: password
    };

    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error("Registration failed.");
            }
        })
        .then(message => {
            alert(message);
            document.getElementById("SignIn").value = "";
            document.getElementById("password").value = "";
            document.getElementById("passwordRepeat").value = "";
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while registering.");
        });
});