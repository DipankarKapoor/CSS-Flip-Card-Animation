function revealBackFaceAnimation(){
    $(".card:eq(1)").removeClass("visibility-hidden");  
    $(".card:eq(1)").animate({opacity:1},"slow");          // reveal back-face slowly by setting opacity to 1
}

// Mouse Enter event listener 
$(".card").mouseenter(function(){
    $(".card:eq(0)").animate({opacity:0},"slow"); //hide front-face by making opacity 0
    $(".card:eq(1)").animate({opacity:0},100,revealBackFaceAnimation); 
});

function revealFrontFaceAnimation(){
    $(".card:eq(0)").animate({opacity:1},"slow");  // reveal front-face by setting opacity to 1
}

// Mouse Leave event listener 
$(".card").mouseleave(function(){
$(".card:eq(1)").animate({opacity:0},"slow",revealFrontFaceAnimation); n
});