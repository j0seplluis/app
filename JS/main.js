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
