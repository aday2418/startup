"use client"

import { createContext, useEffect, useState } from "react"
import useSWR from 'swr'
import { fetcher } from "../../lib/fetcher"

export const UsersOnlineContext = createContext()

export default function UsersOnlineProvider({children}){
    const { data, isLoading } = useSWR("/api/user", fetcher)
    const [usersOnline, setUsersOnline] = useState([])
    const [connected, setConnected] = useState(false)
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // This ensures the effect only runs once the user data is loaded and a connection hasn't been established yet.
        const username = data?.data;
        if (username && !connected) {
          // Initialize WebSocket connection
          const newSocket = new WebSocket(`${process.env.NEXT_PUBLIC_NODE_ENV == 'DEV' ? "ws://localhost:8080" : "wss://websocket.soundcircle.xyz"}`); // Use your WebSocket server URL
    
          newSocket.onopen = () => {
            // Connection established
            setConnected(true);
            const message = {
              eventType: 'newUser',
              data: {
                username: username
              }
            };
            // Send the message as soon as the connection is open
            newSocket.send(JSON.stringify(message));
          };
    
          newSocket.onmessage = (event) => {
            const res = JSON.parse(event.data)

            if(res.eventType == 'usersOnline') {
                setUsersOnline(res.data)
            }

            // Here you can handle incoming messages, for example, update usersOnline state
          };
    
          newSocket.onclose = () => {
            setConnected(false);
          };
    
          // Save the socket in state
          setSocket(newSocket);
        }

        // Cleanup function to close the socket when the component unmounts or when `data` changes
        return () => {
            socket && socket.close();
        };
      }, [data]);

      console.log(usersOnline)

      //console.log("Checked again", usersOnline)

    return(
        <UsersOnlineContext.Provider value={{usersOnline}}>
            {children}
        </UsersOnlineContext.Provider>
    )
}