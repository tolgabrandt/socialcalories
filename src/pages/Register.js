import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContex';
import useSignup from '../helpers/hooks/useSignup';

const Register = () => {
  const { isPending } = useContext(AuthContext);
  const { signup } = useSignup();



  return (
    <>
      <Formik
        initialValues={{ displayName: '', email: '', password: '' }}
        validationSchema={Yup.object({
          displayName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        })}
        onSubmit={(values) => {
          signup(values.email, values.password, values.displayName);
        }}
      >
        <div className="flex items-center justify-center h-screen">
          <Form className="flex flex-col gap-2">
            <div className="flex flex-col max-w-[340px] gap-2">
              <Field name="displayName" type="text" placeholder="Ad Soyad" />
              <div className="h-2 flex items-center text-sm text-red-500">
                <ErrorMessage name="displayName" />
              </div>
            </div>

            <div className="flex flex-col max-w-[340px] gap-2">
              <Field name="email" type="email" placeholder="E-Posta adresi" />
              <div className="h-2 flex items-center text-sm text-red-500">
                <ErrorMessage name="email" />
              </div>
            </div>

            <div className="flex flex-col max-w-[340px] gap-2">
              <Field name="password" type="password" placeholder="Şifre" />
              <div className="h-2 flex items-center text-sm text-red-500">
                <ErrorMessage name="password" />
              </div>
            </div>
            <button className="flex items-center gap-4 justify-center">
              {!isPending && <span>Kayıt Ol</span>}
              {isPending && <div className="loading" />}
            </button>
            <div>
              <span> Bir hesabınız var mı? </span>
              <Link className="text-emerald-500" to="/login">
                Giriş yap!
              </Link>
            </div>
          </Form>
        </div>
      </Formik>
    </>
  );
};
export default Register;
