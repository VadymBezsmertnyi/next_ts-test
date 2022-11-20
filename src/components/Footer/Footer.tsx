import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  LinkedIn as LinkedInIcon,
  Telegram as TelegramIcon,
  WhatsApp as WhatsAppIcon,
  PhoneInTalk as ViberIcon,
} from '@mui/icons-material';

import { LogoCompanyFooter, NameCompanyFooter, VKIcon } from 'images';
import { classes } from './Footer.styles';
import {
  COPYRIGHT,
  EMAIL_OTHER_CONTACT,
  MAP_SITE,
  PHONE_OTHER_CONTACT,
  POLICY,
  TEXT_EMAIL_OTHER_CONTACT,
  TEXT_PHONE_OTHER_CONTACT,
} from 'constants/footer';

const Footer = () => {
  return (
    <Box component={'footer'} sx={classes.footer}>
      <Box sx={classes.otherContact}>
        <Box>
          <Typography sx={classes.otherContact.title}>
            {EMAIL_OTHER_CONTACT}
          </Typography>
          <Box>
            <Typography
              sx={{
                ...classes.otherContact.text,
                textDecorationLine: 'underline',
              }}
            >
              {TEXT_EMAIL_OTHER_CONTACT}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography sx={classes.otherContact.title}>
            {PHONE_OTHER_CONTACT}
          </Typography>
          <Box sx={classes.otherContact.boxSocial}>
            <Typography sx={classes.otherContact.text}>
              {TEXT_PHONE_OTHER_CONTACT}
            </Typography>
            <Link color="white" href={'https://facebook.com'} target={'_blank'}>
              <TelegramIcon style={classes.social} />
            </Link>
            <Link color="white" href={'https://facebook.com'} target={'_blank'}>
              <WhatsAppIcon style={classes.social} />
            </Link>
            <Link color="white" href={'https://facebook.com'} target={'_blank'}>
              <ViberIcon style={classes.social} />
            </Link>
          </Box>
        </Box>
      </Box>
      <Box sx={classes.logoFooter}>
        <LogoCompanyFooter />
      </Box>
      <Box sx={classes.nameFooter}>
        <NameCompanyFooter />
      </Box>
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
          {POLICY}
        </Link>
        <Link href={'#map'} style={classes.linkFooter}>
          {MAP_SITE}
        </Link>
      </Box>
      <Box sx={classes.copyrightContainer}>
        <Link
          href={'#copyright'}
          style={{ ...classes.copyright, ...classes.linkFooter }}
        >
          {COPYRIGHT}
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
