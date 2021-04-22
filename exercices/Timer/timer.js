let btn = document.querySelector('#bouton');
let secondes = 5;



btn.addEventListener('click', () => {
    start();
})


function start() {
    let timer = setTimeout(() => {
        let p = document.createElement('p');
        p.innerHTML = `${secondes}`
        document.body.append(p);
        decompte()
    }, 1000);
    console.log(secondes);
}

// function start() {
//     let timer = setInterval(decompte, 1000);
//     let p = document.createElement('p');
//     p.innerHTML = `${secondes}`;
//     document.body.append(p);
//     console.log(secondes);
// }

function decompte() {
    if (secondes != 0) {
        secondes--;
        start();
    } else {
        stop();
    }
}

function stop() {
    let p = document.createElement('p');
    p.innerHTML = `Faire F5 pour recommencer ;) !`;
    document.body.append(p);
    restart();
}