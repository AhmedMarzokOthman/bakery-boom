import { Button } from "./ui/button";

import { Input } from "./ui/input";

import { Label } from "@radix-ui/react-label";
export default function LoginForm() {

    return (
        <div className={`dark:text-white scroll-smooth flex justify-center items-center h-screen mr-10 ml-10`}>
            <div className="w-[400px] border border-gray-300 rounded-md p-4 space-y-4">
                <h1 className="text-2xl font-semibold">Account</h1>
                <h4 className="text-sm text-gray-500">Enter the admin username and password to access the admin page.</h4>

                <form className="space-y-4" action="">
                    <div className="flex flex-col space-y-2">
                        <Label className="text-sm font-medium" htmlFor="username">Username</Label>
                        <Input id="username" name="username" placeholder="Username" />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <Label className="text-sm font-medium" htmlFor="password">Password</Label>
                        <Input id="password" name="password"  type="password" placeholder="Password" />
                    </div>

                    <Button className="w-full">Login</Button>
                </form>
            </div>
        </div>
    );
}