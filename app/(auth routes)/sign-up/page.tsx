// app/(public routes)/sign-up/page.tsx

'use client';


// Додаємо імпорти
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register, RegisterRequest } from '@/lib/api/clientApi';
import { ApiError } from '@/lib/api';
import css from "./SignUpPage.module.css"


const SignUp = () => {
  const router = useRouter();
  const [error, setError] = useState('');


  const handleSubmit = async (formData: FormData) => {
    try {
	    // Типізуємо дані форми
      const formValues = Object.fromEntries(formData) as RegisterRequest;
      // Виконуємо запит
      const res = await register(formValues);
      // Виконуємо редірект або відображаємо помилку
      if (res) {
        router.push('/profile');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError(
        (error as ApiError).response?.data?.erro ??
          (error as ApiError).message ??
          'Oops... some error'
      )
    }
  };


  return (
    <>
     <main className={css.mainContent}>
  <h1 className={css.formTitle}>Sign up</h1>
	<form className={css.form} action={handleSubmit}>
    <div className={css.formGroup}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" className={css.input} required />
    </div>

    <div className={css.formGroup}>
      <label htmlFor="password">Password</label>
      <input id="password" type="password" name="password" className={css.input} required />
    </div>

    <div className={css.actions}>
      <button type="submit" className={css.submitButton}>
        Register
      </button>
    </div>

 {error && <p className={css.error}>{error}</p>}
  </form>

</main>

    </>
  );
};

export default SignUp;
