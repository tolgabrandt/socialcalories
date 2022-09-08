import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContex';
import useSignup from '../helpers/hooks/useSignup';
import ShortLogo from '../assets/logo/shortlogo.svg';
const Register = () => {
  const { isPending } = useContext(AuthContext);
  const { signup } = useSignup();

  return (
    <>
      <Formik
        initialValues={{ displayName: '', email: '', password: '' }}
        validationSchema={Yup.object({
          displayName: Yup.string()
            .max(15, '15 karakter veya daha az olmalıdır')
            .required('Gerekli'),
          email: Yup.string()
            .email('Geçersiz e-posta adresi')
            .required('Gerekli'),
          password: Yup.string()
            .max(20, '20 karakter veya daha az olmalıdır')
            .required('Gerekli'),
        })}
        onSubmit={(values) => {
          signup(values.email, values.password, values.displayName);
        }}
      >
        <div className="flex items-center justify-center h-screen">
          <div className="bg-gray-50 p-12 rounded-md border-t-4 border-teal-500">
            <Form className="flex flex-col gap-2 min-w-[340px] bg-gray-50">
              <div className="flex items-center gap-4 mb-4">
                <img src={ShortLogo} alt="Logo" />
                <h2 className="text-slate-600 text-2xl font-black">Kayıt Ol</h2>
              </div>
              <div className="flex flex-col gap-2">
                <Field name="displayName" type="text" placeholder="Ad Soyad" />
                <div className="h-2 flex items-center text-sm text-red-500">
                  <ErrorMessage name="displayName" />
                </div>
              </div>

              <div className="flex flex-col  gap-2">
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
              <button className="flex items-center gap-4 h-12 text-lg justify-center">
                {!isPending && <span>Kayıt Ol</span>}
                {isPending && <div className="loading" />}
              </button>
              <div className="text-slate-500 mt-4">
                <span> Bir hesabınız var mı? </span>
                <Link className="text-emerald-500 font-bold" to="/giris">
                  Giriş yap!
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </Formik>
    </>
  );
};
export default Register;
