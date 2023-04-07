const modalBackground = document.getElementsByClassName("modalBackground")[0];
const modalClose = document.querySelector(".modalClose");

const showModal = document.querySelector('.btn-open');

//1 usul

// showModal.addEventListener("click", () => {
//     modalBackground.style.display = 'block';
// });

// modalClose.addEventListener('click', () => {
//     modalBackground.style.display = 'none';
// })

// 2 usul

function openModal() {
    modalBackground.classList.add('active');
}

showModal.addEventListener('click', openModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modalBackground.classList.contains("hidden")) {
        closeModal();
    }
});

const closeModal = function () {
    modalBackground.classList.remove("active");
};

modalClose.addEventListener('click', closeModal);