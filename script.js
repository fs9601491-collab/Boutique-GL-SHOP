let totalGeneral = 0;

function ajouter(nom, prix) {
    const liste = document.getElementById('p-liste');
    
    // Supprimer le message "Vide" lors du premier ajout
    if (totalGeneral === 0) {
        liste.innerHTML = '';
    }

    const ligne = document.createElement('div');
    ligne.style.display = "flex";
    ligne.style.justifyContent = "space-between";
    ligne.style.marginBottom = "8px";
    ligne.style.paddingBottom = "5px";
    ligne.style.borderBottom = "1px solid rgba(89, 13, 34, 0.1)";
    ligne.innerHTML = `<span>${nom}</span> <b style="color:#ff4d6d">${prix.toLocaleString()} F</b>`;
    
    liste.appendChild(ligne);

    totalGeneral += prix;
    document.getElementById('p-total').innerText = totalGeneral.toLocaleString() + " F";
}

function ouvrirPaye() {
    if (totalGeneral > 0) {
        document.getElementById('pay-options').style.display = 'block';
    } else {
        alert("Ajoutez d'abord des articles au panier !");
    }
}

function fin(mode) {
    alert("Succès ! Paiement via " + mode + " de " + totalGeneral.toLocaleString() + " F confirmé.");
}