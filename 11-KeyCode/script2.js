const codeNumbers = document.querySelectorAll(".code_number");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", () => {
    const code = Array.from(codeNumbers).map(input => input.value).join("");
    alert(`Votre code est : ${code}`);
});

// Limiter chaque input à 1 caractère et passer au suivant
codeNumbers.forEach((input, index) => {
    input.addEventListener("input", () => {
        input.value = input.value.slice(0, 1); // Limite à 1 caractère
        if (input.value && index < codeNumbers.length - 1) {
            codeNumbers[index + 1].focus(); // Passe au suivant si rempli
        }
    });

    // Gérer le retour au précédent avec Backspace
    input.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && input.value === "" && index > 0) {
            codeNumbers[index - 1].focus(); // Passe au précédent si vide
        }
    });
});

// S'assurer que le focus se place sur le premier champ vide lors du clic
codeNumbers.forEach(input => {
    input.addEventListener("click", () => {
        const firstEmpty = Array.from(codeNumbers).find(input => input.value === "");
        if (firstEmpty) firstEmpty.focus();
    });
});