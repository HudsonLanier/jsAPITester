let content = document.getElementById("content");
const some_variable = 'this is some variable';
content.innerHTML = '<p>testing123  </p>' + some_variable;

const api_address = 'http://127.0.0.1:8000/?format=json';

async function getapi(url) {
    const response = await fetch(url);

    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}

getapi(api_address);

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function show(data) {
    let tab = 
    `<ul>
        <li>Name is ${data[0].name} </li> 
        <li>Description is ${data[0].description}</li>
        <li>Price is ${data[0].price}</li>
    </ul>`;

    
   
    document.getElementById('content').innerHTML = tab;
}

api_url_for_put = 'http://127.0.0.1:8000/api/menu/1/';

async function increasePrice() {
    const response = await fetch(api_address);
    var data = await response.json();
    let current_price = data[0].price;
    const new_price = current_price += 1;
    data[0].price = new_price;
    console.log(data[0]);

    fetch(api_url_for_put, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data[0])
    })


}