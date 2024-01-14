# SoundCircle
Hey! This is a project that I'm making for my CS 260 class. Feel free to use this code for any projects you like! If you want to learn more about web programming, check out the [notes](/Notes/notes.md) I took from this class!

## Elevator Pitch
Have you ever wondered what your friends are jamming out to? With **SoundCircle**, you're always in the loop, diving into their favorite genres, artists, and top songs. Our platform isn't just about sharing playlists; it's a unique way to connect through music. You can compare listening stats and discover new tunes, all within a user-friendly interface that integrates seamlessly with your existing Spotify playlists. **SoundCircle** is the perfect way to deepen your connections through the universal language of music.

### Design

Each user gets a personalized dashboard showcasing their music stats. Users will be able to click on their friends profiles to easily access and explore their friends' tastes. They will also be able to customize personal settings (such as whether to use light or dark mode).

![Dashboard](/Images/dashboard.png)

## Project Requirements
1. Authentication: **SoundCircle** will allow users to login and personalize their dashboard
2. Database Data: **SoundCircle** will store information such as a users friends and their app preferences
3. WebSocket Data: **SoundCircle** will use the Spotify API to get data such as a users top songs, top genres, and number of minutes listened

## Key Features
+ Application uses the Spotify API
+ Allows users to create a network of friends
+ Collects data about top songs and genres
+ App manually updates to reflect current listening trends

## Technologies
+ HTML - Application will use 4 HTML pages
    1. Login Page
    2. Dashboard
    3. Settings Page
    4. Following / Followers Page
+ CSS - Application styling will be used to create consistent themes and ensure that pages are formated clearly
+ JavaScript - Provides login, preferences options, creates graphs for data
+ Service - Backend service with endpoints for:
    + Login
    + Retrieving Listening Data
    + Retrieving and Displaying Friend Data
+ DB/Login - Store users, app preferences, and listening data in database. Users are not able to see friend data until they are logged in
+ WebSocket - As users continually listen to music, their top songs, artists, and minutes are all automatically updated
+ React - Application ported to use the React web framework