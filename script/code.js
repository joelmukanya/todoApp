/*
Load data from the local storage or provide a default data set with at least one record. 
And save it to an array called "lists".
*/
let lists = JSON.parse( localStorage.getItem('items')) ? 
JSON.parse( localStorage.getItem('items')) : [
    {
        id: 1,
        item: 'TV Stand',
        createdDate: new Date().getDate()
    }
];
// Add item
function addItems(e) {
    // Prevent the form to submit
    e.preventDefault();
    try{
        let list = document.querySelector('#list-content').textContent;
        // Fetch the last index of id
        let index = parseInt(lists.map((item)=> {
            return item.id;
        })) + 1;
        // Add a new item
        lists.push(
            {
                id: index !== undefined ? index : 1 , 
                item: list,
                createdDate: new Date().getDate()
            }
        )
        // Save new data to the localstorage
        localStorage.setItem('items', JSON.stringify(lists));
        // Load data from localStorage
        loadFromLocalStorage();
    }catch(e) {
        console.error(e.message);
    }
}
// Load data
function loadFromLocalStorage() {
    let data = JSON.parse(localStorage.getItem('items'));
    console.log(data);
    data.forEach( (item)=> {
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
    } )
}
// btnAddItem
const btnAddItem = document.querySelector('#addItem');
btnAddItem.addEventListener('click', addItems);


/*
<li class="bg-gradient list-unstyled">
    <input type="checkbox" class="chkItem form-check-input" id="chkItem" >
    <span class="list-content">
        
    </span>
    <i class="bi bi-x-octagon-fill list-icon"></i>
</li>
*/