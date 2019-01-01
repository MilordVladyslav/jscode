"use strict";

const places = document.querySelectorAll('.place')

function appearanceDigitBlock() {
    const digitDiv = document.createElement('div')
    digitDiv.setAttribute('class', 'digit')

    const GeneratePlace = () => {
        let putPlace = getRandomPlace(places.length)
        if (places[putPlace].lastChild) { // check if place is placed other digit
            return GeneratePlace()
        } else {
            return putPlace
        }
    }
    places[GeneratePlace()].appendChild(digitDiv)

}

function getRandomPlace(placesLength) {
    return 0
    // return Math.floor(Math.random() * (placesLength));
}

function IsPlaced(places) {
    if (!place.hasChildNodes()) return true;
}

// function Isplaced(place) {
//     if (place.hasChildNodes()) return true
// }

appearanceDigitBlock()
// appearanceDigitBlock()


function Movement(keyup) {
    const digitDivs = Array.from(document.querySelectorAll('.digit'))
    const allPlaces = Array.from(document.querySelectorAll('.place'))



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

        // c(total)

        let parentNodeRow = Number(digitDivs[i].parentNode.classList[1][4])
        let parentNodeCol = Number(digitDivs[i].parentNode.classList[2][4])
        // c(parentNodeRow)
        // c(parentNodeRow.classList[1][4])
        // c(`${parentNodeRow[1][4]} + ${parentNodeRow[2][4]}`)
        // && places[i].classList[2][4] == (places[i].classList[2][4] + total)
        let putPlace = Number(places[i].classList[2][4]) + total - 1;
        for (var j = places.length; j > 0; j--) {
            // c(places[j - 1])
            //  && !places[i].lastChild && digitDivs[i].parentNode != places[i]
            if (places[j - 1].classList[2][4] == parentNodeCol) {
                c(j)
                c(places[j - 1])
            
                if(!places[j - 1].lastChild) {
                    digitDivs[i].classList.remove(`mov-bottom-${total}00`)
                    places[j - 1].appendChild(digitDivs[i])
                    
                }
                // let digitDiv = digitDivs[i]
                // places[j].appendChild(digitDiv)
                // c(digitDivs[i])
                // c(digitDivs[i].parentNode);
                break;
            }

            // if(places[i].classList[2][4] == parentNodeCol && !places[i].lastChild) {
            //     c(places[i])
            // }

            // && places[i].classList[2][4] == (places[i].classList[2][4] + total)
            // let somevalue = Number(places[i].classList[2][4])
            // if (places[i].classList[2][4] == parentNodeRow.classList[2][4]) {
            //     let mumbo = Number(places[i].classList[1][4])


            //     c(place[])

            /*                 if(places[i].classList[1][4] == (mumbo + putPlace))  {
                                c(places[i])
                            } */
            // c(putPlace)
            //  c(places[i])

            // c(`janka ${mumbo + putPlace}`)



            // places[i].classList[1][4] + putPlace 

            // places[i].classList.appendChild(digitDivs[i])
            // c(`total ${total}`)
            // c(`places ${somevalue}`)
            // c(`put place - ${putPlace}`)
            // c(places[i].classList[1] + " - WOW WOW WOW")
            // }
        }
    }

    //Логика ниже.

    const max = allPlaces[allPlaces.length - 1].classList[1][4]
    const test = allPlaces[0].classList[1]
    // [1] - row [2] - col
    // c(test + " - TEST")

    for (const i in digitDivs) {

        if (keyup === 'ArrowDown' || keyup === 'ArrowUp') {

            const current = digitDivs[i].parentNode.classList[1][4]
            // c(current + "@@@@@@@@@@")
            const total = max - current
            //сюда функцию  с проверкой
            const min = current - 1

            // c(`current - ${current}, total - ${total}, max - ${max}, min - ${min}`) 

            // MovementDirectionModel(i)
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