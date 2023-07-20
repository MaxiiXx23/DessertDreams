export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '600px',
  tabletM: '660px',
  tabletL: '768px',
  laptopS: '860px',
  laptopM: '1024px',
  laptopL: '1440px',
  desktopS: '1360px', // in a next project to change this propriete to category laptopL and LaptopL to DesktopS
  desktopM: '2560px',
} as const

export const defaultTheme = {
  white: '#FFF',
  black: '#000',

  primary: '#F87171',
  secondary: '#F47199',
  text: '#333333',

  device: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptopS: `(max-width: ${size.laptopS})`,
    laptopM: `(max-width: ${size.laptopM})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktopS: `(max-width: ${size.desktopS})`,
    desktopM: `(max-width: ${size.desktopM})`,
  },

  fontSize: {
    xs: '0.5rem',
    sm: '0.625rem',
    md: '0.75rem',
    sb: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    title: '4rem',
  },

  fontFamily: {
    oleoScript: 'Oleo Script',
    roboto: 'Roboto',
  },
} as const
