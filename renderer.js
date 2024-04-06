const inputfield = document.getElementById('video-url');
const screenBtn = document.getElementById('screen-btn');

screenBtn.addEventListener('click', () => {
    const url = inputfield.value.trim();
    
    if (url)
        openNewScreen.openUrl(url);
});