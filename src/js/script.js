const video = document.querySelector(".video__content");
const button = document.querySelector(".video__button");
const progressBar = document.querySelector(".video__progress_filled");

function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
		button.style.opacity = "0";
	}
}
button.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

video.addEventListener('click', function() {
	playVideo();
});
  
button.addEventListener('click', function() {
	playVideo();
});
  
function playVideo() {
	video.play();
	
	let duration = video.duration * 1000; // s -> ms
	progressBar.style.width = '100%';
	progressBar.style.transition = `width ${duration}ms cubic-bezier(0.165, 0.84, 0.44, 1)`;
}

video.addEventListener("ended", () => {
	progressBar.style.width = '0%';
	progressBar.style.transition = 'none';
	button.style.opacity = "1";
});
  
























// // код обычного управления видео (для нормальной работы нужно выключить верхний код)

// //--------------------------------
// // управление видео кнопкой play/pause

// const video = document.querySelector(".video__content");
// const button = document.querySelector(".video__button");
// function togglePlay() {
// 	if (video.paused || video.ended) {
// 		video.play();
// 	} else {
// 		video.pause();
// 	}
// }
// function updatebutton() {
// 	button.innerHTML = video.paused ? "▶" : "❚❚";
// }
// button.addEventListener("click", togglePlay);
// video.addEventListener("click", togglePlay);
// video.addEventListener("play", updatebutton);
// video.addEventListener("pause", updatebutton);

// video.addEventListener("mouseover", () => {
// 	button.style.opacity = "1";
// });
// button.addEventListener("mouseover", () => {
// 	button.style.opacity = "1";
// });

// video.addEventListener("mouseout", () => {
// 	if (!video.paused) {
// 		button.style.opacity = "0";
// 	}
// });


// // --------------------------------
// // загрузка таймлайна по мере воспроизведения видео

// const progressBar = document.querySelector(".video__progress_filled");

// function handleProgress() {
// 	const progressPercentage = (video.currentTime / video.duration) * 100;
// 	progressBar.style.width = `${progressPercentage}%`;
// }

// video.addEventListener("timeupdate", handleProgress);


// // --------------------------------
// // ручное переключение видео кликом по таймлайну

// const progress = document.querySelector(".video__progress");

// function scrub(e) {
// 	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
// 	video.currentTime = scrubTime;
// }

// progress.addEventListener("click", scrub);
// let mousedown = false;
// progress.addEventListener("mousedown", () => (mousedown = true));
// progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
// progress.addEventListener("mouseup", () => (mousedown = false));