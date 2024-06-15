//ForOf Loop :-

//this kind of loop is use to iterate over any array,object,string,etc.
/*
Syntax :-
for (const item of object) {

    code to execute

}
item is value present at every index/key
it returns values
you can name any thing at place of item
but you must give name of array or object at place of object
*/

//ex :-
const names = ['om','manu','ritz','yasu','piyu','bangu','panda','adi']
for (const name of names) {
    console.log(name)
}