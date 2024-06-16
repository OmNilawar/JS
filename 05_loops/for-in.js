//ForIn Loop :-
// it is also used to iterate over object or array or string
//but the diffrence is it returns Index/key from the array/object/string

//Ex :-
const heros = ['Baki Hanma','Naruto Uzumaki','Eren Yeager','ThorFinn','Ken Kaneki','Ishida Shoya','Tanjiro Kamado']

for (const hero in heros) {
    console.log(hero);
}
// as you can see this will return the all the index of the array

for (const hero in heros) {
    console.log(heros[hero]);
}