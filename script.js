document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.parent.row section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0,
        rootMargin: '-50% 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            indicators[i].classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 7000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopSlideShow();
            showSlide(index);
            startSlideShow();
        });
    });

    showSlide(currentSlide);
    startSlideShow();
});



// .animated-block
document.addEventListener('DOMContentLoaded', function () {
    const animatedBlock = document.querySelector('.animated-word');
    const spans = document.querySelectorAll('.animated-block span');
    const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                spans.forEach((span, index) => {
                    setTimeout(() => {
                        span.classList.add('revisible');
                    }, index * 100);
                });
                observer1.unobserve(animatedBlock);
            }
        });
    }, {
        threshold: 0,
        rootMargin: '-50% 0px'
    });

    observer1.observe(animatedBlock);
});
