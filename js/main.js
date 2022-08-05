const battleButton = document.getElementById('battle-buton');

const playOptions = document.querySelectorAll('.player-option');
const playIcons = document.querySelectorAll('.player-option+label img');

const pcIcons = document.querySelectorAll('.pc-option+label img');

function resultVersus(player, rival) {
    if (player === rival) {
        return '¡ES UN EMPATE!';
    } else if (
        (player === 'piedra' && rival === 'tijera') ||
        (player === 'papel' && rival === 'piedra') ||
        (player === 'tijera' && rival === 'papel')
    ) {
        return '¡HAS GANADO!';
    } else {
        return 'PERDISTE';
    }
}

battleButton.addEventListener('click', e => {
    e.preventDefault();
    let confirm;
    let playerSelection;

    for (let x = 0; x < pcIcons.length; x++) {
        pcIcons[x].classList.remove('active');
    }

    for (let index = 0; index < playOptions.length; index++) {
        if (playOptions[index].checked) {
            playerSelection = playIcons[index].alt.toLocaleLowerCase();
            confirm = true;
            selector = index;
            break;
        } else {
            Swal.fire({
                title: 'Error',
                text: 'No seleccionaste ninguna opción',
                icon: 'error',
                confirmButtonColor: '#ff4c61',
                confirmButtonText: 'ENTENIDO',
            });
            confirm = false;
        }
    }

    if (confirm) {
        let randomOption = Math.floor(Math.random() * playOptions.length);
        let rivalSelection = pcIcons[randomOption].alt.toLocaleLowerCase();
        pcIcons[randomOption].classList.add('active');

        let result = resultVersus(playerSelection, rivalSelection);

        Swal.fire({
            title: `${result}`,
            html: `<p>Usaste <b>${playerSelection}</b> y tu oponente uso <b>${rivalSelection}</b></p>`,
            confirmButtonColor: '#ff4c61',
            confirmButtonText: 'ENTENIDO',
        });
    }
});
