import PageTitle from "../../components/PageTitle";
import LoginScreen from "../../components/users/LoginScreen";

const Login = () => {
  return (
    <div className="bg-slate-300 pt-2">
      <PageTitle title="Login" />
      {/* Container Section */}
      <div className="px-2">
        <div className="container w-full lg:max-w-screen-lg lg:mx-auto px-2 mt-3 rounded-2xl">
          {/* Login Screen Component */}
          <LoginScreen />
        </div>
      </div>
    </div>
  );
};

export default Login;
