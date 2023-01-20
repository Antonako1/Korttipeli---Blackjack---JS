var korttipeli={};
const kortit=[];
kortit [0] = [2, new Image()];kortit[0][1].src='2_of_clubs.png';
kortit [1] = [2, new Image()];kortit [1][1].src='2_of_diamonds.png';
kortit [2] = [2, new Image()];kortit [2][1].src='2_of_hearts.png';
kortit [3] = [2, new Image()];kortit [3][1].src='2_of_spades.png';
kortit [4] = [3, new Image()];kortit [4][1].src='3_of_clubs.png';
kortit [5] = [3, new Image()];kortit [5][1].src='3_of_diamonds.png';
kortit [6] = [3, new Image()];kortit [6][1].src='3_of_hearts.png';
kortit [7] = [3, new Image()];kortit [7][1].src='3_of_spades.png';
kortit [8] = [4, new Image()];kortit [8][1].src='4_of_clubs.png';
kortit [9] = [4, new Image()];kortit [9][1].src='4_of_diamonds.png';
kortit [10] = [4, new Image()];kortit [10][1].src='4_of_hearts.png';
kortit [11] = [4, new Image()];kortit [11][1].src='4_of_spades.png';
kortit [12] = [5, new Image()];kortit [12][1].src='5_of_clubs.png';
kortit [13] = [5, new Image()];kortit [13][1].src='5_of_diamonds.png';
kortit [14] = [5, new Image()];kortit [14][1].src='5_of_hearts.png';
kortit [15] = [5, new Image()];kortit [15][1].src='5_of_spades.png';
kortit [16] = [6, new Image()];kortit [16][1].src='6_of_clubs.png';
kortit [17] = [6, new Image()];kortit [17][1].src='6_of_diamonds.png';
kortit [18] = [6, new Image()];kortit [18][1].src='6_of_hearts.png';
kortit [19] = [6, new Image()];kortit [19][1].src='6_of_spades.png';
kortit [20] = [7, new Image()];kortit [20][1].src='7_of_clubs.png';
kortit [21] = [7, new Image()];kortit [21][1].src='7_of_diamonds.png';
kortit [22] = [7, new Image()];kortit [22][1].src='7_of_hearts.png';
kortit [23] = [7, new Image()];kortit [23][1].src='7_of_spades.png';
kortit [24] = [8, new Image()];kortit [24][1].src='8_of_clubs.png';
kortit [25] = [8, new Image()];kortit [25][1].src='8_of_diamonds.png';
kortit [26] = [8, new Image()];kortit [26][1].src='8_of_hearts.png';
kortit [27] = [8, new Image()];kortit [27][1].src='8_of_spades.png';
kortit [28] = [9, new Image()];kortit [28][1].src='9_of_clubs.png';
kortit [29] = [9, new Image()];kortit [29][1].src='9_of_diamonds.png';
kortit [30] = [9, new Image()];kortit [30][1].src='9_of_hearts.png';
kortit [31] = [9, new Image()];kortit [31][1].src='9_of_spades.png';
kortit [32] = [10, new Image()];kortit [32][1].src='10_of_clubs.png';
kortit [33] = [10, new Image()];kortit [33][1].src='10_of_diamonds.png';
kortit [34] = [10, new Image()];kortit [34][1].src='10_of_hearts.png';
kortit [35] = [10, new Image()];kortit [35][1].src='10_of_spades.png';
kortit [36] = [11, new Image()];kortit [36][1].src='jack_of_clubs2.png';
kortit [37] = [11, new Image()];kortit [37][1].src='jack_of_diamonds2.png';
kortit [38] = [11, new Image()];kortit [38][1].src='jack_of_hearts2.png';
kortit [39] = [11, new Image()];kortit [39][1].src='jack_of_spades2.png';
kortit [40] = [12, new Image()];kortit [40][1].src='queen_of_clubs2.png';
kortit [41] = [12, new Image()];kortit [41][1].src='queen_of_diamonds2.png';
kortit [42] = [13, new Image()];kortit [42][1].src='queen_of_hearts2.png';
kortit [43] = [14, new Image()];kortit [43][1].src='queen_of_spades2.png';
kortit [44] = [13, new Image()];kortit [44][1].src='king_of_clubs2.png';
kortit [45] = [13, new Image()];kortit [45][1].src='king_of_diamonds2.png';
kortit [46] = [13, new Image()];kortit [46][1].src='king_of_hearts2.png';
kortit [47] = [13, new Image()];kortit [47][1].src='king_of_spades2.png';
kortit [48] = [1, new Image()];kortit [48][1].src='ace_of_clubs.png';
kortit [49] = [1, new Image()];kortit [49][1].src='ace_of_diamonds.png';
kortit [50] = [1, new Image()];kortit [50][1].src='ace_of_hearts.png';
kortit [51] = [1, new Image()];kortit [51][1].src='ace_of_spades2.png';
const pelaajanVanhatKortit=[];
const talonVanhatKortit=[];
const sekotetutKortit = kortit.sort(() => Math.random() -0.5 );
var pelaajanKortit=0;
var talonKortit = 0;



