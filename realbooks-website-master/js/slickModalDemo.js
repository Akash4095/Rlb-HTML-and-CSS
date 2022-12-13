/* ========= INFORMATION ============================

 - document:  Slick Modals - HTML5 and CSS3 powered modal popups
 - author:    Capelle @ Codecanyon
 - profile:   http://codecanyon.net/user/Capelle
 - version:   3.5

 ==================================================== */

! function(a) {
    a.fn.slickModals = function(b) {
        var c = a.extend({ cookieTriggerClass: "setSlickCookie", cookieName: "slickCookie" }, b);
        return this.each(function() {
            function j(c) { "center" === c ? a(b).children(".slickWindow").css({ margin: "auto" }) : "bottomCenter" === c || "topCenter" === c ? a(b).children(".slickWindow").css({ "margin-left": "auto", "margin-right": "auto" }) : "right" !== c && "left" !== c || a(b).children(".slickWindow").css({ "margin-top": "auto", "margin-bottom": "auto" }) }

            function k() { c.breakPoint = parseInt(c.breakPoint), a(b).children(".slickWindow").addClass("animated").css({ "box-shadow": c.popupShadowOffsetX + " " + c.popupShadowOffsetY + " " + c.popupShadowBlurRadius + " " + c.popupShadowSpreadRadius + " " + c.popupShadowColor, background: c.popupBackground, "-webkit-animation-duration": c.popupAnimationDuration + "s", "animation-duration": c.popupAnimationDuration + "s", "-webkit-animation-delay": parseFloat(c.overlayTransitionSpeed) / 2 + "s", "animation-delay": parseFloat(c.overlayTransitionSpeed) / 2 + "s" }), c.responsive === !0 && a(window).width() <= c.breakPoint ? (a(b).children(".slickWindow").addClass(c.mobileLocation).css({ "border-radius": c.mobileRadius, width: c.mobileWidth, height: c.mobileHeight, margin: c.mobileMargin, padding: c.mobilePadding }), j(c.mobileLocation)) : (a(b).children(".slickWindow").addClass(c.popupLocation).css({ "border-radius": c.popupRadius, width: c.popupWidth, height: c.popupHeight, margin: c.popupMargin, padding: c.popupPadding }), j(c.popupLocation)) }

            function l() { a(b).children(".slickWindow").addClass(c.popupAnimationEffect) }

            function m() { a(b).children(".slickWindow").removeClass(c.popupAnimationEffect) }

            function n() { c.contentAnimate === !0 && a(b).children(".slickWindow").children().not(".slickCloseBtn").wrapAll('<div class="slickContent"></div>') }

            function o() { c.contentAnimate === !0 && a(b).find(".slickWindow .slickContent").addClass(c.contentAnimateEffect + " animated").css({ "-webkit-animation-duration": c.contentAnimateSpeed + "s", "animation-duration": c.contentAnimateSpeed + "s", "-webkit-animation-delay": c.contentAnimateDelay + "s", "animation-delay": c.contentAnimateDelay + "s" }) }

            function p() { c.contentAnimate === !0 && a(b).find(".slickWindow .slickContent").removeClass(c.contentAnimateEffect) }

            function q() { i.addClass("blurred").css({ "-webkit-filter": "blur(" + c.blurBgRadius + ")", filter: "blur(" + c.blurBgRadius + ")" }) }

            function r() { i.addClass("scaled").css({ "-webkit-transform": "scale(" + c.scaleBgValue + ")", transform: "scale(" + c.scaleBgValue + ")" }) }

            function s() { "blur" === c.pageEffect ? q() : "scale" === c.pageEffect ? r() : "both" === c.pageEffect && (q(), r()), "blur" !== c.pageEffect && "scale" !== c.pageEffect && "both" !== c.pageEffect || i.css({ "-webkit-transition-duration": c.overlayTransitionSpeed + "s", "transition-duration": c.overlayTransitionSpeed + "s" }) }

            function t() {
                (i.hasClass("blurred") || i.hasClass("scaled")) && i.removeClass("blurred scaled").css({ "-webkit-transform": "", transform: "", "-webkit-filter": "", filter: "" })
            }

            function u() { c.overlayBg === !0 && (a(b).prepend('<div class="slickOverlay"></div>'), c.overlayClosesModal === !0 && a(b).children(".slickOverlay").addClass("closeModal"), a(b).children(".slickOverlay").addClass(c.cookieTriggerClass).css({ background: c.overlayBgColor, "-webkit-transition-duration": c.overlayTransitionSpeed + "s", "transition-duration": c.overlayTransitionSpeed + "s" })) }

            function v() { c.addCloseButton === !0 && (a(b).children(".slickWindow").prepend('<div class="slickCloseBtn close closeModal ' + c.buttonStyle + '"></div>'), c.setCookie === !0 && a(b).find(".slickWindow").children(".closeModal").addClass(c.cookieTriggerClass)) }

            function w() { c.enableESC === !0 && a(window).bind("keydown", function(a) { 27 === a.keyCode && G() }) }

            function x() { void 0 !== c.onSlickLoad && c.onSlickLoad() }

            function y() { void 0 !== c.onSlickClose && c.onSlickClose() }

            function z() {
                if (!d)
                    if ("delayed" === c.popupType) setTimeout(F, c.delayTime);
                    else if ("exit" === c.popupType) {
                    var b = !1;
                    a(document).on("mouseleave", function(a) { a.clientY < 0 && !b && (b = !0, F()) })
                } else "scrolled" === c.popupType && a(document).scroll(function() {
                    var b = a(this).scrollTop();
                    b > c.scrollTopDistance && F()
                })
            }

            function A() { c.videoSupport === !0 && c.videoAutoPlay === !0 && g.length > 0 && g.attr("src", h + "?autoplay=1") }

            function B() { c.videoSupport === !0 && c.videoStopOnClose === !0 && g.length > 0 && g.attr("src", h + "?autoplay=0") }

            function C() {
                switch (days = c.cookieDays, CookieDate = new Date, CookieDate.setTime(CookieDate.getTime() + 24 * days * 60 * 60 * 1e3), c.cookieScope) {
                    case "domain":
                        scopeSetting = "/";
                        break;
                    case "page":
                        scopeSetting = window.location.href
                }
                days > 0 ? document.cookie = c.cookieName + "=true; path=" + scopeSetting + "; expires=" + CookieDate.toGMTString() : 0 === days && (document.cookie = c.cookieName + "=true; path=" + scopeSetting + ";")
            }

            function D() { c.setCookie === !0 && (a("." + c.cookieTriggerClass).on("click", function() { C() }), c.enableESC === !0 && a(window).bind("keydown", function(a) { 27 === a.keyCode && C() })) }

            function E() { a(b).css({ "-webkit-transition-duration": c.overlayTransitionSpeed + "s", "transition-duration": c.overlayTransitionSpeed + "s" }) }

            function F() { a(b).addClass("isActive"), s(), l(), o(), x(), A() }

            function G() { a(b).removeClass("isActive"), t(), m(), p(), y(), B() }
            var b = this,
                d = document.cookie.indexOf(c.cookieName) >= 0,
                e = window.location.pathname,
                f = a.inArray(e, c.hideOnPages) === -1,
                g = a(b).find('iframe[src*="youtube.com"]'),
                h = g.attr("src"),
                i = a("body > *").not(".slickModal, script");
            f && (E(), u(), v(), w(), z(), k(), D(), n(), a(b).find(".closeModal").on("click", function() { G() }), a("." + c.reopenClass).on("click", function() { F() }))
        })
    }
}(jQuery);

