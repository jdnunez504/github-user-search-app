const body = document.getElementsByTagName('body')[0];
const uiModeToggle = document.getElementById('ui-mode-toggle');
const modeName = document.querySelector('.mode-name');
const modeNameAlt = document.querySelector('.mode-name-alt');
const modeSvg = document.querySelector('.mode-svg');
const modeSvgAlt = document.querySelector('.mode-svg-alt');
const modeIcon = document.querySelector('.mode-icon');
const modeIconAlt = document.querySelector('.mode-icon-alt');
const appTitle = document.querySelector('.app-title');
const searchContainer = document.querySelector('.search-container');
const searchButton = document.getElementById('search-button');
const userProfileCard = document.querySelector('.user-profile-card');
const avatarDesktop = document.getElementById('avatar--desktop');
const avatar = document.getElementById('avatar');
const userName = document.getElementById('user-name');
const userLogin = document.getElementById('user-login');
const joinDate = document.querySelector('.join-date');
const userBio = document.querySelector('.user-bio');
const statsContainer = document.querySelector('.stats-container');
const statsHeadingNodeList = document.querySelectorAll('.stats-heading');
const statsDataNodeList = document.querySelectorAll('.stats-data');
const publicRepos = document.getElementById('public-repos');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
const aboutDataNodeList = document.querySelectorAll('.about-data');
const _location = document.getElementById('location');
const _locationIcon = document.getElementById('location-icon');
const blog = document.getElementById('blog');
const blogIcon = document.getElementById('blog-icon');
const twitterUsername = document.getElementById('twitter-username');
const twitterIcon = document.getElementById('twitter-icon');
const company = document.getElementById('company');
const companyIcon = document.getElementById('company-icon');
const aboutIconNodeList = document.querySelectorAll('.about-icon');
const searchInput = document.querySelector('.search-input');
const errorMsg = document.querySelector('.error-msg');

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
	userBio.classList.toggle('alt-mode');
	statsContainer.classList.toggle('alt-mode'); 
	statsHeadingNodeList.forEach(toggleAltMode);
	statsDataNodeList.forEach(toggleAltMode);
	aboutDataNodeList.forEach(toggleAltMode);
	aboutIconNodeList.forEach(toggleAltMode);
	searchInput.classList.toggle('alt-mode');

	console.log('Toggle clicked...');
});

searchButton.addEventListener('click', function(e) {
	e.preventDefault();
	const searchedUser = searchInput.value;
	requestUserData(searchedUser);
});

function toggleAltMode(val, i, arr) {
	val.classList.toggle('alt-mode');
}

function setUnavailable(val, i, arr) {
	val.classList.add('unavailable');
}

function clearInput() {
	searchInput.value = '';
}

function resetUnavailable() {
	aboutDataNodeList.forEach(function(val, i, arr) {
		if (val.classList.contains('unavailable')) {
			val.classList.remove('unavailable');
		};
	});
	aboutIconNodeList.forEach(function(val, i, arr) {
		if (val.classList.contains('unavailable')) {
			val.classList.remove('unavailable');
		};
	});
}

function requestUserData(username) {
	resetUnavailable();
	const xhr = new XMLHttpRequest();
	const url = `https://api.github.com/users/${username}`;
	xhr.open('GET', url, true);
	xhr.onload = function() {
		const data = JSON.parse(this.response);
		console.log(data);
		avatar.setAttribute("src", `${data.avatar_url}`);
		avatarDesktop.setAttribute("src", `${data.avatar_url}`);
		userName.textContent = `${data.name}`;
		userLogin.textContent = `@${data.login}`;
		console.log(data.created_at);
		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
						'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		const createdDate = new Date(data.created_at);
		const createdDay = createdDate.getDay();
		const createdMonth = createdDate.getMonth();
		const createdYear = createdDate.getFullYear();
		const joinedDay = (createdDay + 1).toString();
		const joinedMonth = months[createdMonth + 1];
		const joinedYear = createdYear.toString();
		joinDate.textContent = `Joined ${joinedDay} ${joinedMonth} ${joinedYear}`;
		userBio.textContent = `${data.bio}`;
		publicRepos.textContent = `${data.public_repos}`;
		followers.textContent = `${data.followers}`;
		following.textContent = `${data.following}`;

		if(data.location == null) {
			setUnavailable(_location);
			setUnavailable(_locationIcon);
			_location.textContent = 'Not Available';
		}
		else
			_location.textContent = `${data.location}`;

		if(data.blog == null) {
			setUnavailable(blog);
			setUnavailable(blogIcon);
			blog.textContent = 'Not Available';
		}
		else
			blog.textContent = `${data.blog}`;

		if(data.twitter_username == null) {
			setUnavailable(twitterUsername);
			setUnavailable(twitterIcon);
			twitterUsername.textContent = 'Not Available'; 
		}
		else
			twitterUsername.textContent = `#${data.twitter_username}`;
			
		if(data.company == null) {
			setUnavailable(company);
			setUnavailable(companyIcon);
			company.textContent = 'Not Available';
		}
		else
			company.textContent = `@${data.company}`;
	}
	xhr.send();
	clearInput();
}

//requestUserData('timmywheels');
