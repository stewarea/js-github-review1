var apiKey = require('./../.env').apiKey;

function Search (userid, name, bio, photo, rname, rdesc) {
  this.userid = "";
  this.name = "";
  this.bio = "";
  this.photo = "";
  this.rname = "";
  this.rdesc = "";

}

Search.prototype.getUsers = function(displayUser, displayName, displayPhoto, displayBio) {
  var user = $('#user').val();
  $('#user').val("");
  $.get('https://api.github.com/users/'+ user +'?access_token=' + apiKey).then(function(response) {

      displayUser(response.login);
      displayName(response.name);
      displayPhoto(response.avatar_url);
      displayBio(response.bio);
}).fail(function(error){
     console.log(error.responseJSON.message);


   });
 };

 Search.prototype.getReposSearch = function (displayRepos, displayRepoDesc) {
   that = this;

   var repouser = $('#repouser').val();
    $('#repouser').val("");
   $.get('https://api.github.com/users/'+ repouser +'/repos?access_token=' + apiKey).then(function(repos) {

      that.getRepos(repos);

    //  displayRepos(repos.name);
    //  displayRepoDesc(repos.description);

   });
};
  Search.prototype.getRepos = function (repos, displayRepos, displayRepoDesc) {
    var namearray = [];
    var descarray = [];

    for (repo of repos) {

      var b = repo.description;
      descarray.push(b);

      var a = (repo.name);
      namearray.push(a);

    }

    this.listRepos(namearray, descarray);

  };

Search.prototype.listRepos = function (namearray, descarray, displayRepos, displayRepoDesc) {
    var reponame = " ";
    var repodesc = " ";
    for (var i = 0; i < namearray.length; i++) {
      if (namearray[i] != namearray) {
        reponame += "<li>" + namearray[i] + "</li>";
          displayRepos(reponame);
      }
    }
    for (var j = 0; j < descarray.length; j++) {
      if (descarray[j] != descarray) {
        repodesc += "<li>" + repodesc[j] + "</li>";
        displayRepoDesc(repodesc);
      }
    }
    console.log(reponame);
    console.log(repodesc);
  };


exports.searchModule = Search;
