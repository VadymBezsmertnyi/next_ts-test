import { Box, Button, Typography } from '@mui/material';

import { FEEDBACK_DOWN_TEXT, FEEDBACK_UP_TEXT } from 'constants/main';
import { classes } from './Timer.styles';

const Timer = () => {
  return (
    <Box sx={classes.timer}>
      <Typography sx={classes.textUp}>{FEEDBACK_UP_TEXT}</Typography>
      <Typography sx={classes.textDown}>{FEEDBACK_DOWN_TEXT}</Typography>
      <Box>Timer</Box>
      <Button type="submit" sx={classes.button}>
        <Typography sx={classes.textButton}>Получить скидку!</Typography>
      </Button>
    </Box>
  );
};

export default Timer;
