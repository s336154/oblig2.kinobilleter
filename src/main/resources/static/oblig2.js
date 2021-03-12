$(() => {
    $("#regFilm").click(() => {

        const velgfilm = $("#velgfilm").val();
        const antall = $("#antall").val();
        const fornavn = $("#navn").val();
        const etternavn = $("#etternavn").val();
        const telefonnr = $("#telefonnr").val();
        const epost = $("#epost").val();

        const enBillet = {
            velgfilm: velgfilm,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost,
        };
 

        $.post("/kino", enBillet, function(){
            hentAlle();
        });
        function hentAlle() {
            $.get( "/kino", function( data ) {
                formaterData(data);
            });
        }


        /*   $.post("/kino", enBillet, function (){
               $.get("/kino", function (billeter) {
                   formater(billeter);
               });
           }); */


            let ErrorX = false;

            let filmF = velgfilm;
            let antallF = antall;
            let fornavnF = fornavn;
            let etternavnF = etternavn;
            let telefonnrF = telefonnr;
            let epostF = epost;


            if (filmF === "velg film her") {
                $("#filmX").html("må velge film");
                ErrorX = true;
            } else if (antallF === "") {
                $("#antallX").html("må skrive noe inn i antall");
                ErrorX = true;
            } else if (antallF === "NaN") {
                $("#antallX").html("må skrive tall i antall");
                ErrorX = true;
            } else if (fornavnF === "") {
                $("#fornavnX").html("må skrive noe inn i fornavnet");
                ErrorX = true;
            } else if (etternavnF === "") {
                $("#etternavnX").html("må skrive noe inn etternavnet");
                ErrorX = true;
            } else if (telefonnrF === "") {
                $("#telefonnrX").html("må skrive noe inn i telefonnr");
                ErrorX = true;
            } else if (telefonnrF === "NaN") {
                $("#telefonnrX").html("må skrive noe inn riktig telefonnr");
                ErrorX = true;
            } else if (epostF === "") {
                $("#epostX").html("må skrive noe inn i epost");
                ErrorX = true;
            }
            if (ErrorX === true) {
                return;
            }

            else {
                function formaterData(billeter){
                    let ut = "<table>" +
                        "<tr><th>Film</th><th>Antall</th><th>Fornavn</th>" +
                        "<th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
                    for (let film of billeter) {
                        ut += "<tr><td>" + film.velgfilm + "</td><td>" + film.antall + "</td><td>" + film.fornavn + "</td>" +
                            "<td>" + film.etternavn + "</td><td>" + film.telefonnr + "</td><td>" + film.epost + "</td></tr>";
                    }
                    ut += "</table>";
                    $("#filmene").html(ut);
                } }

        function slettAlle() {
            $.get("/kino", enBillet, function () {

            });
        }

    });
});


