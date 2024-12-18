//tabs
document.addEventListener("DOMContentLoaded", (e) => {
	(function sideTabs() {
		let btnList = document.querySelector('.sidebar_list');
		let slidesList = document.querySelectorAll('.content_item');

		if(btnList && slidesList){
			let isFinded = false;
			let btns = btnList.querySelectorAll('.item.interactive');
			btns ? isFinded = true : false;
			
			if(isFinded){
				let currentPage = null;
				btns.forEach((el, id) => {
					let link = el.querySelector('.item_btn');

					if(link){
						link.addEventListener('click', (e) => {
							e.preventDefault();
							currentPage = id;
							if(!el.classList.contains('active')){
								el.classList.add('active');
								slidesList.forEach((elem, i) => {
									if(elem.classList.contains('active')){
										elem.classList.remove('active')
									}
									if(currentPage == i){
										elem.classList.add('active');
									}
								})
								btns.forEach((el, idk) => {
									if(id != idk){
										el.classList.remove('active');
									}
								});
							}
						})
					}
				})
			}
		}
	}());
	// (function moveLogoGreetings() {
	// 	let windowWidth = window.screen.width;
	// 	if(windowWidth <= 840){
	// 		let user = document.querySelector('.sidebar_user');
	// 		let greetings = document.querySelector('.content_head');
	// 		let userContainer = document.querySelector('.sidebar_mob_user');
	// 		let greetingsContainer = document.querySelector('.sidebar_mob_greetings');

	// 		if(user && userContainer && greetings && greetingsContainer){
	// 			userContainer.append(user);
	// 			greetingsContainer.append(greetings);

	// 			user.remove();
	// 			greetings.remove();
	// 		}
	// 	}

	// 	console.log(windowWidth);
	// }());
});

