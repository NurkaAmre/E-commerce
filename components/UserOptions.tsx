import { signOut } from 'next-auth/react';
import { useState } from 'react'; 
import Image from 'next/image';
import Link from 'next/link';

const UserOptions = ({ user }: any) => {
  const [optionsState, setOptionsState] = useState(false)
    return (
      <>
        <Image src={user.image} width={50} height={50} onClick={() => { setOptionsState(!optionsState) }} alt="user" className="rounded-full cursor-pointer"/>
        {optionsState && (
          <div className="flex flex-col items-center gap-4 absolute top-12 right-2 border border-red-500 bg-slate-400">
            <span className="font-bold">{user.name}</span>
            <Link href="/user-info" className="w-full block text-center">My info</Link>
            <Link href="/orders" className="w-full block text-center">Orders</Link>
            <button onClick={() => { signOut() }} className="w-full block text-center">LogOut</button>
        </div>
        )}
      </>
    );
}

export default UserOptions;