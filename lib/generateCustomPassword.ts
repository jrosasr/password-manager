export type PasswordOptions = {
  length: number;
  mayus: boolean;
  minus: boolean;
  numbers: boolean;
  specialCharacters: boolean;
};

export const generateCustomPassword = (props: PasswordOptions) => {
  const { length, mayus, minus, numbers, specialCharacters } = props;

  const mayusCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusCharset = "abcdefghijklmnopqrstuvwxyz";
  const numbersCharset = "0123456789";
  const specialCharactersCharset = "!@#$%^&*()_+~`|{}[]:;?><,./-=";

  let charset = "";
  if (mayus) charset += mayusCharset;
  if (minus) charset += minusCharset;
  if (numbers) charset += numbersCharset;
  if (specialCharacters) charset += specialCharactersCharset;

  let password = "";

  if (mayus)
    password += mayusCharset.charAt(
      Math.floor(Math.random() * mayusCharset.length)
    );
  if (minus)
    password += minusCharset.charAt(
      Math.floor(Math.random() * minusCharset.length)
    );
  if (numbers)
    password += numbersCharset.charAt(
      Math.floor(Math.random() * numbersCharset.length)
    );
  if (specialCharacters)
    password += specialCharactersCharset.charAt(
      Math.floor(Math.random() * specialCharactersCharset.length)
    );

  for (let i = password.length; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  password = password.split("").sort(() => Math.random() - 0.5).join("");

  return password;
};
