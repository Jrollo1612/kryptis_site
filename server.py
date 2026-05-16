import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
    print("🚀 Serveur sur http://localhost:8000")
    httpd.serve_forever()