import { serve } from "bun";

serve({
    port: 3001,
    fetch(req) {
        const url = new URL(req.url);

        if (url.pathname === '/favicon.ico') {
            return new Response(null, { status: 204 }); // Повертає порожній контент
          }

        // Головна сторінка
        if (url.pathname === "/") {
            return new Response(Bun.file("./public/index.html"), {
                headers: { "Content-Type": "text/html" },
            });
        }
        

        // Обробка статичних файлів
        try {
            return new Response(Bun.file("." + url.pathname));
        } catch {
            return new Response("Not Found", { status: 404 });
        }
    },
});

console.log("Frontend running on http://localhost:3001");
