import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import { Mail } from "lucide-react";
import PasswordIcon from "@/icons/passwordIcon";
import { login } from "@/services/user";
import { UserContext } from "@/App";

function Login() {
  const [user, setUser] = React.useState({});
  const navigate = useNavigate();
  const {setLoggedUser} = React.useContext(UserContext);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((u) => ({
      ...u,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (Object.keys(user).length !=2 ) {
      toast.error("empty fields!");
      return;
    }
    let valid = true;
    Object.keys(user).map((k) => {
      if (user[k].length == 0) {
        toast.error(`empty field ${k} !`);
        valid = false;
      }
    });

    try {
      const resp = await login(user);
      if (resp.data.status == "success") {
          toast.success(resp.data.message);
          sessionStorage.setItem('user',JSON.stringify(resp.data.data));
          const token = resp.data.data.token;
          sessionStorage.setItem('token',token);
          setLoggedUser(resp.data.data);
          navigate("/");
          return;
      } else toast.error(resp.message);
    } catch (error) {
      const message = error?.response?.data?.message
      console.log(message);
      toast.error(message ? message : "something went wrong!" );
    }
  };

  return (
    <form className="md:h-[530px] flex items-center justify-center">
      <Card className="shadow-yellow-400 shadow-xl px-16">
        <CardHeader>
          <CardTitle>
            <h4>Login</h4>
          </CardTitle>
          <CardDescription>
            <section>
              New user{" "}
              <Link to="/register" className="text-blue-400">
                Register here
              </Link>{" "}
            </section>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center gap-2">
            <Mail />
            <Input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              onChange={handleInput}
            />
          </div>
          <div className="flex items-center gap-2">
            <PasswordIcon />
            <Input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" onClick={handleSubmit}>Login</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
export default Login;
