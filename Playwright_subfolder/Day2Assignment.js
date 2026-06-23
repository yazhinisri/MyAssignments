function reverseString(){
    const word="yazhini"
    let reversed=""
    const chararrayword =word.split('');
    for (let  i=chararrayword.length-1; i>=0; i--){
        reversed += chararrayword[i]
     
    }
    console.log(reversed)
}
reverseString()