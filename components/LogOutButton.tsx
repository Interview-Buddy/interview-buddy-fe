import { MouseEvent, useContext } from "react"
import { signOut } from "firebase/auth"
import { auth } from "../configs/firebase.configs"
import { FirebaseError } from "firebase/app"
import { AuthContext } from "../app/auth-provider";
import { useRouter } from 'next/navigation'

const LogOutButton = () => {
  const router = useRouter();
  const user = useContext(AuthContext);

  const logout = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await signOut(auth)
      user.setCompany(null)
      user.setDisplayName(null)
      user.setEmail(null)
      user.setFirstName(null)
      user.setIsLoggedIn(false)
      user.setLastName(null)
      user.setPronouns(null)
      user.setUserType(null)
      user.setUuid(undefined)
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