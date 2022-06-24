/*
Load data from the local storage or provide a default data set with at least one record. 
And save it to an array called "lists".
*/
// localStorage.removeItem('items');
let lists = JSON.parse(localStorage.getItem('items')) ? 
JSON.parse( localStorage.getItem('items')) : [
    {
        id: 1,
        item: 'TV Stand',
        createdDate: new Date()
    }
];
//
document.addEventListener("DOMContentLoaded", ()=> {
    loadFromLocalStorage();
});

// Add item
function addItems() {
    try{
        let list = document.getElementById('list-content').value;
        console.log(list)
        // Fetch the last index of id
        let index = lists.length + 1;
        // Add a new item
        lists.push(
            {
                id: index !== undefined ? index : 1 , 
                item: list,
                createdDate: new Date()
            }
        );
        // Save new data to the localstorage
        localStorage.setItem('items', JSON.stringify(lists));    
    }catch(e) {
        console.log(e.message);
    }
    loadFromLocalStorage();
}
// Load data
function loadFromLocalStorage() {
    console.log(lists);
    lists.forEach( (item, index)=> {
        document.querySelector('#item-wrapper').innerHTML += 
        `
        <li class="bg-gradient list-unstyled" id="${index}">
        <input type="checkbox" onclick="itemCompleted(${index})" class="chkItem form-check-input">
        <span class="list-content">${item.item}</span>
        <i class="bi bi-x-octagon-fill list-icon" onclick="removeItem(${index})" id="${index}"></i>
        </li>
        `;
    } );
}

// btnAddItem
const btnAddItem = document.querySelector('#addItem');
btnAddItem.addEventListener('click', addItems);
// Checked
function itemCompleted(id) {
    if(document.querySelectorAll('.chkItem')[id].checked) {
        document.querySelectorAll('.list-content')[id].classList.add('addLine');
    }else {
        document.querySelectorAll('.list-content')[id].classList.remove('addLine');
    }
}
// Sorting
document.querySelector('#sorting').addEventListener('click', ()=> {
    lists.sort( (a, b)=> {
        return (a.item < b.item) ? -1: 0; 
    });
    // Save new data to the localstorage
    localStorage.setItem('items', JSON.stringify(lists));   
    loadFromLocalStorage(); 
});

function removeItem(id) {
    if(id > -1) {
        lists.splice(id, 1); 
        // Apply the change
        localStorage.setItem('items', JSON.stringify(lists));        
    }else {
        console.log('Name was not found')
    }
}