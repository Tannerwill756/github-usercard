/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

axios.get('https://api.github.com/users/Tannerwill756')
  .then(response => {
    console.log(response.data);
    const myInfo = myNewCard(response.data);
    const cards = document.querySelector('.cards');
    cards.append(myInfo);
  })
  .catch(error => {
    console.log('You are getting the error:', error);
  })

function myNewCard (gitHubInfo) {
  const parentCard = document.createElement('div'),
        userImg = document.createElement('img'),
        cardInfo = document.createElement('div'),
        nameHeader = document.createElement('h3'),
        userName = document.createElement('p'),
        location = document.createElement('p'),
        profile = document.createElement('p'),
        myUrl = document.createElement('a'),
        followers = document.createElement('p'),
        following = document.createElement('p'),
        myBio = document.createElement('p');

        parentCard.append(userImg);
        parentCard.append(cardInfo);
        cardInfo.append(nameHeader);
        cardInfo.append(userName);
        cardInfo.append(location);
        cardInfo.append(profile);
        profile.append(myUrl);
        cardInfo.append(followers);
        cardInfo.append(following);
        cardInfo.append(myBio);

        parentCard.classList.add('card');
        cardInfo.classList.add('card-info');
        nameHeader.classList.add('name')
        userName.classList.add('username');

        userImg.src = gitHubInfo.avatar_url;
        nameHeader.textContent = gitHubInfo.name;
        userName.textContent = gitHubInfo.login;
        location.textContent = gitHubInfo.location;
        myUrl.href = gitHubInfo.html_url;
        myUrl.textContent = gitHubInfo.html_url;
        followers.textContent = `Followers: ${gitHubInfo.followers}`;
        following.textContent = `Following: ${gitHubInfo.following}`;
        myBio.textContent = `Bio: ${gitHubInfo.bio}`;

  return parentCard;
}

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



axios.get('https://api.github.com/users/Tannerwill756/followers')
  .then(response =>{
    // console.log(response.data);
    console.log(response.data);
    const followersArray = myNewCard(response.data);
    const cards = document.querySelector('.cards');
    cards.append(followersArray);

  })
  .catch(error => {
    console.log(error)
  })

  // console.log(followersArray);

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/



