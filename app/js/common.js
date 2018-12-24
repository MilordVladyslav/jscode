"use strict";


function appearanceDigitBlock() {
    const places = document.querySelectorAll('.place')
    const digitDiv = document.createElement('div')
    digitDiv.setAttribute('class', 'digit')
    
    //впервые заюзал рекурсию на практике 
    const GeneratePlace = () =>{
        let putPlace = getRandomPlace(places.length)
        if(places[putPlace].lastChild) { // check if place is placed other digit
            return GeneratePlace() 
        }else {
            return putPlace
        }
    }
    places[GeneratePlace()].appendChild(digitDiv)

}

function getRandomPlace(placesLength) {
    return Math.floor(Math.random() * (placesLength));
}


appearanceDigitBlock()
appearanceDigitBlock()


function Movement(keyup) {
    const digitDivs = Array.from(document.querySelectorAll('.digit'))
    const allPlaces = Array.from(document.querySelectorAll('.place'))


    function MovementDirection(keyup, i, total, min, max) {
        //remove
        c(keyup)
        switch(keyup) {
            case 'ArrowDown':
                c(keyup)
                digitDivs[i].classList.remove(`mov-top-${min}00`)
                digitDivs[i].classList.add(`mov-bottom-${total}00`)
            break;

            case 'ArrowUp': 
                c(keyup)
                digitDivs[i].classList.remove(`mov-bottom-${total}00`)
                digitDivs[i].classList.add(`mov-top-${min}00`)
            break;

            case 'ArrowLeft':
                c(keyup)
                digitDivs[i].classList.remove(`mov-right-${total}00`)
                digitDivs[i].classList.add(`mov-left-${min}00`)
            break;

            case 'ArrowRight':
                c(keyup)
                digitDivs[i].classList.remove(`mov-left-${min}00`)
                digitDivs[i].classList.add(`mov-right-${total}00`)
            break;
        }

    }

    const max = allPlaces[allPlaces.length -1].classList[1][4]


        for(const i in digitDivs){
        
            if(keyup === 'ArrowDown' || keyup === 'ArrowUp') {

                const current = digitDivs[i].parentNode.classList[1][4]
                const total = max - current
                const min = current - 1
                MovementDirection(keyup, i, total, min)

            }else if(keyup === 'ArrowLeft' || keyup === 'ArrowRight'){
                
                const current = digitDivs[i].parentNode.classList[2][4]
                const total = max - current
                const min = current - 1
                MovementDirection(keyup, i, total, min)
    
            }  
        }
    
}

// vertical movements
// gorizontal movements

let blya = []

window.addEventListener('keyup',(e) => {
    blya.push(e.code) 
    c(blya)
    Movement(blya[0]) 
    if(blya.length >= 2) {
        blya = [];
    }
})



function c(arg) { console.log(arg) }  