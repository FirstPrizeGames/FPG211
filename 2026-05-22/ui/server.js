const http = require("http");
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
};

const resolveFile = (urlPath) => {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const requested = path.join(root, cleanPath === "/" ? "index.html" : cleanPath);

  if (!requested.startsWith(root)) return null;
  if (fs.existsSync(requested) && fs.statSync(requested).isFile()) {
    return { filePath: requested, statusCode: 200 };
  }
  if (fs.existsSync(requested) && fs.statSync(requested).isDirectory()) {
    return { filePath: path.join(requested, "index.html"), statusCode: 200 };
  }

  const nestedIndex = path.join(root, cleanPath, "index.html");
  if (fs.existsSync(nestedIndex)) return { filePath: nestedIndex, statusCode: 200 };
  if (fs.existsSync(path.join(root, "404.html"))) {
    return { filePath: path.join(root, "404.html"), statusCode: 404 };
  }

  return null;
};

http
  .createServer((req, res) => {
    const resolved = resolveFile(req.url);

    if (!resolved) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const { filePath, statusCode } = resolved;

    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Server error");
        return;
      }

      res.writeHead(statusCode, {
        "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
      });
      res.end(data);
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Profile preview: http://127.0.0.1:${port}`);
  });
