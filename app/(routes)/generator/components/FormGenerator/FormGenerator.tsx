"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { copyClipboard } from "@/lib/copyClipboard";
import { Copy, Shuffle } from "lucide-react";
import { useEffect, useState } from "react";
import { PasswordGenerator } from "./PasswordGenerator";
import { UserGenerator } from "../UserGenerator";
import { generateCustomPassword } from "@/lib/generateCustomPassword";
import { generateRandomUser } from "@/lib/generateRandomUser";
import { generateRandomEmail } from "@/lib/generateRandomEmail";

export function FormGenerator() {
  const [itemValueInput, setItemValueInput] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<
    "password" | "user" | string
  >("password");

  const [userTypeSelected, setUserTypeSelected] = useState<string>("username");

  const [lengthPassword, setLengthPassword] = useState<number>(11);
  const [isMayusSelected, setIsMayusSelected] = useState<boolean>(true);
  const [isMinusSelected, setIsMinusSelected] = useState<boolean>(true);
  const [isSpecialCharacters, setIsSpecialCharacters] = useState<boolean>(true);
  const [isNumberSelected, setIsNumberSelected] = useState<boolean>(true);

  useEffect(() => {
    if (selectedValue === "password") {
      const newPassword = generateCustomPassword({
        length: lengthPassword,
        mayus: isMayusSelected,
        minus: isMinusSelected,
        specialCharacters: isSpecialCharacters,
        numbers: isNumberSelected,
      });

      setItemValueInput(newPassword);
    }
  }, [
    lengthPassword,
    isMayusSelected,
    isMinusSelected,
    isNumberSelected,
    isSpecialCharacters,
    selectedValue,
  ]);

  useEffect(() => {
    let newInputValue = "";

    if (selectedValue === "user") {
      newInputValue = generateRandomUser();
    }
    if (userTypeSelected === "email") {
      newInputValue = generateRandomEmail();
    }

    setItemValueInput(newInputValue);
  }, [
    selectedValue,
    userTypeSelected
  ]);

  const handleShuffleClick = () => {
    let newItemValueInput = ''

    if (selectedValue === "password") {
      newItemValueInput = generateCustomPassword({
        length: lengthPassword,
        mayus: isMayusSelected,
        minus: isMinusSelected,
        specialCharacters: isSpecialCharacters,
        numbers: isNumberSelected,
      });
  
    } else if (selectedValue === "user") {
      if (userTypeSelected === 'email') {
        newItemValueInput = generateRandomEmail()
      } else if(userTypeSelected === 'username') {
        newItemValueInput = generateRandomUser();
      }
    }
    setItemValueInput(newItemValueInput);
  };

  return (
    <div className="mt-5 max-w-2xl">
      <div className="relative w-full">
        <Input
          placeholder="input..."
          value={itemValueInput}
          onChange={() => {}}
        />
        <Copy
          className="top-[.6rem] right-12 absolute w-5 h-5 cursor-pointer"
          onClick={() => copyClipboard(itemValueInput)}
        />
        <Shuffle
          className="top-[.6rem] right-3 absolute w-5 h-5 cursor-pointer"
          onClick={handleShuffleClick}
        />
      </div>
      <div className="bg-slate-100 shadow-md my-4 p-4 rounded-md">
        <p className="mb-2">Que quieres generar?</p>
        <RadioGroup
          defaultValue="password"
          onValueChange={(value) => setSelectedValue(value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="password" id="r1" />
            <Label htmlFor="r1">Password</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="user" id="r2" />
            <Label htmlFor="r2">Usuario</Label>
          </div>
        </RadioGroup>
      </div>
      {selectedValue === "password" && (
        <PasswordGenerator
          lengthPassword={lengthPassword}
          setLengthPassword={setLengthPassword}
          isMayusSelected={isMayusSelected}
          setIsMayusSelected={setIsMayusSelected}
          isMinusSelected={isMinusSelected}
          setIsMinusSelected={setIsMinusSelected}
          isSpecialCharacters={isSpecialCharacters}
          setIsSpecialCharacters={setIsSpecialCharacters}
          isNumberSelected={isNumberSelected}
          setIsNumberSelected={setIsNumberSelected}
        />
      )}

      {selectedValue === "user" && (
        <UserGenerator setUserTypeSelected={setUserTypeSelected} />
      )}
    </div>
  );
}
