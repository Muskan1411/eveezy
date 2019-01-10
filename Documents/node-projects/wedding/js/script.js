 /////////////////////////////////////////////////
 /////////////ENABLE / DISABLE INPUTS////////////
 ///////////////////////////////////////////////
$(document).on('click', '.editSite', () => {
    const val = $('.editSite').val();
    if(val === 'edit') {
        $('input').prop('disabled', false);
        $('textarea').prop('disabled', false);
        $('.editSite').html('Save Changes');
        $('.editSite').val('save');
    } else {
        $('input').prop('disabled', true);
        $('textarea').prop('disabled', true);
        $('.editSite').html('Edit this site');
        $('.editSite').val('edit');
    }
    
})


 $(window).on('load', function() {
    preloader();
    sliderBgSetting();
})


function popupSaveTheDateCircle() {
        var saveTheDateCircle = $(".save-the-date");
        saveTheDateCircle.addClass("popup-save-the-date");
}
/*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function() {

                //active wow
                wow.init();

                if($(".save-the-date").length) {
                    popupSaveTheDateCircle();
                }

                //Active heor slider
                heroSlider();

            });
        }
    }
// Hero slider background setting
    function sliderBgSetting() {
        if ($(".hero-slider .slide-item").length) {
            $(".hero-slider .slide-item").each(function() {
                var $this = $(this);
                var img = $this.find(".slider-bg").attr("src");

                $this.css({
                    backgroundImage: "url("+ img +")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                })
            });
        }
    }

    //Setting hero slider
    function heroSlider() {
        if ($(".hero-slider").length) {
            $(".hero-slider").slick({
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev">Previous</button>',
                nextArrow: '<button type="button" class="slick-next">Next</button>',
                dots: true,
                fade: true,
                cssEase: 'linear'
            });
        }
    }


////////////////////placeholder text in multiple lines/////////////////
//////////////////////////////////////////////////////////////////////
var textAreas = document.getElementsByTagName('textarea');

Array.prototype.forEach.call(textAreas, function(elem) {
    elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
}); 

/////////////////////////////////////////
//    BRIDE & GROOM IMAGE////////////////
////////////////////////////////////////
////////////////////////////////////////
    function readURL1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview1').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview1').hide();
            $('#imagePreview1').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
    }
    function readURL2(input) {
        if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview2').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview2').hide();
            $('#imagePreview2').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
    }
    

$("#imageUpload1").change(function() {
    readURL1(this);
});
$("#imageUpload2").change(function() {
    readURL2(this);
});

///////////////////////////////////////////////
////////////////////SHOW OR HIDE RSVP//////////
$(document).ready(function(){
  $("#hide").click(function(){
    $(".rsvp-button").hide();
    $("#rsvp-link-input").hide();
  });
  $("#show").click(function(){
    $(".rsvp-button").show();
    $("#rsvp-link-input").show();
  });
});

///////////////////////////////////////////////
//////////////////////////////////////////////
//////////////Itineary //////////////////////
$(document).ready(function(){

    var counter = 1;
        
    $("#addButton").click(function () {
                
    if(counter>20){
            alert("Only 20 textboxes allow");
            return false;
    }   
        
    var newTextBoxDiv = $(document.createElement('div'))
         .attr("id", 'TextBoxDiv' + counter);
                
    newTextBoxDiv.after().html(
          ' <input type="text" name="textbox' + counter + 
          '" placeholder="Add date" id="textbox' + counter + '" value="" >'+
                              '<input type="text" name="textbox' + counter + 
          '" placeholder="Add time" id="textbox' + counter + '" value="" >'+ '<input type="text" name="textbox' + counter + 
          '" placeholder="Add Event" id="textbox' + counter + '" value="" >');
            
    newTextBoxDiv.appendTo("#TextBoxesGroup");

                
    counter++;
     });
var subcounter = 1000;
  $("#addEvents").click(function() {
    
    var newTextBoxSubDiv = $(document.createElement('div'))
         .attr("id", 'TextBoxDiv' + subcounter);
                
    newTextBoxDiv.after().html('<label>Event #'+ (subcounter-999) + ' : </label>' +
          '<input type="text" name="textbox' + subcounter + 
          '" id="textbox' + subcounter + '" value="" >'+
                            '<input type="text" name="textbox' + subcounter + 
          '" id="textbox' + subcounter + '" value="" >');
            
    newTextBoxSubDiv.appendTo("#TextBoxesSubGroup");
  })
     $("#removeButton").click(function () {
    if(counter==1){
          alert("No more textbox to remove");
          return false;
       }   
        
    counter--;
            
        $("#TextBoxDiv" + counter).remove();
            
     });
        
    
  });