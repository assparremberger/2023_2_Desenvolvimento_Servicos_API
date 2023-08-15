function validar(){
    var valor = document.getElementById("txtValor").value;
    var pInfo = document.getElementById("info");
    if( valor.length == 0 ){
        pInfo.innerHTML = "O campo valor deve ser preenchido!";
        pInfo.style.background = "#f00";
        return false;
    }else if( isNaN( valor ) ){
        pInfo.innerHTML = "Digite números";
        pInfo.setAttribute("style", "background: blue; color:white" );
        return false;
    }else if( valor <= 0 || valor > 10){
        pInfo.innerHTML = "Valor Inválido!";
        return false;
    }else{
        return true;
    }
}