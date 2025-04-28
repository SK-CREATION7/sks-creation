const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const uploadInput = document.getElementById('upload');

chatForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const file = uploadInput.files[0];
    const text = userInput.value;

    if (file) {
        const fileName = file.name;
        addMessage(`Uploaded image: ${fileName}`, 'user');
    }

    if (text.trim()) {
        addMessage(text, 'user');
        botReply(text);
    }

    userInput.value = '';
    uploadInput.value = '';
});

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userText) {
    setTimeout(() => {
        addMessage(`Searching best deals for "${userText}"... (AI response simulated)`, 'bot');
    }, 100);
}
