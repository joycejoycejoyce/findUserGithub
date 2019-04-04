class UI {
    constructor(){
        this.profile = document.getElementById("profile");
    }
    showProfile(user, repo){
        console.log(repo);
        let repoHTML = ``;
        repo.forEach((repo)=>{
            repoHTML +=`
                <div class="row"> 
                    <div class="col-md-6">
                        <a href=${repo.html_url} target="_blank">
                        ${repo.name}
                        </a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">
                        ${repo.stargazers_count}
                        </span>
                        <span class="badge badge-secondary">
                        ${repo.watchers_count}
                        </span>
                        <span class="badge badge-success">
                        ${repo.forks_count}
                        </span>
                    </div>
                </div>
            `;
        });
        this.profile.innerHTML = `
          <div class="col-md-10 card border-primary mb-3" style="max-width: 50rem; margin: auto">
            <div class="card-body">
            <div class="row">
                <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}"/>
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">
                    View Profile
                </a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">
                        Public Repos: ${user.public_repos}
                    </span>
                    <span class="badge badge-secondary">
                        Public Gists: ${user.public_gists}
                    </span>
                    <span class="badge badge-success">
                        Followers: ${user.followers}
                    </span>
                    <span class="badge badge-info">
                        Followers: ${user.following}
                    </span>
                    <br/><br/>
                    <ul class="list-group>
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since ${user.created_at}</li>
                    </ul>
                </div>
            </div>
            </div>
          </div>

            <div class="col-md-10 card border-primary mb-3" style="max-width: 50rem; margin: auto" >
                <div class="card-header"> Latest Repos </div>
                <div class="card-body"> 
                    ${repoHTML}
   
                </div>
            </div>
        `;


    }
    clearProfile(){
        this.profile.innerHTML= "";
    }
    showAlert(){
        if (! document.querySelector(".alert")){
            const div = document.createElement('div');
            div.className = "alert alert-dismissible alert-warning";
            div.appendChild(document.createTextNode('The User does not exist'));
            const container= document.querySelector('.col-md-10.card');
            const header = document.querySelector('.card-header');
            container.insertBefore(div,header);
            window.setTimeout(
             ()=>{div.remove()}
            ,3000)
        }
    }
}