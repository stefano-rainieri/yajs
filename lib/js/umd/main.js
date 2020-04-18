function yajs() {
    Array.prototype.slice.call(document.querySelectorAll('[data-yajs]')).forEach(function (yajs) {
        var autoplay;
        var startX;
        var scrollLeft;
        var scrolling = false;
        var container = yajs.querySelector('.yajs__container');

        if (!container) {
            return;
        }

        if (container.scrollWidth <= container.clientWidth) {
            yajs.querySelector('.yajs__arrow--left').classList.add('yajs__arrow--hidden');
            yajs.querySelector('.yajs__arrow--right').classList.add('yajs__arrow--hidden');
        }

        function arrowScroll(scrollStep) {
            var scrollAmount = 1;
            var childCoefficient = Array.prototype.slice.call(yajs.querySelectorAll('.yajs__container > *')).length > 5 ? 2 : 1;

            var slideTimer = setInterval(function () {
                scrollLeft = container.scrollLeft += scrollStep;

                scrollAmount += scrollStep;
                scrollStep += scrollStep / scrollAmount;
                if (scrollAmount >= (296 * childCoefficient)) {
                    clearInterval(slideTimer);
                }
            }, 5);
        }

        // auto scroll
        function autoScroll () {
            autoplay = setInterval(function () {
                if (container.scrollWidth - container.clientWidth > container.scrollLeft + 2) {
                    arrowScroll(10);

                    return;
                }

                try {
                    container.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                } catch (err) {
                    container.scrollTo(0, 0);
                }
            }, 5000);
        }
        autoScroll();

        // stop auto scroll
        yajs.addEventListener('mouseover', function () {
            if (autoplay) {
                clearInterval(autoplay);
            }
        });

        // restart auto scroll
        yajs.addEventListener('mouseout', function () {
            autoScroll();
        });

        // arrow scroll left
        yajs.querySelector('.yajs__arrow--left').addEventListener('click', function () {
            arrowScroll(-10);
        });

        // arrow scroll right
        yajs.querySelector('.yajs__arrow--right').addEventListener('click', function () {
            arrowScroll(10);
        });

        // manual stop scrolling
        container.addEventListener('mouseup', function () {
            scrolling = false;
            container.classList.remove('yajs__container--scrolling');
        });

        // manual start scrolling
        container.addEventListener('mousedown', function (event) {
            scrolling = true;
            container.classList.add('yajs__container--scrolling');
            startX = event.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        // manual scrolling
        container.addEventListener('mousemove', function (event) {
            if (!scrolling) {
                return;
            }

            event.preventDefault();

            var x = event.pageX - container.offsetLeft;
            var walk = (x - startX) * 3;
            container.scrollLeft = scrollLeft - walk;
        });

        // manual stop scrolling
        container.addEventListener('mouseleave', function () {
            scrolling = false;
            container.classList.remove('yajs__container--scrolling');
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    yajs();
});
