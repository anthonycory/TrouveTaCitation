const Data = [
    {
        citation: "Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur.",
    },
    {
        citation: "Celui qui apporte bonheur et joie à autrui, malgré la souffrance immergée au fond de lui, est l'être le plus merveilleux, qui puisse exister en ce monde...",
    },
    {
        citation: "L'amour a une enfance qui s'appelle souvent passion, une adolescence, un âge mûr, un vieillissement. L'amour a une généalogie, des névroses, une psychologie, des peurs venues de son enfance.",
    },
    {
        citation: "Ne perds pas ton temps à gagner ta vie. Gagne ton temps, sauve ta vie."
    },
    {
        citation: "Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur."
    }, 
    {
        citation: "Dans la vie on ne fait pas ce que l'on veut mais on est responsable de ce que l'on est."
    },
    {
        citation: "J'entends au-dessus de moi dans les cieux, Les anges qui chantent entre eux. Ils ne peuvent trouver de mot d'amour plus grand Que celui-ci : Maman."
    },
    {
        citation: "On ne souffre jamais que du mal que nous font ceux qu'on aime. Le mal qui vient d'un ennemi ne compte pas."
    },
    {
        citation: "Lorsque l'on se cogne la tête contre un pot et que cela sonne creux, ça n'est pas forcément le pot qui est vide."
    }
]


var containerCitation = document.querySelector('#container-citation')

// CHANGE CITATION
document.getElementById('changecitation').addEventListener('click',  citation)

const a = false

function citation () {
    const random = Math.floor(Math.random() * Data.length)
    containerCitation.innerHTML = '<li>' + Data[random].citation + '</li>'
}

citation()





