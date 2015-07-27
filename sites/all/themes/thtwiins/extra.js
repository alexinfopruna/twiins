
function update_slider_bullets() {
    jQuery('.ls-container .ls-thumbnail-wrapper  .ls-thumbnail-slide img').each(function() {
        if (jQuery(this).hasClass('ls-thumb-active')) {
            jQuery(this).parent().addClass('active');
        }
        else {
            jQuery(this).parent().removeClass('active');
        }
    });
    setTimeout(update_slider_bullets, 500);
}

setTimeout(update_slider_bullets, 500);

// MENU

(function($) {

/**
 * 
 * READY
 */
$(function(){
    jQuery('.i18n-it .block-layer-slider-7').remove();
    
     jQuery('.page-compatibilidad .field-name-field-imagen-casco').click(function(e) {
          
        jQuery(".field-name-field-compatibilidad").hide();
       jQuery(this).unbind('click');
       jQuery(this).find("img").unwrap();
       var fila=jQuery(this).closest(".views-row");
       fila.attr("id","aket");
       jQuery(".no-model").hide();
       
       jQuery(".views-row").fadeOut("slow");
jQuery(".views-row").fadeOut("slow");
       var $marginLefty = jQuery(this).parent().find(".field-name-field-compatibilidad");
       fila.slideToggle("slow",function(){
           jQuery(".back-list").show();
		$(".view-footer img.tres-models").fadeIn("slow");
           $marginLefty.fadeIn("slow");
       });
       
        return false;
    });
    
    var sel=jQuery('#edit-field-marca-tid').val()
    if(sel==1) {
        jQuery('#edit-field-marca-tid').val(19);
        $('#edit-field-marca-tid').trigger("chosen:updated");
    }
});




    jQuery('.lang-menu-trigger').click(function() {
        jQuery(this).next('ul').slideToggle();
    });
//	jQuery('a[href="/products"]').click(function(){
//		jQuery(this).next('ul').slideToggle();
//	});
    jQuery('a[href="/products"]').each(function() {
        jQuery(this).attr('name', 'products');
        jQuery(this).attr('href', '#');
        jQuery(this).css('cursor', 'default');

    });

    Drupal.behaviors.yourfunction = {
        attach: function(context) {
            $('body', context).once('accordionmenu', function() {
                $('body').bind('responsivelayout', function(e, d) {

                    //Define your drupal menu id (only works with core menu block)
                    var menuid = "#block-system-main-menu";

                    //This condition will act under the 'mobile' size, and will not be executed on ie6 and ie7
                    if (d.to.match(/narrow|mobile/) && !$('body').hasClass('icon-menu') && !$('html').hasClass('ie6') && !$('html').hasClass('ie7')) {
                        $("<a class='over main' href='#'>&nabla; MENU</a>").insertBefore(menuid + ' .content > ul');
                        $('body').addClass('icon-menu');


                        //Remove the ´hover´ event in the dropdown menu scrip below             
                        $(menuid + ' li').unbind();

                        //Add a span tag that will aft as the expand button, you can change the output of that button here&
                        $(menuid + " ul.menu li.expanded").prepend($("<a class='over' href='#'>&nabla;</a>"));

                        //Create an open/close action on the accordion after clicking on the expand element        
                        $(menuid + ' a.over').click(function(event) {
                            event.preventDefault();
                            if ($(this).siblings('ul').is(":visible")) {
                                $(this).parent().removeClass('made-visible'); //correct bubbling function
                                $(this).siblings('ul').slideUp('fast');
                            } else {
                                $(this).parent().addClass('made-visible'); //correct bubbling function
                                $(this).siblings('ul').slideDown('fast');
                            }
                        });

                    }
                    //this condition will work for all sizes exept mobile, but will act on ie6 and ie7 browsers    
                    if ((!d.to.match(/narrow|mobile/) && $('body').hasClass('icon-menu')) | $('html').hasClass('ie7')) {
                        //remove the expand elements from the accordion menu
                        $(menuid + " a.over").remove();
                        $(menuid + " .made-visible").removeClass('.made-visible');
                        //hide the open accordion items removing the display block style
                        $(menuid + " ul li ul").removeAttr("style");
                        //Simple hide/show event for the dropdown menus
                        $(menuid + ' li').hover(
                                function() {
                                    $('ul:first', $(this)).show();
                                },
                                function() {
                                    $('ul', $(this)).hide();
                                }
                        );
                        $('body').removeClass('icon-menu');
                    }

                });
            });
        }
    }
}(jQuery));
