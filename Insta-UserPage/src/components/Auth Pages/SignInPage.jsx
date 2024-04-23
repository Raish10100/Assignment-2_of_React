import { Link } from 'react-router-dom';
import './SignInPage.css'


function SignInPage(props){


    return (
        <div className='SignIn-Component'>
            <input placeholder='Phone number,username, or email'  />
            <input placeholder='Password'  />
            <button >Sign In</button>
            <span>Don't have account? <Link onClick={props.navSignupPage}>Sign up</Link></span>
        </div>
    )
}


export default SignInPage;