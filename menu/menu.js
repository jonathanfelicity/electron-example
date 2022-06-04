const { Menu, Shell } = require('electron')


const template = [
    // {
    //     role: 'About'
    // }
]


const menu = Menu.buildFromTemplate(template)


module.exports = menu