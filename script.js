
var article = document.querySelectorAll('.article--name');
var btnPlus = document.querySelectorAll(".qty-plus");
var btnMinus = document.querySelectorAll(".qty-minus");
var qt = document.querySelectorAll(".quantity");
var del = document.querySelectorAll(".delete");
var price = document.querySelectorAll(".prix");
var tot = document.querySelectorAll(".total");
var like = document.querySelectorAll(".far");
for(let i = 0; i < btnPlus.length; i++){
//---------------INCREMENTATION DE LA QUANTITEE---------------
    btnPlus[i].addEventListener('click' , function(){
        qt[i].value ++ ;
        //------------FAIRE LA SOMME DES PRIX-------------------
        tot[i].value = parseInt(price[i].innerText) * qt[i].value;   
    })
    //-------------DECREMENTATION DE LA QUANTITEE--------------
    btnMinus[i].addEventListener('click' , function(){
        if(qt[i].value > 0)
        {
            qt[i].value --;
            //SOUSTRACTION DU PRIX--------------------------
            tot[i].value = parseInt(price[i].innerText) * qt[i].value;
        }
    })
    //------------------BOUTON LIKE----------------------------
    like[i].addEventListener('click' , function(e){
        if(e.target.classList.contains('far'))
        {
            e.target.classList.replace('far', 'fas');
        }
        else
        {
            e.target.classList.replace('fas', 'far');
        }
    })
//SUPPRIMER UN ELEMENT 
del[i].addEventListener('click' , function(){
    article[i].remove();
})
}
console.log(tot);