// Création de la connexion WebSocket
const socket = new WebSocket('wss://votre-serveur-websocket');  // Remplacez par l'URL de votre serveur WebSocket

// Récupération des éléments du DOM
const textarea = document.getElementById('texte');
const texteAffiche = document.getElementById('texte-affiche');

// Lorsqu'un utilisateur tape dans le champ, on envoie les données en temps réel
textarea.addEventListener('input', () => {
  const texte = textarea.value;
  socket.send(texte);  // Envoi du texte au serveur
});

// Lorsque le serveur envoie des données, on met à jour le texte affiché en temps réel
socket.addEventListener('message', (event) => {
  texteAffiche.textContent = event.data;
});

