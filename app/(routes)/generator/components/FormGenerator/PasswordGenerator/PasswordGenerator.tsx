import { Checkbox } from "@/components/ui/checkbox";
import { PasswordGeneratorProps } from "./PasswordGenerator.types";
import { Label } from "@/components/ui/label";

export function PasswordGenerator(props: PasswordGeneratorProps) {
  const {
    isMayusSelected,
    isMinusSelected,
    isSpecialCharacters,
    isNumberSelected,
    lengthPassword,
    setLengthPassword,
    setIsMayusSelected,
    setIsMinusSelected,
    setIsSpecialCharacters,
    setIsNumberSelected,
  } = props;

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLengthPassword(Number(e.target.value));
  };

  return (
    <>
      <div className="flex items-center gap-2 bg-slate-100 shadow-md p-4 rounded-md w-full">
        <label className="block min-w-32 font-medium text-gray-700 text-sm">
          Longitud: {lengthPassword}
        </label>
        <input
          type="range"
          id="range"
          min={8}
          max={50}
          className="bg-gray-200 rounded-md w-full h-2 cursor-pointer appearance-none"
          value={lengthPassword}
          onChange={handleRangeChange}
        />
      </div>
      <div>
        <div className="flex items-center space-x-2 bg-slate-100 shadow-md my-4 p-4 rounded-md">
          <Checkbox
            id="mayus"
            checked={isMayusSelected}
            onClick={() => setIsMayusSelected((prev) => !prev)}
          />
          <label
            htmlFor="mayus"
            className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed"
          >
            Mayúsculas A-Z
          </label>
        </div>
        <div className="flex items-center space-x-2 bg-slate-100 shadow-md my-4 p-4 rounded-md">
          <Checkbox
            id="minus"
            checked={isMinusSelected}
            onClick={() => setIsMinusSelected((prev) => !prev)}
          />
          <label
            htmlFor="minus"
            className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed"
          >
            Minúsculas a-z
          </label>
        </div>
        <div className="flex items-center space-x-2 bg-slate-100 shadow-md my-4 p-4 rounded-md">
          <Checkbox
            id="numbers"
            checked={isNumberSelected}
            onClick={() => setIsNumberSelected((prev) => !prev)}
          />
          <label
            htmlFor="numbers"
            className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed"
          >
            Numeros 0-9
          </label>
        </div>
        <div className="flex items-center space-x-2 bg-slate-100 shadow-md my-4 p-4 rounded-md">
          <Checkbox
            id="special"
            checked={isSpecialCharacters}
            onClick={() => setIsSpecialCharacters((prev) => !prev)}
          />
          <label
            htmlFor="special"
            className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed"
          >
            Caracteres especiales !@#$%&*
          </label>
        </div>
      </div>
    </>
  );
}
