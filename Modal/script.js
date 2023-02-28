// select modal-btn, modal-overlay, close-btn
// listen for clicks events on modal-btn and close-btn
// when user clicks modal-btn and .OPEN-MODAL to modal-overlay 
// when user clicks close-btn remove .OpenMODAL from modal-overlay

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
    modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open-modal');
});
