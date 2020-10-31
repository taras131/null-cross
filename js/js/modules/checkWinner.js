
function checkWinner(arr) {
    const result = document.querySelector(`.result`);
    if(arr[0]&&arr[1]&&arr[2] || arr[3]&&arr[4]&&arr[5] || arr[6]&&arr[7]&&arr[8] ||
        arr[0]&&arr[3]&&arr[6] || arr[1]&&arr[4]&&arr[7] || arr[2]&&arr[5]&&arr[8] ||
        arr[0]&&arr[4]&&arr[8] || arr[2]&&arr[4]&&arr[6]){
            return true;
            }else{
            return false;   
        }
}

export default checkWinner;