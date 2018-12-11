app = new Vue ({
    el: '#myApp',
    data:{
        showPage: "index",
        posts: [],
        teams: [],
        games: [],
        players: [],


    },

    methods:{
        onScreen:function(id){
            this.showPage = id;
        },

        

    },
});

app.posts=data.news;
app.teams=data.teams;
app.games=data.games;
app.players=data.players;
