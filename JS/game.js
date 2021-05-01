class Game {
    constructor(){
        
    }
    getstate(){
        database.ref('gameState').on("value",(data)=>{
            gameState =data.val();})
    }
    updateState(state){
database.ref('/').update({gameState:state})
    }
    start(){
        player=new Player()
        player.getplayerCount()
        form=new Form()
      form.display()  
    }
}

