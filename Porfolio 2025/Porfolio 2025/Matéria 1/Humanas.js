function openModal(description) {
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('myModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

// Fecha o modal se o usuário clicar fora da área do modal
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        closeModal();
    }
}