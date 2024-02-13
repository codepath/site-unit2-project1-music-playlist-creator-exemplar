// Event Listener: Update likes on playlist card (Hard Coded)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.like-checkbox').forEach(checkbox => {
        const likeCountElement = checkbox.nextElementSibling.nextElementSibling; // Points to the like count span
        const label = checkbox.nextElementSibling; // This should point to the label that is immediately following the checkbox

        // Attach stopPropagation to the label's click event
        label.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click from triggering the card's click event
        });
        
        // Handle changes to the checkbox (likes)
        checkbox.addEventListener('change', function() {
            let likeCount = parseInt(likeCountElement.textContent);
            if (checkbox.checked) {
                likeCount++;
            } else {
                likeCount = Math.max(likeCount - 1, 0); // Prevent negative numbers
            }
            likeCountElement.textContent = likeCount;
        });
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalContent = document.querySelector('.modal-content');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const playlistId = this.getAttribute('data-playlist-id');
            // Populate modalContent based on clicked card's data
                // Clear existing content
                modalContent.innerHTML = '';

                // Generate and append new content based on playlistId
                // For demonstration, this is placeholder logic
                const details = document.createElement('p');

                // Populate with actual data as needed 👇🏽🔔
                details.textContent = `Details for playlist ${playlistId}`;
            
                modalContent.appendChild(details);
  

            // Show the modal overlay
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Hide the modal when the overlay is clicked
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) { // Ensure the click is not on the modal content itself
            modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
});

function populateModalContent(playlistId) {

}