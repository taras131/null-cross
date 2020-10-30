function playingFieldData(selector) {
    const playingfield_items = document.querySelectorAll(`.playingfield_item`);
    let arr = [];
    playingfield_items.forEach((item,index) =>{
        if(item.classList.contains(selector)){
            arr[index] = true;
        } else{
           arr[index] = false; 
        }
    });
    return arr;
}

export default playingFieldData;