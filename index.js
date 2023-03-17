const container = document.getElementById('btn-zone');
const btn = document.getElementById('btn');

const email = document.getElementById("email");
const password = document.getElementById("password");


btn.addEventListener("mousemove", (e) => {
    if(!isFormValid()){
        moveButton();
    } else{
        putButtonNormal()
    }
});

/**
 * Ajoute un gestionnaire d'événements à un bouton pour afficher une boîte de dialogue lorsque l'utilisateur clique dessus.
 *
 * @param {Event} e - L'événement de clic du bouton.
 * @returns {void}
 */
btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("You are logged in");
  });
  
/**
 * Ajoute un gestionnaire d'événements à un champ de saisie d'e-mail pour mettre à jour l'apparence d'un bouton en fonction de la validité du formulaire.
 *
 * @returns {void}
 */
email.addEventListener('input', ()=>{
    if(isFormValid()){
        putButtonNormal()
    }
});


/**
 * Ajoute un gestionnaire d'événements à un champ de saisie de mot de passe pour mettre à jour l'apparence d'un bouton en fonction de la validité du formulaire.
 *
 * @returns {void}
 */
password.addEventListener('input', ()=>{
    if(isFormValid()){
        putButtonNormal()
    }
});


/**
 * Vérifie si les champs de saisie d'e-mail et de mot de passe contiennent des valeurs valides.
 * @returns {boolean} true si les champs sont valides, false sinon.
 */
const isFormValid = () => {
    return (email.value === "password@demo.com" && password.value === "1234") ? true : false;
}


/**
 * Ajoute un gestionnaire d'événements pour détecter le mouvement de la souris sur le bouton.
 *
 * @returns {void}
 */
const moveButton=()=>{
    btn.addEventListener("mousemove", changePosition);
}

/**
 * Change la position du bouton et applique une classe pour déclencher une animation.
 *
 * @returns {void}
 */
const changePosition = () => {
    container.style.position = "relative";
    btn.style.position = "absolute";

    if(btn.classList.contains("move-left")){
        btn.classList.add("move-right")
        btn.classList.remove("move-left")
        btn.classList.remove("btn-normal");
    }
    else{
        btn.classList.add("move-left")
        btn.classList.remove("move-right")
        btn.classList.remove("btn-normal");
    }
}

/**
 * Réinitialise l'apparence du bouton à son état normal et supprime le gestionnaire d'événements pour le mouvement de la souris.
 *
 * @returns {void}
 */
const putButtonNormal = () => {
    btn.classList.remove("move-right");
    btn.classList.remove("move-left");
    btn.removeEventListener("mousemove", changePosition, false);
    btn.classList.add("btn-normal");
}
