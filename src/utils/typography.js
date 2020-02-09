import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Rubik',
      styles: [
        '300',
        '300i',
        '400',
        '400i',
        '500',
        '500i',
        '700',
        '700i',
        '900',
        '900i'
      ]
    }
  ],
  headerFontFamily: ['Rubik', 'Open Sans', 'Arial'],
  bodyFontFamily: ['Rubik', 'Open Sans', 'Arial'],
  headerWeight: '900',
  bodyWeight: '400'
})

export default typography