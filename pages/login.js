import React from 'react'

const FormPage = () => {
    return (
        <div className='container'>
            <form className='form'>
                <h2>Sign In</h2>
                <input type="email" name="email" id="email" />
                <input type="password" name="password" id="pass" />
                <input type="submit" value="Login" />
            </form>
            <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
            .container{
                width:100vw;
                height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
                background: #2980B9;  /* fallback for old browsers */
                background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                font-family:'Lato';
            }
            .form{
                width:380px;
                height:350px;
                display:flex;
                flex-direction:column;
                background: rgba(255,255,255,0.45);
                border-radius:20px;
                align-items:center;
                justify-content: space-evenly;
            }
            h2{
                font-size:35px;
                font-weight: lighter;
                color:#757575;
                margin:10px;
            }

            input[type="email"], input[type="password"], input[type="submit"], input[type="button"] {
                width:280px;
                height:50px;
                border-radius:10px;
                border-style: none;
                outline-style: none;
                padding:15px;
                font-size:18px;
                color:#757575;
            }
            input[type="submit"], input[type="button"]{
               background-color:#368CA8;
               color:white;
               font-size:20px;
               font-weight:200;
               font-family:'Lato';
            }

            `}
            </style>
        </div>
    )
}

export default FormPage;