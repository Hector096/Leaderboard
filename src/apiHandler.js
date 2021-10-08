import { getData ,saveData} from "./localStorageHandler";



export const getGameId = ()=>{
     let gameIdFromLocalStorage = getData()
     
    if( Object.keys(gameIdFromLocalStorage).length === 0 && gameIdFromLocalStorage.constructor === Object){
        fetch(`${process.env.BASE_URL}/games`, {
            method: 'POST',
            body: JSON.stringify({
              name: 'My cool name'
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }else {
        return gameIdFromLocalStorage
    }
}
