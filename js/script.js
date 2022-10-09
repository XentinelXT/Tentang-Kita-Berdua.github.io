(function($) {
    "use strict";

    $(window).on("load", function() {
        // PreLoader Init
        function preLoader() {
            $("body").addClass("loaded");
            $(".preloader-wrapper").addClass("loaded");
        }
        preLoader();
    });

    $(document).ready(function() {
        // navbarToggle Init
        function navbarToggle() {
            $(".nav-toggle").on("click", function() {
                $(".sidenav").toggleClass("show");
                $(".nav-toggle span").toggleClass("fa-times fa-bars");
                $(".nav-toggle-overlay").toggleClass("show");
            });
            $(".nav-toggle-overlay").on("click", function() {
                $(".sidenav").removeClass("show");
                $(".nav-toggle span").toggleClass("fa-bars fa-times");
                $(".nav-toggle-overlay").removeClass("show");
            });
        }
        navbarToggle();

        // form validation (only for this page)
        window.addEventListener(
            "load",
            function() {
                var forms = document.getElementsByClassName("needs-validation");
                var validation = Array.prototype.filter.call(forms, function(form) {
                    form.addEventListener(
                        "submit",
                        function(event) {
                            if (form.checkValidity() === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                            form.classList.add("was-validated");
                        },
                        false
                    );
                });
            },
            false
        );
    });
    const rainContainer = document.querySelector(".rain-container");

    // background Colors for the raindrop
    const background = [
        "linear-gradient(transparent, aqua)",
        "linear-gradient(transparent, red)",
        "linear-gradient(transparent, limegreen)",
        "linear-gradient(transparent, white)",
        "linear-gradient(transparent, yellow)"
    ];

    const amount = 100; // amount of raindops
    let i = 0;

    // Looping and creating the raindrop then adding to the rainContainer
    while (i < amount) {
        //  Creating and Element
        const drop = document.createElement("i");

        //   CSS Properties for raindrop
        const raindropProperties = {
            width: Math.random() * 5 + "px",
            positionX: Math.floor(Math.random() * window.innerWidth) + "px",
            delay: Math.random() * -20 + "s",
            duration: Math.random() * 5 + "s",
            bg: background[Math.floor(Math.random() * background.length)],
            opacity: Math.random() + 0.2
        };

        //   Setting Styles for raindrop
        drop.style.width = raindropProperties.width;
        drop.style.left = raindropProperties.positionX;
        drop.style.animationDelay = raindropProperties.delay;
        drop.style.animationDuration = raindropProperties.duration;
        drop.style.background = raindropProperties.bg;
        drop.style.opacity = raindropProperties.opacity;

        //   Appending the raindrop in the raindrop container
        rainContainer.appendChild(drop);
        i++;
    }

})(jQuery);