import { MouseEvent } from "react"
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
    <div className="flex items-center">
      <button className="bg-white w-20 rounded-full m-4" onClick={(e)=> logout(e)} data-cy="log-out-button">Log Out</button>
    </div>
  )
}



export default LogOutButton