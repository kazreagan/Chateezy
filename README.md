# Chateezy Chat Application

Chateezy is a simple chat application that allows users to interact with a chatbot. The chatbot provides predefined responses to user inputs, creating a realistic chat experience with animations and sound effects.

## Features

- User and bot messages with animations
- Sound effects for user input and bot responses
- Responsive design with a fixed-height chat window
- Smooth scrolling for chat messages

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

### Prerequisites

To run this project, you need a web browser that supports HTML5, CSS3, and JavaScript.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/Chateezy.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Chateezy
    ```

3. Open `index.html` in your web browser:

    ```bash
    open index.html
    ```

## Project Structure

- index.html: The main HTML file that contains the structure of the chat application.
- style.css: The CSS file that contains styles and animations for the chat application.
- script.js: The JavaScript file that contains the logic for handling user input, bot responses, and playing sound effects.
- user-tone.mp3: The sound effect for user input.
- bot-tone.mp3: The sound effect for bot responses.

## Usage

1. Open index.html in your web browser.
2. Type a message in the input field and press "Enter" or click the "Send" button.
3. The chatbot will respond with a predefined message, and sound effects will play for both user input and bot responses.

## Customization

You can customize the chatbot responses by modifying the `botResponses` object in `script.js`. Add or change key-value pairs to update the bot's responses to specific user inputs.

```javascript
const botResponses = {
    'Hi': 'Hello! How can I assist you today?',
    'Can you help me?': 'Of course! What do you need help with?',
    'I have a question': 'Sure, feel free to ask your question.',
    'What can you do?': 'I can chat with you and answer your questions.',
    'Tell me more': 'I am a chatbot designed to assist you with various tasks. How can I help you today?',
    'What is your name?': 'I am GitHub Copilot, your AI assistant.',
    'How are you?': 'I am just a bot, but I am here to help you!',
    'What is the weather like?': 'I am not equipped to provide weather updates, but you can check your local weather service.',
    'Thank you': 'You are welcome! Is there anything else I can help with?',
    'Goodbye': 'Goodbye! Have a great day!'
};

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [Manrope](https://fonts.google.com/specimen/Manrope) font used in the project.
