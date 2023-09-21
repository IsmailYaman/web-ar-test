function startAR() {
    const modelViewer = document.querySelector('model-viewer');
    const popup = document.querySelector('.popup');

    if (modelViewer.canActivateAR) {
        modelViewer.activateAR();
    } else {
        console.error('AR not supported on this device.');
        popup.style.display = 'block';
    }

}
function closePopup() {
    const arErrorPopup = document.getElementById('popup');
    arErrorPopup.style.display = 'none';
}