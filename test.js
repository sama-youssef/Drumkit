function playSound(e){
    var audio = document.querySelector(`audio[data-key="${e.code}"]`);
    var key = document.querySelector(`div[data-key="${e.code}"]`);
    
    if(!audio){return;}
    key.classList.add('playing');

    console.log(audio);
    audio.currentTime=0;
    audio.play();
}

function removeTransition(e){
    if (e.propertyName !== 'transform'){return;}
    this.classList.remove('playing');
}

var keys = document.getElementsByClassName('key');

for (i=0; i<keys.length; i++){
    keys[i].addEventListener('transitionend', removeTransition);
}

window.addEventListener('keydown', playSound);
