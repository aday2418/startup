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

# CSS Deliverable

+ One of the major changes that I made during the CSS deliverable was changing the structure of the app to react nextjs
    + Did this because I found myself repeating a lot of HTML code
    + In react you can create and import custom components to keep from repeating code
+ Used tailwind for inline CSS declarations
+ I'm planning on adding a dark mode option in the future so I coded the dashboard section of the app in dark mode 
    + Later there will be a light mode version as well

#### Project Requirements
+ **Simon Deployed** - Code was deployed to [startup.soundcircle.xyz](https://startup.soundcircle.xyz)
+ **Github Link** - Every page contains a link to my project github
+ **CSS Notes** - Thorough notes were taken detailing what I learned about CSS
+ **Git Commits** - Many more than 10 commits :)
+ **Styling** - Properly styled CSS header, footer, and main content body
+ **Navigation** - Properly styled CSS navigation elements
+ **Window Resizing** - Responds properly when windows are resized
+ **Application Elements** - Properly styled CSS application elements
+ **Application Text Elements** - Properly styled CSS application text content
+ **Images** - Properly styled CSS application images (most of mine were in the form of svgs)

#### Final Page Styling
| ![Home Page](/public/images/landingPage.png) | ![Dashboard](/public/images/DashboardCSS.png) | ![Friends](/public/images/FriendsCSS.png) | ![Settings](/public/images/SettingsCSS.png) |
| :-: | :-: | :-: | :-: |
| **Home Page** | **Dashboard** | **Friends** | **Settings** |

# Javascript Deliverable

+ This is the [startup site](https://startup.soundcircle.xyz)!
+ Continued coding my app using react nextjs
+ Used Javascript to build functionality in login, choosing prefrences, and loading (fake generated) Web Data
+ Finished building Light/Dark Mode for the App
+ All fake Database data is stored in local json files

#### Project Requirements
+ **Simon Deployed** - Code was deployed to [simon.soundcircle.xyz](https://simon.soundcircle.xyz)
+ **Github Link** - Every page contains a link to my project github
+ **Javascript Notes** - Thorough [notes](/public/notes/notes.md) were taken detailing what I learned about CSS
+ **Git Commits** - Many more than 10 commits :)
+ **JS Login** - JavaScript support for future login where data is stored in localStorage
+ **JS Database** - JavaScript support for database data (includes loading friends, app preferences, user information)
+ **JS Websocket** - JavaScript support for websocket data (includes loading top songs, artists, and genres from spotify API)
+ **JS App Logic** - JavaScript support for interaction logic (includes coloring selected tabs + buttons; makes app usable)

#### Design
+ See CSS pictures above for visual layout (Functionality was added, not much CSS was changed)

# Service Deliverable
+ This is the [startup site](https://startup.soundcircle.xyz)!
+ For this project, it was asked that we use the Express framework
    + However, since I already built my app using the Next.js framework from the start, I decided to keep this framework rather than transfering the whole app over
    + Hopefully this is OK, if not I can change this in the future 
+ One of the major changes to my app is that it is now using real data from the spotify API
    + This means that a spotify Username is required to login to my app

#### Being Able To Login For Grading
+ Since my app uses the Spotify API, a user has to have a spotify account in order to login
+ Right now my site is storing (site specific) login information using localhost, however, when you click the login button it will take you to an external link where you login using your spotify username + password
    + This step is required or else I would not be able to use the Spotify API in my site
+ Since I know that not everyone (grading TA's) has a spotify account, I created an example Spotify account that people can use to login to the site and test its functionality
    + Spotify Username: **examplespotifyemail@gmail.com**
    + Spotify Password: **example12345**
        + As of today March 11, 2024 this account is brand new -- meaning that there is no listening history yet
            + This means that when you login for grading, the top songs, top artists, and genres will all be blank unfortunately
            + I took pictures of the site using my personal Spotify account to show that the API is working and that data is being loaded correctly
        + I hope that in a week, listening history will be available from the API making the example account more useful to the grader
    + Right now my website is using the dev version of the Spotify API -- This means that only registered users that I have chosen to allow can be authenticated for my app (This can't be changed until you get an audit of your site by Spotify)
        + **If you want to be able to login to my website using your personal Spotify account, send me a Canvas message with the email registered to your spotify account**
        + Once I build out the app fully, I plan to get a free audit from spotify and expand the api access so that anyone can sign in 

#### Project Requirements
+ **Simon Deployed** -  Simon Service deployed to Code was deployed to [simon.soundcircle.xyz](https://simon.soundcircle.xyz)
+ **Github Link** - Every page contains a link to my project github
+ **Service Notes** - Thorough [notes](/public/notes/notes.md) were taken detailing what I learned about Node JS and Express
+ **Git Commits** - Many more than 10 commits :)
+ **HTTP Service** - For this project we were asked to use Express. However, many assignments ago I started using React with the NextJS framework. It made more sense for me to keep using NextJS rather than to switch the entire framework over to express. I was still able to create an HTTP service using this framework (which is also dependent on Node.js). 
+ **Static Middleware** - Despite using NextJS, my app still uses static middleware to serve up frontend code
+ **3rd Party Endpoints** - My app uses the spotify API. I call the 3rd party endpoints to get information from spotify. An example of this is shown [here](src/app/api/spotify/artists/route.js)
+ **Backend Service Endpoints** - In my server, I created endpoints that are used to GET information from my server about a users Profile, Songs, and Artists. These are accessed by visiting /api/spotify, /api/spotify/songs, /api/spotify/artists
+ **Frontend Calls Endpoints** - My Server calls the endpoints listed above in the [UserDashboard](src/app/dashboard/UserDashboard.jsx) component. Doing this allows me to get the data from my server about a User's spotify username, top songs, top artists, and top Genres


