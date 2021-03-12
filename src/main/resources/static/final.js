let ErrorX = false

function info() {
    const velgfilm = document.getElementById("velgfilm").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    let filmF = velgfilm;
    let antallF = antall;
    let fornavnF = fornavn;
    let etternavnF = etternavn;
    let telefonnrF = telefonnr;
    let epostF = epost;

    if (filmF === "velg film her") {
        document.getElementById("filmX").innerHTML = "må velge film";
        ErrorX = true;
    } else if (antallF === "") {
        document.getElementById("antallX").innerHTML = "må skrive noe inn i antall";
        ErrorX = true;
    } else if (isNaN(antallF)) {
        document.getElementById("antallX").innerHTML = "må skrive noe inn riktig antall";
        ErrorX = true;
    } else if (fornavnF === "") {
        document.getElementById("fornavnX").innerHTML = "må skrive noe inn i fornavnet";
        ErrorX = true;
    } else if (etternavnF === "") {
        document.getElementById("etternavnX").innerHTML = "må skrive noe inn etternavnet";
        ErrorX = true;
    } else if (telefonnrF === "") {
        document.getElementById("telefonnrX").innerHTML = "må skrive noe inn telefonnr";
        ErrorX = true;
    } else if (isNaN(telefonnrF)) {
        document.getElementById("telefonnrX").innerHTML = "må skrive noe inn riktig telefonnr";
        ErrorX = true;
    } else if (epostF === "") {
        document.getElementById("epostX").innerHTML = "må skrive noe inn i epost";
        ErrorX = true;
    }
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
        document.getElementById("bestillingen").innerHTML = ut;

    }

    $(function() {
        $("#knapp1").click(function () {
            $("#bestillingen").remove();
        });
    });}