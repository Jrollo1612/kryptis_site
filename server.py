import http.server
import socketserver

PORT = 80

class Handler(http.server.SimpleHTTPRequestHandler):
    pass

with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
    print("🚀 kryptis.rol sur port 80")
    httpd.serve_forever()