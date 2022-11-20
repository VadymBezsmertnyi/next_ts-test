import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Box, Button, Typography } from '@mui/material';

import {
  TIMER_UP_TEXT,
  TIMER_DOWN_TEXT,
  DEFAULT_TEXT_DISCOUNT_BUTTON,
} from 'constants/main';
import { classes } from './Timer.styles';

const Timer = () => {
  const [time, setTime] = useState({
    day: '0',
    hour: '0',
    minute: '0',
    second: '0',
  });
  const friday = new Date('11/25/2022').getTime();

  const verifyNumber = (number: number | string) =>
    Number(number) < 10 ? `0${number}` : number;

  const timerGo = () => {
    const now = new Date().getTime();
    const result = friday - now;
    const day = (result / 1000 / 60 / 60 / 24).toFixed(0);
    const hour = ((result / 1000 / 60 / 60) % 24).toFixed(0);
    const minute = ((result / 1000 / 60) % 60).toFixed(0);
    const second = ((result / 1000) % 60).toFixed(0);
    setTime({ day, hour, minute, second });
  };

  useEffect(() => {
    const interval = setInterval(timerGo, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={classes.boxTimer}>
      <Typography sx={classes.textUp}>{TIMER_UP_TEXT}</Typography>
      <Typography sx={classes.textDown}>{TIMER_DOWN_TEXT}</Typography>
      <Box sx={classes.timer}>
        <Typography sx={classes.textTimer}>{`${verifyNumber(
          time.day
        )} д. ${verifyNumber(time.hour)} ч. ${verifyNumber(
          time.minute
        )} М. ${verifyNumber(time.second)} с.`}</Typography>
      </Box>
      <Button type="submit" sx={classes.button}>
        <Link href={'#feedback'} style={classes.textButton}>
          {DEFAULT_TEXT_DISCOUNT_BUTTON}
        </Link>
      </Button>
    </Box>
  );
};

export default Timer;
