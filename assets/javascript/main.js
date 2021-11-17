$(document).ready(function() {
    $('.image-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        dots: true,
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fas fa-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fas fa-arrow-right' aria-hidden='true'></i></button>",
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    });
});

// Danh mục
// var typed = new Typed(".auto-input", {
//     strings: ["Danh mục", "Danh Mục", "DANH MỤC"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     loop: true
// });

// Password
var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strenght");

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }
    if (pass.value.length < 4) {
        str.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    } else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "medium";
        pass.style.borderColor = "#fbd233";
        msg.style.color = "#fbd233";
    } else if (pass.value.length >= 8) {
        str.innerHTML = "strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }

});

var container = {
    logUpIn: function() {
        var clickSignUp = document.querySelector('span[title="sign-up"]');
        var showSignUp = document.querySelector('#sign-up');
        var closeSignUp = document.querySelector('.btn-close-sign-up');
        var signIn = document.querySelector('.sign-in');

        clickSignUp.addEventListener('click', function() {
            showSignUp.style.display = 'flex'
        })

        closeSignUp.addEventListener('click', function() {
            showSignUp.style.display = 'none'
        })

        signIn.addEventListener('click', function() {
            showSignUp.style.display = 'none'
            showSignIn.style.display = 'block'
        })


        var clickSignIn = document.querySelector('span[title="sign-in"]')
        var showSignIn = document.querySelector('#sign-in');
        var closeSignIn = document.querySelector('.btn-close-sign-in');
        var signUp = document.querySelector('.sign-up');

        clickSignIn.addEventListener('click', function() {
            showSignIn.style.display = 'flex'
        })

        closeSignIn.addEventListener('click', function() {
            showSignIn.style.display = 'none'
        })

        signUp.addEventListener('click', function() {
            showSignIn.style.display = 'none'
            showSignUp.style.display = 'block'
        })

        // Forgot Password
        var forgotPassword = document.querySelector('.auth-form__help--forgot-password');
        var showForgotPassword = document.querySelector('#forgot-password');
        var closeForgotPassword = document.querySelector('span[class="auth-form__switch-btn close"]')

        forgotPassword.addEventListener('click', function() {
            showSignIn.style.display = 'none'
            showForgotPassword.style.display = 'block'
        })

        closeForgotPassword.addEventListener('click', function() {
            showForgotPassword.style.display = 'none'
        })

        // Mobile and Tablet
        var signUpMobile = document.querySelector('#sign-up-mobile');
        var signInMobile = document.querySelector('#sign-in-mobile');

        signUpMobile.addEventListener('click', function() {
            showSignUp.style.display = 'block'
        })

        signInMobile.addEventListener('click', function() {
            showSignIn.style.display = 'block'
        })
    },

    showInput: function() {
        var showMore = document.querySelector('.show-more');
        var historyCompact = document.querySelector('.history-compact');
        var hideMore = document.querySelector('.hide-more');
        var closeProduct = document.querySelectorAll('.close-history-product')[0];
        var nameProduct = document.querySelectorAll('.history-header-search-item')[0];
        var closeProductTwo = document.querySelectorAll('.close-history-product')[1];
        var nameProductTwo = document.querySelectorAll('.history-header-search-item')[1];
        var closeProductThree = document.querySelectorAll('.close-history-product')[2];
        var nameProductThree = document.querySelectorAll('.history-header-search-item')[2];

        closeProduct.addEventListener('click', function() {
            nameProduct.style.display = 'none';
        })

        closeProductTwo.addEventListener('click', function() {
            nameProductTwo.style.display = 'none';
        })

        closeProductThree.addEventListener('click', function() {
            nameProductThree.style.display = 'none';
        })

        showMore.addEventListener('click', function() {
            historyCompact.style.display = 'block'
            showMore.style.display = 'none'
            hideMore.style.display = 'block'
        })

        hideMore.addEventListener('click', function() {
            historyCompact.style.display = 'none'
            showMore.style.display = 'block'
            hideMore.style.display = 'none'
        })

    },

    showHistoryBtn: function() {
        var outPutSearch = document.querySelector('.output__search');
        var clickOnInput = document.querySelector('.input-search');
        var clickOffInput = document.querySelector('.close-the-search-panel-title');

        clickOnInput.addEventListener('click', function() {
            outPutSearch.style.display = 'block'
        })

        clickOffInput.addEventListener('click', function() {
            outPutSearch.style.display = 'none'
        })
    },
    start: function() {
        this.showInput();
        this.showHistoryBtn();
        this.logUpIn();
    }
};
container.start();