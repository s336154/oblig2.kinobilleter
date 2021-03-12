$(() => {
    $("#regFilm").click(() => {

        const velgfilm = $("#velgfilm").val();
        const antall = $("#antall").val();
        const fornavn = $("#fornavn").val();
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
                $.post("/lagre", enBillet, function(){
                    hentAlle();
                });
                $("#velgfilm").val("");
                $("#antall").val("");
                $("#fornavn").val("");
                $("#etternavn").val("");
                $("#telefonnr").val("");
                $("#epost").val("");
            }

        function hentAlle() {
            $.get( "/hentAlle", function(data) {
                formaterData(data);
            });
        }

        function formaterData(billeter){

                    let ut = "<table class='table table-striped table-bordered'><tr>" +
                        "<th><b>Film</b></th><th><b>Antall</b></th><th><b>Fornavn</b></th><th><b>Etternavn</b></th><th><b>Telefonnr</b></th><th><b>Epost</b></th>" +
                        "</tr>";
                    for (let B of billeter) {
                        ut += "<tr>";
                        ut += "<td>" + B.velgfilm + "</td><td>" + B.antall + "</td><td>" + B.fornavn + "</td><td>" + B.etternavn + "</td><td>" + B.telefonnr + "</td><td>" + B.epost + "</td>";
                        ut += "</tr>";
                    }
                    $("#filmene").html(ut);
                }
        $(function() {
            $("#knapp1").click(function () {
                $("#filmene").remove();
            });
        });


    });
});


