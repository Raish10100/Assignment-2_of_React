import { Link } from 'react-router-dom';
import  './SignUpPage.css'

function SignUpPage(props){

    return (
        <div className='SignUP-Component'>
        <input placeholder='Full Name' />
        <input placeholder='User Name' />
        <input placeholder='E-mail or Phone number' />
        <input placeholder='Password' />
        <button>SignUp</button>
        <span>have an account? <Link onClick={props.navSignipPage}>Log in</Link></span>
        </div>
    )
}

export default SignUpPage;