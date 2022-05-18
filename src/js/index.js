const arrows = document.querySelectorAll('.caret')
const replys = document.querySelectorAll('.reply')
const currentActive = document.querySelector('.active');

arrows.forEach(caret => {
    caret.addEventListener('click', () => {
        const replyBefore = document.querySelector('.active')
        const replyN = caret.attributes.id.value
        const replyAfter = document.querySelector('.' + replyN)
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
        const arrowAfter = caret
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