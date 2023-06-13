
//When page loads
window.onload = function () {
    // set title (attractionTitle) as currentDataTranslate.
    let attractionTitle = document.getElementById('attractionTitle');
    attractionTitle.setAttribute('dataTranslate', localStorage.getItem('currentDataTranslate'));

    // set description (attractionText) as currentDataTranslate + '_desc'
    let textElement = document.getElementById('attractionText');
    let currentAttraction = localStorage.getItem('currentDataTranslate');
    
    let translateKey = currentAttraction + '_desc';
    textElement.setAttribute('dataTranslate', translateKey);

    // set video (video) element's videoKey as currentDataTranslate + '_video'
    let videoElement = document.getElementById('video');
    let videoKey = currentAttraction + '_video';
    videoElement.setAttribute('videoKey', videoKey);

    // get video source and assign it to the video element
    let videoSource = videos[videoKey];
    videoElement.setAttribute('src', videoSource);


    translatePage(); // do this last
}