//Keys

let keyUp = document.getElementById('up');
let keyLeft = document.getElementById('left');
let keyRight = document.getElementById('right');
let keyDown = document.getElementById('down');
let enter = document.getElementById('enter');

document.addEventListener('keydown', function(e){
        switch (e.key){
            case 'ArrowUp':
                keyUp.style.visibility = 'visible';
                break;
            case 'ArrowDown':
                keyDown.style.visibility = 'visible';
                break;
            case 'ArrowLeft':
                keyLeft.style.visibility = 'visible';
                break;
            case 'ArrowRight':
                keyRight.style.visibility = 'visible';
                break;
            case 'Enter':
                enter.click();
        };
});

document.addEventListener('keyup', function(e){
    switch (e.key){
        case 'ArrowUp':
            keyUp.style.visibility = 'hidden';
            break;
        case 'ArrowDown':
            keyDown.style.visibility = 'hidden';
            break;
        case 'ArrowLeft':
            keyLeft.style.visibility = 'hidden';
            break;
        case 'ArrowRight':
            keyRight.style.visibility = 'hidden';
            break;
    };
});