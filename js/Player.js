class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.heatlh = 0;
    this.positionX = 0;
    this.positionY = 0;
    this.score = 0;
    this.name = null;
    this.rank = null;
  }
 // getcarsAtEnd(){
   //database.ref("carsAtEnd").on("value",data =>{
   //  this.rank = data.val()
   //})
  //}

  // static updatecarsAtEnd(rank){
  //  database.ref("/").update({
  //    carsAtEnd:rank
  //  })
  // }
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    if(playerCount = 1){
      var team = 1;
      var playerIndex = "teams/team" + team + "/" + team + "player" +this.index;
      console.log(playerIndex);
      database.ref(playerIndex).update({
      name:this.name,
      health:this.health,
      score:this.score,
      positionX:this.positionX,
      positionY:this.positionY
    });
    }
    if(playerCount = 2){
      var team = 2;
      var playerIndex = "teams/team" + team + "/" + team + "player" +this.index;
      console.log(playerIndex);
      database.ref(playerIndex).update({
      name:this.name,
      health:this.health,
      score:this.score,
      positionX:this.positionX,
      positionY:this.positionY
    });
    }
    
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('teams');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
