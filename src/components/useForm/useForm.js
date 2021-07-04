import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    password2: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    console.log('Reached this part');
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    handleChange, values, errors, setErrors,
  };
};

export default useForm;
