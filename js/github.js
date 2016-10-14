var apiKey = require('./../.env').apiKey;

function Search (userid, name, bio, photo, reponame, description) {
  this.userid = "";
  this.name = "";
  this.bio = "";
  this.photo = "";
  this.reponame = "";
  this. description = "";

}

Search.prototype.getUsers = function(displayUser, displayName, displayPhoto, displayBio) {
  var user = $('#user').val();
  $('#user').val("");
  $.get('https://api.github.com/users/'+ user +'?access_token=' + apiKey).then(function(response) {
    console.log(response);
    // var userid = response.login;
    // var name = response.name;
    // var photo = response.avatar_url;
    // var bio = response.bio;
      displayUser(response.login);
      console.log(response.login);
      displayName(response.name);
      displayPhoto(response.avatar_url);
      displayBio(response.bio);
}).fail(function(error){
     console.log(error.responseJSON.message);


   });
 };

//  Search.prototype.getRepos = function (repos, displayRepos) {
//
//    $.get('https://api.github.com/users/'+ user +'/repos?access_token=' + apiKey).then(function(repos) {
//      var reponame = (repos.name);
//    }).fail(function(error){
//      console.log(error.responseJSON.message);
//      getRepos(repos);
//
//      this.getRepoNames(name, desc);
//
//   });
//
//   Search.prototype.getRepos = function (repos) {
//     reponame = [];
//     repodsc = [];
//     for(repo of repos) {
//       var name = (repo.name);
//         reponame.push(name);
//       var desc = (repo.description)
//         repodesc.push(desc);
//
//         this.listRepos(reponame, repodesc);
//     }
//   };
//
//   Search.prototype.listRepos = function (reponame, respodesc) {
//
//     for (desc of descs) {
//       repodesc.push(desc);
//     }
//   };
//
// };

exports.searchModule = Search;
