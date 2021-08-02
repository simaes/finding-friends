
const friend = document.getElementById('f-content');
const profile = document.getElementById('profile');

window.onload = (event) => {
    getdata();
  };

async function getdata() {
    const response = await fetch('https://random-data-api.com/api/users/random_user')
        .then(res => res.json())
        .catch(error => console.log('error'))
        .then(data => {
           
            let firstname = data.first_name;
            let lastname = data.last_name;
            let gender = data.gender;
            let username = data.username;
            let email = data.email;
            let pic = data.avatar; 
            
            /* set friend content */
            friend.innerText = firstname + ' ' + lastname +
              ' *** Gender : ' + gender + 
            ' *** Email Address : ' + email ;
            

            /* set friend profile */
            profile.src = pic;

            /* set buttons */
           document.getElementById('button1').addEventListener('click', funAccept)
           document.getElementById('button2').addEventListener('click', funDeny)

        });   
}

function funAccept() {
    let text = document.getElementById('friends');
    let name = friend.innerText.split('***');
    text.appendChild(addfriendlist(name[0]));
    //randomColor(); 
    setTimeout(getdata(),500);
} 
  
function funDeny(){
    //randomColor(); 
    setTimeout(getdata(),500);
}

function addfriendlist(text) {
    var li = document.createElement('li');
    li.textContent = text;
    return li;
}
/*
function randomColor() {
    document.getElementById('friendDiv').style.background = 
    'rgba(' + Math.round(Math.random()*255) + ',' + 
    Math.round(Math.random()*255) + ',' + 
    Math.round(Math.random()*255) + ',0.5)';
}
*/
