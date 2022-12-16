let con=document.getElementById("cart-products")
let favr=JSON.parse(localStorage.getItem("favourites"))||[]
let total=document.getElementById("total")
total.innerText=favr.length
displaycard(favr)
function displaycard(data){
  con.innerHTML=null
  data.forEach((element,index) => {
  
    let div=document.createElement("div")
    let imge=document.createElement("img")
    imge.setAttribute("src",element.image)
    let nme=document.createElement("h2")
    nme.innerText=element.brand
    let pr=document.createElement("h2")
    pr.innerText=element.price
    let del=document.createElement("button")
    del.innerText="Remove"
    del.addEventListener("click",()=>{
      remove(element,index)
    })
  
    div.append(imge,nme,pr,del)
    con.append(div)
  });
}
function remove(element,index){
  favr.splice(index,1)
  localStorage.setItem("favourites",JSON.stringify(favr))
  total.innerText=favr.length
  displaycard(favr)
}
