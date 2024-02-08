# SoundCircle
Hey! This is a project that I'm making for my CS 260 class. Feel free to use this code for any projects you like! If you want to learn more about web programming, check out the [notes](/public/notes/notes.md) I took from this class!

#### Elevator Pitch
Have you ever wondered what your friends are jamming out to? With **SoundCircle**, you're always in the loop, diving into their favorite genres, artists, and top songs. **SoundCircle** isn't just about sharing playlists; it's a unique way to connect through music. You can compare listening stats and discover new tunes, all within a user-friendly interface that integrates seamlessly with your existing Spotify playlists. **SoundCircle** is the perfect way to deepen your connections through the universal language of music.

#### Design
Each user gets a personalized dashboard showcasing their music stats. Users will be able to click on their friends profiles to easily access and explore their friends' tastes. They will also be able to customize personal settings (such as whether to use light or dark mode).

![Dashboard](/public/images/dashboard.png)

#### Project Requirements
1. Authentication: **SoundCircle** will allow users to login and personalize their dashboard
2. Database Data: **SoundCircle** will store information such as a users friends and their app preferences
3. WebSocket Data: **SoundCircle** will use the Spotify API to get data such as a users top songs, top genres, and number of minutes listened

#### Key Features
+ Application uses the Spotify API
+ Allows users to create a network of friends
+ Collects data about top songs and genres
+ App manually updates to reflect current listening trends

#### Technologies
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
+ React - Application will eventually be ported to use the React web framework

# HTML Deliverable

#### Simon HTML Deployment
+ Check out the simon HTML that I deployed to [simon.soundcircle.xyz](https://simon.soundcircle.xyz)

#### HTML Pages
+ I added 4 new HTML pages to my application
    1. **Home** - Allows the user to login
    2. **Dashboard** - Contains information about listening history, top songs, and top artists
    3. **Friends** - Lets users view current friends and add new ones
    4. **Settings** - Lets users update profile information and change app settings
+ Code was deployed to [startup.soundcircle.xyz](https://startup.soundcircle.xyz)


| ![Home Page](/public/images/homeHTML.png) | ![Dashboard](/public/images/dashboardHTML.png) | ![Friends](/public/images/friendsHTML.png) | ![Settings](/public/images/settingsHTML.png) |
| :-: | :-: | :-: | :-: |
| **Home Page** | **Dashboard** | **Friends** | **Settings** |

* Half of the dashboard got cut off in the screenshot above so you'll have to check out the [site](https://startup.soundcircle.xyz) to see the rest!

#### Project Requirements
+ **HTML Pages** - 4 pages included for each component of my application (see above)
+ **HTML Tags** - All pages included proper use of HTML tags including BODY, NAV, MAIN, HEADER, FOOTER
+ **Links** - All pages included links to all other pages in the header
+ **Textual Content** - Each HTML Page contained sufficient text to convey the app structure clearly
+ **3rd Party Calls** - A button was included on the dashboard to refresh the call to the Spotify API 
+ **Application Images** - Images were included on every page for uses including icons, album covers, profile pictures, and artist photos
+ **Login Placeholder** - A login placeholder for both a users username and password were included on the home page
+ **Database Data** - The database data for this application will be a users friends. A placeholder for this information is included on the friends page
+ **WebSocket Data** - The websocket data that will be returned from the spotify API include a users total minutes listened, top songs, and top artists. Placeholders for this information are contained on the dashboard page