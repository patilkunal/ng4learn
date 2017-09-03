const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/commander/service", router);

server.listen(8080, () => {
    console.log("Started MOCK data JSON Server ...");
});

