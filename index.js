const git = new GitHubAPI;
const ui = new UI;

// Search Input 
const Input = document.getElementById('input');
Input.addEventListener('keyup', searchGit);

function searchGit(){
    var searchValue = Input.value.trim();
    if(!searchValue){
        ui.clearProfile();
    }
    else{
        git.getUser(searchValue)
        .then(profile=> {
            if (profile.profile.messsage ){
                ui.showAlert();    
            }
            else{
                ui.showProfile(profile.profile, profile.repo);
            }
        });
    }
        

   
}