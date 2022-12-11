


function PlayerList(props) {

    return(
        
        <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action active">
            Player
        </button>
        <button type="button" class="list-group-item list-group-item-action">player name:{props.item.player_name}</button>  
    </div>
    )
}

export default PlayerList;