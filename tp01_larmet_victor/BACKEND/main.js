$("#validation").submit(function( event ) {
    event.preventDefault();

    let password = $("#password").val()
    let passwordVerif = $("#verifPassword").val()

    if(password === passwordVerif) {
        alert("Correct password !" );
    }
    else {
        alert("Incorrect password !" );

    }


  });