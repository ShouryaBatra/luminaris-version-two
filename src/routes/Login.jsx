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

function Login() {
  const { loginWithEmail, error } = useAuth();
  console.log(error);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "johndoe@gmail.com",
      password: "password1234",
    },
  });

  async function onSubmit(values) {
    try {
      await loginWithEmail({ email: values.email, password: values.password });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: normalizedError(error)?.code,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}

export default Login;
