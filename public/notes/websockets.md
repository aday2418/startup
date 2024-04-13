# March 29nd Notes


### WebSockets

- **Overview**: WebSockets provide a full-duplex communication channel over a single, long-lived connection, enabling real-time data transfer between clients and servers.
- **Key Features**:
  - **Persistent Connection**: Unlike HTTP, the connection stays open, facilitating real-time data transfer.
  - **Low Latency**: Reduces the overhead and delay in communications, crucial for interactive applications.
- **Use Cases**:
  - Real-time applications like gaming, live sports updates, and chat applications.
  - Financial applications that require real-time updates of stock prices or trading platform data.

### Creating a WebSocket Server in Express with `ws`

- **Overview**: Utilizing the `ws` library, an Express app can handle WebSocket connections.
- **Steps**:
  1. **Installation**: Install `express` and `ws` via npm.
     - `npm install express ws`
  2. **Server Setup**: Integrate WebSockets into an Express server.
     - Use the `WebSocket.Server` to create a WebSocket server that attaches to an existing HTTP server.
  3. **Handling Connections**: Implement event listeners to handle `connection`, `message`, and `close` events.

### Creating WebSocket Clients in JavaScript

- **Overview**: Browsers have built-in `WebSocket` support to connect to WebSocket servers.
- **Steps**:
  1. **Initialization**: Create a new WebSocket instance pointing to the URL of the WebSocket server.
     - `const socket = new WebSocket('ws://localhost:3000');`
  2. **Event Handling**: Define event handlers for `open`, `message`, `error`, and `close` events.
  3. **Sending Messages**: Use `socket.send(data)` to send data to the server.

### Transferring Data Over WebSockets

- **Overview**: Data transfer via WebSockets can be both text and binary, making it versatile for different needs.