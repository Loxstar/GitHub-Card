let h1Info=document.querySelector(".card"); 
let ulInfo=document.querySelector(".basics");
let pInfo=document.querySelector(".story");



function reqListener () {
let data = JSON.parse(this.responseText);
console.log(this.responseText);

h1Info.innerHTML +=`

    <h1> 
        
        ${data.name} 
    </h1>

    `;

ulInfo.innerHTML +=`

    <ul>
        
        <li>Name: ${data.login} </li>
        <li>GitHub URL  ${data.html_url} </li>
        <li>Email: ${data.email} </li>
        <li>Company: ${data.company} </li>
    
    </ul>   

    `;

pInfo.innerHTML +=`

    <p>
        ${data.bio}
    </p>
 
    <img src= ${data.avatar_url}> 
    
    `;

}

let req = new XMLHttpRequest();
req.open("GET", "http://192.168.1.12:8000/octocat");
req.addEventListener("load", reqListener);
req.send();