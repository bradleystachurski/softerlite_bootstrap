// MixItUp Integration for portfolio.html only

// Todo: Create multiFiler functionality
// Todo: Hover effect change

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
