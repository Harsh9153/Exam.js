<script>
let arr = JSON.parse(localStorage.getItem("product")) || [];


function submit() {
    let title = document.getElementById("title").value
    let mainn = document.getElementById("mainn")
    if (price == "") {
        document.getElementById("r1").innerHTML = "Enter your budget";
        document.getElementById("r1").style.color = "red"

    }
    else if (color == "") {
        document.getElementById("r2").innerHTML = "Enter your color";
        document.getElementById("r2").style.color = "red"
    }
    else if (address == "") {
        document.getElementById("r3").innerHTML = "Enter your address";
        document.getElementById("r3").style.color = "red"
    }
    else if (phone == "") {
        document.getElementById("r4").innerHTML = "Enter your phone number";
        document.getElementById("r4").style.color = "red"
    }
    else {

        let obj = {
            pname,
            price,
            color,
            address,
            phone,
            payment,
            gen,
        };

        arr.push(obj);
        localStorage.setItem("product", JSON.stringify(arr));
        location.reload();

    }
    //             if (pname == "") {
    //         let res1 = document.getElementById("e1");
    //         res1.innerHTML="Username required" 
    //     }
    //     else if ((price=="")) {
    //       let res3 = document.getElementById("e2");
    //      res3.innerHTML="Enter valid password";
    //     }
    //     else if (color=="") {
    //         let res3 = document.getElementById("e3");
    //         res3.innerHTML=" must contain 6 character";
    //     }
    //    else if(phone=="") {
    //         let res4 = document.getElementById("e4");
    //         res4.innerHTML="Password must be same";
    //         res4.style.color="red";
    //     }
    //     else{
    //         let res4 = document.getElementById("e4");
    //         res4.innerHTML=" login success";
    //         res4.style.color="green";
    //         window.location.replace("login.html"); 
    //     }

}
function loadata() {
    arr.map((val, index) => {
        let div = document.createElement("div")
        //   document.querySelector("div").style.backgroundColor="gray"




        div.innerHTML =
            `
      

<div class="w-full max-w-sm 	border-black rounded-2xl background-color: gray !important; dark:bg-gray-800 dark:border-gray-700  m-10" style="border: 6px solid green; border-bottom: 6px solid green; box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" >
<a href="#">
<img class="p-8 rounded-t-lg" src="img4.png" alt="product image"  style="border-bottom: 2px solid green;" />
</a>
<div class="px-5 pb-5">
<a href="#">
    <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-5">${val.pname}</h2>
</a>
<div class="flex items-center mt-3 mb-3">
    <div class="flex items-center space-x-1 rtl:space-x-reverse">
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
    </div>
    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
</div>
<div class="flex items-center justify-between">
    
    <span class="text-3xl font-bold text-gray-900 dark:text-white">₹${val.price}</span> <br> <br>
    <br>
    <span class="text-3xl font-bold text-gray-900 dark:text-white">₹${val.gen}</span> <br> <br>

    <p class="text-2xl font-bold text-gray-900 dark:text-white">${val.color}</p>
</div>

<div>
<span style=" color: white; ">${val.payment}</span>
</div><button class="flex-none flex items-center justify-center mt-3 w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
<svg width="20" height="20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
</svg>
</button>
<br>
<div  class="flex items-center justify-around" style="border-top: 2px solid green;border-bottom: 2px solid green; border-radius: 155px;">
    <a href="#" data-drawer-target="drawer-contact" data-drawer-show="drawer-contact" aria-controls="drawer-contact"  class="text-white mt-3 mb-3 ml-2 text-gray-900 bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
    <a href="#" data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="text-white text-gray-900 bg-gradient-to-br mt-3 from-pink-500 mb-3 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center" onclick="editdata(${index})">Edit</a>
    <a href="#" class="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center text-gray-900 bg-gradient-to-br from-pink-500 mt-3 to-orange-400 mb-3 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onclick="deletedata(${index})" >Delete</a><br><br>
</div>
</div>
</div>


`
        mainn.appendChild(div)
    });
}
loadata();


let counter = 0;
let counterValue = document.getElementById('counter');
let incrementBtn = document.getElementById('increment');
let decrementBtn = document.getElementById('decrement');
let resetBtn = document.querySelector('#reset');
// To increment the value of counter

increment.addEventListener('click', () => {

    counter++;

    counterValue.innerHTML = counter;
});

decrement.addEventListener('click', () => {

    counter--;

    counterValue.innerHTML = counter;
});


reset.addEventListener('click', reset);


reset.addEventListener('click', () => {

    counter = 0;

    counterValue.innerHTML = counter;
});


// delete
function deletedata(index) {
    let info = arr[index];
    console.log(info);

    arr.splice(index, 1)
    localStorage.setItem("product", JSON.stringify(arr))
    location.reload()
}


// view
function editdata(index) {
    let info = arr[index];
    console.log(info);
    document.getElementById("newname").value = info.pname
    document.getElementById("newprice").value = info.price
    document.getElementById("newcolor").value = info.color
    document.getElementById("newpayment").value = info.payment
    document.getElementById("index").value = index;


}
// update
function updatedata() {
    let pname = document.getElementById("newname").value
    let price = document.getElementById("newprice").value
    let color = document.getElementById("newcolor").value
    let payment = document.getElementById("newpayment").value
    let index = document.getElementById("index").value

    let obj = {
        pname,
        price,
        color,
        payment,
    }

    arr.splice(index, 1, obj)
    localStorage.setItem("product", JSON.stringify(arr))
    location.reload()


}
function ClearAll() {
    localStorage.removeItem("product");
    location.reload();
    console.log(localStorage);
}




</script>