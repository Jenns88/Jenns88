$(function () {
    /* con el método jQuery adecuado, asignar  el string strDate que contiene la fecha obtenida con la función Date() de javascript a un elemento HTML que has de incluir en el footer para tal efecto */
    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var WeekDays = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");


    var f = new Date();  //javascript 
    var strDate = WeekDays[f.getDay()] + " - " + months[f.getMonth()] + " " + f.getDate() + ", " + f.getFullYear();

    var $h3 = $('<h3>').text(strDate); //Creo una variable nueva h3
    $('footer').append($h3); 
});
