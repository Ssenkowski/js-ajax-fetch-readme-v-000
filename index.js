const app = "I don't do much.";
const token = 'c3ea9a2ac546f955f29258e0eed3daec7118a951'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
