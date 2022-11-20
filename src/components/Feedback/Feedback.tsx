import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';

import {
  DEFAULT_TEXT_DISCOUNT_BUTTON,
  FEEDBACK_DOWN_TEXT,
  FEEDBACK_UP_TEXT,
} from 'constants/main';
import { TErrorsFeedback, TFeedback } from 'types/main';
import { classes } from './Feedback.styles';

const initialValues: TFeedback = {
  name: '',
  phone: '',
  email: '',
};

const validate = (values: TFeedback) => {
  const errors: TErrorsFeedback = {};
  const validationEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (!values.name.length) errors.name = `Пожалуйста напишите ваше имя`;
  if (values.name.length < 2 || values.name.length > 15)
    errors.name = `Длина имени должна быть минимум 2 символа и не более 15 символов`;
  if (values.phone.length < 7)
    errors.phone = `Неверно введенный номер телефона`;
  if (values.email !== undefined && !/^[A-Za-z]/i.test(String(values.email)))
    errors.email = `Введите пожалуйста ваш электронный адрес`;
  else if (
    values.email !== undefined &&
    !validationEmail.test(String(values.email))
  )
    errors.email = 'Некорректно введен электронный адрес';

  return errors;
};

const Feedback = () => {
  const [showErrors, setShowErrors] = useState<TErrorsFeedback>({});
  const nameInputs: string[] = Object.keys(initialValues);

  const placeholderInput = (nameInput: string) => {
    if (nameInput === 'name') return 'Имя';
    if (nameInput === 'phone') return 'Телефон';
    if (nameInput === 'email') return 'email';
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values, { resetForm }) => {
      console.log(`I'm happy))`, values);
      resetForm();
    },
  });

  const { handleSubmit, handleChange, values, errors, isValid } = formik;

  const customSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    isValid ? handleSubmit(event) : setShowErrors(errors);
  };

  const customHandleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setShowErrors({});
    handleChange(e);
  };

  return (
    <Box
      id={'feedback'}
      component={'form'}
      onSubmit={customSubmit}
      sx={classes.feedback}
    >
      <Typography sx={classes.textUp}>{FEEDBACK_UP_TEXT}</Typography>
      <Typography sx={classes.textDown}>{FEEDBACK_DOWN_TEXT}</Typography>
      <Box sx={classes.inputs}>
        {nameInputs.map((input) => {
          return (
            <FormControl
              key={`input_${input}`}
              sx={{ width: '255px' }}
              error={Boolean(showErrors[input as keyof TErrorsFeedback])}
            >
              <TextField
                type={input === 'email' ? 'email' : 'text'}
                name={input}
                value={values[input as keyof TFeedback]}
                sx={classes.input}
                onChange={customHandleChange}
                placeholder={placeholderInput(input)}
                InputProps={{
                  style: {
                    borderRadius: '45px',
                  },
                }}
              />
              <FormHelperText sx={{ height: '40px' }}>
                {showErrors[input as keyof TErrorsFeedback]}
              </FormHelperText>
            </FormControl>
          );
        })}
      </Box>
      <Button type="submit" sx={classes.button}>
        <Typography sx={classes.textButton}>
          {DEFAULT_TEXT_DISCOUNT_BUTTON}
        </Typography>
      </Button>
    </Box>
  );
};

export default Feedback;
