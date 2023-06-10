
const congratulationsSquare = document.querySelector('.congratulations')  
const dissapointedSquare = document.querySelector('.dissapointed')
const destinationSquare = document.querySelector('.drop-here') 
const paragraph = document.querySelector('.paragraph-remove-when-dropped')


congratulationsSquare.addEventListener('dragstart', dragStart)
dissapointedSquare.addEventListener('dragstart', dragStart)
destinationSquare.addEventListener('drop', drop)

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.classList);
    setTimeout(() => { 
    e.target.classList.add('hide');
    }, 0)
    console.log('drag starts...')
}



const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragover', dragOver);
    square.addEventListener('dragleave', dragLeave);
    square.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    
}

function dragOver(e) {
    e.preventDefault();
    
}

function dragLeave(e) {
    paragraph.classList.add('hide')
}

function drop(e) {
   
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    e.target.appendChild(draggable);

    draggable.classList.remove('hide');

    if(congratulationsSquare === draggable) {
        startConfetti()
     } else if (dissapointedSquare === draggable) {
        stopConfetti();
        let audioBoo = new Audio('assets/Booing-A4-www.fesliyanstudios.com.mp3');
        audioBoo.play();
     }

    console.log(destinationSquare)
}






