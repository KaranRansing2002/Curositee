import { Button } from "@/components/ui/button"
import {Link} from 'react-router-dom'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import * as React from 'react'
function Login() {
    return (
        <div className= 'md:h-screen flex items-center justify-center'>
            <Card>
                <CardHeader>
                    <CardTitle>
                        <h1>Login</h1>
                    </CardTitle>
                    <CardDescription>
                        <p>New user <Link to="/register">Register here</Link> </p>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full max-w-sm items-center gap-1.5 p-1">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 p-1">
                        <Label htmlFor="email">Password</Label>
                        <Input type="password" id="email" placeholder="Password" />
                    </div>
                    
                </CardContent>
                <CardFooter>
                    <Button>Login</Button>
                </CardFooter>
            </Card>
        </div >
    )
}
export default Login;
