// //document.write("Hello World");

// let numero = 5;
// let palavras = 'um belo texto';
// let verdadeiro = true;
// let falso = false;

// const PI = 3.14;

// container.innerHTML += '<h1>'+numero+'</h1>';
// container.innerHTML += '<h1>'+palavras+'</h1>';

// palavras = 'Outro texto';

// container.innerHTML += '<h1>'+palavras+'</h1>';
// container.innerHTML += '<h1>'+PI+'</h1>';

// if(numero > 5){
//     pessoa = "Jonathan"
// } else {
//     pessoa = "Jamile"
// }

// container.innerHTML += '<h1>'+pessoa+'</h1>';

// let Palavras = 'outra variavel'
// container.innerHTML += '<h1>'+Palavras+'</h1>';

confirmar.onclick = function(){
    let age = Number(idade.value);
    if(age > 17){
        //alert("Você pode entrar");
        window.location.href = 'cookies.html'
    } else {
        alert("Parabéns pela sinceridade, agora sai");
    }
}

