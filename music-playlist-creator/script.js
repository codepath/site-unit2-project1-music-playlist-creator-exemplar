const modalOverlay = document.querySelector('.modal-overlay');
const modalContent = document.querySelector('.modal-content');


document.addEventListener('DOMContentLoaded', () => {
    const playlistCardsContainer = document.querySelector('.playlist-cards');


    if (typeof data === 'undefined') {
        console.error('Data is not defined.');
        return;
    }

    data.playlists.forEach((playlist) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-playlist-id', playlist.playlistID);

        card.innerHTML = `
            <img src="${playlist.songs[0].cover_art}" alt="Playlist Cover">
            <div class="card-content">
                <h3 class="playlist-title">${playlist.playlist_name}</h3>
                <p class="creator-name">${playlist.playlist_creator}</p>
                <div class="card-stats">
                    <input type="checkbox" id="like-${playlist.playlistID}" class="like-checkbox" aria-label="Like this playlist" />
                    <label for="like-${playlist.playlistID}" class="heart-icon">♡</label>
                    <span class="like-count">${playlist.likeCount}</span>
                </div>
            </div>
        `;

        playlistCardsContainer.appendChild(card);
    });

    attachLikeEventListeners();
    attachCardClickEventListeners();
});

const attachLikeEventListeners = () => {
    document.querySelectorAll('.heart-icon').forEach(icon => {
        icon.addEventListener('click', (event) => event.stopPropagation());
    });

    document.querySelectorAll('.like-checkbox').forEach((checkbox) => {
        const likeCountElement = checkbox.nextElementSibling.nextElementSibling;
        checkbox.addEventListener('change', () => {
            let likeCount = parseInt(likeCountElement.textContent);
            likeCount = checkbox.checked ? likeCount + 1 : Math.max(likeCount - 1, 0);
            likeCountElement.textContent = likeCount;
        });
    });
};

const attachCardClickEventListeners = () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        card.addEventListener('click', () => {
            const playlistId = parseInt(card.getAttribute('data-playlist-id'));
            const playlist = data.playlists.find((p) => p.playlistID === playlistId);
            if (!playlist) return;

            modalContent.innerHTML = `<h3>${playlist.playlist_name}</h3><p>Created by ${playlist.playlist_creator}</p>`;

            const songsList = document.createElement('ul');
            playlist.songs.forEach((song) => {
                songsList.innerHTML += `<li>${song.title} by ${song.artist} from ${song.album}</li>`;
            });

            modalContent.appendChild(songsList);
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
};
