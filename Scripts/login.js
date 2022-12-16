document.getElementById("signup").addEventListener("submit",save)
let arr=JSON.parse(localStorage.getItem("sign_up"))||[]
function save(event){
    // event.preventDefault()
    let email=document.querySelector("#email").value
    let password=document.querySelector("#pass").value
    // let mobile=document.querySelector("#mob").value
let obj={
    email,
    password,
}
// console.log(arr)
let flag=false
        for(let i=0;i<arr.length;i++){
         if( arr[i].email==obj.email){
          flag=true
          break
         }
        };

        if(flag==true){
          alert("Already a user")
        }
else{
arr.push(obj)
localStorage.setItem("sign_up",JSON.stringify(arr))
alert("Sign up Complete")
}
}



document.getElementById("signin").addEventListener("submit", check)

    function check(event) {
        event.preventDefault()

        let eml = document.querySelector("#email").value
        let pass = document.querySelector("#pass").value

        let obj = {
            eml,
            pass
        }
        let em = "no"
        let pas = "no";
        arr.forEach(function (element, i) {
            if (obj.eml == element.email && obj.pass==element.password) {
                em = "yes"
                pas = "yes"
            }
            if (obj.eml == element.email && obj.pass!=element.password) {
                em = "yes"
                pas = "no"
            }
        });
        if (em == "yes" && pas == "yes") {
            alert("Login Sucessfull")
        }
        else if (em == "yes" && pas != "yes") {
            alert("Wrong password")
        }
        else {
            alert("Wrong credentials")
        }
    }