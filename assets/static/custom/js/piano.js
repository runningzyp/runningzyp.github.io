// static/custom/js/piano.js

// 获取所有钢琴按键
const pianoKeys = document.querySelectorAll(".piano-keys .key");

// 创建一个对象来缓存所有的音频
let audioCache = {};

// 预加载所有音频
const preloadAudio = (keys) => {
    keys.forEach(key => {
        const audio = new Audio(`assets/static/tunes/${key}.wav`);
        audioCache[key] = audio; // 将每个按键的音频缓存到对象中
    });
};

// 调用预加载函数
preloadAudio(['a', 's', 'd', 'f', 'g', 'h', 'j']); // 根据实际按键名称预加载所有音频

// 播放音频函数
const playTune = (key) => {
    const audio = audioCache[key]; // 从缓存中获取音频
    if (audio) {
        audio.currentTime = 0; // 重置播放时间，确保每次按键时从头播放
        audio.play(); // 播放音频
    }

    const clickedKey = document.querySelector(`[data-key="${key}"]`);

    // A 键（黑色背景）的特殊颜色切换
    if (key === 'a') {
        clickedKey.style.color = clickedKey.style.color === "white" ? "#D3D3D3" : "white";
    }
    // J 键（白色背景）的特殊颜色切换
    else if (key === 'j') {
        clickedKey.style.color = clickedKey.style.color === "black" ? "#696969" : "black";
    }
    // 其他按键默认颜色切换逻辑
    else {
        clickedKey.style.color = clickedKey.style.color === "white" ? "black" : "white";
    }

    // 添加点击效果
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

// 绑定按键点击事件
pianoKeys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key));
});

// 监听键盘按键事件
const pressedKey = (e) => {
    if (audioCache[e.key]) playTune(e.key); // 当按下的键在缓存中存在时，播放声音
};
document.addEventListener("keydown", pressedKey);
