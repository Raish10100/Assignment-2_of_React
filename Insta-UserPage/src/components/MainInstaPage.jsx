import { useState } from "react"
import './MainInstaPage.css'
import SignInPage from './Auth Pages/SignInPage'
import SignUpPage from "./Auth Pages/SignUpPage";


function MainInstaPage() {

    const [signInPage, SetPage] = useState(true);

    const navigator = () => {
        SetPage(!signInPage)
    }



    return (
        <div className="main-container">
            <img alt="Inst image" src="https://www.bing.com/th?id=OIP.vDOq6L5PbY7XrDGK5TjNLAHaC7&w=242&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />

            {
                signInPage ? (
                    <>
                        <SignInPage navSignupPage={navigator} />
                    </>
                ) : (
                    <>
                        <SignUpPage navSignipPage={navigator} />
                    </>
                )
            }

        </div>
    )
}

export default MainInstaPage 