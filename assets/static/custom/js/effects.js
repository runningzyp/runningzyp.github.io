// static/custom/js/effects.js

// 礼花效果函数
const triggerConfetti = (s) => {
    const confettiContainer = document.getElementById(s)
    confettiContainer.classList.add("button-hover");
    // debugger;

    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        const x = (Math.random() * 200 - 100) + "vw";
        const y = (Math.random() * 200 - 100) + "vh";

        confetti.style.setProperty('--x', x);
        confetti.style.setProperty('--y', y);
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => confettiContainer.classList.remove('button-hover'), 200); // 礼花效果持续 1 秒
};


// 随机切换礼花或聚光灯
const triggerRandomEffect = (s) => {
    const random = Math.random();
    if (random < 1) {
        triggerConfetti(s); // 50% 概率触发礼花效果
    } else {
        triggerSpotlight(); // 50% 概率触发聚光灯效果
    }
};

// 将 triggerRandomEffect 函数暴露到全局
window.triggerRandomEffect = triggerRandomEffect;
