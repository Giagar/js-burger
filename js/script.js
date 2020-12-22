/* DA FARE 
_confronta versione pushata da Ottavio e vedi se puoi semplificare qlcsa
_cambia for con indexOf
_html: togli ingredient-container? (e modifica selettore js, nel caso)
*/

// costanti dell'applicazione
var couponList = ['abcd', 'bcda', 'dbca', 'dddd'];
var burgerBaseCost = 14;
var discount = 20;

// contatori e flag
var total = 0;

// selezione input
var burgerName = document.getElementById('hamburgerName');
var ingredientList = document.getElementsByClassName('ingredients')[0].getElementsByClassName('ingredient-input');
var coupon = document.getElementById('coupon');
var button = document.getElementById('calculate');
var price = document.getElementById('price');

// prezzo di partenza hamburger
price.innerText = burgerBaseCost;

// quando submit viene attivato
button.addEventListener('click', function(e) {
    e.preventDefault();

    // raccogli value di name e controlla che ci siano solo lettere (e che quindi non sia vuoto)
    if (/[a-z]/ig.test(burgerName.value)) {

        // raccogli in un arr gli ingredienti selezionati
        // !potevi utilizzare una variabile counter invece dell'array!     
        var checkedIngredients = [];
        for(var i = 0; i < ingredientList.length; i++) {
            if(ingredientList[i].checked) {
                checkedIngredients.push(ingredientList[i]);
            }
        }
        
        // controlla che siano selezionati almeno due ingredienti
        if(checkedIngredients.length >= 2) {
            // reset total
            total = burgerBaseCost;
            for(var l = 0; l < checkedIngredients.length; l++) {
                total += parseInt(checkedIngredients[l].value);
            }

            // controlla se coupon è presente
            if (coupon.value !== '') { // * if separati così da dare errore solo se coupon sbagliato
                var check = false; // flag per avviso coupon non valido
                
                // controlla se coupon è valido (in lista)
                // !potevi usare un semplice indexOf!
                for(var m = 0; m < couponList.length; m++) {
                    if(coupon.value === couponList[m]) {
                        check = true;
                        total -= (total/100*discount);
                    }
                }

                // se coupon non è valido
                if (!check) { // * if separati così da dare errore solo se coupon sbagliato
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