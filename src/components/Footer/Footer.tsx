import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

import { LogoCompanyFooter, VKIcon } from 'images';
import { classes } from './Footer.styles';

const Footer = () => {
  return (
    <Box component={'footer'} sx={classes.footer}>
      <LogoCompanyFooter />
      <Box sx={classes.listSocial}>
        <Link color="white" href={'https://facebook.com'} target={'_blank'}>
          <FacebookIcon style={classes.social} />
        </Link>
        <Link href={'https://instagram.com'} target={'_blank'}>
          <InstagramIcon style={classes.social} />
        </Link>
        <Link href={'https://youtube.com'} target={'_blank'}>
          <YouTubeIcon style={classes.social} />
        </Link>
        <Link href={'https://linkedin.com'} target={'_blank'}>
          <LinkedInIcon style={classes.social} />
        </Link>
        <Link href={'https://vk.com'} target={'_blank'}>
          <VKIcon />
        </Link>
      </Box>
      <Box sx={classes.policy}>
        <Link
          href={'#policy'}
          style={{ ...classes.linkFooter, marginRight: '16px' }}
        >
          Политика конфиденциальности
        </Link>
        <Link href={'#map'} style={classes.linkFooter}>
          Карта сайта
        </Link>
      </Box>
      <Link
        href={'#copyright'}
        style={{ ...classes.copyright, ...classes.linkFooter }}
      >
        Copyright © 2020 All Rights Reserved.
      </Link>
    </Box>
  );
};

export default Footer;
