import { MouseEvent, useContext } from "react"
import { signOut } from "firebase/auth"
import { auth } from "../configs/firebase.configs"
import { FirebaseError } from "firebase/app"
import { useRouter } from 'next/navigation'

const LogOutButton = () => {
  const router = useRouter();

  const logout = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await signOut(auth)
      router.push('/');
    } catch (err: unknown) {
      const errorMessage = err as FirebaseError
      console.log(errorMessage.message)
    }
  }

  return (
    <div>
      <button className="bg-[#FF99C8] w-20 mr-2 mt-2 rounded-full" 
        onClick={(e)=> logout(e)}>Log Out</button>
    </div>
    
  )
}



export default LogOutButton