// rnb 버튼
const rnbMenuLi = document.querySelectorAll(".rnb-btn");
const rnbDepth2Wrap = document.querySelector('.rnb-depth2-wrap');
const rnbDepth2Box = document.querySelectorAll(".rnb-depth2-box");		
const cartDetailPopup = document.querySelector(".rnb-depth2-wrap");
const monitoringBox = document.querySelector(".monitoringBox");
const wideBtn = document.querySelector(".hole-time-wide-view-btn-1");
const splitter = document.querySelector(".splitter");

for (let i = 0; i < rnbMenuLi.length; i++) { 
	rnbMenuLi[i].addEventListener("click", () => {
		rnbMenuLi[i].classList.add("on");
		rnbDepth2Wrap.classList.add("open");
		if (rnbMenuLi[i].classList.contains("on")) {
			rnbDepth2Box[i].classList.add("open");
			splitter.style.display = "block";
		} else {
			rnbDepth2Box[i].classList.remove("open");
			splitter.style.display = "none";
		}		
	})
	const closeDepth2 = document.querySelectorAll(".rnb-depth-head .btn-close");
	closeDepth2[i].addEventListener("click", () => {
		rnbMenuLi[i].classList.remove("on");
		rnbDepth2Wrap.classList.remove("open");
		rnbDepth2Box[i].classList.remove("open");
		splitter.style.display = "none";
		// 여기
		monitoringBox.classList.remove("wideBox");
		cartDetailPopup.classList.remove("widePopup");
		wideBtn.innerText = "전체보기";
	})
}

// @멘션, @추천 버튼 클릭 시
const functionBtns = document.querySelectorAll(".btn-function");
const tagWrap = document.querySelector(".tag-wrap");
const btnTags = document.querySelectorAll(".btn-tag");
const selectList = document.querySelector(".select-list");

functionBtns.forEach(functionBtn => { 
    functionBtn.addEventListener('click', function handleClick(event) {    
		tagWrap.classList.toggle("show");
		this.classList.add("active");		
		if (this.classList.contains("active")) {
			this.classList.remove("active");
		} else {
			this.classList.add("active");
		}
	});
});

btnTags.forEach(btnTag => { 
    btnTag.addEventListener('click', function handleClick(event) {    
		btnTags.classList.add("on");
		selectList.classList.add("show");
	});
});


// 카트정보 전체보기
const memberTblTtl = document.querySelector(".member-tbl-ttl");

wideBtn.innerText = "전체보기";
wideBtn.addEventListener("click", () => {
	cartDetailPopup.classList.toggle("widePopup");
	memberTblTtl.classList.toggle("width-auto");
	monitoringBox.classList.toggle("wideBox");
	if (wideBtn.innerText === "전체보기") {
		wideBtn.innerText = "접기";
		monitoringBox.classList.add("wideBox");
	} else {
		wideBtn.innerText = "전체보기";
		monitoringBox.classList.remove("wideBox");
	}
})

// 대기카트 접기, 펼치기
const btnWaitingCart = document.querySelector(".btn-waiting-cart");
const btnWaitingCartP = document.querySelector(".btn-waiting-cart p");
const updownArrow = document.querySelector('.updown-arrow');
const waitingListWrap = document.querySelector(".waiting-list-wrap");

btnWaitingCartP.innerText = "대기카트 보기";
btnWaitingCart.addEventListener("click", () => {
    waitingListWrap.classList.toggle("open");
	updownArrow.classList.toggle("spin");	
	btnWaitingCart.classList.toggle("on");
	
	if (btnWaitingCartP.innerText === "대기카트 보기") {
		btnWaitingCartP.innerText = "대기카트 접기";	
	} else {
		btnWaitingCartP.innerText = "대기카트 보기";	
	}
})	


//핀
const pin = document.querySelector(".btn-pin");
pin.addEventListener("click", () => {
	pin.classList.toggle("on");
})


// 공지사항
const noticeWrap = document.querySelector(".notice-wrap");
const noticeBtn = document.querySelector(".notice-btn");
const noticeBox = document.querySelector(".sticky-notice-box");
const noticeBtnWrap = document.querySelector(".notice-btn-wrap");
const noticeArrow = document.querySelector(".notice-arrow");
const foldingBtn = document.querySelector(".folding-btn");
const notReopenBtn = document.querySelector(".notReopen-btn");

noticeArrow.addEventListener("click", () => {
	 noticeBtnWrap.classList.toggle("hide");
	 noticeArrow.classList.toggle("spin");
})

foldingBtn.addEventListener("click", () => {
	noticeBox.classList.add("fold");
})

noticeBtn.addEventListener("click", () => {
	noticeBox.classList.remove("fold");
})

notReopenBtn.addEventListener("click", () => {
	noticeWrap.classList.add("hide");
})