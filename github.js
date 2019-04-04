class GitHubAPI{
    constructor(){
        this.clientID= '35871f12cd95082cb975';
        this.clientSecret = `92f5c801172de55b12d5e9dfbbc842f96057d6ee`;
        this.repos_count =5;
        this.repos_sort = `create: asc`;
    }
    async getUser(user){
        let url = `https://api.github.com/users/${user}?client_id=${this.clientID}&${this.clientSecret}`;
        let repoUrl= `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientID}&${this.clientSecret}`; 
        let fetch =await window.fetch(url);
        const repoXHR = await window.fetch(repoUrl);
        let profile = await fetch.json();
        let repo =  await repoXHR.json();
              return {
                  profile,
                  repo
              };
    }
}