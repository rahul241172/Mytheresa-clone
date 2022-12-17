

fetch("./json/men.json")
.then((res)=> res.json())
.then((data)=>{
 displaycard(data)
 console.log(data)
})
.catch((err)=>{
    console.log(err);
})
let cont=document.getElementById("products_container")
let favr=JSON.parse(localStorage.getItem("favourites"))||[]
displaycard(data)
function displaycard(data){
  cont.innerHTML=null
  data.forEach((element,index)=> {
    let div=document.createElement("div")
    let imge=document.createElement("img")
    imge.setAttribute("src",element.image)
    let nme=document.createElement("h2")
    nme.innerText=element.brand
    let pr=document.createElement("h2")
    pr.innerText=element.price
    let fav=document.createElement("button")
     fav.innerText="ADD TO BAG"
     fav.setAttribute("class","Addcart")
     fav.addEventListener("click",()=>{
      let flag="flase"
        for(let i=0;i<favr.length;i++){
          if(favr[i].id==element.id){
            flag="true"
            break
          }
        }
        if(flag=="true"){
         
          alert("Product Already in Bag")
        }
        else{
          favr.push(element)
          alert("Product Added in Bag")
          localStorage.setItem("favourites",JSON.stringify(favr))
        }

     })
    div.append(imge,nme,pr,fav)
    cont.append(div)
   
  });
  let total=document.getElementById("total")
    total.innerText=favr.length
}
// let filter=document.getElementById("filter")
// let newarr
// filter.addEventListener("change",()=>{
// if(filter.value==""){
// displaycard(arr)
// }
// else{
// newarr=arr.filter((e,i)=>{
//   return filter.value==e.type
// })
// displaycard(newarr)
// }

// })