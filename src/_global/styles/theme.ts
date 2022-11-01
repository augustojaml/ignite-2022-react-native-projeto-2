export const theme = {
  colors: {
    main500: '#8357e5',
    background500: '#1F1E25',
    background700: '#121214',
    background900: '#0a0a0b',

    gray100: '#FDFCFE',
    gray200: '#a6a6a6',
    gray400: '#6B6B6B',
    gray700: '#1F1E25',
    gray800: '#131016',

    blue500: '#007bff',
    red500: '#AA2834',
    green500: '#00875F',
    yellow500: '#ffc107',
  } as const,

  font: {
    primaryRegular: 'JosefinSans_400Regular',
    primaryMedium: 'JosefinSans_500Medium',
    primaryBold: 'JosefinSans_700Bold',
    secondaryRegular: 'Montserrat_400Regular',
    secondaryMedium: 'Montserrat_500Medium',
    secondaryBold: 'Montserrat_700Bold',
    secondaryBlack: 'Montserrat_900Black',
  } as const,

  size: {
    h1: '30px',
    h2: '26px',
    h3: '24px',
    h4: '22px',
    h5: '20px',
    xp: '18px',
    p: '16px',
    label: '14px',
    small: '12px',
    xsmall: '10px',
  } as const,
};
