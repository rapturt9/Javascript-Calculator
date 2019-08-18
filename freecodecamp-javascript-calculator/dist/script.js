var x=$("input").val();
var y=0;
var clicked=false;
$("body").bind('keyup', function(e) {
    if ( e.keyCode === 13 ) { 
       x=$("input").val();
      $("input").val(math.eval(x));
      x=$("input").val();
    } else if(e.keyCode === 48){
      $("input").val(x+"0");
    x=$("input").val();
    } else if(e.keyCode === 49){
      $("input").val(x+"1");
    x=$("input").val();
    } else if(e.keyCode === 50){
      $("input").val(x+"2");
    x=$("input").val();
    } else if(e.keyCode === 51){
      $("input").val(x+"3");
    x=$("input").val();
    } else if(e.keyCode === 52){
      $("input").val(x+"4");
    x=$("input").val();
    } else if(e.keyCode === 53){
      $("input").val(x+"5");
    x=$("input").val();
    } else if(e.keyCode === 54){
      $("input").val(x+"6");
    x=$("input").val();
    } else if(e.keyCode === 55){
      $("input").val(x+"7");
    x=$("input").val();
    } else if(e.keyCode === 56){
      $("input").val(x+"8");
    x=$("input").val();
    } else if(e.keyCode === 57){
      $("input").val(x+"9");
    x=$("input").val();
    } else if(e.keyCode === 110){
      $("input").val(x+".");
    x=$("input").val();
    } else if(e.keyCode === 106){
      $("input").val(x+"*");
    x=$("input").val();
    } else if(e.keyCode === 107){
      $("input").val(x+"+");
    x=$("input").val();
    } else if(e.keyCode === 109){
      $("input").val(x+"-");
    x=$("input").val();
    } else if(e.keyCode === 111){
      $("input").val(x+"/");
    x=$("input").val();
    } else if(e.keyCode === 8){
      $("input").val(x.slice(0,-1));
      x=$("input").val();
    }
});

$(".press").click(function(){
  if($(this).find("p").html()==="AC"){
    $("input").val("");
    x=$("input").val();
  } else if($(this).find("p").html()==="CE"){
    $("input").val(x.slice(0,-1));
    x=$("input").val();
  } else if($(this).find("p").html()==="=") {
    x=$("input").val();
      $("input").val(math.eval(x));
      x=$("input").val();
  } else {
    $("input").val(x+$(this).find("p").html());
    x=$("input").val();
    if(clicked===true){
      clicked=false;
      $("input").val(x.slice(0,-1));
      x=$("input").val();
    }
  }
  
});

$(".fa").click(function(){
  if(y%2===0){
    $(".changer").html(")");
  } else if(y%2===1) {
    $(".changer").html("(");
  }
  clicked=true;
  y++;
       
});
$(".press").hover(function(){
  $(this).css("background-color","#ffffb3");
}, function(){
  $(this).css("background-color","#fff");
});