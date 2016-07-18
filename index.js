const backgroundColor = '#3F3F3F'
const borderColor = '#2f2f2f'
const foregroundColor = '#DCDCCC'
const cursorColor = '#657B83'

const colors = [
  '#020202', // Black
  '#BC4C4C', // Red
  '#6C9C6C', // Green
  '#D8D856', // Yellow
  '#4B4BBD', // Blue
  '#BD6CA4', // Magenta
  '#4BB7BD', // Cyan
  '#BFBFBF', // White
  '#616161', // Bright Black
  '#DC6C6C', // Bright Red
  '#8CBC8C', // Bright Green
  '#E6E600', // Bright Yellow
  '#6B6BDB', // Bright Blue
  '#BE89AE', // Bright Magenta
  '#91D8DB', // Bright Cyan
  '#E6E6E6'  // Bright White
]

exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .tab_active:before {
        border-bottom-color: ${backgroundColor};
      }
    `
  })

}
