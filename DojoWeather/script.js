let element = document.querySelector('.cookies');

function remove() {
    element.remove('.cookies');
}



let select = document.querySelector('.temp');
let f1 = document.querySelector('#f1');

select.addEventListener('change', function() {
    if (select.value === 'f') { 
        r1.innerHTML = '75°'; 
        r2.innerHTML = '80°';
        r3.innerHTML = '69°';
        r4.innerHTML = '78°';
        b1.innerHTML = '65°';
        b2.innerHTML = '66°';
        b3.innerHTML = '61°';
        b4.innerHTML = '70°';
    } else {
        r1.innerHTML = '24°'; 
        r2.innerHTML = '27°';
        r3.innerHTML = '21°';
        r4.innerHTML = '26°';
        b1.innerHTML = '18°';
        b2.innerHTML = '19°';
        b3.innerHTML = '16°';
        b4.innerHTML = '21°';
    }
});
