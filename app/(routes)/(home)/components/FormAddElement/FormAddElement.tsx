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
import { formSchema } from "./FormAddElement.form";
import { z } from "zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function FormAddElement() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      typeElement: "",
      isFavourite: false,
      name: "",
      directory: "",
      username: "",
      password: "",
      urlWebsite: "",
      notes: "",
      userId: "asdasd-asdasda",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-x-4 gap-y-2 grid md:grid-cols-2"
        >
          <FormField
            control={form.control}
            name="typeElement"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Que tipo de elemento necesitas?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a directory for your password" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Inicio de sesión">
                      Inicio de sesión
                    </SelectItem>
                    <SelectItem value="Tarjeta">
                      Tarjeta
                    </SelectItem>
                    <SelectItem value="Identidad">
                      Identidad
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
