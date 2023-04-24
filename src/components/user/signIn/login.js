function Login() {
    return <>

        <div class="container">
            <section id="formolder">

                <div class="row">

                    <div class="col-sm-6 brand">

                        <a href="#" class="logo">Nothing <span>.</span></a>

                        <div class="heading">
                            <p>Your Right Choice</p>
                        </div>

                        <div class="success-msg">

                            <p>Great! You are one of our members now</p>
                            <a href="#" class="profile">Your Profile</a>
                        </div>

                        <div class="col-sm-6 form">

                            <div class="login form-peice switched">

                                <form class="login-form" action="#" method="post">
                                    <div class="form-group">

                                        <label for="loginemail">Email Adderss</label>
                                        <input type="email" name="loginemail" id="loginemail" required />
                                    </div>

                                    <div class="form-group">

                                        <label for="loginPassword">Password</label>
                                        <input type="password" name="loginPassword" id="loginPassword" required /></div>

                                    <div class="CTA">

                                        <input type="submit" value="Login" />

                                        <a href="#" class="switch">I'm New</a>
                                    </div>
                                </form>

                            </div>
                            <div class="signup form-peice">

                                <form class="signup-form" action="#" method="post">

                                    <div class="form-group">

                                        <label for="name">Full Name</label>

                                        <input type="text" name="username" id="name" class="name" />

                                        <span class="error"></span>

                                    </div>

                                    <div class="form-group">

                                        <label for="email">Email Adderss</label>
                                        <input type="email" name="emailAdress" id="email" class="email" />

                                        <span class="error"></span> </div>

                                    <div class="form-group">

                                        <label for="phone">Phone Number - <small>Optional</small></label>
                                        <input type="text" name="phone" id="phone" /> </div>

                                    <div class="form-group">

                                        <label for="password">Password</label>

                                        <input type="password" name="password" id="password" class="pass" />

                                        <span class="error"></span>

                                    </div>

                                    <div class="form-group">

                                        <label for="passwordCon">Confirm Password</label>

                                        <input type="password" name="passwordCon" id="passwordCon" class="passConfir" />

                                        <span class="error"></span>

                                    </div>

                                    <div class="CTA">
                                        <input type="submit" value="Signup Now" id="submit" />

                                        <a href="#" class="switch">I have an account</a>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                    </div>

            </section>
            </div>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
            <script src="./script.js"></script>

        </>
}

        export default Login;