function validate () {;
    let checar = false;
    document.querySelectorAll('.op').forEach(function(checkbox) {
        if ( checkbox.checked ) {
            checar = true;
        }
    });

    if (checar  ) {
        console.log("marcado");
    }
    else {
        window.alert("No mínimo um campo deve ser preenchido")
    }
}

function validate2 () {;
    let checar = false;
    document.querySelectorAll('.ind').forEach(function(radio) {
        if ( radio.checked ) {
            checar = true;
        }
    });

    if (checar  ) {
        console.log("marcado");
    }
    else {
        window.alert("No mínimo um campo deve ser preenchido")
    }
}