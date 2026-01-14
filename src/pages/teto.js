import dotenv from "dotenv";

dotenv.config();

export const tetopage = (req, res) => {
    const PORT = process.env.PORT || 8080;
    const fullUrl = `http://127.0.0.1:${PORT}`; // Or use req.protocol + '://' + req.get('host')

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="${fullUrl}/styles/teto">
            <title>test</title>
        </head>
        <body>
            <div class="h-box">
                <div class="teto-img-box flip-z">
                    <img class="teto-img" src="${fullUrl}/img/teto" alt="">
                </div>
                <h1 id="title">Click</h1>
                <div class="teto-img-box">
                    <img class="teto-img" src="${fullUrl}/img/teto" alt="">
                </div>
            </div>
            <script>
                const title = document.getElementById("title");

                title.addEventListener("click", async() => {
                    const res = await fetch("${fullUrl}/random-teto-music")
                        .then(response => response.text());

                    window.location.href = \`https://www.youtube.com/watch?v=\${res}\`;
                });
            </script>
        </body>
        </html>
    `);
}