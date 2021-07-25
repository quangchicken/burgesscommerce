import $ from "jquery"

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
})
