const main = document.querySelector('main'),
    hero = document.querySelector('.hero'),
    contacts = document.querySelector('.contacts'),
    mobileMenuImg = document.querySelector('.mobileMenuImg'),
    mobileMenu = document.querySelector('.mobileMenu');

mobileMenu.addEventListener('click', () => {
    contacts.classList.toggle('active');
    mobileMenuImg.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})

document.querySelectorAll(".hero, main, footer").forEach(n => n.addEventListener(
    "click", () => {
        contacts.classList.remove("active");
        mobileMenuImg.classList.remove("active");
        mobileMenu.classList.remove('active');

    }
))


const anons = document.querySelector('.left__menu'),
    dropdown = document.querySelectorAll('.left__menu-item'),
    dropdownChild = document.querySelectorAll('.dropdownUser__item'),
    textsArea = document.querySelector('.left__texts'),
    time = document.querySelector('.time');

const formBtn = document.querySelector('.formBtn'),
    userWarning = document.querySelector('.userWarning'),
    userWarningBtn = document.querySelector('.userWarning__btn'),
    userWarningShadow = document.querySelector('.userWarning__boxShadow');

// const allView = document.querySelector('.allView'),
//     textAreaWrapper = document.querySelector('.freshRoom__item-left');


anons.addEventListener('click', () => {
    dropdown[1].classList.toggle('active');
})

dropdownChild[0].addEventListener('click', () => {
    time.textContent = `№1 13 - 19 января 2020`;
    textsArea.classList.toggle('active');
})
dropdownChild[1].addEventListener('click', () => {
    time.textContent = `№2 20 - 26 января 2020`;
    textsArea.classList.toggle('active');
})
dropdownChild[2].addEventListener('click', () => {
    time.textContent = `№3 27 января - 2 февраля 2020`;
    textsArea.classList.toggle('active');
})

formBtn.addEventListener('click', () => {
    userWarning.classList.add('active');
    userWarningShadow.classList.add('active');
    document.body.classList.add('lock');
})

userWarningBtn.addEventListener('click', () => {
    userWarning.classList.remove('active');
    userWarningShadow.classList.remove('active');
    document.body.classList.remove('lock');
})

const freshRoomForm = document.querySelector('.freshRoomForm');

freshRoomForm.addEventListener('submit', (e) => {
    e.preventDefault()
})

// allView.addEventListener('click', () => {
//     textAreaWrapper.classList.toggle('active')
//     textsArea.classList.toggle('actives')
// })

const detalies = document.querySelectorAll('.detalies'),
    dropdownClose = document.querySelectorAll('.dropdown__close'),
    dropdownOpen = document.querySelectorAll('.dropdown__open'),
    dropdownImg = document.querySelectorAll('.dropdown__img'),
    dropdownText = document.querySelectorAll('.card__dropdown-item');


for (let i = 0; i < detalies.length; i++) {

    detalies[i].addEventListener('click', () => {
        dropdownClose[i].classList.toggle('active');
        dropdownOpen[i].classList.toggle('active');
        dropdownImg[i].classList.toggle('active');
        dropdownText[i].classList.toggle('active');
    })
    dropdownText[i].addEventListener('click', () => {
        dropdownClose[i].classList.remove('active');
        dropdownOpen[i].classList.remove('active');
        dropdownImg[i].classList.remove('active');
        dropdownText[i].classList.toggle('active');
    })

}

const moreViewsGrid = document.querySelector('.moreViewsGrid'),
    moreViewsGridClose = document.querySelector('.moreViewsGrid__close'),
    moreViewsGridOpen = document.querySelector('.moreViewsGrid__open'),
    moreViewsGridImg = document.querySelectorAll('.moreViewsGridImg'),
    weAreReadGrid = document.querySelector('.weAreRead__cards'),
    weAreReadGridItem = document.querySelectorAll('.weAreRead__cards-card');



moreViewsGrid.addEventListener('click', () => {
    weAreReadGrid.classList.toggle('active');
    moreViewsGridClose.classList.toggle('active');
    moreViewsGridOpen.classList.toggle('active');

    for (let i3 = 0; i3 < moreViewsGridImg.length; i3++) {
        moreViewsGridImg[i3].classList.toggle('active');
    }

    for (let i2 = 0; i2 < weAreReadGridItem.length; i2++) {
        weAreReadGridItem[i2].classList.toggle('active');
    }

})