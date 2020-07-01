
//function that accepts username as an argument and returns list of repos on github for that username
const listRepos = async username => {
    const repos = await fetch(
        `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
    )
    .then(res => res.json())
    .catch(error => console.error(error));

    const markup = repos
    .map(
        repo => `
        <li>
            <a href="${repo.tml_url}">${repo.name}</a>
            (⭐️${repo.stargazers_count})
        </li>
        `
    )
    .join('');

    const content = document.getElementById('content');

    content.innerHTML = `<ul>${markup}</ul>`;
}

listRepos('helloasuka');