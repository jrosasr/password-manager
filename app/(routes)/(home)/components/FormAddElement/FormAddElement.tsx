"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "./FormAddElement.form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Copy, Earth, Eye, Shuffle } from "lucide-react";
import { copyClipboard } from "@/lib/copyClipboard";
import { useState } from "react";
import { generatePassword } from "@/lib/generatePassword";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { FormAddElementProps } from "./FormAddElement.types";

export function FormAddElement(props: FormAddElementProps) {
  const { userId } = props;
  
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
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
      userId,
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/items", values);
      toast({
        title: "Elemento creado correctamente",
      });

      form.reset({
        typeElement: "",
        isFavourite: false,
        name: "",
        directory: "",
        username: "",
        password: "",
        urlWebsite: "",
        notes: "",
      });

      router.refresh();
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  const generateRandomPassword = () => {
    const password = generatePassword();
    form.setValue("password", password);
  };

  const updateUrl = () => {
    form.setValue("urlWebsite", window.location.href);
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
                      <SelectValue placeholder="Seleccione un tipo de elemento para su contraseña" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Inicio de sesión">
                      Inicio de sesión
                    </SelectItem>
                    <SelectItem value="Tarjeta">Tarjeta</SelectItem>
                    <SelectItem value="Identidad">Identidad</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isFavourite"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Quieres seleccionar tu contrasena como favorita?
                </FormLabel>
                <div className="flex flex-row items-start space-x-3 space-y-0 py-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value ? true : false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Marcar como favorito</FormLabel>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="directory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Directorio</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Elige el directorio" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Social">Social</SelectItem>
                    <SelectItem value="Arts">Arts</SelectItem>
                    <SelectItem value="Shopping">Shopping</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuario</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input {...field} />
                    <Copy
                      className="top-3 right-2 absolute cursor-pointer"
                      size={18}
                      onClick={() => {
                        copyClipboard(field.value);
                      }}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="urlWebsite"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Url del sitio</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input {...field} />
                    <Earth
                      className="top-3 right-2 absolute cursor-pointer"
                      size={18}
                      onClick={updateUrl}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-between">
                  Contraseña
                  <Shuffle
                    className="cursor-pointer"
                    size={15}
                    onClick={generateRandomPassword}
                  />
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                    />
                    <Eye
                      className="top-3 right-10 absolute cursor-pointer"
                      size={18}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                    <Copy
                      className="top-3 right-2 absolute cursor-pointer"
                      size={18}
                      onClick={() => {
                        copyClipboard(field.value);
                      }}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <div>
            <div className="flex justify-between items-center text-slate-400 text-sm">
              Autenticación TOTP
              <p className="bg-green-700 mr-5 px-3 rounded-lg text-white text-xs">
                Premium
              </p>
            </div>
            <Input disabled />
          </div>

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-between">Notas</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <div />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
