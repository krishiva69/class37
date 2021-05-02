class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
  form.hide();
  textSize(30)
  text("Game Start ", 120, 100);
  Player.getPlayerInfo();

    if(allplayers !== undefined){
  var yp = 130;
    for(var i in allplayers){
  if(i === "player" + player.index)
  fill("red")
  else 
      fill("black")

  yp = yp + 20;
  textSize(15)
  text(allplayers[i].name + ": " + allplayers[i].distance, 120, yp)
  }
  }

  if(keyIsDown(UP_ARROW)&& player.index !== null){
  player.distance = player.distance + 50;
  player.update();
  }
  
}
}
