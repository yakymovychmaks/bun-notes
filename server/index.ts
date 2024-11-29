import {serve} from "bun";

const notes = [{ id: 1, text: "Hello, Bun!" }];


serve({
    port: 3000,
    fetch(req) {
        if(req.url === "http://localhost:3000/api/notes"){
            console.log("request url", req.url)
            return new Response(JSON.stringify(notes),{
                headers: { "Content-Type": "application/json" },
            });
        }
        return new Response("Not Found", { status: 404 });
    },
});

console.log("Server running on http://localhost:3000");