function bounceoff(E,T){

    if (E.x - T.x < T.width/2 + E.width/2
      && T.x - E.x < T.width/2 + E.width/2) {
    E.velocityX = E.velocityX * (-1);
    T.velocityX = T.velocityX * (-1);
  }
  if (E.y - T.y < T.height/2 + E.height/2
    && T.y - E.y < T.height/2 + E.height/2){
    E.velocityY = E.velocityY * (-1);
    T.velocityY = T.velocityY * (-1);
  }
  
  }

  function fion (){
      console.log("yurl")
  }