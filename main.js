const audios = document.querySelectorAll('audio');

audios.forEach(audio =>{
    const btn = document.createElement('button');
    btn.classList.add ('btn');
    btn.innerText = audio.getAttribute ('id');
    btn.addEventListener('click', ()=> {
        stopSound();
        const id =  audio.getAttribute ('id');
        document.getElementById (id).play ();
    });
    document.getElementById('buttons').appendChild(btn);
})

function stopSound(){
    audios.forEach(song => {
        console.log (song);
        song.pause();
        song.currentTime = 0;
    })
}
