import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { NavLinks } from '@/constants'
import AuthProvider from '../AuthProvider/AuthProvider'
import { getCurrentUser } from '@/lib/session'
import {signOut} from 'next-auth/react'
import ProfileMenu from '../ProfileMenu/ProfileMenu'

const Navbar = async () => {

    const session = await getCurrentUser();

    return (
        <nav>
            <div className='flexBetween navbar'>
                <div className='flex-1 flexStart gap-10'>
                    <Link href="/">
                        <Image
                            src="./logo.svg"
                            width={115}
                            height={43}
                            alt='Flexibble'
                        />
                    </Link>
                    <ul className='xl:flex hidden text-small gap-7'>
                        {NavLinks.map((link) => (
                            <Link
                                href={link.href}
                                key={link.key}
                            >
                                {link.text}
                            </Link>
                        ))}
                    </ul>
                </div>

                <div className='flexCenter gap-4'>
                    {session?.user ? (
                        <>
                            <ProfileMenu session={session} />
                            {/* {session?.user?.image &&
                            (
                            <Link
                                href={`/profile/${session?.user?.id}`}
                            >                          
                            <Image
                                src={session?.user?.image}
                                width={40}
                                height={40}
                                alt={session?.user?.name}
                                className='rounded-full'
                            />
                            </Link>)
                            } */}

                            <Link
                                href='/create-project'
                            >
                                Share Work
                            </Link>

                            {/* <button type='button' className='text-sm' onClick={signOut()}>Sign Out</button> */}
                                
                        </>
                    )
                        :
                        (
                            <>
                                <AuthProvider />
                            </>
                        )
                    }
                </div>

            </div>
        </nav>
    )
}

export default Navbar