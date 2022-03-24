
function remColor() {
    let tiles = document.querySelectorAll('.square')

    var size = -1;
    while (size < 1 || size > 100) {
        size = window.prompt('Enter A Number 1 - 100');
    }
    //console.log(size)
    tiles.forEach(tile => {
        tile.remove();
    })
    createGrid(size);
}


function createGrid(size = 16) {
    let flexSz = 100 / size;

    for (let i = 0; i < size; i++)
        for (let j = 0; j < size; j++) {
            {
                const content = document.createElement('div');
                content.classList.add('square');
                content.style.flex = '1 1 ' + flexSz + '%';
                container.appendChild(content);
            }
        }

    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'red';
        })
    });
}


const container = document.querySelector('#container');

createGrid();



const btn = document.querySelector('button');
btn.addEventListener('click', remColor);

