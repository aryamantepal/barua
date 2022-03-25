//if button is clicked, change h1 to Siddhant is from Nepal, change image to NepalFlag, remove button and create element to say "Play with drums now"
const button3 = document.querySelector('button');
button3.addEventListener('click', function () {
    const h1 = document.querySelector('h1');
    h1.textContent = 'Siddhant is from Nepal';
    const img = document.querySelector('img');
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1200px-Flag_of_Nepal.svg.png';
   // button3.remove();
    //print scroll down and play with drums in a new element in place of the button
    const newElement = document.createElement('p');
    newElement.innerHTML = 'Feel free to scroll down and play with the drums now!';
    //center the new element, and make it big
    newElement.style.textAlign = 'center';
    newElement.style.fontSize = '50px';
    //add the new element to the body
    button3.parentNode.replaceChild(newElement, button3);
});

