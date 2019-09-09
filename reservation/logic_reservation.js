$ (document).ready (function () {
 
  enregistrement ();
});

function reservation () {
  // Je recupere les valeurs des inputs
  let valDuNom = $ ('#nom').val ();
  let valDuPrenom = $ ('#prenom').val ();
  let valEmail = $ ('#email').val ();

  // On execute une requete ajax avec les valeurs d'inputs
  $.ajax ({
    
    url: 'http://localhost/SylvainYahia/reservation/reservation.php',
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

function enregistrement () { // cette fonction va permettre d'actualiser la liste des appartements disponibles
  $.ajax ({
    url: 'http://localhost/SylvainYahia/reservation/inscription.php',
    type: 'GET',
    success: function success (result) {
      result = JSON.parse (result); 
      for (var i = 0; i < result.length; i++) {
        $ ('#selection').append (
          `<option value="` +
            result[i].titre +
            `">` +
            result[i].titre +
            `</option>` 
        ); 
      }
    },

    error: function error (erreur) {
      console.log (erreur);
    },
  });
}


function selectChange (select) { 
  alert(select.value); 
}