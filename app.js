//this function toggles css class named change
function myFunction(x){
    let displayDiv = document.getElementById('nav_content');

    if (displayDiv.style.display === 'none' || displayDiv.style.display === '') {
        displayDiv.style.display = 'block';
    }

    else if (displayDiv.style.display === 'block'){
        displayDiv.style.display = 'none';
    }
    x.classList.toggle('change');
};

/*
 *this function openTabs
 opens and closes tabs
 
 */
function openTabs(evt, myTabs){
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    tablinks = document.getElementsByClassName('tablinks');

    for (i = 0; i < tabcontent.length;i++) {
        tabcontent[i].style.display = 'none';
    }

    for(i =0; i < tablinks.length;i++){
        tablinks[i].className = tablinks[i].className.replace(' active', '')
    }

    document.getElementById(myTabs).style.display = 'block';
    evt.currentTarget.className += ' active'
}

const cart = document.getElementById('cart');
// function to add to the cart
addToCart = () => {
    cart.textContent = 'Added to cart'
}


const cartt = document.getElementById('cartt');
//function to add to cart
addTo = () => {
    cartt.textContent = 'Added to cart';
};


const span = document.getElementById('span');
//functions to increament and decrease value

let count = 0;

sub = () => {
    count -= 1;
    span.textContent = count;
};

add = () => {
    count += 1;
    span.textContent = count;
};

const spann = document.getElementById('spann');

minus = () => {
    count -= 1;
    spann.textContent = count;
};

plus = () => {
    count += 1;
    spann.textContent = count;
};

const spa = document.getElementById('spa');

increase = () => {
    count += 1;
    spa.textContent = count;
};

decrease = () => {
    count -= 1;
    spa.textContent = count;
};

const pp = document.getElementById('spp');

text = () => {
    pp.textContent = 'Added to cart';
};

const final = document.getElementById('final');

adds = () => {
    count += 1;
    final.textContent = count
};
decre = () => {
    count -= 1;
    final.textContent = count;
};
const fin = document.getElementById('fin');

ad = () => {
    fin.textContent = 'Added to cart'
}
