export const classes = {
  shares: {
    width: '100%',
    height: '1000px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLeft: (width: number) => ({
    position: 'absolute',
    right: `${(width * 300) / 1920}px`,
    top: '430px',
  }),
  imageRight: (width: number) => ({
    position: 'absolute',
    width: `${(width * 1570) / 1920}px`,
    left: `${width - 650}px`,
    top: '240px',
  }),
  centerImg: (width: number) => ({
    width: `${(width * 1170) / 1920}px`,
    zIndex: 1,
  }),
};
