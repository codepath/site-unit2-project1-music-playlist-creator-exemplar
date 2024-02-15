## Project #2: Music Playlist Explorer

### Overview

In the "Music Playlist Explorer" project, you will develop a web application that enables users to browse a curated selection of music playlists. The site features a clean, user-friendly interface where playlists are displayed as interactive tiles. Users can like playlists or click on a tile to open a modal with detailed information, including a list of songs. Within the modal view, users can shuffle the order of songs for a fresh listening experience.

### 🎯 Goals

By the end of this assignment, you will be able to:

- [ ] Write HTML and apply CSS styling to create a clean and user-friendly interface for the application.
- [ ] Dynamically render music playlists on a web page using JavaScript and data from a JSON file.
- [ ] Create and manipulate modal views to display detailed information about each playlist.
- [ ] Implement interactive features such as liking playlists and shuffling songs within a playlist.

### Required Features

- [ ] **Styling**: Apply CSS to style the main page, ensuring a clean and attractive user interface. Use responsive design principles to make sure your application looks good on different screen sizes.

- [ ] **Display Playlists**: Dynamically render playlists on the homepage using JavaScript. Fetch data from a provided JSON file and use it to create interactive playlist tiles that display the playlist's cover image, name, creator, and like count.

- [ ] **Playlist Details**: Create a modal view that displays detailed information about a playlist when a user clicks on a playlist tile. The modal should show the playlist's cover image, name, creator, and a list of songs, including their titles, artists, and durations.

- [ ] **Like Playlists**: Implement functionality to allow users to like playlists by clicking a heart icon on each playlist tile. Update the like count on the playlist tile when a playlist is liked or unliked, providing immediate visual feedback to the user.

- [ ] **Shuffle Songs**: Enable users to shuffle the songs within a playlist using a shuffle button in the playlist detail modal. Rearrange the songs in the modal view when the shuffle button is clicked, providing immediate visual feedback to the user.

#### Screenshot

A simple version of the app with all the required features implemented:


Main Page:

:::success
![Screenshot of app with core features implemented|600](project_x/IMAGE_HERE.png)
:::



### Milestones

<details>
<summary style="font-size:1.2em; font-weight: 600">Milestone 0: Project Setup</summary>

In this step, we'll set up the project structure and review the starter code.

- [ ] Create the initial project file structure (HTML, CSS, JavaScript, and data files).
- [ ] Read through the provided starter code to understand its functionality.

📍**Checkpoint 0**: You should have a basic project structure set up and an understanding of the starter code.
</details>

<details>
<summary style="font-size:1.2em; font-weight: 600">Milestone 1: Adding Structure with HTML</summary>

- [ ] Develop the HTML structure for the main page based on the provided wireframe.
- [ ] Ensure all necessary elements for displaying playlists are included.

📍**Checkpoint 1**: Your main page should have a well-structured HTML layout.
</details>

<!-- Add additional milestones as needed -->

### Stretch Features

#### Additional Interactions

- [ ] **Search Functionality**: Allow users to search for playlists by name or creator.
- [ ] **Sorting Options**: Implement sorting features to organize playlists by name, number of likes, or date added.

#### Enhanced User Experience

- [ ] **Animations**: Add animations for liking a playlist or opening the modal.
- [ ] **Responsive Design**: Ensure the app is fully responsive and looks great on all device sizes.

#### Screenshot

A more advanced version of the app with a few stretch features:

:::success
![Screenshot of app with stretch features implemented|600](project_X/IMAGE_HERE.png)
:::

### 💡 Hints

- Help! I don't know where to start with the modal!
  - Begin by creating a hidden modal element in your HTML. Use CSS to style it and JavaScript to toggle its visibility.
- How do I shuffle the songs in a playlist?
  - Look into JavaScript array methods that can help you randomize the order of elements in an array.

<!--- This dynamically inserts the submission guidelines, as specified in another file. -->
<%= insert('pages/submission_reminder_snippet.md') %>
