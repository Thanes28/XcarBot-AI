function addMessage(text, role) {
  const welcome = document.getElementById('welcome');
  if (welcome) welcome.remove();

  const msgs = document.getElementById('messages');
  const div = document.createElement('div');
  div.className = `msg ${role}`;

  const avatarIcon = role === 'bot' ? '🚗' : '👤';
    div.innerHTML = `
    <div class="avatar">${avatarIcon}</div>
    <div class="bubble">${role === 'bot' ? marked.parse(text) : text}</div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addTyping() {
  const welcome = document.getElementById('welcome');
  if (welcome) welcome.remove();

  const msgs = document.getElementById('messages');
  const div = document.createElement('div');
  div.className = 'msg bot';
  div.id = 'typing';
  div.innerHTML = `
    <div class="avatar">🚗</div>
    <div class="bubble"><div class="typing"><span></span><span></span><span></span></div></div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById('userInput');
  const sendBtn = document.querySelector('.send-btn');
  const text = input.value.trim();

  if (!text && !selectedImageBase64) return;

  const sendingImage = selectedImageBase64;

  // Show user message with image if attached
  if (sendingImage) {
    addMessage(`<img src="${sendingImage}" alt="uploaded"/>${text || 'What is wrong with my car?'}`, 'user');
  } else {
    addMessage(text, 'user');
  }

  input.value = '';
  input.style.height = 'auto';
  removeImage();

  sendBtn.disabled = true;
  sendBtn.style.opacity = '0.5';
  addTyping();

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        message: text || 'What is wrong with my car?',
        image: sendingImage
      })
    });

    const data = await response.json();
    const typing = document.getElementById('typing');
    if (typing) typing.remove();
    addMessage(data.reply, 'bot');

  } catch (error) {
    const typing = document.getElementById('typing');
    if (typing) typing.remove();
    addMessage("⚠️ Could not connect to server. Make sure Flask is running!", 'bot');

  } finally {
    sendBtn.disabled = false;
    sendBtn.style.opacity = '1';
  }
}

function sendSuggestion(text) {
  document.getElementById('userInput').value = text;
  sendMessage();
}

function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

async function newChat() {
  // Clear backend history
    await fetch("/clear", {

        method: "POST"
    });

  // Clear frontend
  const msgs = document.getElementById('messages');
  msgs.innerHTML = `
    <div class="welcome" id="welcome">
      <div class="welcome-icon">🚗</div>
      <h2>Hi, I'm <span>Xcar AI</span></h2>
      <p>Your intelligent car assistant. Ask me anything about vehicles, maintenance, buying advice, or troubleshooting.</p>
      <div class="suggestion-grid">
        <div class="suggestion" onclick="sendSuggestion('What are the best cars to buy in 2025?')">
          <div class="s-icon">🏆</div>
          <div class="s-title">Best cars 2025</div>
          <div class="s-sub">Top picks & rankings</div>
        </div>
        <div class="suggestion" onclick="sendSuggestion('My car is making a strange noise, how do I diagnose it?')">
          <div class="s-icon">🔧</div>
          <div class="s-title">Diagnose noise</div>
          <div class="s-sub">Identify car problems</div>
        </div>
        <div class="suggestion" onclick="sendSuggestion('How do I improve my car fuel efficiency?')">
          <div class="s-icon">⛽</div>
          <div class="s-title">Save on fuel</div>
          <div class="s-sub">Efficiency tips</div>
        </div>
        <div class="suggestion" onclick="sendSuggestion('EV vs Hybrid — which should I buy?')">
          <div class="s-icon">🔋</div>
          <div class="s-title">EV vs Hybrid</div>
          <div class="s-sub">Compare powertrains</div>
        </div>
      </div>
    </div>`;
}

let selectedImageBase64 = null;

function previewImage(event){
    const file = event.target.files[0];
    if(!file) return;

    const reader = new FileReader();
    reader.onload = function(e){
        selectedImageBase64 = e.target.result;

        document.getElementById('previewImg').src = selectedImageBase64;
        document.getElementById('imagePreview').style.display = 'block';

    };

    reader.readAsDataURL(file);
}

function removeImage(){
    selectedImageBase64 = null;
    document.getElementById('imagePreview').style.display = 'none';
    document.getElementById('previewImg').src = '';
    document.getElementById('imageInput').value = '';
}

