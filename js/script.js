document.addEventListener('DOMContentLoaded', () => {
    const emojis = ["🧸","​✈️​","🌊​","🙏​","💪​","🤡","​👻","​🤑​","🥳​","🕊️​","🦈","​🍨","​🍇","​🚴​"," ", " "];
    const colors = ["#FFB6C1", "#ADD8E6", "#90EE90", "#FFA07A", "#9370DB", "#F0E68C", "#DDA0DD", "#87CEFA", "#FFC0CB", "#40E0D0", "#FF6347", "#EE82EE", "#F5DEB3", "#9ACD32","#f0f0f0","#f0f0f0"];
    const emojiContainer = document.getElementById('emojiContainer');

    // Crear y añadir los emojis al contenedor
    emojis.forEach((emoji, index) => {
        const emojiDiv = document.createElement('div');
        emojiDiv.className = 'emoji-item';
        emojiDiv.innerText = emoji;
        emojiDiv.style.backgroundColor = colors[index];
        emojiContainer.appendChild(emojiDiv);
    });

    const emojiItems = document.querySelectorAll('.emoji-item');

    function fadeEffect(index) {
        const element = emojiItems[index];
        element.classList.add('hidden');
        setTimeout(() => {
            element.classList.remove('hidden');
        }, 1000); // 1 segundo para desvanecerse y luego reaparecer
    }

    function startSequentialFade() {
        let index = 0;
        setInterval(() => {
            fadeEffect(index);
            index = (index + 1) % emojiItems.length;
        }, 2000); // Cada 2 segundos desaparece y reaparece una celda
    }

    startSequentialFade();
});
