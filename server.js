const express = require("express")
const path = require("path");

const staticDir = path.resolve(__dirname, "public");


// Sets up the Express server
// =============================================================
const server = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express server to handle data parsing
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static(staticDir));

// =============================================================


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

server.get("/", function(request, response) {
    response.sendFile(path.join(staticDir, "index.html"));
});

// Starts the server to begin listening
// =============================================================
server.listen(PORT, function() {
    console.log("server listening on PORT " + PORT);
});