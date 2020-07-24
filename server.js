const express = require("express")
const path = require("path");
const fs = require("fs");

const staticDir = path.resolve(__dirname, "public");
const dbDir = path.resolve(__dirname, "db");


// Sets up the Express server
// =============================================================
const server = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express server to handle data parsing and serve static files
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static(staticDir));

// =============================================================


// Routes
// =============================================================

server.get("/", function(request, response) {
    response.sendFile(path.join(staticDir, "index.html"));
});

server.get("/notes", function(request, response) {
    response.sendFile(path.join(staticDir, "notes.html"));
});

server.get("/api/notes", function(request, response) {
    fs.readFile(path.join(dbDir, "db.json"), 'utf8', (error, data) => {
        if (error) throw error;
        response.json(JSON.parse(data));
    })    
});

// Starts the server to begin listening
// =============================================================
server.listen(PORT, function() {
    console.log("server listening on PORT " + PORT);
});