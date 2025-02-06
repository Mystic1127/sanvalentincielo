document.addEventListener("DOMContentLoaded", () => {
    const buttonNo = document.querySelector('#no');
    const buttonYes = document.querySelector('#yes');
    const message = document.querySelector('#message');
    const snowContainer = document.querySelector('#snow');
    const card = document.querySelector('.card');
    const gifs = document.querySelectorAll('.gif');

    let fontSize = 2;
    let clickCount = 0;

    let messages = [
        '¿Estás segura?',
        'Piénsalo bien',
        'Piénsalo muy bien',
        'Piénsalo otra vez :(',
        'Sabes que hay un botón verde al lado izquierdo de este, no? :)'
    ];

    function moveButton(button) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;

        const maxX = windowWidth - buttonWidth;
        const maxY = windowHeight - buttonHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        button.style.position = 'fixed';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    }

    buttonNo.addEventListener('click', () => {
        clickCount++;
        fontSize += 0.5;
        buttonYes.style.fontSize = `${fontSize}rem`;

        if (clickCount < 6) {
            const indexRandom = Math.floor(Math.random() * messages.length);
            buttonNo.textContent = messages[indexRandom];
        } else {
            buttonNo.textContent = "Ahora intenta hacerle click pues. Ya no puedesss";
            buttonNo.style.position = 'absolute';
        }
    });

    buttonNo.addEventListener('mouseover', () => {
        if (clickCount >= 6) {
            moveButton(buttonNo);
        }
    });

    buttonYes.addEventListener('click', () => {
        message.style.display = 'flex';
        card.classList.add('flipped');
    });

    function createSnow() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '🌷';

        let startX = Math.random() * 100;
        let size = Math.random() * 20 + 10;

        snowflake.style.left = startX + 'vw';
        snowflake.style.fontSize = size + 'px';
        snowflake.style.animationDuration = Math.random() * 5 + 3 + 's';

        snowContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 8000);
    }

    setInterval(createSnow, 150);

    // Reiniciar GIFs cada 3 segundos para que se repitan bien
    setInterval(() => {
        gifs.forEach((gif) => {
            const src = gif.src;
            gif.src = "";
            setTimeout(() => {
                gif.src = src;
            }, 10);
        });
    }, 3000);
    
});
