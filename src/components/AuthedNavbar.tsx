'use client'
import { useAuthContext } from '@/context/AuthContext';
import React, { useEffect, useState } from 'react'
import { getCircles } from '../../lib/firebase/firestore';
import Link from 'next/link';
import LogOutUser from './LogOutUser';
import SkeletonCircle from './SkeletonCircles';


function AuthedNavbar() {

  const { user }: any = useAuthContext();
  const [circles, setCircles]: any = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    async function gettingCircles() {
      const data = await getCircles(user.displayName)
      setCircles(data) 
      setIsLoading(false)       
    }       
    gettingCircles()
        
  }, [])
  
  return (
    <div className='flex pt-1 px-1 drop-shadow-2xl'>

      <div className='h-[calc(10vh-4px)] w-[20vw] mr-[1vw]'>
        <LogOutUser className={'bg-gradient-to-r from-action-color-1 to-action-color-2 text-my-text-color w-full h-[48%] mb-[2%] rounded-2xl'} />
        <Link href='/'>
          <div className='leading-4 bg-gradient-to-r from-action-color-1 to-action-color-2 text-my-text-color w-full h-[48%] rounded-2xl flex flex-col items-center justify-center'>
            <span>Add a</span>
            <span>Friend</span>
          </div>
        </Link>
      </div>
    
    
      <div className='h-[calc(10vh-4px)] w-[79vw] border-2 rounded-2xl flex items-center'>
        
        {circles.length != 0 && !isLoading &&
          circles.map( (circle: any, index: number) => {
          return  <Link href={`/${circle.id}`} key={index} className='px-1 h-full'>
                    <div className='h-full aspect-square rounded-full bg-gradient-to-r from-action-color-1 to-action-color-2 text-my-text-color flex items-center justify-center'>
                      {circle.name}
                    </div>
                  </Link>  
        })}

        { isLoading && <div className='flex gap-2 px-1 h-full'> <SkeletonCircle classes="h-full aspect-square " amount="1" /> </div>}

      </div>
    

    </div>
  )
}

export default AuthedNavbar