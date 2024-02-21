// Function to display a random playlist on the Featured page
const displayRandomPlaylist = () => {
    const randomIndex = Math.floor(Math.random() * data.playlists.length);
    const playlist = data.playlists[randomIndex];

    // Update the HTML with the playlist details
    document.querySelector('.playlist-image').innerHTML = `<img src="${playlist.playlist_art}" alt="Playlist Cover">`;
    document.querySelector('.playlist-name').textContent = playlist.playlist_name;

    const songList = document.querySelector('.song-list');
    songList.innerHTML = '';
    playlist.songs.forEach(song => {
        const songItem = document.createElement('li');
        songItem.textContent = `${song.title} - ${song.artist}`;
        songList.appendChild(songItem);
    });
};

// Event listener for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', displayRandomPlaylist);
