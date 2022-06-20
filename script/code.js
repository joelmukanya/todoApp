/*
Load data from the local storage or provide a default data set with at least one record. 
And save it to an array called "lists".
*/
let lists = JSON.parse(localStorage.getItem('items')) ? 
JSON.parse( localStorage.getItem('items')) : [
    {
        id: 1,
        item: 'TV Stand',
        createdDate: new Date()
    }
];
// Add item
function addItems() {
    try{
        let list = document.getElementById('list-content').value;
        console.log(list)
        // Fetch the last index of id
        let index = parseInt(lists.map((item)=> {
            return item.id;
        })) + 1;
        // Add a new item
        lists.push(
            {
                id: index !== undefined ? index : 0 , 
                item: list,
                createdDate: new Date()
            }
        );
        // Save new data to the localstorage
        localStorage.setItem('items', JSON.stringify(lists));    
    }catch(e) {
        console.log(e.message);
    }
}
// Load data
function loadFromLocalStorage() {
    console.log(lists);
    lists.forEach( (item, index)=> {
        document.querySelector('#item-wrapper').innerHTML += 
        `
        <li class="bg-gradient list-unstyled" id="${index}">
        <input type="checkbox" class="chkItem form-check-input" id="${index}" >
        <span class="list-content" id="${index}">
            ${item.item}
        </span>
        <i class="bi bi-x-octagon-fill list-icon"></i>
        </li>
        `;
    } );
}

// Load data
loadFromLocalStorage();

const chkItem = document.querySelectorAll('.chkItem');
chkItem.forEach( (item, index) => {
    item.addEventListener('click', ()=> {
        if(item.checked) {
            document.querySelectorAll('.list-content')[parseInt(item.id)].classList.add('addLine');
        }else {
            document.querySelectorAll('.list-content')[parseInt(item.id)].classList.remove('addLine');
        }  
    });
    
})
// btnAddItem
const btnAddItem = document.querySelector('#addItem');
btnAddItem.addEventListener('click', addItems);
// Sorting
const btnSorting = document.querySelector('#sorting');
btnSorting.addEventListener('click', ()=> {
    lists.sort( (a, b)=> {
        return (a.item < b.name) ? -1: 0; 
    });
});
// Remove an item
(function removeItem() {
    let btnClose = document.querySelectorAll('.list-icon');
    btnClose.forEach( (item, index)=> {
        item.addEventListener('click', ()=>{
            delete lists[index];
        });
    });
})();