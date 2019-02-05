"use strict";

const places = document.querySelectorAll('.place')

function appearanceDigitBlock() {
    const digitDiv = document.createElement('div')
    digitDiv.setAttribute('class', 'digit')

    const GeneratePlace = () => {
        let randomPlace = getRandomPlace(places.length)
        digitDiv.innerText = '2'
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


appearanceDigitBlock()
appearanceDigitBlock()


function Movement(keyup) {
    const digitDivs = Array.from(document.querySelectorAll('.digit'));
    const allPlaces = Array.from(document.querySelectorAll('.place'));
    const reverseDigitDivs = Array.from(document.querySelectorAll('.digit'));

    reverseDigitDivs.reverse();
    //короче этот реверс хитрічічічо выебаный поменял исходный массив.

    // console.log(reverseDigitDivs[0]);
    // console.log(digitDivs[0]);



    function MovementDirectionView(keyup, i, total, min, max) {
        // c(keyup)
        switch (keyup) {
            case 'ArrowDown':
                // c(keyup)
                // if(!digitDivs[i].classList.contains('unmoveable')) {
                    digitDivs[i].classList.remove(`mov-top-${min}00`)
                    digitDivs[i].classList.add(`mov-bottom-${total}00`)                    
                // }

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

                if(places[j - 1].lastChild) {
                    SumValue(digitDivs[i], places[j - 1].lastChild);
                }

                // if(places[j - 1].lastChild) {
                //     SumValue (digitDivs[i].innerText, places[j - 1].lastChild.innerText);
                // }

            }

        }
    }

    function SumValue (digitDiv, objectToSum) {
        const digitDivValue = Number(digitDiv.innerText);
        const objectToSumValue = Number(objectToSum.innerText);
        // const digitDivNode = document.getElementById(`${digitDiv.id + 100}`);

        if(digitDivValue === objectToSumValue ) {
            let objectToSumDigit = Number(objectToSum.innerText);
            objectToSumDigit += digitDivValue;
            let totalSum = digitDivValue + objectToSumValue;
            objectToSum.innerText = objectToSumDigit;
            digitDiv.innerText = 'changed';
            digitDiv.remove();
            console.log(objectToSum.parentNode);
            console.log(digitDivNode.parentNode + 'IM HERE!');

        }
    }

    function AddChildToTop(i, min) {

        let parentNodeRow = Number(digitDivs[i].parentNode.classList[1][4])
        let parentNodeCol = Number(digitDivs[i].parentNode.classList[2][4])
    
        for ( var j = 0; j < places.length; j++ ) {
            if (places[j].classList[2][4] == parentNodeCol) {
                if( !places[j].lastChild || places[j].lastChild.id == digitDivs[i].id ) {
                    console.log(min)
                    digitDivs[i].classList.remove(`mov-top-${min}00`)
                           
                    places[j].appendChild(digitDivs[i]);
                    break; 
                }
                if(places[j].lastChild) {
                    SumValue(digitDivs[i], places[j].lastChild);
                }

            }
        }

    }


    const max = allPlaces[allPlaces.length - 1].classList[1][4]
    const test = allPlaces[0].classList[1]


    if(keyup === 'ArrowUp') {

        for (const i in digitDivs) {
            const current = digitDivs[i].parentNode.classList[1][4]
            // c(current + "@@@@@@@@@@")
            const total = max - current
            //сюда функцию  с проверкой
            const min = current - 1

            setTimeout(() => {
                AddChildToTop(i, min)
            }, 80)
            
            MovementDirectionView(keyup, i, total, min)

        }

    }

    function AddChildToLeft(i, min) {
        let parentNodeRow = Number(digitDivs[i].parentNode.classList[1][4])

        for(let j = 0; j < places.length; j++) {
            if (places[j].classList[1][4] == parentNodeRow) {
                if( !places[j].lastChild || places[j].lastChild.id == digitDivs[i].id ) {
                     digitDivs[i].classList.remove(`mov-left-${min}00`)
                     places[j].appendChild(digitDivs[i]);
                     break;
                }
                if(places[j].lastChild) {
                    SumValue(digitDivs[i], places[j].lastChild);
                }

            }
        }
    }

    function AddChildToRight(i, total) {
        let parentNodeRow = Number(digitDivs[i].parentNode.classList[1][4])

        for(let j = places.length; j > 0; j--) {
            if (places[j - 1].classList[1][4] == parentNodeRow) {
                if( !places[j - 1].lastChild || places[j - 1].lastChild.id == digitDivs[i].id ) {
                    digitDivs[i].classList.remove(`mov-right-${total}00`)
                    places[j - 1].appendChild(digitDivs[i]);
                    break;
                }
                if(places[j - 1].lastChild) {
                    SumValue(digitDivs[i], places[j - 1].lastChild);
                }

            }
        }
    }

    if(keyup === 'ArrowDown') {
        digitDivs.reverse();
        for (const i in digitDivs) {

            const current = digitDivs[i].parentNode.classList[1][4]
            // c(current + "@@@@@@@@@@")
            const total = max - current
            //сюда функцию  с проверкой
            const min = current - 1

            setTimeout(() => {
                AddChildToBottom(i, total)
            }, 80);
            
            MovementDirectionView(keyup, i, total, min)        
        }
    }

    if(keyup === 'ArrowLeft') {
        for (const i in reverseDigitDivs) {
            const current = digitDivs[i].parentNode.classList[2][4]
            const total = max - current
            const min = current - 1
            setTimeout( () => {
                AddChildToLeft(i, min)
            }, 80)
            MovementDirectionView(keyup, i, total, min);
        }
    }

    if(keyup === 'ArrowRight') {
        digitDivs.reverse();
        for (const i in digitDivs) {
            const current = digitDivs[i].parentNode.classList[2][4]
            const total = max - current
            const min = current - 1
            setTimeout( () => {
                AddChildToRight(i, total)
            }, 80)
            MovementDirectionView(keyup, i, total, min);
        }
    }

}



let keytrigger = []

window.addEventListener('keyup', (e) => {

    keytrigger.push(e.code)

    // c(keytrigger)
    Movement(keytrigger[0])

    appearanceDigitBlock()
    if (keytrigger.length >= 2) {
        keytrigger = [];
    }

    setTimeout(() => {
        keytrigger = [];
    }, 100);
})


