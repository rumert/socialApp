'use client'
import React from 'react'
import Main from './Main';
import Phone from './Phone';
import Features from './Features';
import { useAuthContext } from '@/context/AuthContext';
import RedirectLogin from './RedirectLogin';

function HomePage() {
    const { user }: any = useAuthContext();

    return (
      <div>
        {user ? (
          <Main />
        ) : (
          <>
            <Phone />
            <Features />
            <RedirectLogin />
          </>
        )}
      </div>
    );
  }


export default HomePage