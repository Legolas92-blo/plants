"use strict"
// Burger menu

const hamburger = document.querySelector(".hamburger");
const headerMenu = document.querySelector(".header__items");
const shadowMenu = document.querySelector(".shadow-open-menu");
const body = document.body;


hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	headerMenu.classList.toggle("active");
	shadowMenu.classList.toggle("active");
	body.classList.toggle("hidden");
})

document.querySelectorAll(".header__link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	headerMenu.classList.remove("active");
	shadowMenu.classList.remove("active");
	body.classList.remove("hidden");
}))

shadowMenu.addEventListener('click', () => {
	shadowMenu.classList.remove("active");
	hamburger.classList.toggle("active");
	headerMenu.classList.toggle("active");
	body.classList.remove("hidden");
})


// Button Service

const gardensServiceBtn = document.querySelector(".gardens");
const lawnServiceBtn = document.querySelector(".lawn");
const plantingServiceBtn = document.querySelector(".planting");

const cardGardens = document.querySelectorAll(".gardensCard");
const cardLawn = document.querySelectorAll(".lawnCard");
const cardPlanting = document.querySelectorAll(".plantingCard");

const parentServiceBtn = document.querySelector('.service__links');

const serviceCardsParent = document.querySelector('.service__cards');


function removeBlur() {
	[...serviceCardsParent.children].forEach(el => {
		el.classList.remove('blur__block')
	})
}


let arrCountActiveBtn = [];

// ----- event for gardens btn -------------------------
gardensServiceBtn.addEventListener('click', () => {  // gardens btn click
	if (gardensServiceBtn.classList.contains('activeBtnService')) {
		gardensServiceBtn.classList.remove('activeBtnService');
		lawnItemsDeleteBlur();
		plantingItemsDeleteBlur();

	} else if (!gardensServiceBtn.classList.contains('activeBtnService')) {
		gardensServiceBtn.classList.add('activeBtnService');
		gardensItemsDeleteBlur();
		lawnItemsBlur();
		plantingItemsBlur();
	}
})



// ----- lawn for gardens btn -------------------------

lawnServiceBtn.addEventListener('click', () => { // lawn btn click
	if (lawnServiceBtn.classList.contains('activeBtnService')) {
		lawnServiceBtn.classList.remove('activeBtnService');
		gardensItemsDeleteBlur();
		plantingItemsDeleteBlur();

	} else if (!lawnServiceBtn.classList.contains('activeBtnService')) {
		lawnServiceBtn.classList.add('activeBtnService');
		lawnItemsDeleteBlur();
		gardensItemsBlur();
		plantingItemsBlur();
	}
})

// ----- planting for gardens btn -------------------------

plantingServiceBtn.addEventListener('click', () => { // planting btn click
	if (plantingServiceBtn.classList.contains('activeBtnService')) {
		plantingServiceBtn.classList.remove('activeBtnService');
		gardensItemsDeleteBlur();
		lawnItemsDeleteBlur();

	} else if (!plantingServiceBtn.classList.contains('activeBtnService')) {
		plantingServiceBtn.classList.add('activeBtnService');
		plantingItemsDeleteBlur();
		gardensItemsBlur();
		lawnItemsBlur();
	}
})

// ---------- blur cards -----------

const gardensItemsBlur = () => {
	cardGardens.forEach((el) => {
		el.classList.add('blur__block');
	})
}

const lawnItemsBlur = () => {
	cardLawn.forEach((el) => {
		el.classList.add('blur__block');
	})
}

const plantingItemsBlur = () => {
	cardPlanting.forEach((el) => {
		el.classList.add('blur__block');
	})
}

// --------delete blur cards

const gardensItemsDeleteBlur = () => {
	cardGardens.forEach((el) => {
		el.classList.remove('blur__block');
	})
}

const lawnItemsDeleteBlur = () => {
	cardLawn.forEach((el) => {
		el.classList.remove('blur__block');
	})
}

const plantingItemsDeleteBlur = () => {
	cardPlanting.forEach((el) => {
		el.classList.remove('blur__block');
	})
}


document.addEventListener('click', (e) => {
	const withinBoundaries = e.composedPath().includes(parentServiceBtn);
	if (!withinBoundaries) {
		removeBlur();
	}

})




