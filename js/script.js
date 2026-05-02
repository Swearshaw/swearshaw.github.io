// 网站搜索功能
function searchSite() {
    // 获取搜索关键词
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!searchTerm) {
        alert('请输入搜索关键词！');
        return;
    }

    // 获取页面所有文本内容
    const allText = document.body.innerText.toLowerCase();
    
    // 检查是否包含关键词
    if (allText.includes(searchTerm)) {
        // 如果找到，滚动到第一个匹配位置（简单实现）
        alert(`找到包含"${searchTerm}"的内容！`);
        // 更高级的实现：高亮显示所有匹配项
        highlightSearchResults(searchTerm);
    } else {
        alert(`未找到包含"${searchTerm}"的内容。`);
    }
}

// 高亮显示搜索结果
function highlightSearchResults(term) {
    const bodyText = document.body.innerHTML;
    const regex = new RegExp(`(${term})`, 'gi');
    const newHtml = bodyText.replace(regex, '<span style="background-color: #fef3c7; color: #d97706;">$1</span>');
    document.body.innerHTML = newHtml;
}

// 按回车键也能搜索
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchSite();
    }
});