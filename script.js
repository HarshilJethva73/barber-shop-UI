/**
 * Minimal vanilla JS — active nav highlight on scroll
 */
(function () {
    var sections = document.querySelectorAll('section[id], footer[id]');
    var navLinks = document.querySelectorAll('.nav-links a');

    if (!sections.length || !navLinks.length) return;

    function onScroll() {
        var scrollY = window.scrollY + 120;
        var current = 'home';

        if (window.scrollY > 80) {
            current = '';
            sections.forEach(function (section) {
                var top = section.offsetTop;
                var height = section.offsetHeight;
                var id = section.getAttribute('id');

                if (scrollY >= top && scrollY < top + height) {
                    current = id;
                }
            });
        }

        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();
