import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContex';
import useLogin from '../helpers/hooks/useLogin';
import ShortLogo from '../assets/logo/shortlogo.svg';

const Login = () => {
  const { isPending, error } = useContext(AuthContext);
  const { login } = useLogin();
  return (
    <Formik
      initialValues={{ displayName: '', email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Geçersiz e-posta adresi').required('Gerekli'),
        password: Yup.string()
          .max(20, '20 karakter veya daha az olmalıdır')
          .required('Gerekli'),
      })}
      onSubmit={(values) => {
        login(values.email, values.password);
      }}
    >
      <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-50 p-12 rounded-md border-t-4 border-teal-500">
        <Form className="flex flex-col gap-2  min-w-[340px] ">
        <div className="flex items-center gap-4 mb-4">
                <img src={ShortLogo} alt="Logo" />
                <h2 className="text-slate-600 text-2xl font-black">Giriş Yap</h2>
              </div>
          <div className="flex flex-col gap-2 ">
            <Field name="email" type="email" placeholder="E-Posta adresi" />
            <div className="h-2 flex items-center text-sm text-red-500">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="flex flex-col  gap-2">
            <Field name="password" type="password" placeholder="Şifre" />
            <div className="h-2 flex items-center text-sm text-red-500">
              <ErrorMessage name="password" />
            </div>
          </div>
          <button className="flex items-center h-12 text-lg gap-4 justify-center">
            {!isPending && <span>Giriş Yap</span>}
            {isPending && <div className="loading" />}
          </button>
          {error && <div>{error}</div>}
          <div className='mt-4 text-slate-500'>
            <span> Henüz bir hesabınız yok mu? </span>
            <Link className="text-emerald-500 font-bold" to="/kayit">
              Üye ol!
            </Link>
          </div>
        </Form>
        </div>
      </div>
    </Formik>
  );
};
export default Login;
