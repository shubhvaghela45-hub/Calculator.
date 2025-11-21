let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let interactiveBg = document.querySelector('.interactive-bg');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            // Prevent starting with operators or invalid sequences
            if (string === "" && ['+', '-', '*', '/', '%', '.'].includes(e.target.innerHTML)) {
                return;
            }
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

// Interactive background effects
interactiveBg.addEventListener('mousemove', (e) => {
    const particle = document.createElement('div');
    particle.classList.add('river-particle');
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    document.body.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 2000);
});

interactiveBg.addEventListener('click', (e) => {
    for (let i = 0; i < Math.random() * 5 + 5; i++) { // 5-10 droplets
        const droplet = document.createElement('div');
        droplet.classList.add('droplet');
        droplet.style.left = `${e.clientX + (Math.random() - 0.5) * 100}px`; // Random offset
        droplet.style.top = `${e.clientY}px`;
        document.body.appendChild(droplet);
        
        // Remove droplet after animation
        setTimeout(() => {
            droplet.remove();
        }, 3000);
    }
});