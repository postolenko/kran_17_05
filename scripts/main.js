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

})(jQuery);

