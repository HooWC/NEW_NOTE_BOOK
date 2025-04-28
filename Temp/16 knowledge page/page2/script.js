const backToTopBtn = document.getElementById('back-to-top');

// 监听滚动事件
window.addEventListener('scroll', function() {
    // 获取滚动位置，兼容不同浏览器
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    
    if (scrollPosition > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// 点击事件 - 回到顶部
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 添加平滑滚动效果
    });
});
