let app = new Vue ({
    el: '#myApp',
    data:{
        showPage: "index",
        posts: data.news,
        teams: data.teams,
        games: data.games,
        teamSelected: null,
    },

    methods:{
        onScreen:function(id, name){
            this.showPage = id;
            this.teamSelected = name;
        },
    },
    computed:{
        a_team:function(){
            
            return this.teams.find(teams => teams.name == this.teamSelected ) 
        }
    }

});


document.getElementById("login_1").addEventListener("click", login);
document.getElementById("create-post").addEventListener("click", writeNewPost);


getPosts();

function login() {

    // https://firebase.google.com/docs/auth/web/google-signin

    // Provider
var provider = new firebase.auth.GoogleAuthProvider();

    // How to Log In
    firebase.auth().signInWithPopup(provider).then(function(){
        app.onScreen("chat");
    }).then(function(){
        getPosts();
    });
   
    // console.log("login");

}


function writeNewPost() {

    // https://firebase.google.com/docs/database/web/read-and-write
var textToSend = document.getElementById("textInput").value;

    // Values
    var message = {
      message: textToSend,
      name: firebase.auth().currentUser.displayName
    }

firebase.database().ref('nyslapp-d6664').push(message)

console.log(message);

    // A post entry.

    // Get a key for a new Post.

    //Write data

    console.log("write");

}


function getPosts() {

    firebase.database().ref('nyslapp-d6664').on('value', function (data) {
        var posts = document.getElementById("posts");
        posts.innerHTML = "";

        var messages = data.val();

        for (var key in messages) {
            var text = document.createElement("div");
            var element = messages[key];

            text.append(element.name + " says: ") ;
            text.append(element.message);
            posts.append(text);
            document.getElementById('textInput').value = "";
        }
    })

    console.log("getting posts");

}