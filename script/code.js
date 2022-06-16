// Empty array
let lists = [];
// function to add items to a list.
// arg => Will be use as an event
const addItems = ()=>{
    // arg.preventDefault();
    let list = document.getElementById('list').value;
    if( (list != "") && (!lists.includes(list)) ){
        lists.push({isActive: false, dateCreated: new Date(), item:list });
    }else{
        console.log("Provide a correct item");
    }
    console.log(lists);
}
// Link a variable to a button on a DOM
let btnAddItem = document.getElementById('addItem');
// Add an event listener to a button
btnAddItem.addEventListener('click', addItems);
