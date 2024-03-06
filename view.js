// Get data from googlesheet

const table_data = document.getElementById('table_data');

fetch("https://script.google.com/macros/s/AKfycbypd_rqeEWGChJTStAgzAc9FGEDlDplEzeKifiG8F3F1QMyvQOX8HPc98a_Xg9S3cW-tg/exec",{
    method: "GET"
})  .then(res => res.json())
    .then(datas => {
        datas.myalldata.reverse().map((data,index) =>{
            let name = data[0];
            let email = data[1];
            let contact = data[2];


            table_data.innerHTML +=`
            <tr> 
               <td>${index + 1}</td>
               <td>${name}</td>
               <td>${email}</td>
               <td>${contact}</td>
            </tr>`;
        })
    })