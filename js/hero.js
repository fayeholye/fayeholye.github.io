document.addEventListener('DOMContentLoaded', function () {
    const subtitles = ["Explorer of battery technology", "Innovator in energy solutions", "Passionate about sustainability"];
    let index = 0;
    const subtitleElement = document.querySelector('.hero-subtitle'); // 根据你的 HTML 结构调整选择器

    function changeSubtitle() {
        subtitleElement.textContent = subtitles[index];
        index = (index + 1) % subtitles.length; // 循环索引
    }

    changeSubtitle(); // 初始化第一个副标题
    setInterval(changeSubtitle, 3000); // 每 3 秒更换一次副标题
});
