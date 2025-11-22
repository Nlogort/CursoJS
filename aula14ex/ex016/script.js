function contar(){
    var inicio =Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = Number(document.getElementById('res'))
    if(passo <=0) passo=1;{
        alert('n')
    }
for(var contante= inicio; contante <=fim;contante+=passo){
    res.innerHTML=`<p> boa</p> ${contante}`
}
}