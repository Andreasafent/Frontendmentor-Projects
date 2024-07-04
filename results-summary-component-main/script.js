const statContainer = document.querySelector('.summary-stats-container');



async function showData(){
    const res = await fetch('data.json');

    let allData = await res.json();
    allData.forEach(data=>{
        makeCategory(data)
    })    

    console.log(allData);
}
    
showData();
    
    
async function makeCategory(item){
    let category = `<div class="summary-stats ${item.category.toLowerCase()}">
                        <div class="stat-title">
                            <img src="${item.icon}" alt="${item.category} Icon">
                            <p>${item.category}</p>
                        </div>
                        <div class="stat-score">
                            <p><span class="bold">${item.score} </span><span class="total-score"> / 100</span></p>
                        </div>
                    </div>`;

    statContainer.insertAdjacentHTML('beforeend', category);
}




// async function fetchData() {
//     try {
//       // Fetch the JSON file
//       const response = await fetch('data.json');

//       // Check if the request was successful
//       if (!response.ok) {
//         throw new Error('Network response was not ok ' + response.statusText);
//       }

//       // Parse the JSON data
//       const data = await response.json();

//       // Display the data
//     //   const contentDiv = document.getElementById('content');
//     //   contentDiv.innerHTML = `
//     //     <p>Name: ${data.name}</p>
//     //     <p>Age: ${data.age}</p>
//     //     <p>City: ${data.city}</p>
//     //   `;

//     for(i in data){
//         console.log(data[i]);
//         statContainer.insertAdjacentHTML('beforeend',`
//         <div class="summary-stats reaction">
//             <div class="stat-title">
//                 <img src="${data[i].icon}" alt="${data[i].category} Icon">
//                 <p>${data[i].category}</p>
//             </div>
//             <div class="stat-score">
//                 <p><span class="bold">${data[i].score} </span><span class="total-score"> / 100</span></p>
//             </div>
//         </div>` )
//     }

//     } catch (error) {
//       console.error('There has been a problem with your fetch operation:', error);
//     }
// }

// window.onload = fetchData;