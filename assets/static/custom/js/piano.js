// static/custom/js/piano.js

const pianoKeys = document.querySelectorAll(".piano-keys .key");
let allKeys = [], pressedKeys = new Set();
const requiredKeys = new Set(['a', 's', 'd', 'f', 'g', 'h', 'j']);
let audio = new Audio("assets/static/tunes/a.wav"); // 默认音频

const playTune = (key) => {
    audio.src = `assets/static/tunes/${key}.wav`; // 根据按键动态设置音频
    audio.play(); // 播放音频

    const clickedKey = document.querySelector(`[data-key="${key}"]`);

    // 针对 A 键（黑色背景）的特殊颜色切换
    if (key === 'a') {
        clickedKey.style.color = clickedKey.style.color === "white" ? "#D3D3D3" : "white";
    } else if (key === 'j') { // 针对 J 键（白色背景）的特殊颜色切换
        clickedKey.style.color = clickedKey.style.color === "black" ? "#696969" : "black";
    } else { // 其他按键的默认颜色切换逻辑
        clickedKey.style.color = clickedKey.style.color === "white" ? "black" : "white";
    }

    clickedKey.classList.add("active");
    setTimeout(() => clickedKey.classList.remove("active"), 150); // 150ms 后移除 "active" 类
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => {
        playTune(key.dataset.key);
        pressedKeys.add(key.dataset.key);
        if (pressedKeys.size === requiredKeys.size) {
            window.triggerRandomEffect(); // 调用特效函数
            pressedKeys.clear(); // 清空已按下的键
        }
    });
});

const pressedKey = (e) => {
    if (allKeys.includes(e.key)) {
        playTune(e.key);
        pressedKeys.add(e.key);
        if (pressedKeys.size === requiredKeys.size) {
            window.triggerRandomEffect(); // 调用特效函数
            pressedKeys.clear(); // 清空已按下的键
        }
    }
};

document.addEventListener("keydown", pressedKey);