// !prices accordion

const parentPricesAccordion = document.querySelector('.prices__items');
const wrapAccordionItem = document.querySelectorAll('.accordion');
const accordionItem = document.querySelectorAll('.prices__item');
const contentAccordion = document.querySelectorAll('.accordion__content');


accordionItem.forEach(item => {
	item.addEventListener('click', (event) => {
		let parent = item.parentNode;
		let content = item.nextElementSibling;

		if (content.classList.contains('active-accordion-item')) {
			item.classList.remove('open__dropdown');

			contentAccordion.forEach(el => {
				el.classList.remove('active-accordion-item');
			})

			wrapAccordionItem.forEach(el => { //удаляет бэкграунд 
				el.classList.remove('dropdown__bgc');
			})




		} else if (!content.classList.contains('active-accordion-item')) {
			accordionItem.forEach(item => {
				item.classList.remove('open__dropdown');
			})
			item.classList.add('open__dropdown');
			contentAccordion.forEach(el => {
				el.classList.remove('active-accordion-item');
				wrapAccordionItem.forEach(el => { //удаляет бэкграунд 
					el.classList.remove('dropdown__bgc');
				})
				content.classList.add('active-accordion-item');
				parent.classList.add('dropdown__bgc'); // добавляет бэкграунд
			})


		}
	})
})


document.addEventListener('click', (e) => {
	const withinBoundaries = e.composedPath().includes(parentPricesAccordion);
	if (!withinBoundaries) {
		contentAccordion.forEach(el => {
			el.classList.remove('active-accordion-item');
			wrapAccordionItem.forEach(el => { //удаляет бэкграунд 
				el.classList.remove('dropdown__bgc');
			})
		})
		accordionItem.forEach(item => {
			item.classList.remove('open__dropdown'); // сбрасывает все стрелки
		})
	}

})


// !contacts
const selectContainer = document.querySelector('.contacts__select');
const selectHeader = document.querySelector('.contacts__select-header');
const selectItem = document.querySelectorAll('.contacts__select-item');
const addressesContainer = document.querySelector('.contacts__select-addresses');
const addressesContainerChildren = addressesContainer.children;
const contactsArrowIcon = document.querySelector(".contacts__select-arrow");
const iconArrowOpen = './img/icon/open_accordion_btnsvg.svg';
const iconArrowClosed = './img/icon/contact-block__arrow-list-city.svg';

function removeAddressesContainerChildrenActive() {
	[...addressesContainerChildren].forEach(el => {
		el.classList.remove('active-select-item-block');
	})
}

selectHeader.addEventListener('click', function () {
	removeAddressesContainerChildrenActive();
	if (!this.parentElement.classList.contains('active__select')) {
		this.parentElement.classList.add('active__select');
		contactsArrowIcon.src = iconArrowOpen;
	} else {
		this.parentElement.classList.remove('active__select');
		contactsArrowIcon.src = iconArrowClosed;
	}
})


selectItem.forEach(el => {
	el.addEventListener('click', function (ev) {
		const text = this.innerText;
		const select = this.closest('.contacts__select');

		const currentText = this.closest('.contacts__select').querySelector('.contacts__select-current');

		currentText.innerText = text;
		select.classList.remove('active__select');

		if (ev.target.textContent === 'Canandaigua, NY') {
			removeAddressesContainerChildrenActive();
			addressesContainerChildren[0].classList.add('active-select-item-block');
		} else if (ev.target.textContent === 'New York City') {
			removeAddressesContainerChildrenActive();
			addressesContainerChildren[1].classList.add('active-select-item-block');
		} else if (ev.target.textContent === 'Yonkers, NY') {
			removeAddressesContainerChildrenActive();
			addressesContainerChildren[2].classList.add('active-select-item-block');
		} else if (ev.target.textContent === 'Sherrill, NY') {
			removeAddressesContainerChildrenActive();
			addressesContainerChildren[3].classList.add('active-select-item-block');
		}

	})
})

document.addEventListener('click', (e) => {
	const withinBoundaries = e.composedPath().includes(selectContainer);
	if (!withinBoundaries) {
		selectContainer.classList.remove('active__select');
	}
})