document.getElementById("kuva3").innerHTML= "";
// document.getElementById("pelaajanKasi").innerHTML= pelaajanKasi;
//ensimmäinen kortti
document.getElementById("kuva1").innerHTML = "";
document.getElementById("kuva1").appendChild(kortit[0][1]);
pelaajanVanhatKortit.push(sekotetutKortit.shift());
//toinen kortti
document.getElementById("kuva2").innerHTML = "";
document.getElementById("kuva2").appendChild(kortit[0][1]);
pelaajanVanhatKortit.push(sekotetutKortit.shift());

// document.getElementById("talonKasi").innerHTML= talonKasi;
//ensimmäinen talon kortti
document.getElementById("taloKuva1").innerHTML = "";
document.getElementById("taloKuva1").appendChild(sekotetutKortit[0][1]);
talonVanhatKortit.push(sekotetutKortit.shift());
//toinen talon kortti
document.getElementById("taloKuva2").innerHTML = "";
document.getElementById("taloKuva2").appendChild(sekotetutKortit[0][1]);
talonVanhatKortit.push(sekotetutKortit.shift());

window.addEventListener('load', (event) => {
    korttipeli.lasku();
});


korttipeli.uusiKortti=function(){
    //document.getElementById("pelaajanKasi").innerHTML= pelaajanKasi;
    document.getElementById("kuva3").appendChild(sekotetutKortit[0][1]);
    pelaajanVanhatKortit.push(kortit.shift());
    korttipeli.lasku();
}

korttipeli.lasku=function(){
    pelaajanKortit=0;
    talonKortit=0;
    for(i=0;i<pelaajanVanhatKortit.length;i++){
    pelaajanKortit = Number(pelaajanKortit + pelaajanVanhatKortit[i][0]);
    console.log([i]+" "+ pelaajanKortit + " pelaaja"); 
    document.getElementById("pelaajanKasi").innerHTML= pelaajanKortit;   
    }

    for(i=0;i<talonVanhatKortit.length;i++){
    talonKortit = Number(talonKortit + talonVanhatKortit[i][0]);
    console.log( [i]+  " "+talonKortit + " talo");
    document.getElementById("talonKasi").innerHTML= talonKortit;
    }

    
    if(pelaajanKortit>21){
        document.getElementById("tulos").innerHTML=("Hävisit! Sinulla on " + pelaajanKortit + ", tietokoneella on " + talonKortit);
         
    }else if(pelaajanKortit==21){
        document.getElementById("tulos").innerHTML=("Voitit! Sinulla on " + pelaajanKortit + ", tietokoneella on " + talonKortit);
         
    }else if(talonKortit>21){
        document.getElementById("tulos").innerHTML=("Voitit! Sinulla on " + pelaajanKortit + ", tietokoneella on " + talonKortit);
         
    }else if(talonKortit==21){
        document.getElementById("tulos").innerHTML=("Hävisit! Sinulla on " + pelaajanKortit + ", tietokoneella on " + talonKortit);
         
    }
}

korttipeli.lopeta=function(){
    console.log("ok")
    if(pelaajanKortit<=talonKortit){
        document.getElementById("tulos").innerHTML=("Hävisit! Sinulla on " + pelaajanKortit + ", tietokoneella on " + talonKortit);
         
    }else{
        document.getElementById("tulos").innerHTML=("Voitit! Sinulla on " + pelaajanKortit + ", tietokoneella on " + talonKortit);
         
    }
}
korttipeli.restart=function(){
    setTimeout("location.reload(true);", 1);
}