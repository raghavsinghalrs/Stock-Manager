var c_n  = document.getElementById('candy_name');
var des = document.getElementById('description');
var price = document.getElementById('price');
var qtity = document.getElementById('quantity');
var btn = document.getElementById('submit');
var list = document.getElementById('output_screen');

list.addEventListener('click',buyonly1);
list.addEventListener('click',buyonly2);
list.addEventListener('click',buyonly3);

btn.addEventListener('click',show_details);
function show_details(e){
    e.preventDefault();
    var li = document.createElement('li');
    li.id = "stock_item"
    li.appendChild(document.createTextNode(c_n.value));
    li.appendChild(document.createTextNode(' '));
    li.appendChild(document.createTextNode(des.value));
    li.appendChild(document.createTextNode(' '));
    li.appendChild(document.createTextNode(price.value));
    li.appendChild(document.createTextNode(' '));
    li.appendChild(document.createTextNode(qtity.value));
    li.appendChild(document.createTextNode(' '));
    var buy1 = document.createElement('button');
    buy1.id='b1';
    buy1.textContent='Buy1'
    li.appendChild(buy1);
    var buy2 = document.createElement('button');
    buy2.id='b2';
    buy2.textContent='Buy2';
    li.appendChild(buy2);
    var buy3 = document.createElement('button');
    buy3.id='b3';
    buy3.textContent='Buy3';
    li.appendChild(buy3);
    list.appendChild(li);
    result = {
        'Candy Name':c_n.value,
        'Description':des.value,
        'Price':price.value,
        'Quantity':qtity.value
    };
    var object = JSON.stringify(result);
    localStorage.setItem(c_n.value,object);
}
// function delete_details(e){
//     if (e.target.id=='del'){
//         if(confirm('Are you sure?')){
//             var x = e.target.parentElement;
//             item = x.childNodes[2].data;
//             list.removeChild(x);
//             localStorage.removeItem(item);
//         }
//     }
// }

// function edit_details(e){
//     if (e.target.id=='edit'){
//         var x = e.target.parentElement;
//         f_n.value=x.childNodes[0].data;
//         m_id.value=x.childNodes[2].data;
//         list.removeChild(x);
//         localStorage.removeItem(x.childNodes[2].data);
//     }
// }

function buyonly1(e){
    if (e.target.id=='b1'){
        var x = e.target.parentElement;
        var value = Number(x.childNodes[6].data);
        if (value>0){
            value--;
            x.childNodes[6].data = value;
            result = {
                'Candy Name':x.childNodes[0].data,
                'Description':x.childNodes[2].data,
                'Price':x.childNodes[4].data,
                'Quantity': value
            }
            var object = JSON.stringify(result);
            localStorage.setItem(x.childNodes[0].data,object);
        }else{
            console.log("Sorry! Product is not available at our store!")
        }
    }
}

function buyonly2(e){
    if (e.target.id=='b2'){
        var x = e.target.parentElement;
        var value = Number(x.childNodes[6].data);
        if (value>=2){
            value-=2;
            x.childNodes[6].data = value;
            result = {
                'Candy Name':x.childNodes[0].data,
                'Description':x.childNodes[2].data,
                'Price':x.childNodes[4].data,
                'Quantity': value
            }
            var object = JSON.stringify(result);
            localStorage.setItem(x.childNodes[0].data,object);
        }else{
            console.log("Sorry! Product is not available at our store as per ypur requirement!")
        }
    }
}
function buyonly3(e){
    if (e.target.id=='b3'){
        var x = e.target.parentElement;
        var value = Number(x.childNodes[6].data);
        if (value>=3){
            value-=3;
            x.childNodes[6].data = value;
            result = {
                'Candy Name':x.childNodes[0].data,
                'Description':x.childNodes[2].data,
                'Price':x.childNodes[4].data,
                'Quantity': value
            }
            var object = JSON.stringify(result);
            localStorage.setItem(x.childNodes[0].data,object);
        }else{
            console.log("Sorry! Product is not available at our store as per your requirement!")
        }
    }
}