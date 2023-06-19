import React, { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import AuthLayout from '@/layouts/AuthLayout';
import Head from 'next/head';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '@/features/authSlice';
import { AppDispatch, RootState } from '@/features';
import { message, Spin } from 'antd';
import { IUser } from '@/interfaces/user';
import { useRouter } from 'next/router';

type Props = {};

const registerSchema = yup
  .object({
    userName: yup.string().required('Vui lòng nhập tên tài khoản'),
    email: yup
      .string()
      .email('Vui lòng nhập đúng định dạng')
      .required('Vui lòng nhập email'),
    password: yup.string().required('Vui lòng nhập mật khẩu'),
  })
  .required();

const Signup: NextPageWithLayout = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(registerSchema),
  });
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const onSubmit: SubmitHandler<IUser> = async (data: IUser) => {
    try {
      await dispatch(signup(data));
      message.success('Đăng ký thành công');
      router.push('/login');
    } catch (error) {
      message.warning('Đăng ký không thành công');
    }
  };

  return (
    <div>
      <Head>
        <title>Đăng ký</title>
      </Head>
      <div className="px-6 max-w-lg">
        <h1 className="text-2xl text-center font-bold">
          Mạng lưới kết nối người Việt làm tại công ty công nghệ
        </h1>
        <h4 className="text-center py-4">
          Hãy đăng ký thành viên Careerly ngay bây giờ!
        </h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold text-sm mb-2">
              Tên
            </label>
            <input
              placeholder="Tên hồ sơ cá nhân"
              className="form-control"
              {...register('userName')}
            />
            <p className="text-red-500 mb-1">{errors.userName?.message}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="userName" className="block font-bold text-sm mb-2">
              Email
            </label>
            <input
              placeholder="Email"
              className="form-control"
              {...register('email')}
            />
            <p className="text-red-500 mb-1">{errors.email?.message}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold text-sm mb-2">
              Mật khẩu
            </label>
            <input
              type="password"
              placeholder="Mật khẩu"
              className="form-control"
              {...register('password')}
            />
            <p className="text-red-500 mb-1">{errors.password?.message}</p>
          </div>
          <button
            className="block w-full bg-orange100 text-white mb-4 py-2 rounded-md disabled:bg-orange-400"
            disabled={!isDirty}
          >
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
};

Signup.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Signup;
