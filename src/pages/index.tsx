import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
let socket: Socket;

export default function Home() {
  const [counter, setCounter] = useState(0);
  const onIncrement = () => {
    const newCount = counter + 1;
    setCounter(newCount);
    socket.emit("input-change", newCount);
  };
  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();
    socket.on("connect", () => {
      console.warn("Cliet Socket Connected");
    });
    socket.on('update-input', msg => {
      console.log("Socket Message: ", msg);
    })
  };

  useEffect(() => {socketInitializer()}, []);

  return (
    <main>
      <h2 className={styles.title}>Arduino WebSocket 🌍</h2>
      <div className={styles.counterContainer}>
        <h1 className={styles.counter}>{counter}</h1>
      </div>
      <button onClick={() => onIncrement()}>click</button>
    </main>
  );
}
