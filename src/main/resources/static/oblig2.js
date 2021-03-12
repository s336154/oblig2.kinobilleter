$(() => {
    $("#regFilm").click(() => {

        const velgfilm = $("#velgfilm");
        const antall = $("#antall");
        const fornavn = $("#navn");
        const etternavn = $("#etternavn");
        const telefonnr = $("#telefonnr");
        const epost = $("#epost");
        const film = {
            velgfilm: velgfilm.val(),
            antall: antall.val(),
            fornavn: fornavn.val(),
            etternavn: etternavn.val(),
            telefonnr: telefonnr.val(),
            epost: epost.val(),
        };

            if (inputval(enBillet)) {
                $.post("/kino", enBillet, () => hent());
                antall.val("");
                fornavn.val("");
                etternavn.val("");
                telefonnr.val("");
                epost.val("");
            } else {
                console.log("Mangler input");
            }

            $("#slettAlle").click(() => {
                $.ajax("/kino", {
                    type: 'DELETE',
                    success: () => hent(),
                    error: (jqXhr, textStatus, errorMessage) => console.log(errorMessage)
                });
            });


        const hent = () => $.get("/kino", filmer => formater(filmer));
        function check () {
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
                $("fornavnX").html("må skrive noe inn i fornavnet");
                ErrorX = true;
            } else if (etternavnF === "") {
                $("etternavnX").html("må skrive noe inn etternavnet");
                ErrorX = true;
            } else if (telefonnrF === "") {
                $("telefonnrX").html("må skrive noe inn i telefonnr");
                ErrorX = true;
            } else if (telefonnrF === "NaN") {
                $("telefonnrX").html("må skrive noe inn riktig telefonnr");
                ErrorX = true;
            } else if (epostF === "") {
                $("epostX").html("må skrive noe inn i epost");
                ErrorX = true;
            }
            if (ErrorX === true) {
                return;

            } else {
                const formater = filmer => {
                    let ut = "<table>" +
                        "<tr><th>Film</th><th>Antall</th><th>Fornavn</th>" +
                        "<th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
                    for (let film of filmer) {
                        ut += "<tr><td>" + film.velgfilm + "</td><td>" + film.antall + "</td><td>" + film.fornavn + "</td>" +
                            "<td>" + film.etternavn + "</td><td>" + film.telefonnr + "</td><td>" + film.epost + "</td></tr>";
                    }
                    ut += "</table>";
                    $("#filmene").html(ut);
                }
            }
        }

            });
        });



