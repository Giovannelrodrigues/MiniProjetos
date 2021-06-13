
function calcular(){
    let border_1 = 0;
    let border_2 = 0;
    let  border_3 = 0;
    let border_4 = 0; 
    border_1= Number(document.querySelector("#input-one").value);
    border_2 =Number(document.querySelector("#input-two").value);
    border_3 = Number(document.querySelector("#input-three").value);
    border_4 = Number(document.querySelector("#input-four").value);
    document.querySelector(".imprimir").innerHTML = `Border-Radius: ${border_1}px ${border_2}px ${border_3}px ${border_4}px;`
    document.querySelector(".border_radius").style.borderRadius = `${border_1}px ${border_2}px ${border_3}px ${border_4}px`
    
}