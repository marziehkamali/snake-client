// establishes a connection with the game server

const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
  });

  // interpret incoming data as text
  
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MKS");

  /*   setTimeout(() => {
      conn.write("Move: up"); 
    }, 50);

    setTimeout(() => {
      conn.write("Move: up"); 
    }, 500);

    setTimeout(() => {
      conn.write("Move: up"); 
    }, 1000);

    setTimeout(() => {
      conn.write("Move: right"); 
    }, 1500);

    setTimeout(() => {
      conn.write("Move: down"); 
    }, 2000);
 */
  });

  return conn;
};

module.exports = {
  connect,

};