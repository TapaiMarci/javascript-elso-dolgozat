//Leap Year
function isLeapYear(year) {
    const ev = parseInt(document.getElementById('year').value);
    let szokoev = false;
    if(year % 4 === 0 && year % 100 === 0 && year % 400){
        szokoev = true;
    }
    if(szokoev) {
        document.getElementById('result').innerHTML = `${ev}} az év szökőév.`;
    }else {
        document.getElementById('result').innerHTML = `${ev} az év nem szökőév.`;
    }
    }
//Cuboid
function cuboid(magassag, szelesseg, hossz) {
    const magassag = 10.4;
    const szelesseg = 13.5;
    const hossz = 8.2;

    const felszin = 2*(magassag*szelesseg + szelesseg*hossz + hossz*magassag);
    const terfogat = magassag*szelesseg*hossz;

    document.getElementById(`felszin`).innerHTML = `felszin: ${felszin.toFixed(2)}`;
    document.getElementById(`terfogat`).innerHTML = `terfogat: ${terfogat.toFixed(2)}`;
    }
//Stone Paper Scissors
function stonePaperScissors(player1, player2) {
    const player1 = parseInt(document.getElementById('player1').value);
    const player2 = parseInt(document.getElementById('player2').value);

    
    }
//Factorial
function factorial(number) {
    const faktorialis = 1;

    for(const i = 0; i < number.Length; i++){
        const intNumber = number[i];
        faktorialis = faktorialis * intNumber;
    }
    return faktorialis;
    }