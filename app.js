function openModal(imagePath) {
    var modal = document.getElementById('photoModal');
    var modalImage = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImage.src = imagePath;
}

function closeModal() {
    var modal = document.getElementById('photoModal');
    modal.style.display = 'none';
}

// Close modal if clicked outside the image
window.onclick = function(event) {
    var modal = document.getElementById('photoModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
