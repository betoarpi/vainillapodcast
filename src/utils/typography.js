import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.4,
  custom: [
    {
      name: 'silkamono'
    }
  ],
  headerFontFamily: ['silkamono'],
  bodyFontFamily: ['silkamono'],
  headerWeight: 'normal',
  bodyWeight: 'normal'
})

export default typography