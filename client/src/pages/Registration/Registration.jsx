import './Registration.scss';

function Registration(){
    return(
       <main className="registration">
            <h2 className="block-title">Registration</h2>
            <form action="/registration" method="post">
            <div className="registration-wrap">
                <div className="wrap-id">
                    <div className="wrap-input">
                        <label for="user_name">Name:</label>
                        <input type="text" id="user_name" name="user_name" required/>
                    </div>
                    <div className="wrap-input">
                        <label for="user_surname">Surname:</label>
                        <input type="text" id="user_surname" name="user_surname" required/>
                    </div>
                    <div className="wrap-input">
                        <label for="user_birthday">Birth date:</label>
                        <input type="date" id="user_birthday" name="user_birthday" required/>
                    </div>
                    <div className="wrap-input">
                        <label for="user_password">Password:</label>
                        <input type="password" id="user_password" name="user_password" required/>
                    </div>
                    <div className="wrap-input">
                        <label for="user_password_check">Password check:</label>
                        <input type="password" id="user_password_check" name="user_password_check" required/>
                    </div>
                </div>
                <div className="wrap-contact">
                    <div className="wrap-input">
                        <label for="user_country">Country:</label>
                        <input type="text" id="user_country" name="user_country" required/>
                    </div>
                    <div className="wrap-input">
                        <label for="user_city">City:</label>
                        <input type="text" id="user_city" name="user_city" required/>
                    </div>
                    <div className="wrap-input">
                        <label for="user_address">Address:</label>
                        <input type="text" id="user_address" name="user_address" required/>
                    </div>
                    <div className="wrap-input">
                        <label for="user_email">Email:</label>
                        <input type="email" id="user_email" name="user_email" required/>
                    </div>
                    <div className="wrap-input">
                        <label for="user_prhone">Phone number:</label>
                        <input type="email" id="user_phone" name="user_phone" required/>
                    </div>
                </div>
            </div>
                <button type="submit">Send</button>
            </form>
       </main>
    )
};

export default Registration;