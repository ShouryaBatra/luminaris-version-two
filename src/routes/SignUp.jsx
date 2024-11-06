import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAuth from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { normalizedError } from "../../src/utils";
import { authenticateUser, signUpNewUser } from "@/services/auth";
import { Link, useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z
    .string()
    .min(2, { message: "Email must contain at least 2 character(s)" })
    .max(50),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 character(s)" })
    .max(50),
});

function SignUp() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "johndoe@gmail.com",
      password: "password1234",
    },
  });

  async function onSubmit(values) {
    setIsLoading(true);
    setError(null);
    try {
      await signUpNewUser({
        email: values.email,
        password: values.password,
      });
      navigate("/");
    } catch (error) {
      setError(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: normalizedError(error)?.code,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="e.g johndoe@gmail.com." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="more than 8 characters." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading} type="submit">
            {isLoading ? "Loading..." : "Sign Up"}
          </Button>
          {error && <p className="text-red-500">{error.message}</p>}
        </form>
      </Form>

      <Link to="/login">
        <p>Already have an account?</p>
      </Link>
    </>
  );
}

export default SignUp;
