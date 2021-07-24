import $ from "jquery"

function is_touch_device() {
  return (
    "ontouchstart" in window ||
    navigator.MaxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  )
}
function getYoutubeId(url) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
  var match = url.match(regExp)
  if (match && match[2].length === 11) {
    return match[2]
  } else {
    return "error"
  }
}
function copyToClipboard(element) {
  var $temp = $("<input>")
  $("body").append($temp)
  $temp.val($(element).text()).select()
  document.execCommand("copy")
  $temp.remove()
}

$(document).ready(function () {
  $("#menu-toggle").click(function () {
    $("html").toggleClass("menu-active")
    $(this).toggleClass("active").next().toggleClass("show")
  })

  $(".primary-menu li.parent >a").on("click", function (e) {
    if (is_touch_device()) {
      e.preventDefault()
    }
    $(".primary-menu li.parent >a")
      .not(this)
      .parent()
      .removeClass("active")
      .find(".dropdown")
      .slideUp()
    $(this).parent().toggleClass("active").find(".dropdown").slideToggle()
  })

  $(".faqs dt").click(function (e) {
    e.preventDefault()
    $(this).toggleClass("active").next().slideToggle()
  })

  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $(".scrollToTop").fadeIn()
    } else {
      $(".scrollToTop").fadeOut()
    }
  })
  $(".scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000)
    $(".site-header").removeClass("down")
  })

  $(".text-cols .text-col .title").click(function (e) {
    e.preventDefault()
    var $el = $(this)
    $(".text-cols .text-col .title").not($el).parent().removeClass("active")
    $el.parent().addClass("active")
  })

  $(".cms-twocols .dropdown .title").click(function (e) {
    e.preventDefault()
    var $el = $(this)
    $(".cms-twocols .dropdown .title").not($el).parent().removeClass("active")
    $el.parent().addClass("active")
  })

  $(".timeline .title").click(function (e) {
    e.preventDefault()
    $(this).parent().toggleClass("active")
  })

  $(".thumbnail-video").click(function () {
    $(this).addClass("playing")
    var url = $(this).parent().find(".video-iframe").data("url"),
      id = getYoutubeId(url)
    $(this)
      .parent()
      .find(".video-iframe")
      .html(
        '<iframe src="https://www.youtube.com/embed/' +
          id +
          '?autoplay=1" frameborder="0" allow="autoplay" allowfullscreen></iframe>'
      )
  })

  $(".copy-button").on("click", function () {
    copyToClipboard("#code-block")
  })

  $(".form-contact input, .form-contact textarea").mousedown(function () {
    var $el = $(this)
    $el.parent().addClass("active")
  })

  // $('.form-contact input, .form-contact textarea').blur(function() {
  // 	var $el = $(this);
  // 	if($el.val() !== ''){
  // 		$el.parent().addClass('active');
  // 	}else{
  // 		$el.parent().removeClass('active');
  // 	}
  // });

  $("#header").hover(function () {
    $(this).toggleClass("active")
  })

  $(".input-js").each(function (e) {
    $(this)
      .find("input,textarea")
      .on("focus", function () {
        $(this).parent().addClass("active")
      })
    $(this)
      .find("input,textarea")
      .on("blur", function () {
        if ($(this).val() !== "") {
          $(this).parent().addClass("active")
        } else {
          $(this).parent().removeClass("active")
        }
      })
  })

  if ($(".testimonials-carousel")) {
    $(".testimonials-carousel .owl-carousel").owlCarousel({
      items: 3,
      loop: false,
      nav: false,
      dots: false,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
          margin: 14,
        },
        768: {
          items: 2,
          margin: 20,
        },
        1024: {
          items: 3,
          margin: 44,
        },
      },
    })
  }

  if ($(".blog-features")) {
    $(".blog-features .owl-carousel").owlCarousel({
      loop: false,
      nav: false,
      dots: false,
      autoplay: false,
      responsive: {
        0: {
          loop: true,
          items: 1,
          margin: 10,
        },
        768: {
          items: 2,
          margin: 20,
        },
        1024: {
          items: 3,
          margin: 44,
        },
      },
    })
  }
})

$(window).on("wheel", function (event) {
  var headerBar = parseInt($("#header-bar").height() + 16),
    header = parseInt($("#header").height())
  let headerTop = 0

  if (event.originalEvent.deltaY < 0) {
    if (parseInt($(this).scrollTop()) === 0) {
      $("#header").removeClass("down").removeClass("scroll")
    } else {
      if (parseInt($(this).scrollTop()) > headerTop) {
        $("#header").removeClass("down")
      } else {
        if (parseInt($(this).scrollTop()) > headerTop) {
          $("#header").addClass("down").removeClass("scroll")
        }
      }
    }
  } else {
    if (parseInt($(this).scrollTop()) > headerTop) {
      if (!$("#header").hasClass("active")) {
        $("#header").addClass("down")
      }
    }
  }
  if (parseInt($(this).scrollTop()) > headerTop) {
    $("#header").addClass("scroll")
  }
})

window.onscroll = function () {
  let e = document.body.scrollTop || document.documentElement.scrollTop
  let t =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  let o = (e / t) * 100
  document.getElementById("progress-bar-percent").style.width = o + "%"
}
