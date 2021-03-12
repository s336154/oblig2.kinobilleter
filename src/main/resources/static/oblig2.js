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
        $(function () { // kjøres når dokumentet er ferdig lastet
            hentAlle();
        });

        function hentAlle() {
            $.get("/kino", function (billeter) {
                formaterFilmer(billeter);
            });
        }

        function formaterFilmer(billeter) {
            let ut = "<select id='velgfilm'>";
            for (const valgtfilm of listfilmer) {
                ut += "<option value=‘" + valgtfilm.velgfilm + "’>" + valgtfilm.velgfilm + "</option>";
            }
            ut += "</select>";
            $("#regFilm").html(ut);
            /*     //Alternativ skrivemåte ved bruk av vanlige functions
                 $.post("/kino", enBillet, function (){
                     $.get("/kino", function (billeter) {
                         formater(billeter);
                     });
                 }); */
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
        }

        const hent = () => $.get("/kino", filmer => formater(filmer));
        const inputval = film => {
            if (film.antall === "") return false
            else if (film.fornavn === "") return false
            else if (film.etternavn === "") return false
            else if (film.telefonnr === "") return false
            else if (film.epost === "") return false
            else if (film.velgfilm === "") return false
        }
        const formater = filmer => {
            let ut = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th>" +
                "<th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
            for (let film of filmer) {
                ut += "<tr><td>" + film.velgfilm + "</td><td>" + film.antall + "</td><td>" + film.fornavn + "</td>" +
                    "<td>" + film.etternavn + "</td><td>" + film.telefonnr + "</td><td>" + film.epost + "</td></tr>";
            }
            ut += "</table>";
            $("#filmene").html(ut);
        }
    });
});

