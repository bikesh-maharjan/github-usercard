import axios from "axios";

/*
    "avatar_url": "https://avatars3.githubusercontent.com/u/55510668?v=4",
    "bio": null,
    "blog": "",
    "company": null,
    "created_at": "2019-09-18T19:18:40Z",
    "email": null,
    "events_url": "https://api.github.com/users/bikesh-maharjan/events{/privacy}",
    "followers": 3,
    "followers_url": "https://api.github.com/users/bikesh-maharjan/followers",
    "following": 4,
    "following_url": "https://api.github.com/users/bikesh-maharjan/following{/other_user}",
    "gists_url": "https://api.github.com/users/bikesh-maharjan/gists{/gist_id}",
    "gravatar_id": "",
    "hireable": null,
    "html_url": "https://github.com/bikesh-maharjan",
    "id": 55510668,
    "location": null,
    "login": "bikesh-maharjan",
    "name": "Bikesh Maharjan",
    "node_id": "MDQ6VXNlcjU1NTEwNjY4",
    "organizations_url": "https://api.github.com/users/bikesh-maharjan/orgs",
    "public_gists": 0,
    "public_repos": 20,
    "received_events_url": "https://api.github.com/users/bikesh-maharjan/received_events",
    "repos_url": "https://api.github.com/users/bikesh-maharjan/repos",
    "site_admin": false,
    "starred_url": "https://api.github.com/users/bikesh-maharjan/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/bikesh-maharjan/subscriptions",
    "twitter_username": null,
    "type": "User",
    "updated_at": "2020-07-09T19:20:25Z",
    "url": "https://api.github.com/users/bikesh-maharjan"

*/

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/bikesh-maharjan
*/
console.log(axios);

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
const users = []

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
