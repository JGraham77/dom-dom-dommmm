
// Create Button
let btn = document.createElement('button');
let btnText = document.createTextNode('Add Square');

btn.appendChild(btnText);
document.body.appendChild(btn);

// Creating flexbox container
let flexDiv = document.createElement('div');
flexDiv.classList.add('container');
document.body.appendChild(flexDiv);


let counter = 1;

// Click button to add a square 
btn.addEventListener('click', function () {
    let div = document.createElement('div');
    div.id = counter;
    div.classList.add('square');
    counter++;

    flexDiv.appendChild(div);


    // make id of square appear when hovering over square 
    div.addEventListener('mouseenter', function () {
        let h2 = document.createElement('h2');
        h2.id = counter;
        let h2Text = document.createTextNode(div.id);
        h2.appendChild(h2Text);
        div.appendChild(h2);
    })

    div.addEventListener('mouseleave', function () {
        var elem = document.getElementById(counter);
        elem.parentNode.removeChild(elem);
    })

    // Change color of square (couldn't get the function I showed you yesterday to work, Andrew)
    let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966'];

    div.addEventListener('click', function () {
        div.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    });

    // Remove sibling in front of even number ID, and remove sibling behind odd number ID
    div.addEventListener('dblclick', function () {
        // console.log(div.id);
        // console.log(div.previousSibling);
        if (div.id % 2 === 0) {
            if (div.nextSibling === null) {
                alert('Nothing to see here!');
            } else {
                flexDiv.removeChild(div.nextSibling);
            }
            console.log('even');
        } else {
            if (div.previousSibling === null) {
                alert('Nothing to see there!');
            } else {
                console.log('odd');
                flexDiv.removeChild(div.previousSibling);
            }
        }
    })

});