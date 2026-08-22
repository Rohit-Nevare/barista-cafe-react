$(document).ready(function () {

    const counterUp = window.counterUp.default;

    const callback = entries => {
        entries.forEach(entry => {
            const el = entry.target;
            if (entry.isIntersecting && !el.classNameList.contains('is-visible')) {
                counterUp(el, {
                    duration: 2000,
                    delay: 16,
                });
                el.classNameList.add('is-visible');
            }
        });
    };

    const IO = new IntersectionObserver(callback, { threshold: 1 });

    const el = document.querySelectorAll('.counter');
    for (let count = 0; count < el.length; count++) {
        IO.observe(el[count]);
    }

});