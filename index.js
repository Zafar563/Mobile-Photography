

document.addEventListener("DOMContentLoaded", function () {
    const joinBtn = document.querySelector(".join-btn");
    joinBtn.addEventListener("click", function () {
        alert("Ro‘yxatdan o‘tish sahifasiga o'tyapsiz.");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    cards.forEach(function(card) {
        card.addEventListener("mouseenter", function () {
            card.style.backgroundColor = "#f0f0f0";
        });
        card.addEventListener("mouseleave", function () {
            card.style.backgroundColor = "white";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.style.fontWeight = "bold";
            link.style.color = "green";
        }
    });
});


