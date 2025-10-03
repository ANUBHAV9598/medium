import { useNavigate } from "react-router-dom";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { z } from "zod";
import { signinSchema, signupSchema } from "@anubhav2002/medium-app-common";
import axios from "../../axios/axios";

type AuthFormProps = {
    type: "signup" | "signin";
};

const AuthForm = ({ type }: AuthFormProps) => {
    const navigate = useNavigate();
    const [postInput, setPostInput] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<string[]>([]);

    const isSignup = type === "signup";

    const handleSwitch = () => {
        navigate(isSignup ? "/signin" : "/signup");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors([]);

        try {
            if (isSignup) {
                signupSchema.parse(postInput);
                // signup request
                const response = await axios.post("/user/signup", postInput);
                const jwt = response.data.token;
                localStorage.setItem("token", jwt);
                navigate("/blogs");
            } else {
                signinSchema.parse({
                    email: postInput.email,
                    password: postInput.password,
                });
                // signin request
                const response = await axios.post("/user/signin", {
                    email: postInput.email,
                    password: postInput.password,
                });
                const jwt = response.data.token;
                localStorage.setItem("token", jwt);
                navigate("/blogs");
            }
        } catch (err) {
            if (err instanceof z.ZodError) {
                setErrors(err.issues.map((e) => e.message));
            } else {
                console.error(err);
                setErrors(["Something went wrong. Please try again."]);
            }
        }
    };

    return (
        <div className="h-full flex items-center justify-center px-4 font-quicksand">
            <div className="w-full max-w-md">
                {/* Heading */}
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                        {isSignup ? "" : ""}
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg opacity-60 mt-1">
                        {isSignup ? "Already have an account? " : "Don't have an account? "}
                        <span
                            onClick={handleSwitch}
                            className="underline cursor-pointer hover:opacity-80"
                        >
                            {isSignup ? "Login" : "Sign Up"}
                        </span>
                    </p>
                </div>

                {/* Error messages */}
                {errors.length > 0 && (
                    <div className="mt-4 text-red-500 text-sm space-y-1">
                        {errors.map((err, idx) => (
                            <p key={idx}>⚠ {err}</p>
                        ))}
                    </div>
                )}

                {/* Form */}
                <form className="flex flex-col mt-6 space-y-4" onSubmit={handleSubmit}>
                    {isSignup && (
                        <div>
                            <Label className="text-sm sm:text-base font-semibold" title="Username" />
                            <Input
                                className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-gray-400 text-sm sm:text-base"
                                placeholder="Enter your username"
                                type="text"
                                value={postInput.name}
                                onChange={(e) =>
                                    setPostInput({ ...postInput, name: e.target.value })
                                }
                            />
                        </div>
                    )}

                    <div>
                        <Label className="text-sm sm:text-base font-semibold" title="Email" />
                        <Input
                            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-gray-400 text-sm sm:text-base"
                            placeholder="john@doe.com"
                            type="email"
                            value={postInput.email}
                            onChange={(e) =>
                                setPostInput({ ...postInput, email: e.target.value })
                            }
                        />
                    </div>

                    <div>
                        <Label className="text-sm sm:text-base font-semibold" title="Password" />
                        <Input
                            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-gray-400 text-sm sm:text-base"
                            placeholder="*******"
                            type="password"
                            value={postInput.password}
                            onChange={(e) =>
                                setPostInput({ ...postInput, password: e.target.value })
                            }
                        />
                    </div>

                    <Button
                        className="mt-6 w-full px-3 py-2 rounded-md bg-black text-white hover:bg-black/80 cursor-pointer"
                        title={isSignup ? "Sign Up" : "Sign In"}
                    />
                </form>
            </div>
        </div>
    );
};

export default AuthForm;
