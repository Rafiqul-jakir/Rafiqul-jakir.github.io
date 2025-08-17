// German CV Website JavaScript

$(document).ready(function() {
    
    // Initialize Swiper for Projects
    const projectsSwiper = new Swiper('.projects-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.projects-swiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.projects-swiper .swiper-button-next',
            prevEl: '.projects-swiper .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });

    // Initialize Swiper for Certificates
    const certificatesSwiper = new Swiper('.certificates-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.certificates-swiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.certificates-swiper .swiper-button-next',
            prevEl: '.certificates-swiper .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            }
        }
    });

    // Back to Top Button
    const backToTopButton = $('#backToTop');
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            backToTopButton.addClass('show');
        } else {
            backToTopButton.removeClass('show');
        }
        
        // Trigger scroll animations
        handleScrollAnimations();
    });
    
    // Smooth scroll to top
    backToTopButton.click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800, 'easeInOutCubic');
        return false;
    });

    // Custom easing function
    $.easing.easeInOutCubic = function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    };

    // Scroll Animations
    function handleScrollAnimations() {
        const windowHeight = $(window).height();
        const scrollTop = $(window).scrollTop();
        
        // Animate elements on scroll
        $('.fade-in, .slide-in-left, .slide-in-right').each(function() {
            const elementTop = $(this).offset().top;
            const elementHeight = $(this).outerHeight();
            
            if (elementTop < scrollTop + windowHeight - 100 && elementTop + elementHeight > scrollTop) {
                $(this).addClass('animate');
            }
        });
        
        // Animate section titles
        $('.section-title').each(function() {
            const elementTop = $(this).offset().top;
            
            if (elementTop < scrollTop + windowHeight - 100) {
                $(this).addClass('fade-in animate');
            }
        });
        
        // Animate experience items
        $('.experience-item').each(function(index) {
            const elementTop = $(this).offset().top;
            
            if (elementTop < scrollTop + windowHeight - 100) {
                setTimeout(() => {
                    $(this).addClass('fade-in animate');
                }, index * 200);
            }
        });
        
        // Animate education items
        $('.education-item').each(function(index) {
            const elementTop = $(this).offset().top;
            
            if (elementTop < scrollTop + windowHeight - 100) {
                setTimeout(() => {
                    $(this).addClass('slide-in-left animate');
                }, index * 150);
            }
        });
        
        // Animate skill categories
        $('.skill-category').each(function(index) {
            const elementTop = $(this).offset().top;
            
            if (elementTop < scrollTop + windowHeight - 100) {
                setTimeout(() => {
                    $(this).addClass('fade-in animate');
                }, index * 100);
            }
        });
        
        // Animate language items
        $('.language-item').each(function(index) {
            const elementTop = $(this).offset().top;
            
            if (elementTop < scrollTop + windowHeight - 100) {
                setTimeout(() => {
                    $(this).addClass('slide-in-left animate');
                }, index * 100);
            }
        });
        
        // Animate interest items
        $('.interest-item').each(function(index) {
            const elementTop = $(this).offset().top;
            
            if (elementTop < scrollTop + windowHeight - 100) {
                setTimeout(() => {
                    $(this).addClass('slide-in-right animate');
                }, index * 150);
            }
        });
    }

    // Initialize animations on page load
    $(window).on('load', function() {
        // Add initial animation classes
        $('.header-section .profile-photo').addClass('fade-in');
        $('.header-section .personal-info').addClass('slide-in-right');
        
        // Trigger initial animations
        setTimeout(() => {
            $('.header-section .profile-photo').addClass('animate');
        }, 300);
        
        setTimeout(() => {
            $('.header-section .personal-info').addClass('animate');
        }, 600);
        
        // Handle scroll animations
        handleScrollAnimations();
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 1000, 'easeInOutCubic');
        }
    });

    // Enhanced hover effects for cards
    $('.experience-item, .education-item, .project-card, .certificate-card').hover(
        function() {
            $(this).css({
                'transform': 'translateY(-8px)',
                'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            });
        },
        function() {
            $(this).css({
                'transform': 'translateY(0)',
                'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            });
        }
    );

    // Skill tag hover effects
    $('.skill-tag').hover(
        function() {
            $(this).css({
                'transform': 'translateY(-2px) scale(1.05)',
                'transition': 'all 0.3s ease'
            });
        },
        function() {
            $(this).css({
                'transform': 'translateY(0) scale(1)',
                'transition': 'all 0.3s ease'
            });
        }
    );

    // Social links hover effects
    $('.social-links a').hover(
        function() {
            $(this).css({
                'transform': 'translateY(-3px) scale(1.1)',
                'transition': 'all 0.3s ease'
            });
        },
        function() {
            $(this).css({
                'transform': 'translateY(0) scale(1)',
                'transition': 'all 0.3s ease'
            });
        }
    );

    // Profile photo hover effect
    $('.profile-photo img').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.05) rotate(2deg)',
                'transition': 'all 0.4s ease'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1) rotate(0deg)',
                'transition': 'all 0.4s ease'
            });
        }
    );

    // Button click effects
    $('.btn, .back-to-top').click(function() {
        $(this).addClass('clicked');
        setTimeout(() => {
            $(this).removeClass('clicked');
        }, 200);
    });

    // Add clicked class styles
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            .clicked {
                transform: scale(0.95) !important;
                transition: transform 0.1s ease !important;
            }
        `)
        .appendTo('head');

    // Intersection Observer for better performance (modern browsers)
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry, index) {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        if ($(entry.target).hasClass('fade-in')) {
                            $(entry.target).addClass('animate');
                        } else if ($(entry.target).hasClass('slide-in-left')) {
                            $(entry.target).addClass('animate');
                        } else if ($(entry.target).hasClass('slide-in-right')) {
                            $(entry.target).addClass('animate');
                        }
                    }, index * 100);
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        $('.section-title, .experience-item, .education-item, .skill-category, .language-item, .interest-item').each(function() {
            // Add animation classes
            if ($(this).hasClass('section-title') || $(this).hasClass('skill-category')) {
                $(this).addClass('fade-in');
            } else if ($(this).hasClass('experience-item') || $(this).hasClass('education-item') || $(this).hasClass('language-item')) {
                $(this).addClass('slide-in-left');
            } else if ($(this).hasClass('interest-item')) {
                $(this).addClass('slide-in-right');
            }
            
            observer.observe(this);
        });
    }

    // Keyboard navigation support
    $(document).keydown(function(e) {
        // Press 'Home' to go to top
        if (e.key === 'Home') {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        }
        
        // Press 'End' to go to bottom
        if (e.key === 'End') {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(document).height()
            }, 800);
        }
    });

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = function() {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debouncing to scroll events for better performance
    const debouncedScroll = debounce(function() {
        // Back to top button visibility
        if ($(window).scrollTop() > 300) {
            backToTopButton.addClass('show');
        } else {
            backToTopButton.removeClass('show');
        }
        
        // Animation triggers
        handleScrollAnimations();
    }, 16); // ~60fps
    
    $(window).on('scroll', debouncedScroll);

    // Pause autoplay on hover for sliders
    $('.swiper').hover(
        function() {
            if ($(this).hasClass('projects-swiper')) {
                projectsSwiper.autoplay.stop();
            } else if ($(this).hasClass('certificates-swiper')) {
                certificatesSwiper.autoplay.stop();
            }
        },
        function() {
            if ($(this).hasClass('projects-swiper')) {
                projectsSwiper.autoplay.start();
            } else if ($(this).hasClass('certificates-swiper')) {
                certificatesSwiper.autoplay.start();
            }
        }
    );

    // Add loading animation for external links
    $('a[href^="http"], a[download]').click(function() {
        const $this = $(this);
        $this.addClass('loading');
        setTimeout(() => {
            $this.removeClass('loading');
        }, 2000);
    });

    // Add loading styles
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            .loading {
                opacity: 0.7;
                pointer-events: none;
            }
            .loading::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 20px;
                height: 20px;
                margin: -10px 0 0 -10px;
                border: 2px solid transparent;
                border-top: 2px solid var(--accent-color);
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `)
        .appendTo('head');

    // Add subtle parallax effect to header
    $(window).scroll(function() {
        const scrolled = $(this).scrollTop();
        const parallax = scrolled * 0.3;
        $('.header-section').css('transform', 'translateY(' + parallax + 'px)');
    });

    // Add smooth reveal animation for sections
    $('.section').each(function(index) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(50px)',
            'transition': 'all 0.8s ease'
        });
        
        setTimeout(() => {
            $(this).css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }, index * 200);
    });

    console.log('German CV Website loaded successfully!');
    console.log('Features: Scroll animations, Swiper sliders, Back-to-top button');
});

