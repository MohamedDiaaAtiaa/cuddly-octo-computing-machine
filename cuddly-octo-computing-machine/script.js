const btn = document.getElementById('computeBtn');
const output = document.getElementById('output');
const octo = document.getElementById('octo');
const mouth = octo.querySelector('.mouth');
const boop = document.getElementById('boop');
const ping = document.getElementById('ping');

const faces = {
  idle: "^‿^",
  compute: "•̀ᴗ•́",
  tired: "¬_¬"
};

const results = [
  "💡 Idea generated!",
  "✨ Task completed!",
  "📊 Data analyzed!",
  "🐙 Octo approves!",
  "💾 Saved to RAM!",
  "🧠 AI neural surge!"
];

function typeText(text, element) {
  let i = 0;
  element.textContent = '';
  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i === text.length) clearInterval(interval);
  }, 40);
}

btn.addEventListener('click', () => {
  octo.classList.add('computing');
  btn.disabled = true;
  mouth.textContent = faces.compute;
  boop.play();
  typeText("Computing...", output);

  setTimeout(() => {
    const message = results[Math.floor(Math.random() * results.length)];
    mouth.textContent = faces.idle;
    ping.play();
    typeText(message, output);
    octo.classList.remove('computing');
    btn.disabled = false;
  }, 2500);
});
