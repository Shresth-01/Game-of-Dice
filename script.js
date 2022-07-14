var num1 = 0
var num2 = 0
function game_1(){
    var dice_1 = Math.floor(Math.random()*6+1)
    num1 += dice_1
    document.getElementById('i1').innerText = 'Player 1 :'+num1
    if(num1>=30){
        console.log('Player 1 is winner')
        document.getElementById('out').innerText = 'Congrats!!!'+' Player 1 is winner'
    }

}
function game_2(){
    var dice_2 = Math.floor(Math.random()*6+1)
    num2 += dice_2
    document.getElementById('i2').innerText = 'Player 2 :'+num1
    if(num2>=30){
        console.log('Player 2 is winner')
        document.getElementById('out').innerText = 'Congrats!!!'+'Player 2 is winner'
    }
}