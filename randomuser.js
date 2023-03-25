const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data));
}


const displayUser = user => {
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;

    const name =user.results[0].name.title + ' ' +user.results[0].name.first + " " + user.results[0].name.last ;
    document.getElementById('name').innerHTML = name;

const img = document.getElementById('image');

const imgDiv = document.createElement('img');
imgDiv.src=`

${user.results[0].picture.large}`;


img.appendChild(imgDiv);

const location = user.results[0].location.city;
document.getElementById('location').innerHTML = location;

  
}





loadUser();