var currentTextIndex = 0;
var currentExclamationCount = 0;
var textToAdd = "안녕하세요";

var r = 0;
var g = 0;
var b = 0;

var intervalId;

// 오디오 재생
window.onload = function() {
    startAddingText();
    startBackgroundAnimation();

    var audio = document.getElementById("myAudio");
    audio.play();
};

// 텍스트 추가
function startAddingText() {
var element = document.querySelector(".quote4");
element.textContent = ""; // 초기화

intervalId = setInterval(function() {
    if (currentTextIndex < textToAdd.length) {
        element.textContent += textToAdd[currentTextIndex];
        currentTextIndex++;
    }
}, 750); // 0.75초마다 한 번씩 실행

}

// 배경색 조작
function startBackgroundAnimation() {
    setInterval(function() {
        // RGB 값을 1씩 증가
        r = (r + 1) % 256;
        g = (g + 1) % 256;
        b = (b + 1) % 256;
        
        // 새로운 RGB 값으로 배경색 설정
        document.getElementById("bg").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        
    }, 5000); // 5초마다 배경색 업데이트
}