$(document).ready(function() {

    // Exit popup
    $('#exitPopup').slickModals({
        popupType: 'exit',
        exitTopDistance: 100,
        setCookie: true,
        cookieDays: 0,
        cookieTriggerClass: 'setCookie-exit',
        cookieName: 'exitCookie',
        cookieScope: 'domain',
        overlayBg: true,
        overlayClosesModal: true,
        overlayBgColor: 'rgba(0,0,0,0.85)',
        overlayTransitionSpeed: '0.4',
        popupWidth: '480px',
        popupHeight: '360px',
        popupLocation: 'center',
        popupAnimationDuration: '0.8',
        popupAnimationEffect: 'flipInX',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '20px',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0.4)',
        popupBackground: '#fff',
        popupRadius: '0',
        popupMargin: '0',
        popupPadding: '0',
        addCloseButton: true,
        buttonStyle: 'labeled',
        enableESC: true,
        reopenClass: 'openSlickModal-exit',
    });

    // Simple message
    $('#popup-6').slickModals({
        popupType: 'delayed',
        delayTime: 5000,
        overlayBg: true,
        overlayClosesModal: true,
        overlayBgColor: 'rgba(0,0,0,0.85)',
        overlayTransitionSpeed: '0.4',
        popupWidth: '800px',
        popupHeight: '300px',
        popupLocation: 'topCenter',
        popupAnimationDuration: '0.4',
        popupAnimationEffect: 'swingTop',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '20px',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0.4)',
        popupBackground: '#fff',
        popupRadius: '0',
        popupMargin: '30px',
        popupPadding: '0',
        contentAnimate: true,
        contentAnimateEffect: 'zoomIn',
        contentAnimateSpeed: '0.8',
        contentAnimateDelay: '0.4',
        addCloseButton: true,
        buttonStyle: 'icon',
        enableESC: true,
        reopenClass: 'openSlickModal-6',
    });


    // Bottom bar countdown
    $('#popup-16').slickModals({
        popupType: 'delayed',
        delayTime: 5000,
        overlayBg: false,
        overlayClosesModal: true,
        overlayBgColor: 'rgba(255,255,255,0.9)',
        overlayTransitionSpeed: '0.4',
        popupWidth: '98%',
        popupHeight: '100px',
        popupLocation: 'bottomCenter',
        popupAnimationDuration: '0.6',
        popupAnimationEffect: 'slideBottom',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '20px',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0)',
        popupBackground: 'transparent',
        popupRadius: '0',
        popupMargin: '0',
        popupPadding: '0',
        addCloseButton: true,
        buttonStyle: 'labeled',
        enableESC: true,
        reopenClass: 'openSlickModal-16',
    });

    // Countdown banner
    $('#popup-15').slickModals({
        popupType: 'delayed',
        delayTime: 5000,
        overlayBg: false,
        overlayClosesModal: true,
        overlayBgColor: 'rgba(255,255,255,0.9)',
        overlayTransitionSpeed: '0.4',
        popupWidth: '320px',
        popupHeight: '320px',
        popupLocation: 'bottomRight',
        popupAnimationDuration: '0.6',
        popupAnimationEffect: 'flipInY',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '20px',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0.4)',
        popupBackground: '#fff',
        popupRadius: '0',
        // popupMargin: '30px',
        popupPadding: '0',
        addCloseButton: true,
        buttonStyle: 'icon',
        enableESC: true,
        reopenClass: 'openSlickModal-15',
    });

    // Contact form
    $('#popup-1').slickModals({
        overlayBg: true,
        overlayClosesModal: true,
        overlayBgColor: 'rgba(0,0,0,0.85)',
        overlayTransitionSpeed: '0.4',
        popupWidth: '420px',
        popupHeight: '500px',
        popupLocation: 'center',
        popupAnimationDuration: '0.8',
        popupAnimationEffect: 'flipInY',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '20px',
        popupShadowSpreadRadius: '0',
        popupShadowColor: '0',
        popupBackground: 'transparent',
        popupRadius: '0',
        popupMargin: 'auto',
        popupPadding: '0',
        addCloseButton: true,
        buttonStyle: '',
        enableESC: true,
        reopenClass: 'openSlickModal-1',
    });

    // Newsletter form
    $('#popup-2').slickModals({
        overlayBg: true,
        overlayClosesModal: true,
        overlayBgColor: 'rgba(255,255,255,0.4)',
        overlayTransitionSpeed: '0.4',
        popupWidth: '560px',
        popupHeight: '300px',
        popupLocation: 'center',
        popupAnimationDuration: '0.6',
        popupAnimationEffect: 'rotateIn',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '20px',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0)',
        popupBackground: "rgba(255,255,255,1)",
        popupRadius: '0',
        popupMargin: '0',
        popupPadding: '0',
        addCloseButton: true,
        buttonStyle: 'icon',
        enableESC: true,
        reopenClass: 'openSlickModal-2',
    });

    // Promo banner
    $('#popup-3').slickModals({
        overlayBg: true,
        overlayClosesModal: true,
        overlayBgColor: 'rgba(0,0,0,0.85)',
        overlayTransitionSpeed: '0.4',
        pageEffect: 'scale',
        scaleBgValue: '0.9',
        popupWidth: '300px',
        popupHeight: '500px',
        popupLocation: 'left',
        popupAnimationDuration: '0.4',
        popupAnimationEffect: 'slideLeft',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '40px',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0.4)',
        popupBackground: '#fff',
        popupRadius: '0',
        popupMargin: '0',
        popupPadding: '0',
        addCloseButton: true,
        buttonStyle: 'labeled',
        enableESC: true,
        reopenClass: 'openSlickModal-3',
    });

    // Video
    $('#popup-4').slickModals({
        overlayBg: true,
        overlayClosesModal: true,
        overlayBgColor: 'rgba(0,0,0,0.85)',
        overlayTransitionSpeed: '0.4',
        popupWidth: '80%',
        popupHeight: '80%',
        popupLocation: 'center',
        popupAnimationDuration: '0.6',
        popupAnimationEffect: 'slideBottom',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '40px',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0.4)',
        popupBackground: '#fff',
        popupRadius: '0',
        popupMargin: '0',
        popupPadding: '0',
        videoSupport: true,
        videoAutoPlay: true,
        videoStopOnClose: true,
        addCloseButton: true,
        buttonStyle: 'labeled',
        enableESC: true,
        reopenClass: 'openSlickModal-4',
    });

    // Google map
    $('#popup-5').slickModals({
        overlayBg: true,
        overlayClosesModal: true,
        overlayBgColor: 'rgba(0,0,0,0.85)',
        overlayTransitionSpeed: '0.4',
        popupWidth: '60%',
        popupHeight: '50%',
        popupLocation: 'center',
        popupAnimationDuration: '0.8',
        popupAnimationEffect: 'fadeIn',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '0',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0)',
        popupBackground: '#fff',
        popupRadius: '0',
        popupMargin: '0',
        popupPadding: '0',
        addCloseButton: true,
        buttonStyle: 'labeled',
        enableESC: true,
        reopenClass: 'openSlickModal-5',
    });

    

    // Bg image
    $('#popup-7').slickModals({
        overlayBg: true,
        overlayClosesModal: true,
        overlayBgColor: 'url("img/demos/bg.jpg") no-repeat center center / cover',
        overlayTransitionSpeed: '0.4',
        popupWidth: '480px',
        popupHeight: '280px',
        popupLocation: 'bottomRight',
        popupAnimationDuration: '1',
        popupAnimationEffect: 'bounceInRight',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '20px',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0.4)',
        popupBackground: '#fff',
        popupRadius: '0',
        popupMargin: '30px',
        popupPadding: '0',
        contentAnimate: true,
        contentAnimateEffect: 'bounceInRight',
        contentAnimateSpeed: '1',
        contentAnimateDelay: '0.4',
        addCloseButton: true,
        buttonStyle: 'icon',
        enableESC: true,
        reopenClass: 'openSlickModal-7',
    });

    // Panorama
    $('#popup-8').slickModals({
        overlayBg: true,
        overlayClosesModal: true,
        overlayBgColor: 'rgba(0,0,0,0.85)',
        overlayTransitionSpeed: '0.4',
        popupWidth: '60%',
        popupHeight: '60%',
        popupLocation: 'center',
        popupAnimationDuration: '0.8',
        popupAnimationEffect: 'fadeIn',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '40px',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0.4)',
        popupBackground: '#fff',
        popupRadius: '0',
        popupMargin: '0',
        popupPadding: '0',
        addCloseButton: true,
        buttonStyle: 'labeled',
        enableESC: true,
        reopenClass: 'openSlickModal-8',
    });

    // Stats
    $('#popup-9').slickModals({
        overlayBg: true,
        overlayClosesModal: true,
        overlayBgColor: 'rgba(0,0,0,0.85)',
        overlayTransitionSpeed: '0.4',
        popupWidth: '500px',
        popupHeight: '300px',
        popupLocation: 'bottomLeft',
        popupAnimationDuration: '0.8',
        popupAnimationEffect: 'slideRight',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '0',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0)',
        popupBackground: 'transparent',
        popupRadius: '0',
        popupMargin: '30px',
        popupPadding: '30px',
        addCloseButton: false,
        enableESC: true,
        reopenClass: 'openSlickModal-9',
    });

    // Cookie 1
    $('#popup-10').slickModals({
        overlayBg: true,
        overlayClosesModal: true,
        overlayBgColor: 'rgba(0,0,0,0.85)',
        overlayTransitionSpeed: '0.4',
        pageEffect: 'scale',
        scaleBgValue: '0.98',
        popupWidth: '400px',
        popupHeight: '184px',
        popupLocation: 'bottomCenter',
        popupAnimationDuration: '0.8',
        popupAnimationEffect: 'slideBottom',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '20px',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0.4)',
        popupBackground: '#fff',
        popupRadius: '0',
        popupMargin: '0',
        popupPadding: '36px',
        addCloseButton: true,
        buttonStyle: 'icon',
        enableESC: true,
        reopenClass: 'openSlickModal-10',
    });

    // Cookie 2
    $('#popup-11').slickModals({
        overlayBg: false,
        overlayClosesModal: true,
        overlayBgColor: 'rgba(0,0,0,0.85)',
        overlayTransitionSpeed: '0.4',
        pageEffect: 'blur',
        blurBgRadius: '1px',
        popupWidth: '100%',
        popupHeight: '90px',
        popupLocation: 'bottomLeft',
        popupAnimationDuration: '0.4',
        popupAnimationEffect: 'slideBottom',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '0',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0)',
        popupBackground: 'transparent',
        popupRadius: '0',
        popupMargin: '0',
        popupPadding: '0',
        addCloseButton: true,
        buttonStyle: 'icon',
        enableESC: true,
        reopenClass: 'openSlickModal-11',
    });

    // FB page
    $('#popup-12').slickModals({
        overlayBg: true,
        overlayClosesModal: true,
        overlayBgColor: 'rgba(36, 86, 144, 0.85)',
        overlayTransitionSpeed: '0.4',
        popupWidth: '420px',
        popupHeight: '214',
        popupLocation: 'bottomRight',
        popupAnimationDuration: '0.8',
        popupAnimationEffect: 'zoomIn',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '20px',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0.4)',
        popupBackground: '#fff',
        popupRadius: '0',
        popupMargin: '30px',
        popupPadding: '0',
        addCloseButton: true,
        buttonStyle: 'circle',
        enableESC: true,
        reopenClass: 'openSlickModal-12',
    });

    // Social buttons
    $('#popup-13').slickModals({
        popupWidth: '200px',
        popupHeight: '60px',
        popupLocation: 'bottomRight',
        popupAnimationDuration: '0.6',
        popupAnimationEffect: 'zoomIn',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '20px',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0)',
        popupBackground: 'transparent',
        popupRadius: '0',
        popupMargin: '30px',
        popupPadding: '0',
        addCloseButton: true,
        buttonStyle: '',
        enableESC: true,
        reopenClass: 'openSlickModal-13',
    });

    // Under construction
    $('#popup-14').slickModals({
        overlayBg: true,
        overlayClosesModal: false,
        overlayBgColor: 'rgba(0,154,178,0.9)',
        overlayTransitionSpeed: '0.4',
        pageEffect: 'blur',
        blurBgRadius: '1px',
        popupWidth: '560px',
        popupHeight: 'auto',
        popupLocation: 'bottomLeft',
        popupAnimationDuration: '0.6',
        popupAnimationEffect: 'slideLeft',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '0',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0)',
        popupBackground: 'transparent',
        popupRadius: '0',
        popupMargin: '0',
        popupPadding: '0',
        addCloseButton: true,
        buttonStyle: 'labeled',
        enableESC: true,
        reopenClass: 'openSlickModal-14',
    });





    // User account
    $('#popup-17').slickModals({
        overlayBg: true,
        overlayClosesModal: true,
        overlayBgColor: 'rgba(0,0,0,0.4)',
        overlayTransitionSpeed: '0.4',
        popupWidth: '360px',
        popupHeight: '460px',
        popupLocation: 'bottomRight',
        popupAnimationDuration: '0.6',
        popupAnimationEffect: 'slideBottom',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '30px',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0.2)',
        popupBackground: "#fff",
        popupRadius: '0',
        popupMargin: '30px',
        popupPadding: '30px',
        contentAnimate: true,
        contentAnimateEffect: 'slideBottom',
        contentAnimateSpeed: '0.8',
        contentAnimateDelay: '0.4',
        videoSupport: false,
        videoAutoPlay: true,
        videoStopOnClose: true,
        addCloseButton: true,
        buttonStyle: 'labeled',
        enableESC: true,
        reopenClass: 'openSlickModal-17',
    });

    // Mini cart
    $('#popup-18').slickModals({
        // Hide on pages
        hideOnPages: [
            '/foo/page1/',
            '/foo/page2/',
            '/foo/page3/'
        ],
        // Popup type
        popupType: '',
        delayTime: 0,
        scrollTopDistance: 400,
        // Popup cookies
        setCookie: false,
        cookieDays: 30,
        cookieTriggerClass: 'setCookie-1',
        cookieName: 'slickModal-1',
        cookieScope: 'domain',
        // Overlay styling
        overlayBg: true,
        overlayClosesModal: true,
        overlayBgColor: 'rgba(0,0,0,0.6)',
        overlayTransitionSpeed: '0.4',
        // Background effects
        pageEffect: 'scale',
        blurBgRadius: '1px',
        scaleBgValue: '0.95',
        // Popup styling
        popupWidth: '360px',
        popupHeight: '100%',
        popupLocation: 'topRight',
        popupAnimationDuration: '0.6',
        popupAnimationEffect: 'slideRight',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '60px',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0.2)',
        popupBackground: '#fff',
        popupRadius: '0',
        popupMargin: '0',
        popupPadding: '0',
        // Responsive rules
        responsive: false,
        breakPoint: '480px',
        mobileLocation: 'center',
        mobileWidth: '100%',
        mobileHeight: 'auto',
        mobileRadius: '0',
        mobileMargin: '0',
        mobilePadding: '20px',
        // Animate content
        contentAnimate: false,
        contentAnimateEffect: 'slideRight',
        contentAnimateSpeed: '0.4',
        contentAnimateDelay: '0.4',
        // Youtube videos
        videoSupport: true,
        videoAutoPlay: true,
        videoStopOnClose: true,
        // Close and reopen button
        addCloseButton: false,
        buttonStyle: 'icon',
        enableESC: true,
        reopenClass: 'openSlickModal-18',
        // Additional events
        onSlickLoad: function() {
            // Remove item(s) from the cart
            var count = $('#popup-18').find('.slickWindow .cartItems .item').length,
                t = 0;
            $('#popup-18').find('.slickWindow .cartItems .item').each(function() {
                p = $(this).find('.data .price span').text().replace('$', '').replace('.', '');
                f = Math.floor(p) / 100;
                t += f++;
                sum = parseFloat(t).toFixed(2);
                $(this).find('.data .remove').click(function() {
                    count--
                    p = $(this).siblings('.price').find('span').text().replace('$', '').replace('.', '');
                    f = Math.floor(p) / 100;
                    sum = parseFloat(sum - f).toFixed(2);
                    $('#popup-18 .slickWindow').find('.total span').text('$ ' + (sum));
                    $(this).closest('.item').addClass('hidden').delay(300).queue(function() {
                        $(this).remove();
                    });
                    $('#popup-18 .slickWindow .info span').text(count);
                    if (count < 1) {
                        $('#popup-18 .slickWindow').find('.actions, .cartItems, .total, .info').hide();
                        $('#popup-18').find('.slickWindow .emptyCart').fadeIn();
                    }
                });
            });
        },
        onSlickClose: function() {
            console.log("Slick is hidden")
        }
    });

    // Login form
    $('#popup-19').slickModals({
        // Hide on pages
        hideOnPages: [
            '/foo/page1/',
            '/foo/page2/',
            '/foo/page3/'
        ],
        // Popup type
        popupType: '',
        delayTime: 0,
        scrollTopDistance: 400,
        // Popup cookies
        setCookie: false,
        cookieDays: 30,
        cookieTriggerClass: 'setCookie-1',
        cookieName: 'slickModal-1',
        cookieScope: 'domain',
        // Overlay styling
        overlayBg: true,
        overlayClosesModal: true,
        overlayBgColor: 'rgba(255,255,255,0.9)',
        overlayTransitionSpeed: '0.4',
        // Background effects
        pageEffect: '',
        blurBgRadius: '1px',
        scaleBgValue: '0.9',
        // Popup styling
        popupWidth: '420px',
        popupHeight: '490px',
        popupLocation: 'bottomRight',
        popupAnimationDuration: '0.8',
        popupAnimationEffect: 'bounceInUp',
        popupShadowOffsetX: '0',
        popupShadowOffsetY: '0',
        popupShadowBlurRadius: '50px',
        popupShadowSpreadRadius: '0',
        popupShadowColor: 'rgba(0,0,0,0)',
        popupBackground: 'transparent',
        popupRadius: '0',
        popupMargin: '10px 30px',
        popupPadding: '0',
        // Responsive rules
        responsive: true,
        breakPoint: '420px',
        mobileLocation: 'center',
        mobileWidth: '100%',
        mobileHeight: 'auto',
        mobileRadius: '0',
        mobileMargin: '0',
        mobilePadding: '20px',
        // Animate content
        contentAnimate: false,
        contentAnimateEffect: 'zoomIn',
        contentAnimateSpeed: '0.4',
        contentAnimateDelay: '0.4',
        // Youtube videos
        videoSupport: false,
        videoAutoPlay: true,
        videoStopOnClose: true,
        // Close and reopen button
        addCloseButton: true,
        buttonStyle: 'icon',
        enableESC: true,
        reopenClass: 'openSlickModal-19',
        // Additional events
        onSlickLoad: function() {
            $('#popup-19 .slickWindow div .switch').click(function() {
                $('#popup-19 .slickWindow .change').toggleClass('hidden');
            });
            $('#popup-19 .slickWindow input[type="submit"]').click(function() {
                return false
            });
        },
        onSlickClose: function() {
            console.log("Slick is hidden")
        }
    });

});
