/*
Load data from the local storage or provide a default data set with at least one record. 
And save it to an array called "lists".
*/
// localStorage.removeItem('items');
let lists = JSON.parse( localStorage.getItem('items')) ? 
JSON.parse( localStorage.getItem('items')) : [
    {
        id: 1,
        item: 'TV Stand',
        createdDate: new Date()
    }
];
// Add item
function addItems() {
    let list = document.getElementById('list-content').innerText;
    console.log(list)
    // Fetch the last index of id
    let index = parseInt(lists.map((item)=> {
        return item.id;
    })) + 1;
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
}
// Load data
function loadFromLocalStorage() {
    console.log(lists);
    lists.forEach( (item)=> {
        document.querySelector('#item-wrapper').innerHTML += 
        `
        <li class="bg-gradient list-unstyled">
        <input type="checkbox" class="chkItem form-check-input" id="chkItem" >
        <span class="list-content">
            ${item.item}
        </span>
        <i class="bi bi-x-octagon-fill list-icon"></i>
        </li>
        `;
    } );
}

// Load data
loadFromLocalStorage();
// btnAddItem
const btnAddItem = document.querySelector('#addItem');
btnAddItem.addEventListener('click', addItems);