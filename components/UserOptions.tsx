import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const UserOptions = ({ user }: any) => {
    return (
      <div className='group'>
        <Image src={user.image} width={50} height={50} alt="user image" className="rounded-full w-full"/>
          <div className="flex-col items-center hidden hidden-user group-hover:flex p-[0.5rem] absolute top-25 right-0 z-40">
            <span className="font-bold text-gray-500">{user.name}</span>
            <hr className='bg-white' />
            <Link href="/user-info" className="w-full block hidden-text text-center">Личные данные</Link>
            <hr />
            <Link href="/orders" className="w-full block hidden-text text-center">Заказы</Link>
            <hr />
            <button onClick={() => { signOut() }} className="w-full hidden-text block text-center">Выйти</button>
        </div>
      </div>
    );
}

export default UserOptions;