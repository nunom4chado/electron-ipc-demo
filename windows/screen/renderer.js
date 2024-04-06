const video = document.getElementById('video');

electronAPI.onUpdateUrl((url) => {
    console.log(url);

    let source = document.createElement('source');

    source.setAttribute('src', url);
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    video.play();
})