function eventClick(event){
    const text = (event.target.parentNode.childNodes[1].innerText);
    // const li = document.createElement('li');
    // li.innerText = text;
    const container = document.getElementById('append-div');
    container.innerText = text;
    // container.appendChild(li);

    
}