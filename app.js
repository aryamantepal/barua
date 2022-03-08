//if button is clicked, print hello

const button = document.querySelector('button');
button.addEventListener('click', function() {
const h1 = document.querySelector('h1');
 h1.textContent = 'Siddhant is from Nepal';
 

 });

 //if button is clicked, change image to NepalFlag
    const img = document.querySelector('img');
    button.addEventListener('click', function() {
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1200px-Flag_of_Nepal.svg.png';
    });
    
    
//if button is clicked, remove button
    const button2 = document.querySelector('button');
    button2.addEventListener('click', function() {
        button2.remove();
    });

    
    
    
