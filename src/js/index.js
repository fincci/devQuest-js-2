const questions = document.querySelectorAll('.quest')
const replys = document.querySelectorAll('.reply')
const currentActive = document.querySelector('.active');

questions.forEach(quest => {
    quest.addEventListener('click', () => {
        const replyBefore = document.querySelector('.active')
        const questN = quest.attributes.id.value
        const replyAfter = document.querySelector(`.${questN}`)
        if (replyBefore != null) {
            if (replyAfter.classList.contains('active')) {
                replyAfter.classList.remove('active')
            } else {
                replyBefore.classList.remove('active')
                replyAfter.classList.add('active')
            }
        } else {
            replyAfter.classList.add('active')
        }
        
        const arrowBefore = document.querySelector('.fill')
        const arrowAfter = document.querySelector(`.caret${questN}`)
        if (arrowBefore != null) {
            if (arrowAfter.classList.contains('fill')) {
                arrowAfter.classList.remove('fill')
            } else {
                arrowBefore.classList.remove('fill')
                arrowAfter.classList.add('fill')
            }
        } else {
            arrowAfter.classList.add('fill')
        }

    })
})