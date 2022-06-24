const diametrotierra = 12742 // 12,742 km
const diametroluna = 3474 // 3,474 km
const distanciatierraluna = 384400 // 384,400 km
const lunaporc = (diametroluna * 100) / diametrotierra

const tierraescala = 50
const lunaescala = (lunaporc * tierraescala) / 100
const distanciaescala = (distanciatierraluna / diametrotierra) * tierraescala

const troposfera = (20 / diametrotierra) * tierraescala
const estratosfera = (50 / diametrotierra) * tierraescala
const mesosfera = (80 / diametrotierra) * tierraescala 
const termosfera = (800 / diametrotierra) * tierraescala 
const exosfera = (10000 / diametrotierra) * tierraescala

const tierra = document.getElementById('tierra')
const luna = document.getElementById('luna')

//tierra
tierra.style.width = tierraescala + 'px'
tierra.style.height = tierraescala + 'px'

//atmosfera
tierra.style.marginRight = distanciaescala + 'px'
tierra.style.boxShadow = `
0 0 0px ${troposfera}px #FFF,
0 0 0px ${estratosfera}px #FFF2,
0 0 1px ${mesosfera}px #FFF2,
0 0 5px ${termosfera}px #FFF1,
0 0 5px ${exosfera}px #FFF1
`

//luna
luna.style.width = lunaescala + 'px'
luna.style.height = lunaescala + 'px'			