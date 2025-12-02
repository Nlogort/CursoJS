function calcular(){
    var nota1 = document.getElementById('nota1').value
    var nota2 = document.getElementById('nota2').value
    var nota3 = document.getElementById('nota3').value
    var nota_total = Number(nota1) + Number(nota2) + Number(nota3)
    var res = document.getElementById('res')
    if(nota_total> 180){
       res.innerHTML=`voce passou com:<br>${nota_total}</br>`
    }else if(nota_total==180){
        res.innerHTML=`sua nota foi: <br> ${nota_total}</br> tu quase reprova kkkk`
    }else{
        res.innerHTML=`Sua nota foi: <br>${nota_total}</br> Rodou legal mlk kkkkk`
    }
}