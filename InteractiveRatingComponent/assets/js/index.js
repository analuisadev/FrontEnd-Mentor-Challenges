import {
    rationResult,
    btn,
    thankYou,
    ratings,
    selectFeedbackNumberContent
} from './elements.js'

for(let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener('click', () => {
        let ratingSelected = ratings[i].innerHTML;

        for(let i = 0; i < ratings.length; i++) {
            ratings[i].classList.contains('selected')
            ratings[i].classList.remove('selected')
        }
        ratings[i].classList.add('selected')

        btn.addEventListener('click', () => {
            selectFeedbackNumberContent.style.display = 'none'
            thankYou.style.display = 'grid'
            rationResult.innerHTML = ratingSelected
        })
    })
}