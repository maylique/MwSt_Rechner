

const calc = () => {
    const calcAufschlag = document.getElementById('Plus').checked
    const calcAbzug = document.getElementById('Minus').checked
    
    const normalSteuer = document.getElementById('normal').checked
    const wenigerSteuer = document.getElementById('weniger').checked
    
    const normalSteuerValue = document.getElementById('normalval').value
    const wenigerSteuerValue = document.getElementById('wenigerval').value
    
    const outputBetrag = document.getElementById('betrag')
    const outputEndpreis = document.getElementById('endpreis')
    const input = document.querySelector('#rechnerInput').value

    const rechnerPlus = input * String(normalSteuerValue)
    const rechnerMinus = input / String(normalSteuerValue)

    const rechnerPlusWeniger = input * String(wenigerSteuerValue)
    const rechnerMinusWeniger = input / String(wenigerSteuerValue)

    const Mwst = input * (String(normalSteuerValue)-1)
    const wenigerMwst = input * (String(wenigerSteuerValue)-1)

    if (calcAufschlag && normalSteuer) {
        outputBetrag.innerHTML = '€ ' + Mwst.toFixed(2)
        outputEndpreis.innerHTML = '€ ' + rechnerPlus.toFixed(2)
    }
    else if (calcAufschlag && wenigerSteuer) {
        outputBetrag.innerHTML = '€ ' + wenigerMwst.toFixed(2)
        outputEndpreis.innerHTML = '€ ' + rechnerPlusWeniger.toFixed(2)
    }

    else if (calcAbzug && normalSteuer) {
        outputBetrag.innerHTML = '€ ' + Mwst.toFixed(2)
        outputEndpreis.innerHTML = '€ ' + rechnerMinus.toFixed(2)
    }
    else if (calcAbzug && wenigerSteuer) {
        outputBetrag.innerHTML = '€ ' + wenigerMwst.toFixed(2)
        outputEndpreis.innerHTML = '€ ' + rechnerMinusWeniger.toFixed(2)
    }
}

const changer = () => {
    const change = document.getElementById('changeme')
    const outputEndpreis = document.getElementById('endpreis')
    const calcAufschlag = document.getElementById('Plus').checked
    const calcAbzug = document.getElementById('Minus').checked

    if(calcAbzug) {
        change.innerHTML = 'Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro<span>*</span>'
        change2.innerHTML = 'Nettobetrag'
    }
    else {
        change.innerHTML = 'Nettobetrag (Preis ohne Mehrwersteuer) in Euro<span>*</span>'
        change2.innerHTML = 'Bruttobetrag (Endpreis)'
    }
}
