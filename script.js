fetch("index.json")
    .then((response) => response.json())
    .then((data) => build(data));

function build(data) {
    document.getElementById("title").innerText = data.title;
    document.getElementById("icon").href = data.icon;
    document.getElementById("header").innerText = data.header;
    document.getElementById("fa").href = "https://use.fontawesome.com/releases/" + data.fa_ver + "/css/all.css";
    document.getElementById("pfp").src = data.pfp;
    data.links.forEach(link);
}

function link(data) {
    document.getElementById("main").innerHTML += `
    <a href="${data.href}" target="_blank">
      <button><i class="${data.fa_icon}"></i></button>
    </a>
    <br><br>
`;
}
