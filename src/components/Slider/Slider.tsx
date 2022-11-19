import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import {
  NavigateBefore as NavigateBeforeIcon,
  NavigateNext as NavigateNextIcon,
} from '@mui/icons-material/';

import { INFO_DOWN_SLIDERS } from 'constants/slider';
import { classes } from './Slider.styles';

const Slider = () => {
  const [showSlider, setShowSlider] = useState<number>(0);

  const functionSlider = (numberSelect: number, type: 'back' | 'next') => {
    const lengthSlider = INFO_DOWN_SLIDERS.length - 1;

    if (numberSelect === lengthSlider) {
      if (type === 'next') {
        setShowSlider(0);
      } else {
        setShowSlider((state) => state - 1);
      }
    }
    if (numberSelect <= 0) {
      if (type === 'next') {
        setShowSlider((state) => state + 1);
      } else {
        setShowSlider(lengthSlider);
      }
    }
    if (!(numberSelect === lengthSlider) && !(numberSelect <= 0)) {
      if (type === 'next') {
        setShowSlider((state) => state + 1);
      } else {
        setShowSlider((state) => state - 1);
      }
    }
  };

  return (
    <Box sx={classes.slider}>
      <Box sx={classes.buttons}>
        <Button onClick={() => functionSlider(showSlider, 'back')}>
          <NavigateBeforeIcon />
        </Button>
      </Box>
      <Box sx={classes.main}>
        {INFO_DOWN_SLIDERS.map((slide, i) => {
          return (
            <Box
              key={`slide_${i}`}
              sx={{
                ...classes.slideMain,
              }}
            >
              <Box
                sx={{
                  ...classes.up,
                  ...(showSlider === i && classes.show(slide.img)),
                }}
              >
                <Box sx={classes.up.discount}>
                  <Typography
                    sx={classes.up.discount.text}
                  >{`-${slide.discount}%`}</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  ...classes.down,
                  ...(showSlider === i && classes.show('')),
                }}
              >
                <Typography sx={classes.down.mainTitle}>
                  {slide.mainTitle.split(' ').map((title, indexTitle) =>
                    indexTitle !== 2 ? (
                      `${title} `
                    ) : (
                      <Box
                        key={`slide_main_title_${indexTitle}`}
                        component={'span'}
                        sx={{
                          ...classes.down.mainTitle,
                          ...classes.down.mainTitle.black,
                        }}
                      >
                        {title}
                      </Box>
                    )
                  )}
                </Typography>
                <Typography sx={classes.down.otherTitle}>
                  {slide.otherTitle}
                </Typography>
                <Box sx={classes.down.proposition}>
                  {slide.services.slice(0, 3).map((service) => {
                    return (
                      <Box
                        key={`slide_services_${service.id}`}
                        sx={classes.down.service}
                      >
                        <service.Icon width="45px" />
                        <Box sx={classes.down.service.containerText}>
                          <Typography>{service.title}</Typography>
                          <Typography>{`${service.pcs} pcs`}</Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
                <Box sx={classes.down.proposition}>
                  {slide.services.slice(3, 5).map((service) => {
                    return (
                      <Box
                        key={`slide_services_${service.id}`}
                        sx={classes.down.service}
                      >
                        <service.Icon width="45px" />
                        <Box sx={classes.down.service.containerText}>
                          <Typography>{service.title}</Typography>
                          <Typography>{`${service.pcs} pcs`}</Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
                <Box sx={classes.down.indicator}>
                  <Button onClick={() => functionSlider(showSlider, 'back')}>
                    <NavigateBeforeIcon />
                  </Button>
                  <Box sx={classes.down.indicator.containerIndicator}>
                    {INFO_DOWN_SLIDERS.map((_item, indexIndicator) => {
                      const select =
                        showSlider === indexIndicator
                          ? classes.down.indicator.containerIndicator.select
                          : classes.down.indicator.containerIndicator.noSelect;
                      return (
                        <Box
                          key={`indicator_${indexIndicator}`}
                          sx={{
                            ...classes.down.indicator.containerIndicator
                              .miniIndicator,
                            ...select,
                          }}
                        />
                      );
                    })}
                  </Box>

                  <Button onClick={() => functionSlider(showSlider, 'next')}>
                    <NavigateNextIcon />
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box sx={classes.buttons}>
        <Button onClick={() => functionSlider(showSlider, 'next')}>
          <NavigateNextIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Slider;
