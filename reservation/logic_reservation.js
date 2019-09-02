$ (document).ready (function () { //on utilise document.ready pour qu'a chaque actualisation de page la function enregistrement s'active.
  enregistrement ();
});

function reservation () {
  // Je recupere les valeurs des inputs
  let valDuNom = $ ('#nom').val ();
  let valDuPrenom = $ ('#prenom').val ();
  let valEmail = $ ('#email').val ();

  // On execute une requete ajax avec les valeurs d'inputs
  $.ajax ({ // ne pas oublier de mettre le jquery dans le dossier reservation
    url: 'http://localhost/reservation.php',
    type: 'POST',
    data: {
      nom: valDuNom,
      prenom: valDuPrenom,
      email: valEmail,
    },
    success: function success (result) {
      alert (result);
    },

    error: function error (erreur) {
      console.log (erreur);
    },
  });
}

function enregistrement () {
    $.ajax ({
        url: 'http://localhost/incription.php',
        type: 'GET',
        success: function success (result) {
            for(var i = 0; i < result.length; i++) {
                $("#products").append(`<select><option value="title">` + result[i].title + `</option>`);  //pour les append tjs mettre l'nesemble du code en AltGr+7 et aussi les variables
                
        
            }
        },
    
        error: function error (erreur) {
          console.log (erreur);
        },
      });
    }
}
