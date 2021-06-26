
document.getElementsByClassName(".nav a").onclick =  function(e){
    
    document.getElementsByClassName(".nav a").find(".active").removeClass("active");
    document.getElementsByClassName(".nav a").parent().addClass("active");
  }

