# February 28th Notes

#### Major Purposes of Javascript
+ Enhances user interaction and experience on web pages.
+ Enables dynamic content updates without needing to reload the page.
+ Allows for client-side script to interact with the user and make asynchronous calls to the server.

#### Javascript Functions
+ Blocks of code designed to perform a particular task, which can be executed when "called" by their name.
  ```javascript
  function myFunction(p1, p2) {
    return p1 * p2;
  }
  ```

##### Local Storage
+ A way to store data on the client's browser that persists even after the browser window is closed
```javascript
    localStorage.setItem('key', 'value');
    let data = localStorage.getItem('key');
```

##### React Next JS States
+ States in Next.js (React framework) are used to manage data that changes over time in your application
+ Rendered in the client side

##### Server vs Client
+ Server: The provider of resources, data, and services. It processes requests from clients.
+ Client: The requester of resources, data, and services. It consumes and presents data provided by the server.

#### Manipulating DOM
+ JavaScript can manipulate the Document Object Model (DOM) to dynamically change HTML and CS
+ Have to be careful because hackers can use this method to obtain sensitive user information