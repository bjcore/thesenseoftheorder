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
        price: function (itemElem) {
            var price = $(itemElem).find('.price').text();
            return parseInt(price.replace(/[\(\)]/g, ''));
        },
        priceRev: function (itemElem) {
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
    if (close.target == textBg) {
        modal.style.display = "none";
        setTimeout(() => {
            textBg.classList.add('disappear')
        }, 2000)
    }
};


infoBtn.onclick = function () {
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