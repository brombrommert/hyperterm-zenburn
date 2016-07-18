const backgroundColor = '#3F3F3F'
const borderColor = '#2f2f2f'
const foregroundColor = '#DCDCCC'
const cursorColor = '#657B83'

const colors = [
  '#020202',
  '#BC4C4C',
  '#6C9C6C',
  '#D8D856',
  '#4B4BBD',
  '#BD6CA4',
  '#4BB7BD',
  '#BFBFBF',
  '#414141',
  '#DC6C6C',
  '#8CBC8C',
  '#E6E600',
  '#6B6BDB',
  '#BE89AE',
  '#91D8DB',
  '#E6E6E6'
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
