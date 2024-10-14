// static/custom/js/effects.js

// 礼花效果函数
const triggerConfetti = () => {
    const confettiContainer = document.createElement("div");
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        const x = (Math.random() * 200 - 100) + "vw";
        const y = (Math.random() * 200 - 100) + "vh";

        confetti.style.setProperty('--x', x);
        confetti.style.setProperty('--y', y);
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => confettiContainer.remove(), 1000); // 礼花效果持续 1 秒
};

// 聚光灯效果函数
const triggerSpotlight = () => {
    const overlay = document.createElement("div");
    overlay.classList.add("dark-overlay");
    document.body.appendChild(overlay);

    const spotlight = document.createElement("div");
    spotlight.classList.add("spotlight");
    document.body.appendChild(spotlight);

    setTimeout(() => {
        overlay.remove();
        spotlight.remove();
    }, 2000); // 聚光灯效果持续 2 秒
};

// 随机切换礼花或聚光灯
const triggerRandomEffect = () => {
    const random = Math.random();
    if (random < 1) {
        triggerConfetti(); // 50% 概率触发礼花效果
    } else {
        triggerSpotlight(); // 50% 概率触发聚光灯效果
    }
};

// 将 triggerRandomEffect 函数暴露到全局
window.triggerRandomEffect = triggerRandomEffect;
