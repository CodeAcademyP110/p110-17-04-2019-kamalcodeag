// window.onload = function()
// {
//     let uploadedImageCount = 0;

//     const tableWrapper= document.querySelector('.table-wrapper');
//     const table = document.querySelector('.upload-table');
//     const btnMoreFiles = document.querySelector('.more-files');
//     const btnClearAll = document.querySelector('.clear-all');
//     const uploadArea = document.querySelector('.upload-area');

//     //FILE API - HTML5 new API
//     //File, FileList, FileReader
//     document.querySelector('.upload').onclick = function() { 
//         this.nextElementSibling.click(); 
//     };

//     btnMoreFiles.onclick = () => { document.querySelector('#fileUpload').click(); }

//     btnClearAll.onclick = () => {
//         tableWrapper.classList.remove("show");

//         setTimeout(() => {
//             table.lastElementChild.innerHTML = "";
//             uploadedImageCount = 0;
//         }, 1000);
//     }

//     uploadArea.ondragover = function(e) {
//         e.preventDefault();
//         this.classList.add("dragover");
//     }

//     uploadArea.ondragleave = function(e) {
//         this.classList.remove("dragover");
//     }

//     uploadArea.ondrop = (e) => {
//         e.preventDefault();
//         ImagesUploader([...e.dataTransfer.files]);
//         tableWrapper.classList.add("show");
//         uploadArea.classList.remove("dragover");
//     }

//     //listen to the change event of file
//     document.querySelector('#fileUpload').onchange =function(e)
//     {
//         ImagesUploader([...e.target.files]);
//         tableWrapper.classList.add("show");
//     }

//     function ImagesUploader(files)
//     {
//         files.forEach(file => {
//             if(file.type.match("image/*"))
//             {
                
//                 const reader = new FileReader();
//                 reader.onloadend = function(event)
//                 {
//                     uploadedImageCount++;

//                     const tr = document.createElement('tr');
    
//                     const tdNo = document.createElement('td');
//                     tdNo.innerText = uploadedImageCount;
    
//                     const tdImage = document.createElement('td');
//                     const image = document.createElement('img');
//                     image.classList.add("img-thumbnail", "upload-image");
//                     image.src = event.target.result;
//                     tdImage.appendChild(image);

//                     const tdName = document.createElement('td');
//                     tdName.innerText = file.name;

//                     const tdSize = document.createElement('td');
//                     tdSize.innerText = (file.size / 1024).toFixed(2);

//                     const tdDelete = document.createElement('td');
//                     const icon = document.createElement('i');
//                     icon.className = "fas fa-trash-alt"
//                     tdDelete.appendChild(icon);

//                     icon.onclick = function()
//                     {
//                         //recursively go to all nextElementSiblings and update No.
//                         let currentTr = tr;
//                         while(currentTr.nextElementSibling)
//                         {
//                             currentTr.nextElementSibling.firstElementChild.innerText -= 1;
//                             currentTr = currentTr.nextElementSibling;
//                         }
//                         tr.remove();     
//                         uploadedImageCount--;             
//                     }

//                     tr.appendChild(tdNo);
//                     tr.appendChild(tdImage);
//                     tr.appendChild(tdName);
//                     tr.appendChild(tdSize);
//                     tr.appendChild(tdDelete);

//                     table.lastElementChild.appendChild(tr);
//                 }
//                 reader.readAsDataURL(file);
//                 // reader.onprogress = function(ev){}
//             }
//         })
//     }

// }



// let div = document.querySelector(".upload-div");
// let input = document.querySelector(".input");
// let drop = document.querySelector(".drop-zone");
// let place = document.querySelector(".container");

// div.onclick = function()
// {
//     input.click();
// }

// drop.ondragover = function(e)
// {
//     e.preventDefault();
//     // e.target.classList.add("color");
// }

// drop.ondragleave = function(e)
// {
//     e.preventDefault();
//     // e.target.classList.remove("color");
// }

// drop.ondrop = function(e)
// {
//     e.preventDefault();

//     let files = e.dataTransfer.files;

//     [...files].forEach(file => 
//     {
//         // return file;
//         // console.log(file);
        
//         let reader = new FileReader();
    
//         reader.onloadend = function(event)
//         {
//             let image = document.createElement("img");
//             image.src = event.target.result;
//             place.appendChild(image);
//         }

//         reader.readAsDataURL(file);
//     })
// }

// input.onchange = function(e)
// {
//     let files = e.target.files;

//     [...files].forEach(file => 
//     {
//         // return file;
//         // console.log(file);
        
//         let reader = new FileReader();
    
//         reader.onloadend = function(event)
//         {
//             let image = document.createElement("img");
//             image.src = event.target.result;
//             place.appendChild(image);
//         }

//         reader.readAsDataURL(file);
//     })
// }






let types = document.querySelectorAll(".s-type li");
// let photos = document.querySelectorAll(".all img");

[...types].forEach(li => 
{
    li.onclick = function()
    {
        let activeLi = document.querySelector(".s-type li.active");
        activeLi.classList.remove("active");
        li.classList.add("active");
        // console.log("ok");

        let typeId = this.getAttribute("data-id");


        let imgId = document.querySelector(`.all img[data-id="${typeId}"`);
        
    }
})








