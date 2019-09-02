function louer() {
   var titre = $("#titre").val();
   var superficie = $("#superficie").val();
   var chambre = $("#chambre").val();
   var salle_bain = $("#salle_bain").val();
   var prix = $("#prix").val();
   
    if($('#cuisine_oui').is(':checked')) {         
        var cuisine = "oui";
    } else {      
        var cuisine = "non";    }

    if($('#wifi_oui').is(':checked')) {         
        var wifi = "oui";
    } else {      
        var wifi = "non";    }

    if($('#tele_oui').is(':checked')) {         
        var tele = "oui";
    } else {      
        var tele = "non";    };
 
   $.ajax({
    url: "http://localhost/sylvainyahia/location.php",
    type: "POST",
    data: {
        titre: titre,
        superficie: superficie,
        chambre: chambre,
        salle_bain: salle_bain,
        cuisine: cuisine,
        wifi: wifi,
        tele: tele,
        prix: prix,
    },
    success: function success (result) {
        alert(result);
    },
    error: function error (erreur) {
        console.log("erreur");
    }
});
   
   
}
