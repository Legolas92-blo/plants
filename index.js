"use strict"
// Burger menu

const hamburger = document.querySelector(".hamburger");
const headerMenu = document.querySelector(".header__items");
const shadowMenu = document.querySelector(".shadow-open-menu");
const header = document.querySelector(".header");


hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	headerMenu.classList.toggle("active");
	shadowMenu.classList.toggle("active");
})

document.querySelectorAll(".header__link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	headerMenu.classList.remove("active");
	shadowMenu.classList.remove("active");
}))

shadowMenu.addEventListener('click', (event) => {
	const target = event.target;
	console.log(target);
	shadowMenu.classList.remove("active");
	hamburger.classList.toggle("active");
	headerMenu.classList.toggle("active");

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

console.log('hi')
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
console.log(parentServiceBtn);

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
			console.log(item)
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
const selectHeader = document.querySelectorAll('.contacts__select-header');
const selectItem = document.querySelectorAll('.contacts__select-item');
const arrSelectItem = [...selectItem];
const adressesContainer = document.querySelector('.contacts__select-adresses');
const adressesContainerChildren = adressesContainer.children;
console.log(typeof adressesContainerChildren)

function removeAdressesContainerChildrenActive() {
	[...adressesContainerChildren].forEach(el => {
		el.classList.remove('active-select-item-block');
	})
}

selectHeader.forEach(el => {
	el.addEventListener('click', function () {
		removeAdressesContainerChildrenActive();
		this.parentElement.classList.toggle('active__select');
	})
})



selectItem.forEach(el => {
	el.addEventListener('click', function (ev) {
		const text = this.innerText;
		const select = this.closest('.contacts__select');

		const currentText = this.closest('.contacts__select').querySelector('.contacts__select-current');

		currentText.innerText = text;
		select.classList.remove('active__select');
		//----------------------- new code --------------

		// adressesContainer.classList.add('active-select-item-block');
		if (ev.target.textContent === 'Canandaigua, NY') {
			removeAdressesContainerChildrenActive();
			adressesContainerChildren[0].classList.add('active-select-item-block');
		} else if (ev.target.textContent === 'New York City') {
			removeAdressesContainerChildrenActive();
			adressesContainerChildren[1].classList.add('active-select-item-block');
		} else if (ev.target.textContent === 'Yonkers, NY') {
			removeAdressesContainerChildrenActive();
			adressesContainerChildren[2].classList.add('active-select-item-block');
		} else if (ev.target.textContent === 'Sherrill, NY') {
			removeAdressesContainerChildrenActive();
			adressesContainerChildren[3].classList.add('active-select-item-block');
		}

	})
})

document.addEventListener('click', (e) => {
	const withinBoundaries = e.composedPath().includes(selectContainer);
	if (!withinBoundaries) {
		selectContainer.classList.remove('active__select');
	}
})





