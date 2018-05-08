
; /* Start:"a:4:{s:4:"full";s:34:"/js/all_template.js?14996762271253";s:6:"source";s:19:"/js/all_template.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function testfile() {
    var message;
    if (window.jQuery) {message = 'Здесь используется jQuery версия: ' + jQuery.fn.jquery;}
    else {message = 'jQuery не используется!';}
    return message;
}
$(document).ready(function () {
    $(document).on("click",".i_agree_tou",function () {
        var checkFind = $(this);
        var a = $(this).is(':checked');
        var b = $(this).parents("form");
        var buttom = $(b).find("input[type=submit]");
        if (a) {
            $(buttom).removeAttr("disabled");
        }
        else {
            $(buttom).attr("disabled","disabled");
        }
    });

    var checkFind = $(".i_agree_tou");
    var a = $(".i_agree_tou").is(':checked');
    var b = $(".i_agree_tou").parents("form");
    var buttom = $(b).find("input[type=submit]");
    if (checkFind) {
        if (a) {
            $(buttom).removeAttr("disabled");
        }
        else {
            $(buttom).attr("disabled","disabled");
        }
    }
    $(document).on("click",".fancy_page", function () {
        var link = this.href;
        $.fancybox({
            href : link,
            type : "ajax"
        });
        return false;
    })
})

/* End */
;
; /* Start:"a:4:{s:4:"full";s:62:"/bitrix/templates/.default/js/bootstrap.min.js?150537520748107";s:6:"source";s:46:"/bitrix/templates/.default/js/bootstrap.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), +function (a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)if (void 0 !== a.style[c])return {end: b[c]};
        return !1
    }

    a.fn.emulateTransitionEnd = function (b) {
        var c = !1, d = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }

    var c = '[data-dismiss="alert"]', d = function (b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }

        var e = a(this), f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }

    var c = function (b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.5", c.DEFAULTS = {loadingText: "loading..."}, c.prototype.setState = function (b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function () {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }

    var c = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b), d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap)return b;
        var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function (a) {
        var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval,
            h = "next" == b ? "left" : "right", i = this;
        if (f.hasClass("active"))return this.sliding = !1;
        var j = f[0], k = a.Event("slide.bs.carousel", {relatedTarget: j, direction: h});
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {relatedTarget: j, direction: h});
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this
    };
    var e = function (c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }

    var d = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = {toggle: !0}, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition)return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function () {
            var d = a(this), e = b(d), f = {relatedTarget: this};
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function () {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }

    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.5", g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e), g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {relatedTarget: this};
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function (c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d), g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which)return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a", i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), +function (a) {
    "use strict";
    function b(b, d) {
        return this.each(function () {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }

    var c = function (b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function (b) {
        var d = this, e = a.Event("show.bs.modal", {relatedTarget: b});
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {relatedTarget: b});
            e ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function (b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function () {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(e) && e}, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, c.prototype.init = function (b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function () {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function () {
        for (var a in this.inState)if (this.inState[a])return !0;
        return !1
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d)return;
            var e = this, f = this.tip(), g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i, j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
            if (j) {
                var n = h, o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function () {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function (a) {
                d.css({top: Math.round(a.top), left: Math.round(a.left)})
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }

        var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function () {
        return this.getTitle()
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {width: e.right - e.left, height: e.bottom - e.top}));
        var f = d ? {top: 0, left: 0} : b.offset(),
            g = {scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()},
            h = d ? {width: a(window).width(), height: a(window).height()} : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {top: b.top + b.height / 2 - d / 2, left: b.left - c} : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = {top: 0, left: 0};
        if (!this.$viewport)return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function () {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function () {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function () {
        this.enabled = !0
    }, c.prototype.disable = function () {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function (b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this
    }
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function () {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this
    }
}(jQuery), +function (a) {
    "use strict";
    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }

    b.VERSION = "3.3.5", b.DEFAULTS = {offset: 10}, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function () {
        var b = this, c = "offset", d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var b = a(this), e = b.data("target") || b.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d)return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0])return this.activeTarget = null, this.clear();
        for (a = e.length; a--;)g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {relatedTarget: b[0]}),
                g = a.Event("show.bs.tab", {relatedTarget: e[0]});
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({type: "hidden.bs.tab", relatedTarget: b[0]}), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }

        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this
    };
    var e = function (c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
        if (null != c && "top" == this.affixed)return c > e ? "top" : !1;
        if ("bottom" == this.affixed)return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented())return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({top: g - b - f})
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:71:"/bitrix/templates/.default/flowplayer/flowplayer.min.js?144888849434193";s:6:"source";s:55:"/bitrix/templates/.default/flowplayer/flowplayer.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!

   Flowplayer v5.4.3 (Wednesday, 19. June 2013 11:34PM) | flowplayer.org/license

*/
!function(e){function t(t,n){var i="obj"+(""+Math.random()).slice(2,15),a='<object class="fp-engine" id="'+i+'" name="'+i+'" ';a+=e.browser.msie?'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">':' data="'+t+'" type="application/x-shockwave-flash">';var r={width:"100%",height:"100%",allowscriptaccess:"always",wmode:"transparent",quality:"high",flashvars:"",movie:t+(e.browser.msie?"?"+i:""),name:i};return e.each(n,function(e,t){r.flashvars+=e+"="+t+"&"}),e.each(r,function(e,t){a+='<param name="'+e+'" value="'+t+'"/>'}),a+="</object>",e(a)}function n(e){return Math.round(100*e)/100}function i(e){return/mpegurl/i.test(e)?"application/x-mpegurl":"video/"+e}function a(e){return/^(video|application)/.test(e)||(e=i(e)),!!g.canPlayType(e).replace("no","")}function r(t,n){var i=e.grep(t,function(e){return e.type===n});return i.length?i[0]:null}function o(e){var t=e.attr("src"),n=e.attr("type")||"",i=t.split(y)[1];return n=/mpegurl/.test(n)?"mpegurl":n.replace("video/",""),{src:t,suffix:i||n,type:n||i}}function s(t){var n=this,i=[];e("source",t).each(function(){i.push(o(e(this)))}),i.length||i.push(o(t)),n.initialSources=i,n.resolve=function(t){return t?(e.isArray(t)?t={sources:e.map(t,function(t){var n,i=e.extend({},t);return e.each(t,function(e){n=e}),i.type=n,i.src=t[n],delete i[n],i})}:"string"==typeof t&&(t={src:t,sources:[]},e.each(i,function(e,n){"flash"!=n.type&&t.sources.push({type:n.type,src:t.src.replace(y,"."+n.suffix+"$2")})})),t):{sources:i}}}function l(e){return e=parseInt(e,10),e>=10?e:"0"+e}function d(e){e=e||0;var t=Math.floor(e/3600),n=Math.floor(e/60);return e-=60*n,t>=1?(n-=60*t,t+":"+l(n)+":"+l(e)):l(n)+":"+l(e)}!function(e){if(!e.browser){var t=e.browser={},n=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(n)||/(safari)[ \/]([\w.]+)/.exec(n)||/(webkit)[ \/]([\w.]+)/.exec(n)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n)||/(msie) ([\w.]+)/.exec(n)||n.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n)||[];i[1]&&(t[i[1]]=!0,t.version=i[2]||"0")}}(jQuery),e(function(){"function"==typeof e.fn.flowplayer&&e("video").parent(".flowplayer").flowplayer()});var u=[],c=[],f=window.navigator.userAgent;window.flowplayer=function(t){return e.isFunction(t)?c.push(t):"number"==typeof t||void 0===t?u[t||0]:e(t).data("flowplayer")},e(window).on("beforeunload",function(){e.each(u,function(t,n){n.conf.splash?n.unload():n.bind("error",function(){e(".flowplayer.is-error .fp-message").remove()})})}),e.extend(flowplayer,{version:"5.4.3",engine:{},conf:{},support:{},defaults:{debug:!1,disabled:!1,engine:"html5",fullscreen:window==window.top,keyboard:!0,ratio:9/16,adaptiveRatio:!1,flashfit:!1,rtmp:0,splash:!1,swf:"//releases.flowplayer.org/5.4.3/flowplayer.swf",speeds:[.25,.5,1,1.5,2],tooltip:!0,volume:"object"!=typeof localStorage?1:"true"==localStorage.muted?0:isNaN(localStorage.volume)?1:localStorage.volume||1,errors:["","Video loading aborted","Network error","Video not properly encoded","Video file not found","Unsupported video","Skin not found","SWF file not found","Subtitles not found","Invalid RTMP URL","Unsupported video format. Try installing Adobe Flash."],errorUrls:["","","","","","","","","","","http://get.adobe.com/flashplayer/"],playlist:[]}});var p=1;e.fn.flowplayer=function(t,n){return"string"==typeof t&&(t={swf:t}),e.isFunction(t)&&(n=t,t={}),!t&&this.data("flowplayer")||this.each(function(){var i,a,r=e(this).addClass("is-loading"),o=e.extend({},flowplayer.defaults,flowplayer.conf,t,r.data()),l=e("video",r).addClass("fp-engine").removeAttr("controls"),d=l.length?new s(l):null,f={};if(o.playlist.length){var v,g=l.attr("preload");l.length&&l.replaceWith(v=e("<p />")),l=e("<video />").addClass("fp-engine"),v?v.replaceWith(l):r.prepend(l),l.attr("preload",g),"string"==typeof o.playlist[0]?l.attr("src",o.playlist[0]):e.each(o.playlist[0],function(t,n){for(var i in n)n.hasOwnProperty(i)&&l.append(e("<source />").attr({type:"video/"+i,src:n[i]}))}),d=new s(l)}var m=r.data("flowplayer");m&&m.unload(),r.data("fp-player_id",r.data("fp-player_id")||p++);try{f=window.localStorage||f}catch(h){}var y=this.currentStyle&&"rtl"===this.currentStyle.direction||window.getComputedStyle&&"rtl"===window.getComputedStyle(this,null).getPropertyValue("direction");y&&r.addClass("is-rtl");var b=m||{conf:o,currentSpeed:1,volumeLevel:"undefined"==typeof o.volume?1*f.volume:o.volume,video:{},disabled:!1,finished:!1,loading:!1,muted:"true"==f.muted||o.muted,paused:!1,playing:!1,ready:!1,splash:!1,rtl:y,load:function(t,n){if(!(b.error||b.loading||b.disabled)){if(t=d.resolve(t),e.extend(t,a.pick(t.sources)),t.src){var i=e.Event("load");r.trigger(i,[b,t,a]),i.isDefaultPrevented()?b.loading=!1:(a.load(t),e.isFunction(t)&&(n=t),n&&r.one("ready",n))}return b}},pause:function(e){return!b.ready||b.seeking||b.disabled||b.loading||(a.pause(),b.one("pause",e)),b},resume:function(){return b.ready&&b.paused&&!b.disabled&&(a.resume(),b.finished&&(b.trigger("resume"),b.finished=!1)),b},toggle:function(){return b.ready?b.paused?b.resume():b.pause():b.load()},seek:function(t,n){if(b.ready){if("boolean"==typeof t){var o=.1*b.video.duration;t=b.video.time+(t?o:-o)}t=i=Math.min(Math.max(t,0),b.video.duration).toFixed(1);var s=e.Event("beforeseek");r.trigger(s,[b,t]),s.isDefaultPrevented()?(b.seeking=!1,r.toggleClass("is-seeking",b.seeking)):(a.seek(t),e.isFunction(n)&&r.one("seek",n))}return b},seekTo:function(e,t){var n=void 0===e?i:.1*b.video.duration*e;return b.seek(n,t)},mute:function(e){return void 0===e&&(e=!b.muted),f.muted=b.muted=e,f.volume=isNaN(f.volume)?o.volume:f.volume,b.volume(e?0:f.volume,!0),b.trigger("mute",e),b},volume:function(e,t){return b.ready&&(e=Math.min(Math.max(e,0),1),t||(f.volume=e),a.volume(e)),b},speed:function(t,n){return b.ready&&("boolean"==typeof t&&(t=o.speeds[e.inArray(b.currentSpeed,o.speeds)+(t?1:-1)]||b.currentSpeed),a.speed(t),n&&r.one("speed",n)),b},stop:function(){return b.ready&&(b.pause(),b.seek(0,function(){r.trigger("stop")})),b},unload:function(){return r.hasClass("is-embedding")||(o.splash?(b.trigger("unload"),a.unload()):b.stop()),b},disable:function(e){return void 0===e&&(e=!b.disabled),e!=b.disabled&&(b.disabled=e,b.trigger("disable",e)),b}};b.conf=e.extend(b.conf,o),e.each(["bind","one","unbind"],function(e,t){b[t]=function(e,n){return r[t](e,n),b}}),b.trigger=function(e,t){return r.trigger(e,[b,t]),b},r.data("flowplayer")||r.bind("boot",function(){return e.each(["autoplay","loop","preload","poster"],function(e,t){var n=l.attr(t);void 0!==n&&(o[t]=n?n:!0)}),(o.splash||r.hasClass("is-splash")||!flowplayer.support.firstframe)&&(b.forcedSplash=!o.splash&&!r.hasClass("is-splash"),b.splash=o.splash=o.autoplay=!0,r.addClass("is-splash"),l.attr("preload","none")),e.each(c,function(){this(b,r)}),a=flowplayer.engine[o.engine],a&&(a=a(b,r)),a.pick(d.initialSources)?b.engine=o.engine:e.each(flowplayer.engine,function(e){return e!=o.engine?(a=this(b,r),a.pick(d.initialSources)&&(b.engine=e),!1):void 0}),u.push(b),b.engine?(o.splash?b.unload():b.load(),o.disabled&&b.disable(),a.volume(b.volumeLevel),r.one("ready",n),void 0):b.trigger("error",{code:flowplayer.support.flashVideo?5:10})}).bind("load",function(t,n){o.splash&&e(".flowplayer").filter(".is-ready, .is-loading").not(r).each(function(){var t=e(this).data("flowplayer");t.conf.splash&&t.unload()}),r.addClass("is-loading"),n.loading=!0}).bind("ready",function(e,t,n){function i(){r.removeClass("is-loading"),t.loading=!1}n.time=0,t.video=n,o.splash?r.one("progress",i):i(),t.muted?t.mute(!0):t.volume(t.volumeLevel)}).bind("unload",function(){o.splash&&l.remove(),r.removeClass("is-loading"),b.loading=!1}).bind("ready unload",function(e){var t="ready"==e.type;r.toggleClass("is-splash",!t).toggleClass("is-ready",t),b.ready=t,b.splash=!t}).bind("progress",function(e,t,n){t.video.time=n}).bind("speed",function(e,t,n){t.currentSpeed=n}).bind("volume",function(e,t,n){t.volumeLevel=Math.round(100*n)/100,t.muted?n&&t.mute(!1):f.volume=n}).bind("beforeseek seek",function(e){b.seeking="beforeseek"==e.type,r.toggleClass("is-seeking",b.seeking)}).bind("ready pause resume unload finish stop",function(e,t,n){b.paused=/pause|finish|unload|stop/.test(e.type),"ready"==e.type&&(b.paused="none"==o.preload,n&&(b.paused=!n.duration||!o.autoplay&&"none"!=o.preload)),b.playing=!b.paused,r.toggleClass("is-paused",b.paused).toggleClass("is-playing",b.playing),b.load.ed||b.pause()}).bind("finish",function(){b.finished=!0}).bind("error",function(){l.remove()}),r.trigger("boot",[b,r]).data("flowplayer",b)})},!function(){var t=function(e){var t=/Version\/(\d\.\d)/.exec(e);return t&&t.length>1?parseFloat(t[1],10):0},n=flowplayer.support,i=e.browser,a=e("<video loop autoplay preload/>")[0],r=i.msie,o=navigator.userAgent,s=/iPad|MeeGo/.test(o)&&!/CriOS/.test(o),l=/iPad/.test(o)&&/CriOS/.test(o),d=/iP(hone|od)/i.test(o)&&!/iPad/.test(o),u=/Android/.test(o)&&!/Firefox/.test(o),c=/Android/.test(o)&&/Firefox/.test(o),f=/Silk/.test(o),p=/IEMobile/.test(o),v=(s?t(o):0,u?parseFloat(/Android\ (\d\.\d)/.exec(o)[1],10):0);e.extend(n,{subtitles:!!a.addTextTrack,fullscreen:!u&&("function"==typeof document.webkitCancelFullScreen&&!/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(o)||document.mozFullScreenEnabled||"function"==typeof document.exitFullscreen),inlineBlock:!(r&&i.version<8),touch:"ontouchstart"in window,dataload:!s&&!d&&!p,zeropreload:!r&&!u,volume:!(s||u||d||f||l),cachedVideoTag:!(s||d||l||p),firstframe:!(d||s||u||f||l||p||c),inlineVideo:!d&&!f&&!p&&(!u||v>=3),hlsDuration:!i.safari||s||d||l,seekable:!s&&!l});try{var g=r?new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version"):navigator.plugins["Shockwave Flash"].description;g=g.split(/\D+/),g.length&&!g[0]&&(g=g.slice(1)),n.flashVideo=g[0]>9||9==g[0]&&g[3]>=115}catch(m){}try{n.video=!!a.canPlayType,n.video&&a.canPlayType("video/mp4")}catch(h){n.video=!1}n.animation=function(){for(var t=["","Webkit","Moz","O","ms","Khtml"],n=e("<p/>")[0],i=0;i<t.length;i++)if("undefined"!==n.style[t[i]+"AnimationName"])return!0}()}(),window.attachEvent&&window.attachEvent("onbeforeunload",function(){__flash_savedUnloadHandler=__flash_unloadHandler=function(){}}),flowplayer.engine.flash=function(n,i){var a,r,o,s=n.conf;n.video;var l={pick:function(t){if(flowplayer.support.flashVideo){var n=e.grep(t,function(e){return"flash"==e.type})[0];if(n)return n;for(var i,a=0;a<t.length;a++)if(i=t[a],/mp4|flv/.test(i.type))return i}},load:function(l){function d(e){return e.replace(/&amp;/g,"%26").replace(/&/g,"%26").replace(/=/g,"%3D")}var u=e("video",i),c=d(l.src);if(is_absolute=/^https?:/.test(c),u.length>0&&flowplayer.support.video&&u[0].pause(),u.remove(),is_absolute||s.rtmp||(c=e("<img/>").attr("src",c)[0].src),o)o.__play(c);else{a="fp"+(""+Math.random()).slice(3,15);var f={hostname:s.embedded?s.hostname:location.hostname,url:c,callback:"jQuery."+a};i.data("origin")&&(f.origin=i.data("origin")),is_absolute&&delete s.rtmp,e.each(["key","autoplay","preload","rtmp","loop","debug","preload","splash"],function(e,t){s[t]&&(f[t]=s[t])}),f.rtmp&&(f.rtmp=d(f.rtmp)),r=t(s.swf,f),r.prependTo(i),o=r[0],setTimeout(function(){try{if(!o.PercentLoaded())return i.trigger("error",[n,{code:7,url:s.swf}])}catch(e){}},5e3),e[a]=function(t,i){s.debug&&"status"!=t&&console.log("--",t,i);var a=e.Event(t);switch(t){case"ready":i=e.extend(l,i);break;case"click":a.flash=!0;break;case"keydown":a.which=i;break;case"seek":l.time=i;break;case"buffered":l.buffered=!0;break;case"status":n.trigger("progress",i.time),i.buffer<=l.bytes&&!l.buffered?(l.buffer=i.buffer/l.bytes*l.duration,n.trigger("buffer",l.buffer)):l.buffered&&n.trigger("buffered")}setTimeout(function(){n.trigger(a,i)},1)}}},speed:e.noop,unload:function(){o&&o.__unload&&o.__unload(),delete e[a],e("object",i).remove(),o=0}};e.each("pause,resume,seek,volume".split(","),function(e,t){l[t]=function(e){n.ready&&("seek"==t&&n.video.time&&!n.paused&&n.trigger("beforeseek"),void 0===e?o["__"+t]():o["__"+t](e))}});var d=e(window);return n.bind("ready fullscreen fullscreen-exit",function(t){var a=i.height(),r=i.width();if(n.conf.flashfit||/full/.test(t.type)){var o,s,l=n.isFullscreen,u=l&&F,c=!flowplayer.support.inlineBlock,f=l?u?screen.availWidth:d.width():r,p=l?u?screen.availHeight:d.height():a,v=u?screen.width-screen.availWidth:0,g=u?screen.height-screen.availHeight:0,m=c?r:"",h=c?a:"";(n.conf.flashfit||"fullscreen"===t.type)&&(o=n.video.width/n.video.height,s=n.video.height/n.video.width,h=Math.max(s*f),m=Math.max(o*p),h=h>p?m*s:h,h=Math.min(Math.round(h),p),m=m>f?h*o:m,m=Math.min(Math.round(m),f),g=Math.max(Math.round((p+g-h)/2),0),v=Math.max(Math.round((f+v-m)/2),0)),e("object",i).css({width:m,height:h,marginTop:g,marginLeft:v})}}),l};var v,g=e("<video/>")[0],m={ended:"finish",pause:"pause",play:"resume",progress:"buffer",timeupdate:"progress",volumechange:"volume",ratechange:"speed",seeked:"seek",loadeddata:"ready",error:"error",dataunavailable:"error"},h=function(t){return v?v.attr({type:i(t.type),src:t.src}):v=e("<video/>",{src:t.src,type:i(t.type),"class":"fp-engine",autoplay:"autoplay",preload:"none","x-webkit-airplay":"allow"})};flowplayer.engine.html5=function(t,i){function o(r,o,s){r.listeners&&r.listeners.hasOwnProperty(i.data("fp-player_id"))||((r.listeners||(r.listeners={}))[i.data("fp-player_id")]=!0,o.bind("error",function(n){try{if(n.originalEvent&&e(n.originalEvent.originalTarget).is("img"))return n.preventDefault();a(e(n.target).attr("type"))&&t.trigger("error",{code:4})}catch(i){}}),e.each(m,function(a,o){r.addEventListener(a,function(d){if("progress"==o&&d.srcElement&&0===d.srcElement.readyState&&setTimeout(function(){t.video.duration||(o="error",t.trigger(o,{code:4}))},1e4),p.debug&&!/progress/.test(o)&&console.log(a,"->",o,d),(t.ready||/ready|error/.test(o))&&o&&e("video",i).length){var u,f=e.Event(o);switch(o){case"ready":u=e.extend(s,{duration:r.duration,width:r.videoWidth,height:r.videoHeight,url:r.currentSrc,src:r.currentSrc});try{u.seekable=r.seekable&&r.seekable.end(null)}catch(v){}if(l=l||setInterval(function(){try{u.buffer=r.buffered.end(null)}catch(e){}u.buffer&&(u.buffer<=u.duration&&!u.buffered?t.trigger("buffer",d):u.buffered||(u.buffered=!0,t.trigger("buffer",d).trigger("buffered",d),clearInterval(l),l=0))},250),!u.duration&&!c.hlsDuration&&"loadeddata"===a){var g=function(){u.duration=r.duration;try{u.seekable=r.seekable&&r.seekable.end(null)}catch(e){}t.trigger(f,u),r.removeEventListener("durationchange",g)};return r.addEventListener("durationchange",g),void 0}break;case"progress":case"seek":if(t.video.duration,r.currentTime>0){u=Math.max(r.currentTime,0);break}if("progress"==o)return;case"speed":u=n(r.playbackRate);break;case"volume":u=n(r.volume);break;case"error":try{u=(d.srcElement||d.originalTarget).error}catch(m){return}}t.trigger(f,u)}},!1)}))}var s,l,d,u=e("video",i),c=flowplayer.support,f=e("track",u),p=t.conf;return s={pick:function(e){if(c.video){if(p.videoTypePreference){var t=r(e,p.videoTypePreference);if(t)return t}for(var n=0;n<e.length;n++)if(a(e[n].type))return e[n]}},load:function(n){if(p.splash&&!d)u=h(n).prependTo(i),c.inlineVideo||u.css({position:"absolute",top:"-9999em"}),f.length&&u.append(f.attr("default","")),p.loop&&u.attr("loop","loop"),d=u[0];else{d=u[0];var a=u.find("source");!d.src&&a.length&&(d.src=n.src,a.remove()),t.video.src&&n.src!=t.video.src?(u.attr("autoplay","autoplay"),d.src=n.src):"none"!=p.preload&&c.dataload||(c.zeropreload?t.trigger("ready",n).trigger("pause").one("ready",function(){i.trigger("resume")}):t.one("ready",function(){i.trigger("pause")}))}o(d,e("source",u).add(u),n),"none"==p.preload&&c.zeropreload&&c.dataload||d.load(),p.splash&&d.load()},pause:function(){d.pause()},resume:function(){d.play()},speed:function(e){d.playbackRate=e},seek:function(e){try{var n=t.paused;d.currentTime=e,n&&d.pause()}catch(i){}},volume:function(e){d.volume=e},unload:function(){e("video.fp-engine",i).remove(),c.cachedVideoTag||(v=null),l=clearInterval(l),d=0}}};var y=/\.(\w{3,4})(\?.*)?$/i;e.throttle=function(e,t){var n;return function(){n||(e.apply(this,arguments),n=1,setTimeout(function(){n=0},t))}},e.fn.slider2=function(t){var n=/iPad/.test(navigator.userAgent)&&!/CriOS/.test(navigator.userAgent);return this.each(function(){var i,a,r,o,s,l,d,u,c=e(this),f=e(document),p=c.children(":last"),v=!1,g=function(){a=c.offset(),r=c.width(),o=c.height(),l=s?o:r,u=b(d)},m=function(e){i||e==w.value||d&&!(d>e)||(c.trigger("slide",[e]),w.value=e)},h=function(e){var n=e.pageX;!n&&e.originalEvent&&e.originalEvent.touches&&e.originalEvent.touches.length&&(n=e.originalEvent.touches[0].pageX);var i=s?e.pageY-a.top:n-a.left;i=Math.max(0,Math.min(u||l,i));var r=i/l;return s&&(r=1-r),t&&(r=1-r),y(r,0,!0)},y=function(e,t){void 0===t&&(t=0),e>1&&(e=1);var i=Math.round(1e3*e)/10+"%";return(!d||d>=e)&&(n||p.stop(),v?p.css("width",i):p.animate(s?{height:i}:{width:i},t,"linear")),e},b=function(e){return Math.max(0,Math.min(l,s?(1-e)*o:e*r))},w={max:function(e){d=e},disable:function(e){i=e},slide:function(e,t,n){g(),n&&m(e),y(e,t)},disableAnimation:function(e){v=e!==!1}};g(),c.data("api",w).bind("mousedown.sld touchstart",function(t){if(t.preventDefault(),!i){var n=e.throttle(m,100);g(),w.dragging=!0,c.addClass("is-dragging"),m(h(t)),f.bind("mousemove.sld touchmove",function(e){e.preventDefault(),n(h(e))}).one("mouseup touchend",function(){w.dragging=!1,c.removeClass("is-dragging"),f.unbind("mousemove.sld touchmove")})}})})},flowplayer(function(t,n){function i(t){return e(".fp-"+t,n)}function a(t){("0px"===n.css("width")||"0px"===n.css("height")||t!==flowplayer.defaults.ratio)&&(parseInt(y,10)||g.css("paddingTop",100*t+"%")),l.inlineBlock||e("object",n).height(n.height())}function r(e){n.toggleClass("is-mouseover",e).toggleClass("is-mouseout",!e)}var o,s=t.conf,l=flowplayer.support;n.find(".fp-ratio,.fp-ui").remove(),n.addClass("flowplayer").append('      <div class="ratio"/>      <div class="ui">         <div class="waiting"><em/><em/><em/></div>         <a class="fullscreen"/>         <a class="unload"/>         <p class="speed"/>         <div class="controls">            <a class="play"></a>            <div class="timeline">               <div class="buffer"/>               <div class="progress"/>            </div>            <div class="volume">               <a class="mute"></a>               <div class="volumeslider">                  <div class="volumelevel"/>               </div>            </div>         </div>         <div class="time">            <em class="elapsed">00:00</em>            <em class="remaining"/>            <em class="duration">00:00</em>         </div>         <div class="message"><h2/><p/></div>      </div>'.replace(/class="/g,'class="fp-'));var u=i("progress"),c=i("buffer"),f=i("elapsed"),p=i("remaining"),v=i("waiting"),g=i("ratio"),m=i("speed"),h=i("duration"),y=g.css("paddingTop"),b=i("timeline").slider2(t.rtl),w=b.data("api"),k=(i("volume"),i("fullscreen")),x=i("volumeslider").slider2(t.rtl),C=x.data("api"),T=n.is(".fixed-controls, .no-toggle");w.disableAnimation(n.hasClass("is-touch")),l.animation||v.html("<p>loading &hellip;</p>"),a(s.ratio);try{s.fullscreen||k.remove()}catch(S){k.remove()}t.bind("ready",function(){var e=t.video.duration;w.disable(t.disabled||!e),s.adaptiveRatio&&a(t.video.height/t.video.width),h.add(p).html(d(e)),e>=3600&&n.addClass("is-long")||n.removeClass("is-long"),C.slide(t.volumeLevel)}).bind("unload",function(){y||g.css("paddingTop","")}).bind("buffer",function(){var e=t.video,n=e.buffer/e.duration;!e.seekable&&l.seekable&&w.max(n),1>n?c.css("width",100*n+"%"):c.css({width:"100%"})}).bind("speed",function(e,t,n){m.text(n+"x").addClass("fp-hilite"),setTimeout(function(){m.removeClass("fp-hilite")},1e3)}).bind("buffered",function(){c.css({width:"100%"}),w.max(1)}).bind("progress",function(){var e=t.video.time,n=t.video.duration;w.dragging||w.slide(e/n,t.seeking?0:250),f.html(d(e)),p.html("-"+d(n-e))}).bind("finish resume seek",function(e){n.toggleClass("is-finished","finish"==e.type)}).bind("stop",function(){f.html(d(0)),w.slide(0,100)}).bind("finish",function(){f.html(d(t.video.duration)),w.slide(1,100),n.removeClass("is-seeking")}).bind("beforeseek",function(){u.stop()}).bind("volume",function(){C.slide(t.volumeLevel)}).bind("disable",function(){var e=t.disabled;w.disable(e),C.disable(e),n.toggleClass("is-disabled",t.disabled)}).bind("mute",function(e,t,i){n.toggleClass("is-muted",i)}).bind("error",function(t,i,a){if(n.removeClass("is-loading").addClass("is-error"),a){a.message=s.errors[a.code],i.error=!0;var r=e(".fp-message",n);e("h2",r).text((i.engine||"html5")+": "+a.message),e("p",r).text(a.url||i.video.url||i.video.src||s.errorUrls[a.code]),n.unbind("mouseenter click").removeClass("is-mouseover")}}).bind("mouseenter mouseleave",function(e){if(!T){var t,i="mouseenter"==e.type;r(i),i?(n.bind("pause.x mousemove.x volume.x",function(){r(!0),t=new Date}),o=setInterval(function(){new Date-t>5e3&&(r(!1),t=new Date)},100)):(n.unbind(".x"),clearInterval(o))}}).bind("mouseleave",function(){(w.dragging||C.dragging)&&n.addClass("is-mouseover").removeClass("is-mouseout")}).bind("click.player",function(n){return e(n.target).is(".fp-ui, .fp-engine")||n.flash?(n.preventDefault(),t.toggle()):void 0}),s.poster&&n.css("backgroundImage","url("+s.poster+")");var F=n.css("backgroundColor"),_="none"!=n.css("backgroundImage")||F&&"rgba(0, 0, 0, 0)"!=F&&"transparent"!=F;!_||s.splash||s.autoplay||t.bind("ready stop",function(){n.addClass("is-poster").one("progress",function(){n.removeClass("is-poster")})}),!_&&t.forcedSplash&&n.css("backgroundColor","#555"),e(".fp-toggle, .fp-play",n).click(t.toggle),e.each(["mute","fullscreen","unload"],function(e,n){i(n).click(function(){t[n]()})}),b.bind("slide",function(e,n){t.seeking=!0,t.seek(n*t.video.duration)}),x.bind("slide",function(e,n){t.volume(n)}),i("time").click(function(){e(this).toggleClass("is-inverted")}),r(T)});var b,w,k="is-help";e(document).bind("keydown.fp",function(t){var n=b,i=t.ctrlKey||t.metaKey||t.altKey,a=t.which,r=n&&n.conf;if(n&&r.keyboard&&!n.disabled){if(-1!=e.inArray(a,[63,187,191,219]))return w.toggleClass(k),!1;if(27==a&&w.hasClass(k))return w.toggleClass(k),!1;if(!i&&n.ready){if(t.preventDefault(),t.shiftKey)return 39==a?n.speed(!0):37==a&&n.speed(!1),void 0;if(58>a&&a>47)return n.seekTo(a-48);switch(a){case 38:case 75:n.volume(n.volumeLevel+.15);break;case 40:case 74:n.volume(n.volumeLevel-.15);break;case 39:case 76:n.seeking=!0,n.seek(!0);break;case 37:case 72:n.seeking=!0,n.seek(!1);break;case 190:n.seekTo();break;case 32:n.toggle();break;case 70:r.fullscreen&&n.fullscreen();break;case 77:n.mute();break;case 27:n[n.isFullscreen?"fullscreen":"unload"]()}}}}),flowplayer(function(t,n){t.conf.keyboard&&(n.bind("mouseenter mouseleave",function(e){b=t.disabled||"mouseenter"!=e.type?0:t,b&&(w=n)}),n.append('      <div class="fp-help">         <a class="fp-close"></a>         <div class="fp-help-section fp-help-basics">            <p><em>space</em>play / pause</p>            <p><em>esc</em>stop</p>            <p><em>f</em>fullscreen</p>            <p><em>shift</em> + <em>&#8592;</em><em>&#8594;</em>slower / faster <small>(latest Chrome and Safari)</small></p>         </div>         <div class="fp-help-section">            <p><em>&#8593;</em><em>&#8595;</em>volume</p>            <p><em>m</em>mute</p>         </div>         <div class="fp-help-section">            <p><em>&#8592;</em><em>&#8594;</em>seek</p>            <p><em>&nbsp;. </em>seek to previous            </p><p><em>1</em><em>2</em>&hellip;<em>6</em> seek to 10%, 20%, &hellip;60% </p>         </div>      </div>   '),t.conf.tooltip&&e(".fp-ui",n).attr("title","Hit ? for help").on("mouseout.tip",function(){e(this).removeAttr("title").off("mouseout.tip")}),e(".fp-close",n).click(function(){n.toggleClass(k)}))});var x,C=e.browser.mozilla?"moz":"webkit",T="fullscreen",S="fullscreen-exit",F=flowplayer.support.fullscreen,_="function"==typeof document.exitFullscreen,E=navigator.userAgent.toLowerCase(),M=/(safari)[ \/]([\w.]+)/.exec(E)&&!/(chrome)[ \/]([\w.]+)/.exec(E);e(document).bind(_?"fullscreenchange":C+"fullscreenchange",function(t){var n=e(document.webkitCurrentFullScreenElement||document.mozFullScreenElement||document.fullscreenElement||t.target);n.length&&!x?x=n.trigger(T,[n]):(x.trigger(S,[x]),x=null)}),flowplayer(function(t,n){if(t.conf.fullscreen){var i,a=e(window),r={pos:0,play:!1};t.isFullscreen=!1,t.fullscreen=function(e){return t.disabled?void 0:(void 0===e&&(e=!t.isFullscreen),e&&(i=a.scrollTop()),F?e?_?n[0].requestFullscreen():(n[0][C+"RequestFullScreen"](Element.ALLOW_KEYBOARD_INPUT),!M||document.webkitCurrentFullScreenElement||document.mozFullScreenElement||n[0][C+"RequestFullScreen"]()):_?document.exitFullscreen():document[C+"CancelFullScreen"]():("flash"===t.engine&&t.conf.rtmp&&(r={pos:t.video.time,play:t.playing}),t.trigger(e?T:S,[t])),t)};var o;n.bind("mousedown.fs",function(){+new Date-o<150&&t.ready&&t.fullscreen(),o=+new Date}),t.bind(T,function(){n.addClass("is-fullscreen"),t.isFullscreen=!0}).bind(S,function(){n.removeClass("is-fullscreen"),t.isFullscreen=!1,a.scrollTop(i)}).bind("ready",function(){r.pos&&!isNaN(r.pos)&&setTimeout(function(){t.play(),t.seek(r.pos),r.play||setTimeout(function(){t.pause()},100),r={pos:0,play:!1}},250)})}}),flowplayer(function(t,n){function i(){return e(r.query,n)}function a(){return e(r.query+"."+o,n)}var r=e.extend({active:"is-active",advance:!0,query:".fp-playlist a"},t.conf),o=r.active;t.play=function(n){return void 0===n?t.resume():"number"!=typeof n||t.conf.playlist[n]?("number"!=typeof n&&t.load.apply(null,arguments),t.unbind("resume.fromfirst"),t.video.index=n,t.load("string"==typeof t.conf.playlist[n]?t.conf.playlist[n].toString():e.map(t.conf.playlist[n],function(t){return e.extend({},t)})),t):t},t.next=function(e){e&&e.preventDefault();var n=t.video.index;return-1!=n&&(n=n===t.conf.playlist.length-1?0:n+1,t.play(n)),t},t.prev=function(e){e&&e.preventDefault();var n=t.video.index;return-1!=n&&(n=0===n?t.conf.playlist.length-1:n-1,t.play(n)),t},e(".fp-next",n).click(t.next),e(".fp-prev",n).click(t.prev),r.advance&&n.unbind("finish.pl").bind("finish.pl",function(e,t){var i=t.video.index+1;i<t.conf.playlist.length||r.loop?(i=i===t.conf.playlist.length?0:i,n.removeClass("is-finished"),setTimeout(function(){t.play(i)})):(n.addClass("is-playing"),t.conf.playlist.length>1&&t.one("resume.fromfirst",function(){return t.play(0),!1}))});var s=!1;if(t.conf.playlist.length){s=!0;var l=n.find(".fp-playlist");if(!l.length){l=e('<div class="fp-playlist"></div>');var d=e(".fp-next,.fp-prev",n).eq(0).before(l);d.length||e("video",n).after(l)}l.empty(),e.each(t.conf.playlist,function(t,n){var i;if("string"==typeof n)i=n;else for(var a in n[0])if(n[0].hasOwnProperty(a)){i=n[0][a];break}l.append(e("<a />").attr({href:i,"data-index":t}))})}if(i().length){s||(t.conf.playlist=[],i().each(function(){var n=e(this).attr("href");e(this).attr("data-index",t.conf.playlist.length),t.conf.playlist.push(n)})),n.on("click",r.query,function(n){n.preventDefault();var i=e(n.target).closest(r.query),a=Number(i.attr("data-index"));-1!=a&&t.play(a)});var u=i().filter("[data-cuepoints]").length;t.bind("load",function(i,r,s){var l=a().removeClass(o),d=l.attr("data-index"),c=s.index=t.video.index||0,f=e('a[data-index="'+c+'"]',n).addClass(o),p=c==t.conf.playlist.length-1;n.removeClass("video"+d).addClass("video"+c).toggleClass("last-video",p),s.index=r.video.index=c,s.is_last=r.video.is_last=p,u&&(t.cuepoints=f.data("cuepoints"))}).bind("unload.pl",function(){a().toggleClass(o)})}t.conf.playlist.length&&(t.conf.loop=!1)});var D=/ ?cue\d+ ?/;flowplayer(function(t,n){function i(e){n[0].className=n[0].className.replace(D," "),e>=0&&n.addClass("cue"+e)}var a=0;t.cuepoints=t.conf.cuepoints||[],t.bind("progress",function(e,r,o){if(a&&.015>o-a)return a=o;a=o;for(var s,l=t.cuepoints||[],d=0;d<l.length;d++)s=l[d],isNaN(s)||(s={time:s}),s.time<0&&(s.time=t.video.duration+s.time),s.index=d,Math.abs(s.time-o)<.125*t.currentSpeed&&(i(d),n.trigger("cuepoint",[t,s]))}).bind("unload seek",i),t.conf.generate_cuepoints&&t.bind("load",function(){e(".fp-cuepoint",n).remove()}).bind("ready",function(){var i=t.cuepoints||[],a=t.video.duration,r=e(".fp-timeline",n).css("overflow","visible");e.each(i,function(n,i){var o=i.time||i;0>o&&(o=a+i);var s=e("<a/>").addClass("fp-cuepoint fp-cuepoint"+n).css("left",100*(o/a)+"%");s.appendTo(r).mousedown(function(){return t.seek(o),!1})})})}),flowplayer(function(t,n){function i(e){var t=e.split(":");return 2==t.length&&t.unshift(0),60*60*t[0]+60*t[1]+parseFloat(t[2].replace(",","."))}var a=e("track",n),r=t.conf;if(!flowplayer.support.subtitles||(t.subtitles=a.length&&a[0].track,!r.nativesubtitles||"html5"!=r.engine)){a.remove();var o=/^(([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3}) --\> (([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3})(.*)/;t.subtitles=[];var s=a.attr("src");if(s){e.get(s,function(n){for(var a,r,s,l,d=0,u=n.split("\n"),c=u.length,f={};c>d;d++)if(r=o.exec(u[d])){for(a=u[d-1],s="<p>"+u[++d]+"</p><br/>";e.trim(u[++d])&&d<u.length;)s+="<p>"+u[d]+"</p><br/>";f={title:a,startTime:i(r[1]),endTime:i(r[2]||r[3]),text:s},l={time:f.startTime,subtitle:f},t.subtitles.push(f),t.cuepoints.push(l),t.cuepoints.push({time:f.endTime,subtitleEnd:a}),0===f.startTime&&t.trigger("cuepoint",l)}}).fail(function(){return t.trigger("error",{code:8,url:s}),!1});var l,d=e("<div class='fp-subtitle'/>",n).appendTo(n);t.bind("cuepoint",function(e,t,n){n.subtitle?(l=n.index,d.html(n.subtitle.text).addClass("fp-active")):n.subtitleEnd&&(d.removeClass("fp-active"),l=n.index)}).bind("seek",function(n,i,a){l&&t.cuepoints[l]&&t.cuepoints[l].time>a&&(d.removeClass("fp-active"),l=null),e.each(t.cuepoints||[],function(e,n){var i=n.subtitle;i&&l!=n.index?a>=n.time&&(!i.endTime||a<=i.endTime)&&t.trigger("cuepoint",n):n.subtitleEnd&&a>=n.time&&n.index==l+1&&t.trigger("cuepoint",n)})})}}}),flowplayer(function(t,n){function i(){if(r&&"undefined"!=typeof _gat){var e=_gat._getTracker(a),i=t.video;e._setAllowLinker(!0),e._trackEvent("Video / Seconds played",t.engine+"/"+i.type,n.attr("title")||i.src.split("/").slice(-1)[0].replace(y,""),Math.round(r/1e3)),r=0}}var a=t.conf.analytics,r=0,o=0;a&&("undefined"==typeof _gat&&e.getScript("//google-analytics.com/ga.js"),t.bind("load unload",i).bind("progress",function(){t.seeking||(r+=o?+new Date-o:0,o=+new Date)}).bind("pause",function(){o=0}),e(window).unload(i))});var A=/IEMobile/.test(f);(flowplayer.support.touch||A)&&flowplayer(function(t,n){var i=/Android/.test(f)&&!/Firefox/.test(f)&&!/Opera/.test(f),a=/Silk/.test(f);if(i){t.conf.videoTypePreference="mp4";var r=t.load;t.load=function(){var e=r.apply(t,arguments);return t.trigger("ready",t,t.video),e}}flowplayer.support.volume||n.addClass("no-volume no-mute"),n.addClass("is-touch"),n.find(".fp-timeline").data("api").disableAnimation();var o=!1;n.bind("touchmove",function(){o=!0}).bind("touchend click",function(){return o?(o=!1,void 0):t.playing&&!n.hasClass("is-mouseover")?(n.addClass("is-mouseover").removeClass("is-mouseout"),!1):(t.paused&&n.hasClass("is-mouseout")&&t.toggle(),t.paused&&A&&e("video",n)[0].play(),void 0)}),t.conf.native_fullscreen&&(e.browser.webkit||e.browser.safari)&&(t.fullscreen=function(){var t=e("video",n);t[0].webkitEnterFullScreen(),t.one("webkitendfullscreen",function(){t.prop("controls",!0).prop("controls",!1)})}),(i||a)&&t.bind("ready",function(){var i=e("video",n);i.one("canplay",function(){i[0].play()}),i[0].play(),t.bind("progress.dur",function(){var a=i[0].duration;1!==a&&(t.video.duration=a,e(".fp-duration",n).html(d(a)),t.unbind("progress.dur"))})})}),flowplayer(function(t,n){if(t.conf.embed!==!1){var i=t.conf,a=e(".fp-ui",n),r=e("<a/>",{"class":"fp-embed",title:"Copy to your site"}).appendTo(a),o=e("<div/>",{"class":"fp-embed-code"}).append("<label>Paste this HTML code on your site to embed.</label><textarea/>").appendTo(a),s=e("textarea",o);t.embedCode=function(){var a=t.video,r=a.width||n.width(),o=a.height||n.height(),s=e("<div/>",{"class":"flowplayer",css:{width:r,height:o}}),l=e("<video/>").appendTo(s);
e.each(["origin","analytics","logo","key","rtmp"],function(e,t){i[t]&&s.attr("data-"+t,i[t])}),e.each(a.sources,function(t,n){l.append(e("<source/>",{type:"video/"+n.type,src:n.src}))});var d={src:"//embed.flowplayer.org/5.4.3/embed.min.js"};e.isPlainObject(i.embed)&&(d["data-swf"]=i.embed.swf,d["data-library"]=i.embed.library,d.src=i.embed.script||d.src,i.embed.skin&&(d["data-skin"]=i.embed.skin));var u=e("<foo/>",d).append(s);return e("<p/>").append(u).html().replace(/<(\/?)foo/g,"<$1script")},n.fptip(".fp-embed","is-embedding"),s.click(function(){this.select()}),r.click(function(){s.text(t.embedCode()),s[0].focus(),s[0].select()})}}),e.fn.fptip=function(t,n){return this.each(function(){function i(){a.removeClass(n),e(document).unbind(".st")}var a=e(this);e(t||"a",this).click(function(t){t.preventDefault(),a.toggleClass(n),a.hasClass(n)&&e(document).bind("keydown.st",function(e){27==e.which&&i()}).bind("click.st",function(t){e(t.target).parents("."+n).length||i()})})})}}(jQuery);flowplayer(function(e,o){function a(e){var o=n("<a/>")[0];return o.href=e,o.hostname}var n=jQuery,t=e.conf,i=t.swf.indexOf("flowplayer.org")&&t.e&&o.data("origin"),l=i?a(i):location.hostname,r=t.key;if("file:"==location.protocol&&(l="localhost"),e.load.ed=1,t.hostname=l,t.origin=i||location.href,i&&o.addClass("is-embedded"),"string"==typeof r&&(r=r.split(/,\s*/)),r&&"function"==typeof key_check&&key_check(r,l))t.logo&&o.append(n("<a>",{"class":"fp-logo",href:i}).append(n("<img/>",{src:t.logo})));else{var s=n("<a/>").attr("href","http://flowplayer.org").appendTo(o);n(".fp-controls",o),e.bind("pause resume finish unload",function(e,o){var a=o.video.src?o.video.src.indexOf("://my.flowplayer.org"):-1;/pause|resume/.test(e.type)&&"flash"!=o.engine&&4!=a&&5!=a?(s.show().css({position:"absolute",left:16,bottom:36,zIndex:99999,width:100,height:20,backgroundImage:"url("+[".png","logo","/",".net",".cloudfront","d32wqyuo10o653","//"].reverse().join("")+")"}),o.load.ed=s.is(":visible"),o.load.ed||o.pause()):s.hide()})}});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/bitrix/templates/.default/js/newmain.js?14724559391137";s:6:"source";s:40:"/bitrix/templates/.default/js/newmain.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
jQuery(document).ready(function() {

  var hash = window.location.hash;
  hash && $('ul.nav-tabs a[href="' + hash + '"]').tab('show');

  var h1 = jQuery('h1').text();
  var splitparts = h1.split('-');
  if (splitparts[0]!=undefined && splitparts[1]!=undefined)jQuery('h1').html('<span>'+splitparts[0]+'</span> <small>'+splitparts[1]+'</small>');
  

  jQuery(".popovers").popover();
  jQuery(".popovers").on('show.bs.popover', function(){
    jQuery(this).addClass('active');
  });
  jQuery(".popovers").on('hide.bs.popover', function(){
    jQuery(this).removeClass('active');
  });
    
  jQuery(".player").flowplayer({ 
     swf: "/bitrix/templates/.default/flowplayer/flowplayer.swf"
  });

  jQuery('.previews a').click(function(event){

    event.preventDefault();

    var $this = jQuery(this);
    var newImage = new Image();

    newImage.onload = function(){
                                  jQuery('#main-img img').attr('src', newImage.src);
		                  $this.addClass('current').siblings().removeClass('current');		
	                        };

    newImage.src = $this.attr('href');

    return false;
  });

});


/* End */
;
; /* Start:"a:4:{s:4:"full";s:58:"/bitrix/templates/.default/js/menu_fixed.js?15017721731479";s:6:"source";s:43:"/bitrix/templates/.default/js/menu_fixed.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
  $(document).ready(function() {

  if ($('#stick_menu').length > 0) {
	var start_pos=$('#stick_menu').offset().top;
	 $(window).scroll(function(){
	  if ($(window).scrollTop()>=start_pos) {
	      if ($('#stick_menu').hasClass()==false) $('#stick_menu').addClass('to_top');
	  }
	  else $('#stick_menu').removeClass('to_top');
	 });
  }
});
*/

$(document).ready(function() {
	setTimeout(function () {
        if ($('.js_table_compl').length > 0) {
            var start_pos=$('.js_table_compl').offset().top;
            $(window).scroll(function(){
                if ($(window).scrollTop()>=start_pos) {
                    if ($('.js_table_compl').hasClass('to_top_table')==false) $('.js_table_compl').addClass('to_top_table');
                }
                else {
                    $('.js_table_compl').removeClass('to_top_table');
                }
            });
        }
    },2000);
});


// oNas = $(".tab-content").offset().top-50;

//   var menu = $('#stick_menu'),
//   pos = menu.offset();

//   $(window).scroll(function(){
//    if($(this).scrollTop() > oNas && menu.hasClass('default')){
//     menu.fadeIn('fast', function(){
//      $(this).removeClass('default').addClass('fixed_top_menu').fadeIn('fast');
//     });
//    } else if($(this).scrollTop() <= oNas && menu.hasClass('fixed_top_menu')){
//     menu.fadeIn('fast', function(){
//      $(this).removeClass('fixed_top_menu').addClass('default').fadeIn('fast');
//     });
//    };
//   });
/* End */
;
; /* Start:"a:4:{s:4:"full";s:68:"/bitrix/templates/rtds-renault/js/jquery.bxslider.js?149612567232976";s:6:"source";s:52:"/bitrix/templates/rtds-renault/js/jquery.bxslider.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
;(function($){var defaults={mode:'horizontal',slideSelector:'',infiniteLoop:true,hideControlOnEnd:false,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:false,captions:false,ticker:false,tickerHover:false,adaptiveHeight:false,adaptiveHeightSpeed:500,video:false,useCSS:true,preloadImages:'visible',responsive:true,slideZIndex:50,wrapperClass:'bx-wrapper',touchEnabled:true,swipeThreshold:50,oneToOneTouch:true,preventDefaultSwipeX:true,preventDefaultSwipeY:false,ariaLive:true,ariaHidden:true,keyboardEnabled:false,pager:true,pagerType:'full',pagerShortSeparator:' / ',pagerSelector:null,buildPager:null,pagerCustom:null,controls:true,nextText:'Next',prevText:'Prev',nextSelector:null,prevSelector:null,autoControls:false,startText:'Start',stopText:'Stop',autoControlsCombine:false,autoControlsSelector:null,auto:false,pause:4000,autoStart:true,autoDirection:'next',stopAutoOnClick:false,autoHover:false,autoDelay:0,autoSlideForOnePage:false,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:false,onSliderLoad:function(){return true;},onSlideBefore:function(){return true;},onSlideAfter:function(){return true;},onSlideNext:function(){return true;},onSlidePrev:function(){return true;},onSliderResize:function(){return true;}};$.fn.bxSlider=function(options){if(this.length===0){return this;}if(this.length>1){this.each(function(){$(this).bxSlider(options);});return this;}var slider={},el=this,windowWidth=$(window).width(),windowHeight=$(window).height();if($(el).data('bxSlider')){return;}var init=function(){if($(el).data('bxSlider')){return;}slider.settings=$.extend({},defaults,options);slider.settings.slideWidth=parseInt(slider.settings.slideWidth);slider.children=el.children(slider.settings.slideSelector);if(slider.children.length<slider.settings.minSlides){slider.settings.minSlides=slider.children.length;}if(slider.children.length<slider.settings.maxSlides){slider.settings.maxSlides=slider.children.length;}if(slider.settings.randomStart){slider.settings.startSlide=Math.floor(Math.random()*slider.children.length);}slider.active={index:slider.settings.startSlide};slider.carousel=slider.settings.minSlides>1||slider.settings.maxSlides>1?true:false;if(slider.carousel){slider.settings.preloadImages='all';}slider.minThreshold=(slider.settings.minSlides*slider.settings.slideWidth)+((slider.settings.minSlides-1)*slider.settings.slideMargin);slider.maxThreshold=(slider.settings.maxSlides*slider.settings.slideWidth)+((slider.settings.maxSlides-1)*slider.settings.slideMargin);slider.working=false;slider.controls={};slider.interval=null;slider.animProp=slider.settings.mode==='vertical'?'top':'left';slider.usingCSS=slider.settings.useCSS&&slider.settings.mode!=='fade'&&(function(){var div=document.createElement('div'),props=['WebkitPerspective','MozPerspective','OPerspective','msPerspective'];for(var i=0;i<props.length;i++){if(div.style[props[i]]!==undefined){slider.cssPrefix=props[i].replace('Perspective','').toLowerCase();slider.animProp='-'+slider.cssPrefix+'-transform';return true;}}return false;}());if(slider.settings.mode==='vertical'){slider.settings.maxSlides=slider.settings.minSlides;}el.data('origStyle',el.attr('style'));el.children(slider.settings.slideSelector).each(function(){$(this).data('origStyle',$(this).attr('style'));});setup();};var setup=function(){var preloadSelector=slider.children.eq(slider.settings.startSlide);el.wrap('<div class="'+slider.settings.wrapperClass+'"><div class="bx-viewport"></div></div>');slider.viewport=el.parent();if(slider.settings.ariaLive&&!slider.settings.ticker){slider.viewport.attr('aria-live','polite');}slider.loader=$('<div class="bx-loading" />');slider.viewport.prepend(slider.loader);el.css({width:slider.settings.mode==='horizontal'?(slider.children.length*1000+215)+'%':'auto',position:'relative'});if(slider.usingCSS&&slider.settings.easing){el.css('-'+slider.cssPrefix+'-transition-timing-function',slider.settings.easing);}else if(!slider.settings.easing){slider.settings.easing='swing';}slider.viewport.css({width:'100%',overflow:'hidden',position:'relative'});slider.viewport.parent().css({maxWidth:getViewportMaxWidth()});slider.children.css({float:slider.settings.mode==='horizontal'?'left':'none',listStyle:'none',position:'relative'});slider.children.css('width',getSlideWidth());if(slider.settings.mode==='horizontal'&&slider.settings.slideMargin>0){slider.children.css('marginRight',slider.settings.slideMargin);}if(slider.settings.mode==='vertical'&&slider.settings.slideMargin>0){slider.children.css('marginBottom',slider.settings.slideMargin);}if(slider.settings.mode==='fade'){slider.children.css({position:'absolute',zIndex:0,display:'none'});slider.children.eq(slider.settings.startSlide).css({zIndex:slider.settings.slideZIndex,display:'block'});}slider.controls.el=$('<div class="bx-controls" />');if(slider.settings.captions){appendCaptions();}slider.active.last=slider.settings.startSlide===getPagerQty()-1;if(slider.settings.video){el.fitVids();}if(slider.settings.preloadImages==='all'||slider.settings.ticker){preloadSelector=slider.children;}if(!slider.settings.ticker){if(slider.settings.controls){appendControls();}if(slider.settings.auto&&slider.settings.autoControls){appendControlsAuto();}if(slider.settings.pager){appendPager();}if(slider.settings.controls||slider.settings.autoControls||slider.settings.pager){slider.viewport.after(slider.controls.el);}}else{slider.settings.pager=false;}loadElements(preloadSelector,start);};var loadElements=function(selector,callback){var total=selector.find('img:not([src=""]), iframe').length,count=0;if(total===0){callback();return;}selector.find('img:not([src=""]), iframe').each(function(){$(this).one('load error',function(){if(++count===total){callback();}}).each(function(){if(this.complete){$(this).trigger('load');}});});};var start=function(){if(slider.settings.infiniteLoop&&slider.settings.mode!=='fade'&&!slider.settings.ticker){var slice=slider.settings.mode==='vertical'?slider.settings.minSlides:slider.settings.maxSlides,sliceAppend=slider.children.slice(0,slice).clone(true).addClass('bx-clone'),slicePrepend=slider.children.slice(-slice).clone(true).addClass('bx-clone');if(slider.settings.ariaHidden){sliceAppend.attr('aria-hidden',true);slicePrepend.attr('aria-hidden',true);}el.append(sliceAppend).prepend(slicePrepend);}slider.loader.remove();setSlidePosition();if(slider.settings.mode==='vertical'){slider.settings.adaptiveHeight=true;}slider.viewport.height(getViewportHeight());el.redrawSlider();slider.settings.onSliderLoad.call(el,slider.active.index);slider.initialized=true;if(slider.settings.responsive){$(window).bind('resize',resizeWindow);}if(slider.settings.auto&&slider.settings.autoStart&&(getPagerQty()>1||slider.settings.autoSlideForOnePage)){initAuto();}if(slider.settings.ticker){initTicker();}if(slider.settings.pager){updatePagerActive(slider.settings.startSlide);}if(slider.settings.controls){updateDirectionControls();}if(slider.settings.touchEnabled&&!slider.settings.ticker){initTouch();}if(slider.settings.keyboardEnabled&&!slider.settings.ticker){$(document).keydown(keyPress);}};var getViewportHeight=function(){var height=0;var children=$();if(slider.settings.mode!=='vertical'&&!slider.settings.adaptiveHeight){children=slider.children;}else{if(!slider.carousel){children=slider.children.eq(slider.active.index);}else{var currentIndex=slider.settings.moveSlides===1?slider.active.index:slider.active.index*getMoveBy();children=slider.children.eq(currentIndex);for(i=1;i<=slider.settings.maxSlides-1;i++){if(currentIndex+i>=slider.children.length){children=children.add(slider.children.eq(i-1));}else{children=children.add(slider.children.eq(currentIndex+i));}}}}if(slider.settings.mode==='vertical'){children.each(function(index){height+=$(this).outerHeight();});if(slider.settings.slideMargin>0){height+=slider.settings.slideMargin*(slider.settings.minSlides-1);}}else{height=Math.max.apply(Math,children.map(function(){return $(this).outerHeight(false);}).get());}if(slider.viewport.css('box-sizing')==='border-box'){height+=parseFloat(slider.viewport.css('padding-top'))+parseFloat(slider.viewport.css('padding-bottom'))+parseFloat(slider.viewport.css('border-top-width'))+parseFloat(slider.viewport.css('border-bottom-width'));}else if(slider.viewport.css('box-sizing')==='padding-box'){height+=parseFloat(slider.viewport.css('padding-top'))+parseFloat(slider.viewport.css('padding-bottom'));}return height;};var getViewportMaxWidth=function(){var width='100%';if(slider.settings.slideWidth>0){if(slider.settings.mode==='horizontal'){width=(slider.settings.maxSlides*slider.settings.slideWidth)+((slider.settings.maxSlides-1)*slider.settings.slideMargin);}else{width=slider.settings.slideWidth;}}return width;};var getSlideWidth=function(){var newElWidth=slider.settings.slideWidth,wrapWidth=slider.viewport.width();if(slider.settings.slideWidth===0||(slider.settings.slideWidth>wrapWidth&&!slider.carousel)||slider.settings.mode==='vertical'){newElWidth=wrapWidth;}else if(slider.settings.maxSlides>1&&slider.settings.mode==='horizontal'){if(wrapWidth>slider.maxThreshold){return newElWidth;}else if(wrapWidth<slider.minThreshold){newElWidth=(wrapWidth-(slider.settings.slideMargin*(slider.settings.minSlides-1)))/slider.settings.minSlides;}else if(slider.settings.shrinkItems){newElWidth=Math.floor((wrapWidth+slider.settings.slideMargin)/(Math.ceil((wrapWidth+slider.settings.slideMargin)/(newElWidth+slider.settings.slideMargin)))-slider.settings.slideMargin);}}return newElWidth;};var getNumberSlidesShowing=function(){var slidesShowing=1,childWidth=null;if(slider.settings.mode==='horizontal'&&slider.settings.slideWidth>0){if(slider.viewport.width()<slider.minThreshold){slidesShowing=slider.settings.minSlides;}else if(slider.viewport.width()>slider.maxThreshold){slidesShowing=slider.settings.maxSlides;}else{childWidth=slider.children.first().width()+slider.settings.slideMargin;slidesShowing=Math.floor((slider.viewport.width()+slider.settings.slideMargin)/childWidth);}}else if(slider.settings.mode==='vertical'){slidesShowing=slider.settings.minSlides;}return slidesShowing;};var getPagerQty=function(){var pagerQty=0,breakPoint=0,counter=0;if(slider.settings.moveSlides>0){if(slider.settings.infiniteLoop){pagerQty=Math.ceil(slider.children.length/getMoveBy());}else{while(breakPoint<slider.children.length){++pagerQty;breakPoint=counter+getNumberSlidesShowing();counter+=slider.settings.moveSlides<=getNumberSlidesShowing()?slider.settings.moveSlides:getNumberSlidesShowing();}}}else{pagerQty=Math.ceil(slider.children.length/getNumberSlidesShowing());}return pagerQty;};var getMoveBy=function(){if(slider.settings.moveSlides>0&&slider.settings.moveSlides<=getNumberSlidesShowing()){return slider.settings.moveSlides;}return getNumberSlidesShowing();};var setSlidePosition=function(){var position,lastChild,lastShowingIndex;if(slider.children.length>slider.settings.maxSlides&&slider.active.last&&!slider.settings.infiniteLoop){if(slider.settings.mode==='horizontal'){lastChild=slider.children.last();position=lastChild.position();setPositionProperty(-(position.left-(slider.viewport.width()-lastChild.outerWidth())),'reset',0);}else if(slider.settings.mode==='vertical'){lastShowingIndex=slider.children.length-slider.settings.minSlides;position=slider.children.eq(lastShowingIndex).position();setPositionProperty(-position.top,'reset',0);}}else{position=slider.children.eq(slider.active.index*getMoveBy()).position();if(slider.active.index===getPagerQty()-1){slider.active.last=true;}if(position!==undefined){if(slider.settings.mode==='horizontal'){setPositionProperty(-position.left,'reset',0);}else if(slider.settings.mode==='vertical'){setPositionProperty(-position.top,'reset',0);}}}};var setPositionProperty=function(value,type,duration,params){var animateObj,propValue;if(slider.usingCSS){propValue=slider.settings.mode==='vertical'?'translate3d(0, '+value+'px, 0)':'translate3d('+value+'px, 0, 0)';el.css('-'+slider.cssPrefix+'-transition-duration',duration/1000+'s');if(type==='slide'){el.css(slider.animProp,propValue);if(duration!==0){el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',function(e){if(!$(e.target).is(el)){return;}el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');updateAfterSlideTransition();});}else{updateAfterSlideTransition();}}else if(type==='reset'){el.css(slider.animProp,propValue);}else if(type==='ticker'){el.css('-'+slider.cssPrefix+'-transition-timing-function','linear');el.css(slider.animProp,propValue);if(duration!==0){el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',function(e){if(!$(e.target).is(el)){return;}el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');setPositionProperty(params.resetValue,'reset',0);tickerLoop();});}else{setPositionProperty(params.resetValue,'reset',0);tickerLoop();}}}else{animateObj={};animateObj[slider.animProp]=value;if(type==='slide'){el.animate(animateObj,duration,slider.settings.easing,function(){updateAfterSlideTransition();});}else if(type==='reset'){el.css(slider.animProp,value);}else if(type==='ticker'){el.animate(animateObj,duration,'linear',function(){setPositionProperty(params.resetValue,'reset',0);tickerLoop();});}}};var populatePager=function(){var pagerHtml='',linkContent='',pagerQty=getPagerQty();for(var i=0;i<pagerQty;i++){linkContent='';if(slider.settings.buildPager&&$.isFunction(slider.settings.buildPager)||slider.settings.pagerCustom){linkContent=slider.settings.buildPager(i);slider.pagerEl.addClass('bx-custom-pager');}else{linkContent=i+1;slider.pagerEl.addClass('bx-default-pager');}pagerHtml+='<div class="bx-pager-item"><a href="" data-slide-index="'+i+'" class="bx-pager-link">'+linkContent+'</a></div>';}slider.pagerEl.html(pagerHtml);};var appendPager=function(){if(!slider.settings.pagerCustom){slider.pagerEl=$('<div class="bx-pager" />');if(slider.settings.pagerSelector){$(slider.settings.pagerSelector).html(slider.pagerEl);}else{slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);}populatePager();}else{slider.pagerEl=$(slider.settings.pagerCustom);}slider.pagerEl.on('click touchend','a',clickPagerBind);};var appendControls=function(){slider.controls.next=$('<a class="bx-next" href="">'+slider.settings.nextText+'</a>');slider.controls.prev=$('<a class="bx-prev" href="">'+slider.settings.prevText+'</a>');slider.controls.next.bind('click touchend',clickNextBind);slider.controls.prev.bind('click touchend',clickPrevBind);if(slider.settings.nextSelector){$(slider.settings.nextSelector).append(slider.controls.next);}if(slider.settings.prevSelector){$(slider.settings.prevSelector).append(slider.controls.prev);}if(!slider.settings.nextSelector&&!slider.settings.prevSelector){slider.controls.directionEl=$('<div class="bx-controls-direction" />');slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);}};var appendControlsAuto=function(){slider.controls.start=$('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+slider.settings.startText+'</a></div>');slider.controls.stop=$('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+slider.settings.stopText+'</a></div>');slider.controls.autoEl=$('<div class="bx-controls-auto" />');slider.controls.autoEl.on('click','.bx-start',clickStartBind);slider.controls.autoEl.on('click','.bx-stop',clickStopBind);if(slider.settings.autoControlsCombine){slider.controls.autoEl.append(slider.controls.start);}else{slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);}if(slider.settings.autoControlsSelector){$(slider.settings.autoControlsSelector).html(slider.controls.autoEl);}else{slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);}updateAutoControls(slider.settings.autoStart?'stop':'start');};var appendCaptions=function(){slider.children.each(function(index){var title=$(this).find('img:first').attr('title');if(title!==undefined&&(''+title).length){$(this).append('<div class="bx-caption"><span>'+title+'</span></div>');}});};var clickNextBind=function(e){e.preventDefault();if(slider.controls.el.hasClass('disabled')){return;}if(slider.settings.auto&&slider.settings.stopAutoOnClick){el.stopAuto();}el.goToNextSlide();};var clickPrevBind=function(e){e.preventDefault();if(slider.controls.el.hasClass('disabled')){return;}if(slider.settings.auto&&slider.settings.stopAutoOnClick){el.stopAuto();}el.goToPrevSlide();};var clickStartBind=function(e){el.startAuto();e.preventDefault();};var clickStopBind=function(e){el.stopAuto();e.preventDefault();};var clickPagerBind=function(e){var pagerLink,pagerIndex;e.preventDefault();if(slider.controls.el.hasClass('disabled')){return;}if(slider.settings.auto&&slider.settings.stopAutoOnClick){el.stopAuto();}pagerLink=$(e.currentTarget);if(pagerLink.attr('data-slide-index')!==undefined){pagerIndex=parseInt(pagerLink.attr('data-slide-index'));if(pagerIndex!==slider.active.index){el.goToSlide(pagerIndex);}}};var updatePagerActive=function(slideIndex){var len=slider.children.length;if(slider.settings.pagerType==='short'){if(slider.settings.maxSlides>1){len=Math.ceil(slider.children.length/slider.settings.maxSlides);}slider.pagerEl.html((slideIndex+1)+slider.settings.pagerShortSeparator+len);return;}slider.pagerEl.find('a').removeClass('active');slider.pagerEl.each(function(i,el){$(el).find('a').eq(slideIndex).addClass('active');});};var updateAfterSlideTransition=function(){if(slider.settings.infiniteLoop){var position='';if(slider.active.index===0){position=slider.children.eq(0).position();}else if(slider.active.index===getPagerQty()-1&&slider.carousel){position=slider.children.eq((getPagerQty()-1)*getMoveBy()).position();}else if(slider.active.index===slider.children.length-1){position=slider.children.eq(slider.children.length-1).position();}if(position){if(slider.settings.mode==='horizontal'){setPositionProperty(-position.left,'reset',0);}else if(slider.settings.mode==='vertical'){setPositionProperty(-position.top,'reset',0);}}}slider.working=false;slider.settings.onSlideAfter.call(el,slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index);};var updateAutoControls=function(state){if(slider.settings.autoControlsCombine){slider.controls.autoEl.html(slider.controls[state]);}else{slider.controls.autoEl.find('a').removeClass('active');slider.controls.autoEl.find('a:not(.bx-'+state+')').addClass('active');}};var updateDirectionControls=function(){if(getPagerQty()===1){slider.controls.prev.addClass('disabled');slider.controls.next.addClass('disabled');}else if(!slider.settings.infiniteLoop&&slider.settings.hideControlOnEnd){if(slider.active.index===0){slider.controls.prev.addClass('disabled');slider.controls.next.removeClass('disabled');}else if(slider.active.index===getPagerQty()-1){slider.controls.next.addClass('disabled');slider.controls.prev.removeClass('disabled');}else{slider.controls.prev.removeClass('disabled');slider.controls.next.removeClass('disabled');}}};var initAuto=function(){if(slider.settings.autoDelay>0){var timeout=setTimeout(el.startAuto,slider.settings.autoDelay);}else{el.startAuto();$(window).focus(function(){el.startAuto();}).blur(function(){el.stopAuto();});}if(slider.settings.autoHover){el.hover(function(){if(slider.interval){el.stopAuto(true);slider.autoPaused=true;}},function(){if(slider.autoPaused){el.startAuto(true);slider.autoPaused=null;}});}};var initTicker=function(){var startPosition=0,position,transform,value,idx,ratio,property,newSpeed,totalDimens;if(slider.settings.autoDirection==='next'){el.append(slider.children.clone().addClass('bx-clone'));}else{el.prepend(slider.children.clone().addClass('bx-clone'));position=slider.children.first().position();startPosition=slider.settings.mode==='horizontal'?-position.left:-position.top;}setPositionProperty(startPosition,'reset',0);slider.settings.pager=false;slider.settings.controls=false;slider.settings.autoControls=false;if(slider.settings.tickerHover){if(slider.usingCSS){idx=slider.settings.mode==='horizontal'?4:5;slider.viewport.hover(function(){transform=el.css('-'+slider.cssPrefix+'-transform');value=parseFloat(transform.split(',')[idx]);setPositionProperty(value,'reset',0);},function(){totalDimens=0;slider.children.each(function(index){totalDimens+=slider.settings.mode==='horizontal'?$(this).outerWidth(true):$(this).outerHeight(true);});ratio=slider.settings.speed/totalDimens;property=slider.settings.mode==='horizontal'?'left':'top';newSpeed=ratio*(totalDimens-(Math.abs(parseInt(value))));tickerLoop(newSpeed);});}else{slider.viewport.hover(function(){el.stop();},function(){totalDimens=0;slider.children.each(function(index){totalDimens+=slider.settings.mode==='horizontal'?$(this).outerWidth(true):$(this).outerHeight(true);});ratio=slider.settings.speed/totalDimens;property=slider.settings.mode==='horizontal'?'left':'top';newSpeed=ratio*(totalDimens-(Math.abs(parseInt(el.css(property)))));tickerLoop(newSpeed);});}}tickerLoop();};var tickerLoop=function(resumeSpeed){var speed=resumeSpeed?resumeSpeed:slider.settings.speed,position={left:0,top:0},reset={left:0,top:0},animateProperty,resetValue,params;if(slider.settings.autoDirection==='next'){position=el.find('.bx-clone').first().position();}else{reset=slider.children.first().position();}animateProperty=slider.settings.mode==='horizontal'?-position.left:-position.top;resetValue=slider.settings.mode==='horizontal'?-reset.left:-reset.top;params={resetValue:resetValue};setPositionProperty(animateProperty,'ticker',speed,params);};var isOnScreen=function(el){var win=$(window),viewport={top:win.scrollTop(),left:win.scrollLeft()},bounds=el.offset();viewport.right=viewport.left+win.width();viewport.bottom=viewport.top+win.height();bounds.right=bounds.left+el.outerWidth();bounds.bottom=bounds.top+el.outerHeight();return(!(viewport.right<bounds.left||viewport.left>bounds.right||viewport.bottom<bounds.top||viewport.top>bounds.bottom));};var keyPress=function(e){var activeElementTag=document.activeElement.tagName.toLowerCase(),tagFilters='input|textarea',p=new RegExp(activeElementTag,['i']),result=p.exec(tagFilters);if(result==null&&isOnScreen(el)){if(e.keyCode===39){clickNextBind(e);return false;}else if(e.keyCode===37){clickPrevBind(e);return false;}}};var initTouch=function(){slider.touch={start:{x:0,y:0},end:{x:0,y:0}};slider.viewport.bind('touchstart MSPointerDown pointerdown',onTouchStart);slider.viewport.on('click','.bxslider a',function(e){if(slider.viewport.hasClass('click-disabled')){e.preventDefault();slider.viewport.removeClass('click-disabled');}});};var onTouchStart=function(e){slider.controls.el.addClass('disabled');if(slider.working){e.preventDefault();slider.controls.el.removeClass('disabled');}else{slider.touch.originalPos=el.position();var orig=e.originalEvent,touchPoints=(typeof orig.changedTouches!=='undefined')?orig.changedTouches:[orig];slider.touch.start.x=touchPoints[0].pageX;slider.touch.start.y=touchPoints[0].pageY;if(slider.viewport.get(0).setPointerCapture){slider.pointerId=orig.pointerId;slider.viewport.get(0).setPointerCapture(slider.pointerId);}slider.viewport.bind('touchmove MSPointerMove pointermove',onTouchMove);slider.viewport.bind('touchend MSPointerUp pointerup',onTouchEnd);slider.viewport.bind('MSPointerCancel pointercancel',onPointerCancel);}};var onPointerCancel=function(e){setPositionProperty(slider.touch.originalPos.left,'reset',0);slider.controls.el.removeClass('disabled');slider.viewport.unbind('MSPointerCancel pointercancel',onPointerCancel);slider.viewport.unbind('touchmove MSPointerMove pointermove',onTouchMove);slider.viewport.unbind('touchend MSPointerUp pointerup',onTouchEnd);if(slider.viewport.get(0).releasePointerCapture){slider.viewport.get(0).releasePointerCapture(slider.pointerId);}};var onTouchMove=function(e){var orig=e.originalEvent,touchPoints=(typeof orig.changedTouches!=='undefined')?orig.changedTouches:[orig],xMovement=Math.abs(touchPoints[0].pageX-slider.touch.start.x),yMovement=Math.abs(touchPoints[0].pageY-slider.touch.start.y),value=0,change=0;if((xMovement*3)>yMovement&&slider.settings.preventDefaultSwipeX){e.preventDefault();}else if((yMovement*3)>xMovement&&slider.settings.preventDefaultSwipeY){e.preventDefault();}if(slider.settings.mode!=='fade'&&slider.settings.oneToOneTouch){if(slider.settings.mode==='horizontal'){change=touchPoints[0].pageX-slider.touch.start.x;value=slider.touch.originalPos.left+change;}else{change=touchPoints[0].pageY-slider.touch.start.y;value=slider.touch.originalPos.top+change;}setPositionProperty(value,'reset',0);}};var onTouchEnd=function(e){slider.viewport.unbind('touchmove MSPointerMove pointermove',onTouchMove);slider.controls.el.removeClass('disabled');var orig=e.originalEvent,touchPoints=(typeof orig.changedTouches!=='undefined')?orig.changedTouches:[orig],value=0,distance=0;slider.touch.end.x=touchPoints[0].pageX;slider.touch.end.y=touchPoints[0].pageY;if(slider.settings.mode==='fade'){distance=Math.abs(slider.touch.start.x-slider.touch.end.x);if(distance>=slider.settings.swipeThreshold){if(slider.touch.start.x>slider.touch.end.x){el.goToNextSlide();}else{el.goToPrevSlide();}el.stopAuto();}}else{if(slider.settings.mode==='horizontal'){distance=slider.touch.end.x-slider.touch.start.x;value=slider.touch.originalPos.left;}else{distance=slider.touch.end.y-slider.touch.start.y;value=slider.touch.originalPos.top;}if(!slider.settings.infiniteLoop&&((slider.active.index===0&&distance>0)||(slider.active.last&&distance<0))){setPositionProperty(value,'reset',200);}else{if(Math.abs(distance)>=slider.settings.swipeThreshold){if(distance<0){el.goToNextSlide();}else{el.goToPrevSlide();}el.stopAuto();}else{setPositionProperty(value,'reset',200);}}}slider.viewport.unbind('touchend MSPointerUp pointerup',onTouchEnd);if(slider.viewport.get(0).releasePointerCapture){slider.viewport.get(0).releasePointerCapture(slider.pointerId);}};var resizeWindow=function(e){if(!slider.initialized){return;}if(slider.working){window.setTimeout(resizeWindow,10);}else{var windowWidthNew=$(window).width(),windowHeightNew=$(window).height();if(windowWidth!==windowWidthNew||windowHeight!==windowHeightNew){windowWidth=windowWidthNew;windowHeight=windowHeightNew;el.redrawSlider();slider.settings.onSliderResize.call(el,slider.active.index);}}};var applyAriaHiddenAttributes=function(startVisibleIndex){var numberOfSlidesShowing=getNumberSlidesShowing();if(slider.settings.ariaHidden&&!slider.settings.ticker){slider.children.attr('aria-hidden','true');slider.children.slice(startVisibleIndex,startVisibleIndex+numberOfSlidesShowing).attr('aria-hidden','false');}};var setSlideIndex=function(slideIndex){if(slideIndex<0){if(slider.settings.infiniteLoop){return getPagerQty()-1;}else{return slider.active.index;}}else if(slideIndex>=getPagerQty()){if(slider.settings.infiniteLoop){return 0;}else{return slider.active.index;}}else{return slideIndex;}};el.goToSlide=function(slideIndex,direction){var performTransition=true,moveBy=0,position={left:0,top:0},lastChild=null,lastShowingIndex,eq,value,requestEl;slider.oldIndex=slider.active.index;slider.active.index=setSlideIndex(slideIndex);if(slider.working||slider.active.index===slider.oldIndex){return;}slider.working=true;performTransition=slider.settings.onSlideBefore.call(el,slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index);if(typeof(performTransition)!=='undefined'&&!performTransition){slider.active.index=slider.oldIndex;slider.working=false;return;}if(direction==='next'){if(!slider.settings.onSlideNext.call(el,slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index)){performTransition=false;}}else if(direction==='prev'){if(!slider.settings.onSlidePrev.call(el,slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index)){performTransition=false;}}slider.active.last=slider.active.index>=getPagerQty()-1;if(slider.settings.pager||slider.settings.pagerCustom){updatePagerActive(slider.active.index);}if(slider.settings.controls){updateDirectionControls();}if(slider.settings.mode==='fade'){if(slider.settings.adaptiveHeight&&slider.viewport.height()!==getViewportHeight()){slider.viewport.animate({height:getViewportHeight()},slider.settings.adaptiveHeightSpeed);}slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex:0});slider.children.eq(slider.active.index).css('zIndex',slider.settings.slideZIndex+1).fadeIn(slider.settings.speed,function(){$(this).css('zIndex',slider.settings.slideZIndex);updateAfterSlideTransition();});}else{if(slider.settings.adaptiveHeight&&slider.viewport.height()!==getViewportHeight()){slider.viewport.animate({height:getViewportHeight()},slider.settings.adaptiveHeightSpeed);}if(!slider.settings.infiniteLoop&&slider.carousel&&slider.active.last){if(slider.settings.mode==='horizontal'){lastChild=slider.children.eq(slider.children.length-1);position=lastChild.position();moveBy=slider.viewport.width()-lastChild.outerWidth();}else{lastShowingIndex=slider.children.length-slider.settings.minSlides;position=slider.children.eq(lastShowingIndex).position();}}else if(slider.carousel&&slider.active.last&&direction==='prev'){eq=slider.settings.moveSlides===1?slider.settings.maxSlides-getMoveBy():((getPagerQty()-1)*getMoveBy())-(slider.children.length-slider.settings.maxSlides);lastChild=el.children('.bx-clone').eq(eq);position=lastChild.position();}else if(direction==='next'&&slider.active.index===0){position=el.find('> .bx-clone').eq(slider.settings.maxSlides).position();slider.active.last=false;}else if(slideIndex>=0){requestEl=slideIndex*parseInt(getMoveBy());position=slider.children.eq(requestEl).position();}if(typeof(position)!=='undefined'){value=slider.settings.mode==='horizontal'?-(position.left-moveBy):-position.top;setPositionProperty(value,'slide',slider.settings.speed);}else{slider.working=false;}}if(slider.settings.ariaHidden){applyAriaHiddenAttributes(slider.active.index*getMoveBy());}};el.goToNextSlide=function(){if(!slider.settings.infiniteLoop&&slider.active.last){return;}var pagerIndex=parseInt(slider.active.index)+1;el.goToSlide(pagerIndex,'next');};el.goToPrevSlide=function(){if(!slider.settings.infiniteLoop&&slider.active.index===0){return;}var pagerIndex=parseInt(slider.active.index)-1;el.goToSlide(pagerIndex,'prev');};el.startAuto=function(preventControlUpdate){if(slider.interval){return;}slider.interval=setInterval(function(){if(slider.settings.autoDirection==='next'){el.goToNextSlide();}else{el.goToPrevSlide();}},slider.settings.pause);if(slider.settings.autoControls&&preventControlUpdate!==true){updateAutoControls('stop');}};el.stopAuto=function(preventControlUpdate){if(!slider.interval){return;}clearInterval(slider.interval);slider.interval=null;if(slider.settings.autoControls&&preventControlUpdate!==true){updateAutoControls('start');}};el.getCurrentSlide=function(){return slider.active.index;};el.getCurrentSlideElement=function(){return slider.children.eq(slider.active.index);};el.getSlideElement=function(index){return slider.children.eq(index);};el.getSlideCount=function(){return slider.children.length;};el.isWorking=function(){return slider.working;};el.redrawSlider=function(){slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());slider.viewport.css('height',getViewportHeight());if(!slider.settings.ticker){setSlidePosition();}if(slider.active.last){slider.active.index=getPagerQty()-1;}if(slider.active.index>=getPagerQty()){slider.active.last=true;}if(slider.settings.pager&&!slider.settings.pagerCustom){populatePager();updatePagerActive(slider.active.index);}if(slider.settings.ariaHidden){applyAriaHiddenAttributes(slider.active.index*getMoveBy());}};el.destroySlider=function(){if(!slider.initialized){return;}slider.initialized=false;$('.bx-clone',this).remove();slider.children.each(function(){if($(this).data('origStyle')!==undefined){$(this).attr('style',$(this).data('origStyle'));}else{$(this).removeAttr('style');}});if($(this).data('origStyle')!==undefined){this.attr('style',$(this).data('origStyle'));}else{$(this).removeAttr('style');}$(this).unwrap().unwrap();if(slider.controls.el){slider.controls.el.remove();}if(slider.controls.next){slider.controls.next.remove();}if(slider.controls.prev){slider.controls.prev.remove();}if(slider.pagerEl&&slider.settings.controls&&!slider.settings.pagerCustom){slider.pagerEl.remove();}$('.bx-caption',this).remove();if(slider.controls.autoEl){slider.controls.autoEl.remove();}clearInterval(slider.interval);if(slider.settings.responsive){$(window).unbind('resize',resizeWindow);}if(slider.settings.keyboardEnabled){$(document).unbind('keydown',keyPress);}$(this).removeData('bxSlider');};el.reloadSlider=function(settings){if(settings!==undefined){options=settings;}el.destroySlider();init();$(el).data('bxSlider',this);};init();$(el).data('bxSlider',this);return this;};})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/bitrix/templates/rtds-renault/js/main.js?1514469366891";s:6:"source";s:41:"/bitrix/templates/rtds-renault/js/main.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
	$(document).on('click', '#carfinPrice', function(){
		ga('send', 'event', 'carfin'); yaCounter8060959.reachGoal('carfin');
	});
	
	$(document).on('submit', 'form', function(){
		var forms = [
			'new_car',
			'leasing',
			'parts',
			'service',
			'callback',
			'block_otdel_prod',
			'block_otdel_prod_probeg',
			'block_trade_in',
			'block_korpor_klient',
			'block_servis',
			'block_zapchsti_aksess',
			'block_kredit_strah',
			//'block_vakansii',
			'assessment',
			'for_new_auto',
			'auto_probeg',
			'main_service',
			'service',
			'feedback',
			'car_stock',
			'test_drive',
			'car_order2',
			'credit'
		];
		
			
		for(var i = 0; i < forms.length; i++){
			if(this.name == forms[i]){
				ga('send', 'event', 'form');
				yaCounter8060959.reachGoal('form'); 
				break;
			}
		}
	});
	

	$(".detail_car_slider").bxSlider({pager:false});
	
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/bitrix/templates/.default/js/jquery.fancybox.pack.js?148170690023135";s:6:"source";s:53:"/bitrix/templates/.default/js/jquery.fancybox.pack.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:68:"/bitrix/templates/.default/js/jquery.colorbox-min.js?144888849410894";s:6:"source";s:52:"/bitrix/templates/.default/js/jquery.colorbox-min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
	Colorbox v1.4.27 - 2013-07-16
	jQuery lightbox and modal window plugin
	(c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(t,e,i){function o(i,o,n){var r=e.createElement(i);return o&&(r.id=te+o),n&&(r.style.cssText=n),t(r)}function n(){return i.innerHeight?i.innerHeight:t(i).height()}function r(t){var e=E.length,i=(j+t)%e;return 0>i?e+i:i}function l(t,e){return Math.round((/%/.test(t)?("x"===e?H.width():n())/100:1)*parseInt(t,10))}function h(t,e){return t.photo||t.photoRegex.test(e)}function s(t,e){return t.retinaUrl&&i.devicePixelRatio>1?e.replace(t.photoRegex,t.retinaSuffix):e}function a(t){"contains"in v[0]&&!v[0].contains(t.target)&&(t.stopPropagation(),v.focus())}function d(){var e,i=t.data(A,Z);null==i?(O=t.extend({},Y),console&&console.log&&console.log("Error: cboxElement missing settings object")):O=t.extend({},i);for(e in O)t.isFunction(O[e])&&"on"!==e.slice(0,2)&&(O[e]=O[e].call(A));O.rel=O.rel||A.rel||t(A).data("rel")||"nofollow",O.href=O.href||t(A).attr("href"),O.title=O.title||A.title,"string"==typeof O.href&&(O.href=t.trim(O.href))}function c(i,o){t(e).trigger(i),se.trigger(i),t.isFunction(o)&&o.call(A)}function u(){var t,e,i,o,n,r=te+"Slideshow_",l="click."+te;O.slideshow&&E[1]?(e=function(){clearTimeout(t)},i=function(){(O.loop||E[j+1])&&(t=setTimeout(J.next,O.slideshowSpeed))},o=function(){R.html(O.slideshowStop).unbind(l).one(l,n),se.bind(ne,i).bind(oe,e).bind(re,n),v.removeClass(r+"off").addClass(r+"on")},n=function(){e(),se.unbind(ne,i).unbind(oe,e).unbind(re,n),R.html(O.slideshowStart).unbind(l).one(l,function(){J.next(),o()}),v.removeClass(r+"on").addClass(r+"off")},O.slideshowAuto?o():n()):v.removeClass(r+"off "+r+"on")}function p(i){G||(A=i,d(),E=t(A),j=0,"nofollow"!==O.rel&&(E=t("."+ee).filter(function(){var e,i=t.data(this,Z);return i&&(e=t(this).data("rel")||i.rel||this.rel),e===O.rel}),j=E.index(A),-1===j&&(E=E.add(A),j=E.length-1)),g.css({opacity:parseFloat(O.opacity),cursor:O.overlayClose?"pointer":"auto",visibility:"visible"}).show(),V&&v.add(g).removeClass(V),O.className&&v.add(g).addClass(O.className),V=O.className,O.closeButton?P.html(O.close).appendTo(x):P.appendTo("<div/>"),$||($=q=!0,v.css({visibility:"hidden",display:"block"}),W=o(ae,"LoadedContent","width:0; height:0; overflow:hidden"),x.css({width:"",height:""}).append(W),_=b.height()+k.height()+x.outerHeight(!0)-x.height(),D=T.width()+C.width()+x.outerWidth(!0)-x.width(),N=W.outerHeight(!0),z=W.outerWidth(!0),O.w=l(O.initialWidth,"x"),O.h=l(O.initialHeight,"y"),J.position(),u(),c(ie,O.onOpen),B.add(S).hide(),v.focus(),O.trapFocus&&e.addEventListener&&(e.addEventListener("focus",a,!0),se.one(le,function(){e.removeEventListener("focus",a,!0)})),O.returnFocus&&se.one(le,function(){t(A).focus()})),w())}function f(){!v&&e.body&&(X=!1,H=t(i),v=o(ae).attr({id:Z,"class":t.support.opacity===!1?te+"IE":"",role:"dialog",tabindex:"-1"}).hide(),g=o(ae,"Overlay").hide(),L=t([o(ae,"LoadingOverlay")[0],o(ae,"LoadingGraphic")[0]]),y=o(ae,"Wrapper"),x=o(ae,"Content").append(S=o(ae,"Title"),M=o(ae,"Current"),K=t('<button type="button"/>').attr({id:te+"Previous"}),I=t('<button type="button"/>').attr({id:te+"Next"}),R=o("button","Slideshow"),L),P=t('<button type="button"/>').attr({id:te+"Close"}),y.append(o(ae).append(o(ae,"TopLeft"),b=o(ae,"TopCenter"),o(ae,"TopRight")),o(ae,!1,"clear:left").append(T=o(ae,"MiddleLeft"),x,C=o(ae,"MiddleRight")),o(ae,!1,"clear:left").append(o(ae,"BottomLeft"),k=o(ae,"BottomCenter"),o(ae,"BottomRight"))).find("div div").css({"float":"left"}),F=o(ae,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),B=I.add(K).add(M).add(R),t(e.body).append(g,v.append(y,F)))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),p(this))}return v?(X||(X=!0,I.click(function(){J.next()}),K.click(function(){J.prev()}),P.click(function(){J.close()}),g.click(function(){O.overlayClose&&J.close()}),t(e).bind("keydown."+te,function(t){var e=t.keyCode;$&&O.escKey&&27===e&&(t.preventDefault(),J.close()),$&&O.arrowKey&&E[1]&&!t.altKey&&(37===e?(t.preventDefault(),K.click()):39===e&&(t.preventDefault(),I.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+te,"."+ee,i):t("."+ee).live("click."+te,i)),!0):!1}function w(){var n,r,a,u=J.prep,p=++de;q=!0,U=!1,A=E[j],d(),c(he),c(oe,O.onLoad),O.h=O.height?l(O.height,"y")-N-_:O.innerHeight&&l(O.innerHeight,"y"),O.w=O.width?l(O.width,"x")-z-D:O.innerWidth&&l(O.innerWidth,"x"),O.mw=O.w,O.mh=O.h,O.maxWidth&&(O.mw=l(O.maxWidth,"x")-z-D,O.mw=O.w&&O.w<O.mw?O.w:O.mw),O.maxHeight&&(O.mh=l(O.maxHeight,"y")-N-_,O.mh=O.h&&O.h<O.mh?O.h:O.mh),n=O.href,Q=setTimeout(function(){L.show()},100),O.inline?(a=o(ae).hide().insertBefore(t(n)[0]),se.one(he,function(){a.replaceWith(W.children())}),u(t(n))):O.iframe?u(" "):O.html?u(O.html):h(O,n)?(n=s(O,n),U=e.createElement("img"),t(U).addClass(te+"Photo").bind("error",function(){O.title=!1,u(o(ae,"Error").html(O.imgError))}).one("load",function(){var e;p===de&&(U.alt=t(A).attr("alt")||t(A).attr("data-alt")||"",O.retinaImage&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),O.scalePhotos&&(r=function(){U.height-=U.height*e,U.width-=U.width*e},O.mw&&U.width>O.mw&&(e=(U.width-O.mw)/U.width,r()),O.mh&&U.height>O.mh&&(e=(U.height-O.mh)/U.height,r())),O.h&&(U.style.marginTop=Math.max(O.mh-U.height,0)/2+"px"),E[1]&&(O.loop||E[j+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",setTimeout(function(){u(U)},1))}),setTimeout(function(){U.src=n},1)):n&&F.load(n,O.data,function(e,i){p===de&&u("error"===i?o(ae,"Error").html(O.xhrError):t(this).contents())})}var g,v,y,x,b,T,C,k,E,H,W,F,L,S,M,R,I,K,P,B,O,_,D,N,z,A,j,U,$,q,G,Q,J,V,X,Y={transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,trapFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0},Z="colorbox",te="cbox",ee=te+"Element",ie=te+"_open",oe=te+"_load",ne=te+"_complete",re=te+"_cleanup",le=te+"_closed",he=te+"_purge",se=t("<a/>"),ae="div",de=0,ce={};t.colorbox||(t(f),J=t.fn[Z]=t[Z]=function(e,i){var o=this;if(e=e||{},f(),m()){if(t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;i&&(e.onComplete=i),o.each(function(){t.data(this,Z,t.extend({},t.data(this,Z)||Y,e))}).addClass(ee),(t.isFunction(e.open)&&e.open.call(o)||e.open)&&p(o[0])}return o},J.position=function(e,i){function o(){b[0].style.width=k[0].style.width=x[0].style.width=parseInt(v[0].style.width,10)-D+"px",x[0].style.height=T[0].style.height=C[0].style.height=parseInt(v[0].style.height,10)-_+"px"}var r,h,s,a=0,d=0,c=v.offset();if(H.unbind("resize."+te),v.css({top:-9e4,left:-9e4}),h=H.scrollTop(),s=H.scrollLeft(),O.fixed?(c.top-=h,c.left-=s,v.css({position:"fixed"})):(a=h,d=s,v.css({position:"absolute"})),d+=O.right!==!1?Math.max(H.width()-O.w-z-D-l(O.right,"x"),0):O.left!==!1?l(O.left,"x"):Math.round(Math.max(H.width()-O.w-z-D,0)/2),a+=O.bottom!==!1?Math.max(n()-O.h-N-_-l(O.bottom,"y"),0):O.top!==!1?l(O.top,"y"):Math.round(Math.max(n()-O.h-N-_,0)/2),v.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:O.w+z+D,height:O.h+N+_,top:a,left:d},e){var u=0;t.each(r,function(t){return r[t]!==ce[t]?(u=e,void 0):void 0}),e=u}ce=r,e||v.css(r),v.dequeue().animate(r,{duration:e||0,complete:function(){o(),q=!1,y[0].style.width=O.w+z+D+"px",y[0].style.height=O.h+N+_+"px",O.reposition&&setTimeout(function(){H.bind("resize."+te,J.position)},1),i&&i()},step:o})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(O.w=l(t.width,"x")-z-D),t.innerWidth&&(O.w=l(t.innerWidth,"x")),W.css({width:O.w}),t.height&&(O.h=l(t.height,"y")-N-_),t.innerHeight&&(O.h=l(t.innerHeight,"y")),t.innerHeight||t.height||(e=W.scrollTop(),W.css({height:"auto"}),O.h=W.height()),W.css({height:O.h}),e&&W.scrollTop(e),J.position("none"===O.transition?0:O.speed))},J.prep=function(i){function n(){return O.w=O.w||W.width(),O.w=O.mw&&O.mw<O.w?O.mw:O.w,O.w}function l(){return O.h=O.h||W.height(),O.h=O.mh&&O.mh<O.h?O.mh:O.h,O.h}if($){var a,d="none"===O.transition?0:O.speed;W.empty().remove(),W=o(ae,"LoadedContent").append(i),W.hide().appendTo(F.show()).css({width:n(),overflow:O.scrolling?"auto":"hidden"}).css({height:l()}).prependTo(x),F.hide(),t(U).css({"float":"none"}),a=function(){function i(){t.support.opacity===!1&&v[0].style.removeAttribute("filter")}var n,l,a=E.length,u="frameBorder",p="allowTransparency";$&&(l=function(){clearTimeout(Q),L.hide(),c(ne,O.onComplete)},S.html(O.title).add(W).show(),a>1?("string"==typeof O.current&&M.html(O.current.replace("{current}",j+1).replace("{total}",a)).show(),I[O.loop||a-1>j?"show":"hide"]().html(O.next),K[O.loop||j?"show":"hide"]().html(O.previous),O.slideshow&&R.show(),O.preloading&&t.each([r(-1),r(1)],function(){var i,o,n=E[this],r=t.data(n,Z);r&&r.href?(i=r.href,t.isFunction(i)&&(i=i.call(n))):i=t(n).attr("href"),i&&h(r,i)&&(i=s(r,i),o=e.createElement("img"),o.src=i)})):B.hide(),O.iframe?(n=o("iframe")[0],u in n&&(n[u]=0),p in n&&(n[p]="true"),O.scrolling||(n.scrolling="no"),t(n).attr({src:O.href,name:(new Date).getTime(),"class":te+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",l).appendTo(W),se.one(he,function(){n.src="//about:blank"}),O.fastIframe&&t(n).trigger("load")):l(),"fade"===O.transition?v.fadeTo(d,1,i):i())},"fade"===O.transition?v.fadeTo(d,0,function(){J.position(0,a)}):J.position(d,a)}},J.next=function(){!q&&E[1]&&(O.loop||E[j+1])&&(j=r(1),p(E[j]))},J.prev=function(){!q&&E[1]&&(O.loop||j)&&(j=r(-1),p(E[j]))},J.close=function(){$&&!G&&(G=!0,$=!1,c(re,O.onCleanup),H.unbind("."+te),g.fadeTo(O.fadeOut||0,0),v.stop().fadeTo(O.fadeOut||0,0,function(){v.add(g).css({opacity:1,cursor:"auto"}).hide(),c(he),W.empty().remove(),setTimeout(function(){G=!1,c(le,O.onClosed)},1)}))},J.remove=function(){v&&(v.stop(),t.colorbox.close(),v.stop().remove(),g.remove(),G=!1,v=null,t("."+ee).removeData(Z).removeClass(ee),t(e).unbind("click."+te))},J.element=function(){return t(A)},J.settings=Y)})(jQuery,document,window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:89:"/bitrix/templates/.default/components/bitrix/menu/rtds-horizontal/script.js?1496125745358";s:6:"source";s:75:"/bitrix/templates/.default/components/bitrix/menu/rtds-horizontal/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
BX.ready(function(){jQuery('li.first').hover();jQuery('.submenu_open._submenu_open').hover(function(){},function(){});jQuery('#horizontal-multilevel-menu>li').hover(function(){console.log('s1');console.log($(this).children('ul'));$(this).children('ul').css('display','block');},function(){console.log('s2');$(this).children('ul').css('display','none');});});
/* End */
;; /* /js/all_template.js?14996762271253*/
; /* /bitrix/templates/.default/js/bootstrap.min.js?150537520748107*/
; /* /bitrix/templates/.default/flowplayer/flowplayer.min.js?144888849434193*/
; /* /bitrix/templates/.default/js/newmain.js?14724559391137*/
; /* /bitrix/templates/.default/js/menu_fixed.js?15017721731479*/
; /* /bitrix/templates/rtds-renault/js/jquery.bxslider.js?149612567232976*/
; /* /bitrix/templates/rtds-renault/js/main.js?1514469366891*/
; /* /bitrix/templates/.default/js/jquery.fancybox.pack.js?148170690023135*/
; /* /bitrix/templates/.default/js/jquery.colorbox-min.js?144888849410894*/
; /* /bitrix/templates/.default/components/bitrix/menu/rtds-horizontal/script.js?1496125745358*/
