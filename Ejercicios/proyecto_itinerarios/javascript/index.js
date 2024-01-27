$(document).ready(function() {
    $('.btn-jqueryCAT').click(function() {
        localStorage.setItem('comunidad', 'CAT');
        window.location.href = '../view/itinerarios.html';
    });

    $('.btn-jqueryMAD').click(function() {
        localStorage.setItem('comunidad', 'MAD');
        window.location.href = '../view/itinerarios.html';
    });

    $('.btn-jqueryVAL').click(function() {
        localStorage.setItem('comunidad', 'VAL');
        window.location.href = '../view/itinerarios.html';
    });

    $('.btn-jqueryCLM').click(function() {
        localStorage.setItem('comunidad', 'CLM');
        window.location.href = '../view/itinerarios.html';
    });

    $('.btn-jqueryAND').click(function() {  
        localStorage.setItem('comunidad', 'AND');
        window.location.href = '../view/itinerarios.html';
    });

    $('.btn-jqueryCAN').click(function() {
        localStorage.setItem('comunidad', 'CAN');
        window.location.href = '../view/itinerarios.html';
    });

    $('.btn-jqueryAST').click(function() {
        localStorage.setItem('comunidad', 'AST');
        window.location.href = '../view/itinerarios.html';
    });

    $('.btn-jqueryVAS').click(function() {
        localStorage.setItem('comunidad', 'VAS');
        window.location.href = '../view/itinerarios.html';
    });

    $('.btn-jqueryCNB').click(function() {
        localStorage.setItem('comunidad', 'CNB');
        window.location.href = '../view/itinerarios.html';
    });
});