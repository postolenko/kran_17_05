(function ($) {
  //
  // Header and mobile menu
  //

  const $headerBurger = $(".header__burger"),
      $mobileMenuCover = $(".cover");

  function toggleMobileMenu() {
    $("body").toggleClass("overflow-hidden");
    $(".header__burger").toggleClass("btn--cross");
    $(".sidebar").fadeToggle(280);
    $mobileMenuCover.fadeToggle(280);
  }

  $headerBurger.on("click", toggleMobileMenu);
  $(".header__sidebar-cross").on("click", toggleMobileMenu);
  $mobileMenuCover.on("click", toggleMobileMenu);


  $('.btn--accordion').click(function(j) {
    var dropDown = $(this).closest('.accordion').find('.accordion__back');

    dropDown.stop(false, true).slideToggle();

    dropDown.stop(false, true).parents(".accordion").toggleClass("accordion--open")

    j.preventDefault();
  });

  // ----------

  $(document).on("click", ".file_tag button", function(e) {
    e.preventDefault();
    parent = $(this).closest(".file_tag");
    parent.remove();
  });

  $(".del_btn").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".message_row");
    parent.remove();
  });

  // ----------

  if($("#attach-contact-multiple").length > 0) {
    document.querySelector('#attach-contact-multiple').addEventListener("change", (e) => Array.from(e.target.files).forEach(file => addFile(file.name)));
    function addFile(fileName) {
      let div = document.createElement('div');
      div.className = "file_tag";
      div.innerHTML = fileName;
      let button = document.createElement('button');
      button.className = "del_tag";
      div.append(document.createElement('button'));
      document.querySelector('.files_tags').append(div);
    }
  }

  // ----------

  $("[data-dropdown-btn]").on('click', function(e) {
    e.preventDefault();
    dropDown = $("[data-dropdown = '"+$(this).attr("data-dropdown-btn")+"']");
    if(dropDown.is(":hidden")) {
      dropDown.slideDown(300);
    } else {
      dropDown.slideUp(300);
    }
  });

  $("[data-ch-single]").change(function() {
    ch = $(this).attr('data-ch-single');
    chs = $("[data-ch = '"+ch+"']").find("input");
    if($(this).is(":checked")) {
      chs.prop("checked", true);
    } else {
      chs.prop("checked", false);
    }
  });

  $("[data-ch] input").on("change", function() {
    parent = $(this).closest("[data-ch]");
    chChildrens = parent.find("input");
    chMain = $("[data-ch-single = '"+parent.attr("data-ch")+"']");
    chChildrens.each(function() {
      if(!$(this).is(":checked")) {
        chMain.prop("checked", false);
        return false;
      } else {
        chMain.prop("checked", true);
      }
    });
  });

  if($(".scrollBar").length > 0) {
    $(".scrollBar").mCustomScrollbar();
  }

  $(".del_atachment").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".attachment_row");
    parent.remove();
  });

  // ---------------
  var tabCount, zIndex;
  $(".tabs_3_links").each(function() {
    tab = $(this).find(".tab_3");
    tabCount = tab.length;
    tab.each(function() {
      $(this).css({
        "z-index" : tabCount
      });
      tabCount = tabCount - 1;   
    });
  });

  // ----------------

  if($("#imgInp").length > 0) {
    imgInp.onchange = evt => {
      const [file] = imgInp.files
      if (file) {
        $("#blah").css({
          "display":"block",
          "background-image" : "url("+URL.createObjectURL(file)+")"
        });
        $("#blah").closest(".add_photo_2").addClass("bg_js");
      }
    }
  }

  // ----------------

  $(document).on("click", ".add_tel", function(e) {
    e.preventDefault();
    parent = $(this).closest(".tels_wrapp");
    templ = parent.find(".templ .input_two_cols");
    templ.clone().appendTo(parent.find(".tels_sect"));
    addTel = parent.find(".tels_sect .yellow_input");
    addTelLength = addTel.length;
    addTel.each(function() {
      if( $(this).index(".yellow_input") <= (addTelLength - 1) ) {
        parent2 = $(this).closest(".input_two_cols");
        parent2.find(".add_tel").remove();
      }
    });
  });

  // -----------------

    $(document).on("click", "[data-popup-link]",  function(e) {
      e.preventDefault();
      popupName = $(this).attr("data-popup-link");
      div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      $("body").addClass("fixed");
      $("body").css({
          "position" : "fixed",
          "top" :  -$(document).scrollTop() + "px",
          "overflow" : "hidden",
          "right" : 0,
          "left" : 0,
          "bottom" : 0,
          "padding-right" : scrollWidth + "px"
      });
      $(".popup_bg").fadeIn(300);
      $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });

    $(document).on("click", ".close_popup, .popup_bg", function(e) {
      e.preventDefault();
      curTop = $("body").css("top");
      curTop = Math.abs(parseInt(curTop, 10));
      $("body").attr("style", "");
      if (curTop !== 0) {
          $("html").scrollTop(curTop);
      }
      $("body").removeClass("fixed");
      $(".popup_bg").fadeOut(300);
      $("[data-popup]").fadeOut(300);
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 && $("body").hasClass("fixed")) {
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(".popup_bg").fadeOut(300);
        $("[data-popup]").fadeOut(300);
      }
    });
    
    $(document).on("mouseup", function(e) {
      if($(".popup").is(":visible")) {
        e.preventDefault();
        hide_element = $(".popup_content");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
      }
    });

    // ---------------

    var selectVal, maxLength;

    selectVal = $("#selectMask").val();
    maxLength = parseInt( $("#selectMask").find("option[value = '"+selectVal+"']").attr("data-maxlenght") );
    if($("#inputMask").val().length < maxLength) {
      $("#inputMask").addClass("error");
      $("#submitBtn").addClass("cansel");
    } else {
      $("#inputMask").removeClass("error");
      $("#submitBtn").removeClass("cansel");
    }

    $("#selectMask").on("change", function(e) {
      e.preventDefault();
      selectVal = $(this).val();
      maxLength = parseInt( $(this).find("option[value = '"+selectVal+"']").attr("data-maxlenght") );
      $("#inputMask").inputmask({ 
        regex: "[0-9a-zA-Z]*"
      });
      if($("#inputMask").val().length < maxLength) {
        $("#inputMask").addClass("error");
        $("#submitBtn").addClass("cansel");
      } else {
        $("#inputMask").removeClass("error");
        $("#submitBtn").removeClass("cansel");
        $('#inputMask').val($('#inputMask').val().slice(0,maxLength));
      }
    });

    $(document).on("keyup", "#inputMask", function(e) {
      e.preventDefault();
      if($(this).val().length < maxLength) {
        $(this).addClass("error");
        $("#submitBtn").addClass("cansel");
      } else {
        $(this).removeClass("error");
        $("#submitBtn").removeClass("cansel");
        $('#inputMask').val($('#inputMask').val().slice(0,maxLength));
      }
    });

})(jQuery);

