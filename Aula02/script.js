function validar(){
    var valor = document.getElementById("txtValor").value;
    var pInfo = document.getElementById("info");
    if (valor.length == 0 || isNaN(valor)) {
        pInfo.innerHTML = "Valor inválido";
        pInfo.style.background = "#ff0000";
        return false;
    } else if (valor <= 0 || valor > 10) {
        pInfo.innerHTML = "Digite valores entre 1 e 10";
        pInfo.style.color = "blue";
        return false;
    } else {
        pInfo.innerHTML = "Valor válido";
        pInfo.setAttributeNS("background", "white", "color", "green");
        return true;        
    }
}