// Mood Tracker
document.getElementById('trackMood').addEventListener('click', () => {
    const mood = document.getElementById('moodSelect').value;
    const output = document.getElementById('moodOutput');
    output.innerText = `You selected: ${mood}. Keep monitoring your feelings!`;
});

// AI Chat (simple mock)
const chatBox = document.getElementById('chatBox');
document.getElementById('sendMsg').addEventListener('click', () => {
    const input = document.getElementById('chatInput').value;
    if (!input) return;
    const userMsg = document.createElement('p');
    userMsg.classList.add('user-msg');
    userMsg.innerText = input;
    chatBox.appendChild(userMsg);

    // Mock AI response
    const botMsg = document.createElement('p');
    botMsg.classList.add('bot-msg');
    botMsg.innerText = "Thank you for sharing. Remember to breathe and take small steps.";
    chatBox.appendChild(botMsg);

    document.getElementById('chatInput').value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
});

// Daily Journal
document.getElementById('saveJournal').addEventListener('click', () => {
    const entry = document.getElementById('journalInput').value;
    if (!entry) return;
    const output = document.getElementById('journalOutput');
    output.innerText = `Saved Entry: "${entry}"`;
    document.getElementById('journalInput').value = '';
});

// Music & Movies
const entertainment = [
    "🎵 Song: 'Here Comes the Sun' by The Beatles",
    "🎵 Song: 'Happy' by Pharrell Williams",
    "🎬 Movie: 'Inside Out' - a feel-good animated movie",
    "🎬 Movie: 'The Pursuit of Happyness' - inspiring true story"
];
document.getElementById('getEntertainment').addEventListener('click', () => {
    const item = entertainment[Math.floor(Math.random() * entertainment.length)];
    document.getElementById('entertainmentOutput').innerText = item;
});
