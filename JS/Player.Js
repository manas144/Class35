class Player {
    constructor(){
        
    }
    getplayerCount(){
        database.ref('playerCount').on("value",(data)=>{
            playerCount =data.val();})
    }
    updateCount(state){
database.ref('/').update({playerCount:state})
    }

}