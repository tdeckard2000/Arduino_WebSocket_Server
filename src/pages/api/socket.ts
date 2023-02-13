import { Server } from "socket.io";

const SocketHandler = (req: any, res: any) => {
  if (res.socket.server.io) {
    console.warn("Socket Already Running");
  } else {
    console.warn("Initializing Socket");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", (socket) => {
        socket.on('input-change', msg => {
            console.warn("Socket Message: ", msg);
            socket.broadcast.emit('update-input', msg);
        })
    });
  }
  res.end();
};

export default SocketHandler;
