import { useState } from "react";
import LoginForm from "../compontents/LoginForm/LoginForm";
import AuthPageContainer from "../compontents/AuthPageContainer";

function Login() {
  const [errorMessage, setErrorMessage] = useState();

  const handleError = (error) => {
    setErrorMessage(error);
  };

  return (
    <AuthPageContainer
      error={errorMessage}
      path="/register"
      text="Need an account?"
      title="Sign in"
    >
      <LoginForm onError={handleError} />
    </AuthPageContainer>
  );
}

export default Login;
