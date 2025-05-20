// Buscar usuario por username
document.getElementById("LogInButton").addEventListener("click", () => {
    const adress = document.getElementById("LogIn").value;
    const password = document.getElementById("LogPassword").value;

    if (!adress || !password) {
        alert("Please enter a username.");
        return;
    }

    fetch(`http://localhost:3000/user/${adress}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 404) {
                throw new Error("User not found.");
            } else {
                throw new Error("Error fetching user.");
            }
        })
        .then(user => {
            if (user.password == password) {
                alert(`${user.iduser} register`);
                // Redirigir
                window.location.href="../Views/Deudores.html";
            }else{
                alert(`Wrong password`);
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert(error.message);
        });
});