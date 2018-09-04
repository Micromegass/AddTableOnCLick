var countries = [{
        "code": "CO",
        "name": "Colombia",
        "flag_url": "https://s3.amazonaws.com/makeitreal/co.gif"
    },
    {
        "code": "PE",
        "name": "Perú",
        "flag_url": "https://s3.amazonaws.com/makeitreal/pe.gif"
    },
    {
        "code": "EC",
        "name": "Ecuador",
        "flag_url": "https://s3.amazonaws.com/makeitreal/ec.gif"
    },
    {
        "code": "BO",
        "name": "Bolivia",
        "flag_url": "https://s3.amazonaws.com/makeitreal/bo.gif"
    }
];






$('button').on('click', function () {

    $('body').append('<table class="table"><thead><tr><th>' + 'flag' + '</th><th>' + 'code' + '</th><th>' + 'name' + '</th></tr></thead></table>');

    for (var i = 0; i < countries.length; i++)
        $('table').append('<tr><td><img src="' + countries[i].flag_url + '"</td><td>' + countries[i].code + '</td><td>' + countries[i].name + '</td></tr>');

    $("button").hide();

});




