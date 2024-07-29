"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context"

export default function SignInPage(){

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn(){
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut(){
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    //console.dir(user);

    return(
        <main>
            <header>
                <h1 className="text-3xl">Shopping List</h1>
            </header>
            {user ? (
                // user Is logged in
                <div>
                    <p>Welcome {user.displayName}</p>
                    <p>{user.email}</p>
                    <img className="w-8 h-8" src={user.photoURL}/>
                    <p>
                        <Link href="week-8/shopping-list/" className="hover:underline">Click here to go to Shopping List</Link>
                    </p>
                    <button onClick={handleSignOut} className="text-lg m-2 hover:underline">Sign Out</button>
                </div>
            ) : (
                // user IS NOT log in
                <div>
                    <button onClick={handleSignIn} className="text-lg m-2 hover:underline">Sign In</button>
                </div>
            ) }
        </main>
    )
}