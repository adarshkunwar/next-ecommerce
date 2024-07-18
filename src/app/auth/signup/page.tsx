"use client";
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
import { toast } from "@/components/ui/use-toast";
import Layout from "@/components/shared-components/Layout";
import Image from "next/image";
import {
  SignInFormDefaultValues,
  SignInFormField,
  signInFormSchema,
  TSignInFormSchema,
} from "@/models/sign-in.model";

export default function SingUp() {
  return (
    <Layout>
      <div className="grid grid-cols-3  gap-5 w-10/12 mx-auto h-full">
        <section className="col-span-2">
          <div className="flex aspect-video items-center justify-center p-2 w-full h-full">
            <Image
              width={900}
              height={900}
              src={
                "https://images.unsplash.com/photo-1720983685929-3ed3309aed63?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="heroImage"
            />
          </div>
        </section>
        <section className="w-full h-full flex items-center justify-center">
          <InputForm />
        </section>
      </div>
    </Layout>
  );
}

const InputForm = () => {
  const form = useForm<TSignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: SignInFormDefaultValues,
  });

  // TODO: find the replacement for any
  function onSubmit(data: TSignInFormSchema) {
    // toast({
    // 	title: "You submitted the following values:",
    // 	description: (
    // 		<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    // 			<code className="text-white">{JSON.stringify(data, null, 2)}</code>
    // 		</pre>
    // 	),
    // });
    console.log(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {SignInFormField.map((formField, index) => (
          <FormField
            key={index}
            control={form.control}
            name={formField.name}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>{formField.label}</FormLabel>
                <FormControl>
                  <Input
                    type={formField.type}
                    placeholder={formField.placeholder}
                    required={formField.required}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        ))}
      </form>
    </Form>
  );
};
