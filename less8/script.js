

// const name = document.getElementById('name');
// const add = document.getElementById('add');
// const root = document.getElementById('root');


// let nameList = localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')) : []

// const render = () =>{
//     root.innerHTML = ''
//     nameList.forEach(item =>{
//         root.innerHTML += `<h1>${item.name} <button onclick="deleteName(${item.id})">delete</button></h1>`
//     });
// }

// render()



// add.onclick = () =>{
//     if (name.value.trim()) {
//         nameList = [
//             {
//                 id: nameList.length == 0 ? 1 : nameList[0].id + 1,
//                 name: name.value.trim()
//             },
//             ...nameList
//         ]
        
//         localStorage.setItem('name', JSON.stringify(nameList))
//         render()
//     }
// }




// const deleteName = (id) =>{
//     nameList = nameList.filter(item => item.id != id);
//     localStorage.setItem('name', JSON.stringify(nameList))
//     render();
// }


const name = document.getElementById('name');
const add = document.getElementById('add');
const root = document.getElementById('root');

let nameList = localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')) : [];

const render = () =>{
    root.innerHTML = '';
    nameList.forEach(item =>{
        root.innerHTML += `
            <div>
                <h1>${item.name}</h1>
                <button onclick="editName(${item.id})">Edit</button>
                <button onclick="deleteName(${item.id})">Delete</button>
            </div>`;
    });
}

render();

add.onclick = () =>{
    if (name.value.trim()) {
        nameList = [
            {
                id: nameList.length == 0 ? 1 : nameList[0].id + 1,
                name: name.value.trim()
            },
            ...nameList
        ];
        
        localStorage.setItem('name', JSON.stringify(nameList));
        render();
    }
}

const deleteName = (id) =>{
    nameList = nameList.filter(item => item.id != id);
    localStorage.setItem('name', JSON.stringify(nameList));
    render();
}

const editName = (id) => {
    const newName = prompt("Enter new name:");
    if (newName !== null) {
        const index = nameList.findIndex(item => item.id === id);
        if (index !== -1) {
            nameList[index].name = newName;
            localStorage.setItem('name', JSON.stringify(nameList));
            render();
        } else {
            alert("Name not found!");
        }
    }
}



// let btn = document.getElementById('btn');

// btn.onclick = () =>{
//     alert('Hello World')
// }

// setTimeout(() =>{
//     console.log('time out');
// }, 5000);

// console.log('Hello geekks');

// const func = () =>{
//     let num = 10

// }