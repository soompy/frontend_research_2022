// accordion-type1
const accHead1 = document.querySelectorAll(".accordion-type1 .accordion-head");

//디폴트
accHead1[0].nextElementSibling.style.maxHeight = accHead1[0].nextElementSibling.scrollHeight + 'px';


for (var i = 0; i < accHead1.length ; i++) {
    accHead1[i].addEventListener('click', openAccordion1); 
}

function openAccordion1() {
    for(var i = 0; i < accHead1.length; i++) {
		var parent = accHead1[i].parentElement;
		var article = accHead1[i].nextElementSibling;

		if (this === accHead1[i] && !parent.classList.contains('active')) {
			parent.classList.add('active');
			article.style.maxHeight = article.scrollHeight + 'px';
		}
		else {
			parent.classList.remove('active');
			article.style.maxHeight = '0px';
		}
	}
}



// accordion-type2
const accHead2 = document.querySelectorAll(".accordion-type2 .accordion-head");

//디폴트
accHead2[0].parentElement.classList.add('active');
accHead2[0].nextElementSibling.style.maxHeight = accHead2[0].nextElementSibling.scrollHeight + 'px';


for (var i = 0; i < accHead2.length ; i++) {
    accHead2[i].addEventListener('click', openAccordion2); 
}

function openAccordion2() {
    for(var i = 0; i < accHead2.length; i++) {
		var parent = accHead2[i].parentElement;
		var article = accHead2[i].nextElementSibling;

		if (this === accHead2[i] && !parent.classList.contains('active')) {
			parent.classList.add('active');
			article.style.maxHeight = article.scrollHeight + 'px';
		}
		else {
			parent.classList.remove('active');
			article.style.maxHeight = '0px';
		}
	}
}