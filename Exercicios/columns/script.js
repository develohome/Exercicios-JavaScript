var element = document.querySelector('#main');

for(let i = 1; i<5; i++){
    let columns = document.createElement('div');
    columns.classList.add('colunas')
    element.appendChild(columns)
}

var elements = document.getElementsByClassName('colunas')
for(let i = 0;i<elements.length;i++){
    for(let x = 0; x< 10; x++){
        let tam = Math.floor(Math.random() * 3 + 1)
        let pos = Math.random()
        let el = document.createElement('img')
        el.src = `https://picsum.photos/200/300?random=${pos}`
        el.classList.add(`coluna--${tam}`)
        elements[i].appendChild(el); 
    }
}
 var selecionado = document.getElementsByTagName('img')

 selecionado.addEventListener('click', teste)

 function teste(){
    //  document.querySelector("#modal").style.display = "block"
    alert(selecionado.length)
 }