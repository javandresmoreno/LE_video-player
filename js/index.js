const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log('Le diste clic al botón de play')
}

function handlePause() {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
    console.log('Le diste clic al botón de pausa')
}

$backward.addEventListener('click', handleBackward)

function handleBackward() {
    //$video.currentTime = $video.currentTime - 10;
    $video.currentTime -= 10;
    console.log("Para atrás 10 segundos", $video.currentTime)
}

$forward.addEventListener('click', handleForward)

function handleForward() {
    //$video.currentTime = $video.currentTime + 10;
    $video.currentTime += 10;
    console.log("Para adelante 10 segundos", $video.currentTime)
}

/* Configuración del input range para controlar el video */ 

const $progress = document.querySelector('#video_progress')

// Evento que me permite saber los metadatos del video una vez se cargue. 
$video.addEventListener('loadedmetadata', handleLoaded);

// Evento de progreso de mi video 
$video.addEventListener('timeupdate', handleTimeUpdate);

function handleLoaded() {
    $progress.max = $video.duration
    console.log('ha cargado mi video', $video.duration);
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime;
    // console.log('tiempo actual', $video.currentTime)
}

// el evento de mover la barra de progreso se llama input en el addEventListener
$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value; 
}
