import Image from 'next/image';
import React from 'react';
import Logo from './../assets/img_logo-921c04a2f7bd4cefc178099cff97a10b.webp';
import Link from 'next/link';
type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white border border-gray-300 rounded-md">
        <Link href={'/signUp'} className="flex justify-center">
          <Image src={Logo} alt="Logo" className="object-cover p-[30px]" />
        </Link>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
