 // Wait for the DOM content to be fully loaded
 document.addEventListener("DOMContentLoaded", function() {
    // Select all the about__card elements
    const aboutCards = document.querySelectorAll('.about__card');

    // Loop through each about__card element
    aboutCards.forEach((card, index) => {
        // Add a delay to each card's animation based on its index
        const delay = index * 200; // Adjust the delay time as needed

        // Add the animation class with delay to each card
        setTimeout(() => {
            card.classList.add('animate__fadeInUp'); // Add the desired animation class
        }, delay);
    });
});
