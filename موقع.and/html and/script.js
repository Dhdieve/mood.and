let userName = '';

function checkAuth() {
    const authCode = document.getElementById('authCode').value;
    if (authCode === '119087') {
        document.getElementById('auth').style.display = 'none';
        document.getElementById('nameInput').style.display = 'block';
    } else {
        alert('رمز التحقق غير صحيح');
    }
}

function submitName() {
    userName = document.getElementById('userName').value;
    if (userName) {
        document.getElementById('nameInput').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    } else {
        alert('يرجى إدخال اسمك');
    }
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    if (message) {
        const messagesDiv = document.getElementById('messages');
        const messageBubble = document.createElement('div');
        messageBubble.className = 'messageBubble';
        messageBubble.innerHTML = `<strong>${userName}:</strong> ${message}`;
        messagesDiv.appendChild(messageBubble);
        messageInput.value = '';
    }
}

document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const messagesDiv = document.getElementById('messages');
        const messageBubble = document.createElement('div');
        messageBubble.className = 'messageBubble';
        messageBubble.innerHTML = `<strong>${userName}:</strong> <a href="${URL.createObjectURL(file)}" download>${file.name}</a>`;
        messagesDiv.appendChild(messageBubble);
    }
});

function toggleInbox() {
    const inbox = document.getElementById('inbox');
    if (inbox.style.display === 'none') {
        inbox.style.display = 'block';
    } else {
        inbox.style.display = 'none';
    }
}

function createPoll() {
    const pollQuestion = document.getElementById('pollQuestion').value;
    const pollOption1 = document.getElementById('pollOption1').value;
    const pollOption2 = document.getElementById('pollOption2').value;
    if (pollQuestion && pollOption1 && pollOption2) {
        document.getElementById('pollQuestionDisplay').innerText = pollQuestion;
        document.getElementById('pollResults').style.display = 'block';
    } else {
        alert('يرجى إدخال جميع الحقول');
    }
}

function vote(option) {
    const pollVotes = document.getElementById('pollVotes');
    const voteCount = pollVotes[option] || 0;
    pollVotes[option] = voteCount + 1;
    pollVotes.innerHTML = `الخيار الأول: ${pollVotes.option1 || 0} صوت<br>الخيار الثاني: ${pollVotes.option2 || 0} صوت`;
}
