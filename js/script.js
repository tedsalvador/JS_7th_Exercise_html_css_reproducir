document.addEventListener('DOMContentLoaded', () => {
    const emojis = ["😀", "😂", "🥰", "😎", "😭", "🤔", "😴", "🤯", "😱", "🤩", "😍", "🥳", "😜", "😷", "🤑", "🙄"];
    const emojiContainer = document.getElementById('emojiContainer');

    emojis.forEach((emoji, index) => {
        const emojiDiv = document.createElement('div');
        emojiDiv.className = 'emoji-item';
        emojiDiv.innerText = emoji;
        emojiContainer.appendChild(emojiDiv);

        // Add fade-in/fade-out effect with a random delay
        setTimeout(() => {
            startFadeEffect(emojiDiv);
        }, index * 1000);  // Delay each emoji animation start by index * 1 second
    });

    function startFadeEffect(element) {
        setInterval(() => {
            element.classList.add('hidden');
            setTimeout(() => {
                element.classList.remove('hidden');
            }, 1000); // 1 second to fade out and then fade in
        }, 3000); // Every 3 seconds
    }
});
