"use strict";

const places = document.querySelectorAll('.place')

function appearanceDigitBlock() {
    const digitDiv = document.createElement('div')
    digitDiv.setAttribute('class', 'digit')

    const GeneratePlace = () => {
        let randomPlace = getRandomPlace(places.length)
        digitDiv.id = randomPlace;
        let putPlace = randomPlace;
        if (places[putPlace].lastChild) { // check if place is placed other digit
            return GeneratePlace()
        } else {
            return putPlace
        }
    }
    places[GeneratePlace()].appendChild(digitDiv)

}

function getRandomPlace(placesLength) {
    return Math.floor(Math.random() * (placesLength));
}

function IsPlaced(places) {
    if (!place.hasChildNodes()) return true;
}

// function Isplaced(place) {
//     if (place.hasChildNodes()) return true
// }

appearanceDigitBlock()
appearanceDigitBlock()

appearanceDigitBlock()
appearanceDigitBlock()

appearanceDigitBlock()
appearanceDigitBlock()

function Movement(keyup) {
    const digitDivs = Array.from(document.querySelectorAll('.digit'));
    const allPlaces = Array.from(document.querySelectorAll('.place'));
    const reverseDigitDivs = digitDivs.reverse();


    c(reverseDigitDivs);

    function MovementDirectionView(keyup, i, total, min, max) {
        // c(keyup)
        switch (keyup) {
            case 'ArrowDown':
                // c(keyup)
                digitDivs[i].classList.remove(`mov-top-${min}00`)
                digitDivs[i].classList.add(`mov-bottom-${total}00`)
                break;

            case 'ArrowUp':
                // c(keyup)
                digitDivs[i].classList.remove(`mov-bottom-${total}00`)
                digitDivs[i].classList.add(`mov-top-${min}00`)
                break;

            case 'ArrowLeft':
                // c(keyup)
                digitDivs[i].classList.remove(`mov-right-${total}00`)
                digitDivs[i].classList.add(`mov-left-${min}00`)
                break;

            case 'ArrowRight':
                // c(keyup)
                digitDivs[i].classList.remove(`mov-left-${min}00`)
                digitDivs[i].classList.add(`mov-right-${total}00`)
                break;
        }

    }

    function MovementDirectionModel(i) {
        digitDivs[i].parentNode.removeChild(digitDivs[i])

    }

    function RemoveChild(i) {
        digitDivs[i].parentNode.removeChild(digitDivs[i])
    }
    function AddChildToBottom(i, total) {

    
    
        let parentNodeRow = Number(digitDivs[i].parentNode.classList[1][4])
        let parentNodeCol = Number(digitDivs[i].parentNode.classList[2][4])


        let putPlace = Number(places[i].classList[2][4]) + total - 1;

        for (var j = places.length; j > 0; j--) {

            if (places[j - 1].classList[2][4] == parentNodeCol) {

                if( !places[j - 1].lastChild || places[j - 1].lastChild.id == digitDivs[i].id ) {
                    
                    digitDivs[i].classList.remove(`mov-bottom-${total}00`)
                    places[j - 1].appendChild(digitDivs[i])
                    // c(places[j - 1].lastChild.id);
                    // c(digitDivs[i].id);
                    // c(places[j - 1].lastChild.id + "       HERE        ")
                    break;
                }

            }

        }
    }



    const max = allPlaces[allPlaces.length - 1].classList[1][4]
    const test = allPlaces[0].classList[1]


    for (const i in reverseDigitDivs) {
        c(i);


        if (keyup === 'ArrowDown' || keyup === 'ArrowUp') {

            const current = digitDivs[i].parentNode.classList[1][4]
            // c(current + "@@@@@@@@@@")
            const total = max - current
            //сюда функцию  с проверкой
            const min = current - 1

            setTimeout(() => {
                AddChildToBottom(i, total)
            }, 200);
            
            MovementDirectionView(keyup, i, total, min)
            
        } else if (keyup === 'ArrowLeft' || keyup === 'ArrowRight') {

            const current = digitDivs[i].parentNode.classList[2][4]
            const total = max - current
            //сюда функцию с проверкой
            const min = current - 1
            // c(`current - ${current}, total - ${total}, max - ${max}, min - ${min}`) 
            MovementDirectionView(keyup, i, total, min)

        }
    }

}


let keytrigger = []

window.addEventListener('keyup', (e) => {

    keytrigger.push(e.code)

    // c(keytrigger)
    Movement(keytrigger[0])
    if (keytrigger.length >= 2) {
        keytrigger = [];
    }

    setTimeout(() => {
        keytrigger = [];
    }, 200);
})



function c(arg) { console.log(arg) }  