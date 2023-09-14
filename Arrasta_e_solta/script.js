// document.querySelector('.neutralArea').addEventListener('click', (e) => {
//     console.log('Target!', e.target);
//     console.log('current Target', e.currentTarget);
// });



// Function item
function dragStart(e) {
    e.currentTarget.classList.remove.add('dragging');
}
function dragEnd(e) {
    e.currentTarget.classList.remove.add('dragging');
}

// // function area

// function dragOver(e) {
//     e.preventDefault();
//     e.currentTarget.classList.add('hover');
// }
// function dragLeave(e) {
//     e.preventDefault();
//     e.currentTarget.classList.add('hover');
// }
// function drop() {
//     console.log('LIBEROU!');
// }