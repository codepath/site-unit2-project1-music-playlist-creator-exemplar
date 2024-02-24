
# Music Playlist Creator

## Overview

The Music Playlist Creator is a dynamic platform designed to allow users to create, share, view, and manage personalized music playlists.

Users can interact with playlists displayed as tiles, view detailed information about each playlist, like and shuffle playlists, and manage their playlist collection through a simple and intuitive interface.

## Features

- **Playlist Grid View**: Users can browse playlists in a grid layout, making it easy to find and select their favorite collections.
- **Detailed Playlist Views**: Users can view detailed information, including songs and artists, in a modal by clicking on a playlist.
- **Interactive Playlist Management**: Users can like, shuffle, add new playlists, and delete existing ones with intuitive controls.
- **Responsive Design**: Users can access the application smoothly on any device, ensuring a consistent experience across desktop, tablet, and mobile.

## Project Structure

```txt
music-playlist-creator/
│
├── index.html               # Main entry point of the application / Featured view
├── all.html                 # Playlist grid view
├── style.css                # Application styles
├── featured-script.js       # Core functionality and event handling for Featured view
├── all-script.js            # Core functionality and event handling for Playlist grid view
│
├── assets/                  # Static resources
│   ├── img/                 # Images and icons
│   └── music/               # Optional music files
│
├── data/                    # Data storage
│   └── data.js              # Sample playlist data
│
└── README.md                # Project documentation
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/codepath/site-unit2-project1-music-playlist-creator-exemplar.git
   ```

2. Navigate to the project directory:

   ```bash
   cd music-playlist-creator
   ```

3. Open the `index.html` file in your browser to view the application.
