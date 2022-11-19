export const classes = {
  shares: {
    width: '100%',
    height: '800px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 900px)': {
      height: '520px',
    },
  },
  imageLeft: {
    position: 'absolute',
    width: '100%',
    objectFit: 'cover',
    objectPosition: '-23vw 39vh',
    '@media (max-width: 1300px)': {
      objectPosition: '-23vw 25vh',
    },
    '@media (max-width: 800px)': {
      objectPosition: '-20vw 18vh',
    },
    '@media (max-width: 500px)': {
      objectPosition: '43vw 22vh',
      width: '500px',
      height: '380px',
      top: '446px',
    },
  },
  imageRight: {
    position: 'absolute',
    width: '100%',
    objectFit: 'cover',
    objectPosition: '61vw 18vh',
    '@media (max-width: 1400px)': {
      objectPosition: '60vw 5vh',
    },
    '@media (max-width: 800px)': {
      objectPosition: '70vw 0vh',
    },
    '@media (max-width: 500px)': {
      objectPosition: '-50vw 0vh',
      height: '460px',
    },
  },
  centerImg: {
    position: 'absolute',
    width: '60vw',
    height: '505px',
    objectFit: 'cover',
    objectPosition: '0 0',
    borderRadius: '20px',
    background: '#fff url(/friday.png) center center/cover no-repeat',

    '@media (max-width: 1400px)': {
      width: '70vw',
      height: '350px',
    },
    '@media (max-width: 900px)': {
      height: '300px',
    },
    '@media (max-width: 500px)': {
      width: '100%',
    },
  },
};
