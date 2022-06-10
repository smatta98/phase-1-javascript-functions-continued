function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`

}

function mondayWork(monActivty = 'go to the office' ) {
    return `This Monday, I will ${monActivty}.`
}

function wrapAdjective(flair = '*'){
    return function(param = 'special'){
        return `You are ${flair}${param}${flair}!`
    }
}
