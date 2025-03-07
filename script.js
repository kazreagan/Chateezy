document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

const botResponses = {
    'Hi': 'Hello! How can I assist you today?',
    'I feel a bit stressed': 'Stress can have a big impact on your life if not handled fast enough, talk to someone close to you and seek professional help if it persists.',
    'Can you help me?': 'Of course! What do you need help with?',
    'I have a question': 'Sure, feel free to ask your question.',
    'What can you do?': 'I can chat with you and answer your questions.',
    'Tell me more': 'I am a chatbot designed to assist you with various tasks. How can I help you today?',
    'What is your name?': 'My maker Reagan,calls me Chateezy!.',
    'How are you?': 'I am just a bot, but I am here to help you!',
    'What is the weather like?': 'I am not equipped to provide weather updates, but you can check your local weather service.',
    'Thank you': 'You are welcome! Is there anything else I can help with?',
    'Goodbye': 'Goodbye! Have a great day!'
};

const userTone = new Audio('user-tone.mp3');
const botTone = new Audio('bot-tone.mp3');

function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    if (message === '') return;

    appendMessage('user', message);
    // userTone.play();
    input.value = '';

    //bot response simulation
    setTimeout(() => {
        const response = botResponses[message] || 'I am not sure how to respond to that.';
        appendMessage('bot', response);
        botTone.play();
    }, 1000);
}

function appendMessage(sender, message) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}