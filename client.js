const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // when connected, print to console 
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MKS");
  });

  // listen to messages from the server and print to screen
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect,
};