
function randomlySelectInputs() {
    var checkboxes = $('input[type="checkbox"]');
    var radios = $('input[type="radio"]');

    checkboxes.each(function() {
        var randomBool = Math.random() >= 0.5;
        if (randomBool) {
            $(this).prop('checked', true).trigger('ifChanged');
        }
    });

    radios.each(function() {
        var randomBool = Math.random() >= 0.5;
        if (randomBool) {
            $(this).prop('checked', true).trigger('ifChanged');
        }
    });
}

$('input[type="text"]').val('3');

randomlySelectInputs();
