import React, { useEffect, useState } from "react";
import LogInput from "../../components/molecules/LogInput";
import { userStore } from "../../store/userStore";
import MainLoader from "../../components/organisms/MainLoader";
function isEmail(emailAdress) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) return true;
  else return false;
}
console.log(process.env.NEXT_PUBLIC_API);

export default function Login() {
  const [connexionMessage, setConexionMessage] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] = useState(false);
  const [user, login] = userStore((state) => [state.user, state.login]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    !localStorage.getItem("userId")
      ? setLoading(false)
      : window.location.replace(`${process.env.NEXT_PUBLIC_WEB}home`);
  });

  const submit = () => {
    setIsLogging(true);
    login(
      {
        phoneNumber: email,
        password: password,
      },
      throwError,
      logUSer
    );
  };

  const throwError = (error) => {
    setError(error);
    setIsLogging(false);
  };

  const logUSer = (e) => {
    window.location.replace(`${process.env.NEXT_PUBLIC_WEB}home`);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <div className="loginContainer">
      {loading && <MainLoader />}
      <div className="login">
        <div className="left-section"></div>
        <div className="right-section">
          <div className="topper">
            <img
              src="data:image/jpeg;base64,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rl7NcobOAVBAbkQDwsNBbgBIBBqbx0grkZsyC5VlKkGzEA6G1wt9AeInP9pKHeuW7uY/AdQoqliOo+qqD9nxEz1dh4ZkydhTCgMoyoFKhviCEC6352tMjbJoG4NCkczZmvSXVrEBjpq1iRfxMkamLD7ZpO+QZgbM12QgEKxRrE8dQfa/MXjJvLR7Ba7E5WZlOVS1iiu78BwCoxv4SyXB0w2YU0DWK5ggvlJzEXtexJJt1Mw1NjYdlROxp5KbZ1QIAgbKy3y2sdGPKQSQ628tEBrB2KqXsEPeUBzmBOmU5HAPh5XxvvXQUtnJAXKtspLZyGZlsBxUKefI+F7VNn0VLEUqYLEliKagsWFmJ01JHHrMf/42HsV/4ejZgoI7JbEKLKCLagDQdJJGpFx+8NKk5Vr5U+NrGwY9nlQaak9on7w8Z3pbepMrMM9kFMn6sgntLZLKRc6m3nfpJdbZ1F2LNRpszLlLGmpJX9EkjUeEUtn0VvlpU1zZb2pqL5LZL2GuWwt0tpIJK/8AtPQspuwzsFAKEG5y5TY62JYC4BilvJRIBOYXy/YJXW17NYaC4104jnpJ7bLomxNGmStit6a6EcCNNOAhtmUSADRp2XUDs1sCCCCNNNQPYSQTYiJAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP/9k="
              alt="logo"
            ></img>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              submit();
            }}
            className={connexionMessage.status === 401 ? "form-error" : ""}
          >
            <LogInput
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />

            {error ? <p className="error-message">{error}</p> : ""}

            <button className="loginbtn">
              {!isLogging ? "se connecter" : <div class="spinner"></div>}
            </button>
          </form>

          <div className="footer">
            <span>Mot de passe oublié</span>

            <span>Inscription</span>
          </div>
        </div>
      </div>
    </div>
  );
}
