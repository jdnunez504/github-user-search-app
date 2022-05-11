const uiModeToggle = document.getElementById('ui-mode-toggle');
uiModeToggle.addEventListener('click', function(e) {
	e.preventDefault();
	console.log('Toggle clicked...');
});

function requestUserData(username) {
	const xhr = new XMLHttpRequest();
	const url = `https://api.github.com/users/${username}`;
	xhr.open('GET', url, true);
	xhr.onload = function() {
		const data = JSON.parse(this.response);
		console.log(data);
		console.log(data.login);
		console.log(data.avatar_url);
		console.log(data.html_url);
		console.log(data.name);
		console.log(data.blog);
		console.log(data.location);
		console.log(data.company);
		console.log(data.bio);
		console.log(data.twitter_username);
		console.log(data.public_repos);
		console.log(data.followers);
		console.log(data.following);
		console.log(data.created_at);
	}
	xhr.send();
}

requestUserData('timmywheels');
