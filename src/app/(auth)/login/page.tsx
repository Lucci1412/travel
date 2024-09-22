'use  client'


import React, { ReactElement } from 'react';
import AuthLayout from '../layout';
const Login = () => {
  return (
    <div>
      login
    </div>
  );
}
Login.getLayout = (page:ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Login;
