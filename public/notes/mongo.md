# March 22nd Notes

### Mongo DB

- **Overview**: MongoDB is a NoSQL database that provides high performance, high availability, and easy scalability.
- **Features**:
  - Document-oriented storage: JSON-like documents with dynamic schemas offer simplicity and power.
  - Full Index Support: Supports secondary indexes, including geospatial indexes.
  - Replication & High Availability: Automatic failover and data redundancy with replica sets.
- **Use Cases**:
  - Big Data applications
  - Content Management Systems
  - Easy Data Storage (No SQL)

### Secure Login + Authentication

- **Overview**: Secure login and authentication mechanisms are critical for protecting user data and ensuring that access is granted only to authenticated users.
- **Features**:
  - Password hashing: Storing passwords in a form that protects them from being stolen.
- **Use Cases**:
  - User authentication in web and mobile applications
  - Protecting sensitive information

### Generating Tokens

- **Overview**: Token generation is a method used in authentication processes to create a unique identifier (token) that represents a user's authentication or session state.
- **Types**:
  - **Access Tokens**: Short-lived tokens used to access resources.
  - **Refresh Tokens**: Longer-lived tokens used to obtain new access tokens after they expire.
  - **JWT (JSON Web Tokens)**: A compact, URL-safe means of representing claims to be transferred between two parties.
- **Use Cases**:
  - Maintaining user sessions in web applications
  - Refreshing the session to allow users to stay on the site without having to login again
