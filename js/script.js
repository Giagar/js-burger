// variabili generali
// ?come chiamo queste variabili (come gruppo) nei commenti?
var couponList = ['abcd', 'bcda', 'dbca', 'dddd'];
var total = 0;

// selezione input
var burgerName = document.getElementById('hamburgerName');
var ingredientList = document.getElementsByClassName('ingredients')[0].getElementsByClassName('ingredient-input');
var coupon = document.getElementById('coupon');
var button = document.getElementById('calculate');
var price = document.getElementById('price');

// quando submit viene attivato
button.addEventListener('click', function(e) {
    e.preventDefault();

    // raccogli value di name e controlla che ci siano solo lettere (e che quindi non sia vuoto)
    if (/[a-z]/ig.test(burgerName.value)) {

        // raccogli in un arr gli ingredienti selezionati
        var checkedIngredients = [];
        for(var i = 0; i < ingredientList.length; i++) {
            if(ingredientList[i].checked) {
                checkedIngredients.push(ingredientList[i]);
            }
        }
        
        // controlla che siano selezionati almeno due ingredienti
        if(checkedIngredients.length >= 2) {
            // reset total
            total = 0;
            for(var l = 0; l < checkedIngredients.length; l++) {
                total += parseInt(checkedIngredients[l].value);
            }

            // controlla se coupon è presente
            if (coupon.value !== '') {
                var check = false; // flag per avviso coupon non valido
                
                // controlla se coupon è valido (in lista)
                for(var m = 0; m < couponList.length; m++) {
                    if(coupon.value === couponList[m]) {
                        check = true;
                        total -= (total/100*20);
                    }
                }

                // se coupon non è valido
                if (!check) {
                    alert('Coupon non valido')
                }
            } 

            // visualizza prezzo
            price.innerText = total;

        // se almeno due ingredienti non sono selezionati
        } else {
            alert('Scegli almeno due ingredienti')
        }
        
    // se nome hamburger non corretto
    } else {
        alert('Nome hamburger non valido')
    }
})