import express from "express"
import http from "http"
import createGame from "./public/game.js"


const app = express()
const server = http.createServer(app)

app.use(express.static("public"))

const game = createGame()
game.addPlayer({ playerId: "player1", playerX: 0, playerY: 0 });
game.addFruit({ fruitId: "maça", fruitX: 2, fruitY: 3 });
game.addFruit({ fruitId: "uva", fruitY: 4, fruitX: 6 });
game.addFruit({ fruitId: "banana", fruitY: 8, fruitX: 2 });

console.log(game.state)

server.listen(3000, ()=>{
    console.log(`> Server listening at port: 3000`)
})