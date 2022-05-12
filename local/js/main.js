const uiModeToggle = document.getElementById('ui-mode-toggle');
const modeName = document.querySelector('.mode-name');
const modeNameAlt = document.querySelector('.mode-name-alt');
const modeSvg = document.querySelector('.mode-svg');
const modeSvgAlt = document.querySelector('.mode-svg-alt');
const modeIcon = document.querySelector('.mode-icon');
const modeIconAlt = document.querySelector('.mode-icon-alt');
const body = document.getElementsByTagName('body')[0];
const appTitle = document.querySelector('.app-title');
const searchContainer = document.querySelector('.search-container');
const userProfileCard = document.querySelector('.user-profile-card');
const userName = document.querySelector('.user-name');
const joinDate = document.querySelector('.join-date');
const userDescription = document.querySelector('.user-description');
const statsContainer = document.querySelector('.stats-container');
const statsHeadingNodeList = document.querySelectorAll('.stats-heading');
const statsDataNodeList = document.querySelectorAll('.stats-data');
const aboutDataNodeList = document.querySelectorAll('.about-data');
const blogLink = document.querySelector('.blog-link');
const aboutIconNodeList = document.querySelectorAll('.about-icon');
const searchInput = document.querySelector('.search-input');

uiModeToggle.addEventListener('click', function(e) {
	e.preventDefault();
	
	modeName.classList.toggle('alt-mode');
	modeNameAlt.classList.toggle('alt-mode');
	modeSvg.classList.toggle('alt-mode');
	modeSvgAlt.classList.toggle('alt-mode');
	modeIcon.classList.toggle('alt-mode');
	modeIconAlt.classList.toggle('alt-mode');
	body.classList.toggle('alt-mode');
	appTitle.classList.toggle('alt-mode');
	searchContainer.classList.toggle('alt-mode');
	userProfileCard.classList.toggle('alt-mode');
	userName.classList.toggle('alt-mode');
	joinDate.classList.toggle('alt-mode');
	userDescription.classList.toggle('alt-mode');
	statsContainer.classList.toggle('alt-mode'); 
	statsHeadingNodeList.forEach(toggleAltMode);
	statsDataNodeList.forEach(toggleAltMode);
	aboutDataNodeList.forEach(toggleAltMode);
	//blogLink.classList.toggle('alt-mode');
	aboutIconNodeList.forEach(toggleAltMode);
	searchInput.classList.toggle('alt-mode');

	console.log('Toggle clicked...');
});

function toggleAltMode(val, i, arr) {
	val.classList.toggle('alt-mode');
}

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
