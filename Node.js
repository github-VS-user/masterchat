const WebSocket = require('ws');

// Création du serveur WebSocket
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Un utilisateur s\'est connecté.');

  // Lorsqu'un message est reçu, on le renvoie à tous les clients connectés
  ws.on('message', (message) => {
    console.log('Message reçu:', message);
    // Diffusion du message à tous les clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Un utilisateur s\'est déconnecté.');
  });
});

console.log('Serveur WebSocket en cours d\'exécution sur ws://localhost:8080');
