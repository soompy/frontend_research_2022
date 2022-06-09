(function (win, $) {
	"use strict";

	const chkBtn = document.querySelectorAll(".input-chk-box");
	const chkPicture = document.querySelectorAll(".reservation-list_picture_chk");

	for(let i = 0; i <= chkBtn.length; i++) {
		chkBtn[i].addEventListener("click", () => {
			chkBtn[i].classList.toggle("input-chk-active");
			chkPicture[i].classList.toggle("on");
		})
	}	
})(window, window.jQuery);