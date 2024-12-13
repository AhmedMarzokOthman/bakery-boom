"use client"

import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { ToastAction } from "@/components/ui/toast";
import { Loader2 } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";

export default function SigninAndSignupForm() {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const successToast = (msgTitle: string, msgDescription: string) => {
        toast({
            title: msgTitle,
            description: msgDescription,
            variant: "default",
            duration: 5000,
        });
    }

    const errToast = (err: string) => {
        toast({
            title: "Uh oh! Something went wrong.",
            description: err,
            action: <ToastAction altText="Try again" onClick={() => { }}>Try again</ToastAction>,
            variant: "destructive",
            duration: 5000,
        });
    }


    const handelSigninSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await signIn("credentials", {
                username, password, redirect: false
            });

            if (res?.error) {
                setIsLoading(false);
                return errToast("Invalid Credentials!");
            }

            router.push("/dashboard");
        } catch (err: any) {
            console.log(err);
            setIsLoading(false);
            return errToast("An error occurred while signing! " + err.message);
        }
    }

    const handelSignupSubmit = async (e: any) => {
        e.preventDefault();

        setIsLoading(true);
        if (!username || !password || !confirmPassword) {

            setIsLoading(false);
            return errToast("Please fill all fields!");
        }

        try {
            const res = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password, confirmPassword }),
            });

            const data = await res.json();
            if (res.ok) {
                const form = e.target;
                form.reset();
                setIsLoading(false);
                return successToast("Signup successful!", "You can now sign in to your account.");
            } else {
                setIsLoading(false);
                return errToast(data.error);
            }

        } catch (err: any) {
            console.log(err);
            setIsLoading(false);
            return errToast("An error occurred while logging in! " + err.message);
        }
    }

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen transition-all duration-300">
            <Loader2 className="w-4 h-4 animate-spin" />
        </div>
    }


    return (
        <div className="flex justify-center items-center h-screen">
            <Tabs defaultValue="signin" className="w-[400px] ">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="signin">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sign In</CardTitle>
                            <CardDescription>
                                Enter your username and password to sign in.
                            </CardDescription>
                        </CardHeader>
                        <form className="space-y-4" onSubmit={handelSigninSubmit}>
                            <CardContent className="space-y-2">
                                <div className="flex flex-col space-y-2">
                                    <Label className="text-sm font-medium" htmlFor="username">Username</Label>
                                    <Input id="username" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <Label className="text-sm font-medium" htmlFor="password">Password</Label>
                                    <Input id="password" name="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <Toaster />
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" type="submit">Sign In</Button>
                            </CardFooter>
                        </form>
                    </Card>
                </TabsContent>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sign Up</CardTitle>
                            <CardDescription>
                                Enter your username and password to sign up.
                            </CardDescription>
                        </CardHeader>
                        <form className="space-y-4" onSubmit={handelSignupSubmit}>
                            <CardContent className="space-y-2">
                                <div className="flex flex-col space-y-2">
                                    <Label className="text-sm font-medium" htmlFor="username">Username</Label>
                                    <Input id="username" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <Label className="text-sm font-medium" htmlFor="password">Password</Label>
                                    <Input id="password" name="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <Label className="text-sm font-medium" htmlFor="confirmPassword">Confirm Password</Label>
                                    <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                                    <p className="text-xs font-bold text-red-500 mt-2 ml-2">Note: You can only sign up once.</p>
                                </div>
                                <Toaster />
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" type="submit">Sign Up</Button>
                            </CardFooter>
                        </form>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

// const handelSigninSubmit = async (e: any) => {
//     e.preventDefault();

//     setIsLoading(true);
//     if (!username || !password) {

//         setIsLoading(false);
//         return errToast("Please fill all fields!");
//     }

//     try {
//         const res = await fetch("/api/signin", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ username, password }),
//         });

//         if (res.ok) {
//             const form = e.target;
//             form.reset();
//             router.push("/admin/dashboard");
//         } else {
//             setIsLoading(false);
//             return errToast("Invalid username or password!");
//         }

//     } catch (err: any) {
//         console.log(err);
//         setIsLoading(false);
//         return errToast("An error occurred while logging in! " + err.message);
//     }
// }