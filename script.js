var bg = document.getElementById('bg');
var modal = document.getElementById('modal');
var infoBtn = document.getElementById('info');
var textBg = document.getElementById('textbg');
var $container = $('.container').isotope({
    layoutMode: 'vertical',
    getSortData: {
        name: '.name',
        nameRev: '.name',
        latitude: '.latitude',
        latitudeRev: '.latitude',
        logitude: '.logitude',
        logitudeRev: '.logitude',
        price: function (itemElem) { // function
            var price = $(itemElem).find('.price').text();
            return parseInt(price.replace(/[\(\)]/g, ''));
        },
        priceRev: function (itemElem) { // function
            var price = $(itemElem).find('.price').text();
            return parseInt(price.replace(/[\(\)]/g, ''));
        }
    }
});

$(document).ready(function () {
    $container.isotope({
        sortBy: 'random'
    });
});

window.onclick = function (close) {
    if (close.target == bg || close.target == textBg) {
        bg.style.display = "none";
        modal.style.display = "none";
        setTimeout(() => {
            textBg.classList.add('disappear')
        }, 2000)
    }
};


infoBtn.onclick = function () {
    bg.style.display = "block";
    modal.style.display = "block";
    textBg.classList.remove('disappear');
};


$('.sort-by-button-group').on('click', 'button', function () {
    var sortByValue = $(this).attr('data-sort-by');
    var sortText = $(this).attr('sort-text');
    $container.isotope({
        sortBy: sortByValue,
        sortAscending: {
            nameRev: false,
            latitudeRev: false,
            logitudeRev: false,
            priceRev: false
        }
    });
    textBg.innerHTML = "새로운 질서:" + "<br>" + sortText;
});