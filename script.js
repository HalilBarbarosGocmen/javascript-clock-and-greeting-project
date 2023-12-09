let names = prompt('Lütfen İsminizi Giriniz.')


while (names.length < 2 ) {
    alert('Lütfen İsminizi Doğru Giriniz!');
    names = prompt('Lütfen İsminizi Giriniz.');
}


let start = document.querySelector('#start')
if (names.length > 2) {
    start.innerHTML = 'Welcome !'
} 

let welcome = document.querySelector('#welcome')
welcome.innerHTML = `Dear ${names} welcome to my project !`

function tarihSaat() {
    let date = `On ${new Date().toLocaleString('tr-TR')} you are viewing this project`
    document.getElementById("date").innerHTML = date; 
}

setInterval(tarihSaat)