// utils.js
export const handleMouseMove = (e, index) => {
    const card = document.getElementById(`card-${index}`);
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 5; // Increased sensitivity
    const rotateY = (centerX - x) / 5; // Increased sensitivity

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

export const handleMouseLeave = (index) => {
    const card = document.getElementById(`card-${index}`);
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
};