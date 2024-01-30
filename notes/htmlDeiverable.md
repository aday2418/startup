# January 29th Notes

### Deliverable Requirements
+ Simon HTML deployed to your production environment
+ A link to your GitHub startup repository prominently displayed on your application's home page
+ Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable. The TAs will only grade things that have been clearly described as being completed. Review the voter app as an example.
+ At least 10 git commits spread consistently throughout the assignment period.
+ Properly structured HTML:
    + 20% HTML pages for each component of your application
    + 10% Proper use of HTML tags including BODY, NAV, MAIN, HEADER, FOOTER
    + 10% Links between pages as necessary
    + 10% Application textual content
    + 10% Placeholder for 3rd party service calls
    + 10% Application images
    + 10% Login placeholder, including user name display
    + 10% Database data placeholder showing content stored in the database
    + 10% WebSocket data placeholder showing where realtime communication will go

#### My Simon HTML Deployment
+ Check out the simon HTML that I deployed to [simon.soundcircle.xyz](https://simon.soundcircle.xyz)

#### My HTML Pages
+ I added 4 new HTML pages to my application
    1. **Home** - Allows the user to login
    2. **Dashboard** - Contains information about listening history, top songs, and top artists
    3. **Friends** - Lets users view current friends and add new ones
    4. **Settings** - Lets users update profile information and change app settings
+ Code was deployed to [startup.soundcircle.xyz](https://startup.soundcircle.xyz)


| ![Home Page](/src/images/homeHTML.png) | ![Dashboard](/src/images/dashboardHTML.png) | ![Friends](/src/images/friendsHTML.png) | ![Settings](/src/images/settingsHTML.png) |
| :-: | :-: | :-: | :-: |
| **Home Page** | **Dashboard** | **Friends** | **Settings** |

* Half of the dashboard got cut off in the screenshot above so you'll have to check out the [site](https://startup.soundcircle.xyz) to see the rest!

#### Meeting the Project Requirements
+ **HTML Pages** - 4 pages included for each component of my application (see above)
+ **HTML Tags** - All pages included proper use of HTML tags including BODY, NAV, MAIN, HEADER, FOOTER
+ **Links** - All pages included links to all other pages in the header
+ **Textual Content** - Each HTML Page contained sufficient text to convey the app structure clearly
+ **3rd Party Calls** - A button was included on the dashboard to refresh the call to the Spotify API 
+ **Application Images** - Images were included on every page for uses including icons, album covers, profile pictures, and artist photos
+ **Login Placeholder** - A login placeholder for both a users username and password were included on the home page
+ **Database Data** - The database data for this application will be a users friends. A placeholder for this information is included on the friends page
+ **WebSocket Data** - The websocket data that will be returned from the spotify API include a users total minutes listened, top songs, and top artists. Placeholders for this information are contained on the dashboard page



