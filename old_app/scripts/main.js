require ('../../bower_components/bootstrap/js/dropdown');
require ('../../bower_components/bootstrap-touchspin/src/jquery.bootstrap-touchspin');

const items = {
    mounts: [
        {id: 87777,     name: 'Reins of the Astral Cloud Serpent',          rate: 0.01},
        {id: 87771,     name: 'Reins of the Heavenly Onyx Cloud Serpent',   rate: 0.01}
    ],
    pets: [
        {id: 68663,     name: 'Death Talon Whelpguard ',                    rate: 0.14}
    ],
    toys: [
        {id: 108633,    name: 'Crashin´ Thrashin Cannon Controller',        rate: 0.10},
        {id: 86578,     name: 'Eternal Warriors Sigil',                     rate: 0.14},
        {id: 86584,     name: 'Hardened Shell',                             rate: 0.18}
    ]
};

var selectedType;

function loadData(type) {
    var options = $('.js-select-item');

    options.children().remove().end();
    selectedType = type;

    items[type].forEach(function(item) {
        options.append($('<option />').val(item.id).text(item.name));
    });

    updateResult();
}

function updateResult () {
    var val = $('.js-select-item').val(),
        result = $.grep(items[selectedType], function(e){ return e.id == val; });

    if (result.length == 1) {
        result = 1 - ( Math.pow(1 - result[0].rate, $('.js-tries').val()));
        $('.js-result').text(parseFloat(result*100).toFixed(2) + '%');
        $('.js-link').attr('href', 'http://www.wowhead.com/item=' + val);
    } else {
        // nothing or multiple items found
    }
}

$(document).ready(function() {

    var options = $('.js-select-item'),
        pills =  $('.nav-pills a'),
        tries = $('.js-tries');

    options.on('change', function () {
        updateResult();
    });

    tries.TouchSpin({
        initval: 1,
        postfix: 'Number of tries'
    });

    tries.on('change keyup', function () {
        updateResult();
    });

    pills.on('click', function(event) {
        var x = $(event.target);
        pills.parent().removeClass('active');
        x.parent().addClass('active');
        loadData(x.data('type'));
    });

    loadData('mounts');
});
