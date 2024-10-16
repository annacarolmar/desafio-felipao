const prompt = require("prompt-sync")({sigint:true});

var name_hero = prompt("Olá, qual seu nome de herói? ");
console.log("Bem vindo(a), oh grandioso(a) " + name_hero + "!" );
var xp_hero = prompt("Qual é seu xp de jornada, herói? ");
var level_hero = ' '
if(xp_hero>=0 && xp_hero <=2000){
    level_hero = "Ferro";
}else if(xp_hero>=2001 && xp_hero<=4000) {
    level_hero = "Bronze";
}else if(xp_hero>=4001 && xp_hero<=6000) {
    level_hero = "Prata";
}else if (xp_hero>=6001 && xp_hero<=7000) {
    level_hero = "Ouro";
}else if (xp_hero>=7001 && xp_hero<=8000) {
    level_hero = "Platina";
}else if (xp_hero>=8001 && xp_hero<=9000) {
    level_hero = "Ascendente";
}else if (xp_hero>=9001 && xp_hero<=10000) {
    level_hero = "Imortal";
}else if (xp_hero>=10001) {
    level_hero = "Radiante";
}else {
    level_hero = "não reconhecido"
}
console.log("O herói/heroína de nome " + name_hero + " está no nível " + level_hero + "!");