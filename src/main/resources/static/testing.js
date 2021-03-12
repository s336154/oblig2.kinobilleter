
function hentData () {
    const kunde = {
        velgfilm :  $("#velgfilm").val(),
        antall : Number($("#antall").val()),
        fornavn :  $("#fornavn").val(),
        etternavn :  $("#etternavn").val(),
        telefonnr :  Number($("#telefonnr").val()),
        epost : $("#epost").val()
    };
    $.post("/kino", Billet, function(data) {
        $("#utFilm").html(data.velgfilm);
        $("#utAntall").html(data.antall);
        $("#utFornavn").html(data.fornavn);
        $("#utEtternavn").html(data.etternavn);
        $("#utTelefonnr").html(data.telefonnr);
        $("#utEpost").html(data.epost);
    });
}
function check (){
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
    else {
        if (ErrorX === true) {
            return;

        } else {
            const kinoBilleter = [];
            const billet = {
                velgfilm: velgfilm,
                antall: antall,
                fornavn: fornavn,
                etternavn: etternavn,
                telefonnr: telefonnr,
                epost: epost
            };
            kinoBilleter.push(billet);
            let ut = "<table><tr>" +
                "<th><b>Film</b></th><th><b>Antall</b></th><th><b>Fornavn</b></th><th><b>Etternavn</b></th><th><b>Telefonnr</b></th><th><b>Epost</b></th>" +
                "</tr>";
            for (let B of kinoBilleter) {
                ut += "<tr>";
                ut += "<td>" + B.velgfilm + "</td><td>" + B.antall + "</td><td>" + B.fornavn + "</td><td>" + B.etternavn + "</td><td>" + B.telefonnr + "</td><td>" + B.epost + "</td>";
                ut += "</tr>";
            }
            $("#bestillingen").html(ut);

        }
    }

    $(function() {
        $("#knapp1").click(function () {
            $("#bestillingen").remove();
        });
    }); }

