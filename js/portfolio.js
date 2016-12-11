// MixItUp Integration for portfolio.html only

$(function () {

    var filterList = {

        init: function () {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: '.app, .card, .icon, .logo, .web'
                }
            });

        }

    };

    // Run the show!
    filterList.init();


});
