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

- [ ] **Display Playlists**: Dynamically render playlists on the homepage using JavaScript. Fetch data from a provided JSON file and use it to create interactive playlist tiles that display the playlist's cover image, name, creator, and like count.

- [ ] **Playlist Details**: Create a modal view that displays detailed information about a playlist when a user clicks on a playlist tile. The modal should show the playlist's cover image, name, creator, and a list of songs, including their titles, artists, and durations.

- [ ] **Like Playlists**: Implement functionality to allow users to like playlists by clicking a heart icon on each playlist tile. Update the like count on the playlist tile when a playlist is liked or unliked, providing immediate visual feedback to the user.

- [ ] **Shuffle Songs**: Enable users to shuffle the songs within a playlist using a shuffle button in the playlist detail modal. Rearrange the songs in the modal view when the shuffle button is clicked, providing immediate visual feedback to the user.

#### Screenshots

A simple version of the app with all the required features implemented:

:::success
![Screenshot of app with core features implemented|600](project_2/MainView.png)

![Screenshot of app with core features implemented|600](project_2/DetailView.png)

<center><video width="450" height="450" controls>
  <source src="./project_2/shuffle.mp4" type="video/mp4">
</video></center>

:::


### Project Insructions


TODO - Add milestones





### Stretch Features

#### (Optional) Playlist Management Features

- [ ] **Add New Playlists**: Allow users to create new playlists by providing a form to input playlist details and song information.
  - Users can input playlist name, creator, and add multiple songs with details like title, artist, and duration.
- [ ] **Edit Existing Playlists**: Enable users to modify the details of existing playlists.
  - Implement an edit button on each playlist tile that opens a form pre-populated with the current playlist details, allowing users to update the name, creator, and songs.
- [ ] **Delete Playlists**: Enable users to delete playlists from the homepage.
  - Implement a delete button on each playlist tile that, when clicked, removes the playlist from the display and data model.

#### (Optional) Advanced Interactivity Features

- [ ] **Search Functionality**: Implement a search bar to allow users to filter playlists by name or creator.
  - As users type in the search bar, dynamically update the displayed playlists to only show those that match the search query.
- [ ] **Sorting Options**: Provide options for users to sort playlists by different criteria such as name, number of likes, or date added.
  - Implement dropdown or button options that reorder the displayed playlists based on the selected sorting criterion.



### 💡 Hints

<!--- Hints go here, in Q&A format -->

- Help! I don't know where to start!
  - As always, a good starting place would be to set up the XML Layout for your app.
  - Look at this weeks lab for examples on how to implement similar applications.  What code will be similar?  What do you need to change?

- I'm stuck on something!
  - Don't just skip the Resources section!
  - Still need a little extra help getting started or running into an error?  Try posting in the [Discussions](https://discussions.codepath.com/).

- How do I dynamically render playlists on the homepage?
  - Use JavaScript to iterate over the playlist data from the JSON file and create HTML elements for each playlist. Then, append these elements to the playlist container on the homepage.
  - You can use the `createElement` and `appendChild` methods in JavaScript to create and add new elements to the DOM.

- How can I update the like count when a playlist is liked?
  - Add an event listener to the like button for each playlist. When the button is clicked, increment the like count for that playlist and update the displayed count in the DOM.
  - You may need to use a variable or data attribute to keep track of the like count for each playlist.

- How do I create a modal view for playlist details?
  - Create a hidden modal element in your HTML with a structure for displaying playlist details. Use CSS to style the modal and make it appear centered and above the rest of the content.
  - Use JavaScript to populate the modal with the details of the clicked playlist and to toggle the visibility of the modal when a playlist tile is clicked or when the modal is closed.

- How can I shuffle the songs in a playlist?
  - Write a function that takes an array of songs and rearranges the elements in a random order.
  - When the shuffle button in the modal is clicked, call this function with the current playlist's songs array and update the displayed song list in the modal.

<!--- This dynamically inserts the submission guidelines, as specified in another file. -->
<%= insert('pages/submission_reminder_snippet.md') %>
