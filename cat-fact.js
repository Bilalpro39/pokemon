$(document).ready(function() {


    getCatFact();
    setInterval(getCatFact, 3000);

    function getCatFact() {
        $.get("https://catfact.ninja/fact", function(data, status) {
            $("#catfact").html(data.fact);
        });
    }
});