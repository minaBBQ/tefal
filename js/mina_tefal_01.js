//테팔이야기 //


$(function() {
 
 
 
 var $sub2_img = $(".sub2_img");
 $(".sub_box2_a1").mouseover(function() {
  $sub2_img.removeClass("sub2_img1 sub2_img2 sub2_img3");
  $sub2_img.addClass("sub2_img1")
 });
 $(".sub_box2_a2").mouseover(function() {
  $sub2_img.removeClass("sub2_img1 sub2_img2 sub2_img3");
  $sub2_img.addClass("sub2_img2")
 });
 $(".sub_box2_a3").mouseover(function() {
  $sub2_img.removeClass("sub2_img1 sub2_img2 sub2_img3");
  $sub2_img.addClass("sub2_img3")
 });
 
 
 
 //img rotationg//
  var positionClasses = ["left", "middle", "right"];
  $(".s1_f_img > .img").click(function() {
    var $this = $(this);
    // a.push(b) put b onto the back of a
    // a.unshift(b) put b onto the front of a
    // a.pop() remove and give me the back of a
    // a.shift() remove and give me the front of a
    if ($this.is('.left')) {
      // ["left", "middle", "right"] ->  
      // ["middle", "right", "left"]
      var oldFront = positionClasses.shift(); // ["middle", "right"]
      positionClasses.push(oldFront) // move front onto back ["middle", "right", "left"]
    } else if ($this.is('.right')) {
      // ["left", "middle", "right"] ->  
      // ["right", "left", "middle"]
      var oldBack = positionClasses.pop();
      positionClasses.unshift(oldBack) // move back onto front
    }

    $(".s1_f_img > .img1").removeClass("left middle right").addClass(positionClasses[0]);
    $(".s1_f_img > .img2").removeClass("left middle right").addClass(positionClasses[1]);
    $(".s1_f_img > .img3").removeClass("left middle right").addClass(positionClasses[2]);
  }); 
 
 
 
 //rotationg img txt//
 
 $('.img1').click(function() {
    $('.s1_f_txt, .s1_tb').removeClass('selected');
    $('.s1_f_txt1, .s1_tb1').addClass('selected');
  
  });
  $('.img2').click(function() {
    $('.s1_f_txt, .s1_tb').removeClass('selected');
    $('.s1_f_txt2, .s1_tb2').addClass('selected');
  });
  $('.img3').click(function() {
    $('.s1_f_txt, .s1_tb').removeClass('selected');
    $('.s1_f_txt3, .s1_tb3').addClass('selected');
  });


 
 
 //haritage pot//

 $('.s3_right2>div').click(function(){
  var $this =$(this);
  var $thisAttr = $this.css('background-image');
  
  $('.s3_left').css('background-image',$thisAttr);
  
 });
 
 var $boxWrap = $('.box_wrap');
  $('.sec2_controller .next').click(function () {
    if (!$boxWrap.is('.moving')) {
      $boxWrap.addClass('moving');
      $('.box_wrap').css('left', '-66%');
    }
  });

  $('.sec2_controller .prev').click(function () {
    if (!$boxWrap.is('.moving')) {
      $boxWrap.addClass('moving');
      $('.box_wrap').css('left', 0);
    }
  });

  $boxWrap.on('transitionend', function() {
    $boxWrap.removeClass('moving');
    var left = parseInt($boxWrap.css('left'));
    if (left !== 0) {
      $boxWrap.append($boxWrap.children().first())
    } else {
      $boxWrap.prepend($boxWrap.children().last())
    }
    $boxWrap.css('left', '-33%');
  })
 
 
 
});
