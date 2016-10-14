function Search (userid, name, bio, photo, reponame, description) {
  this.userid = userid;
  this.name = name;
  this.bio = bio;
  this.photo = photo;
  this.reponame = reponame;
  this. description = description;

}

Search.prototype.getUsers = function(displayUser, displayName, displayPhoto, displayBio) {
  $.get('https://api.github.com/users/'+ user +'?access_token=' + apiKey).then(function(response) {

    // var userid = response.login;
    // var name = response.name;
    // var photo = response.avatar_url;
    // var bio = response.bio;

    console.log(response);
   }).fail(function(error){
     console.log(error.responseJSON.message);
     displayUser(response.login);
     displayName(response.name);
     displayPhoto(response.avatar_url);
     displayBio(response.bio);

   });
 };

 Search.prototype.getRepos = function (repos, displayRepos) {
   reponame = [];
   repodesc = [];
   $.get('https://api.github.com/users/'+ user +'/repos?access_token=' + apiKey).then(function(repos) {
     var reponame = (repos.name);
     console.log(reponame);

     console.log(repos);
   }).fail(function(error){
     console.log(error.responseJSON.message);
     displayRepoName(repos.name);
     displayRepoDesc(repos.description);

     this.getRepoNames(name, desc);

  });

  Search.prototype.getRepoNames = function (name, desc) {
    name = [];
    desc = [];

  };

};

exports.searchModule = Search;
