import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UserGeneratorProps } from "./UserGenerator.types";
import { Label } from "@/components/ui/label";

export function UserGenerator(props: UserGeneratorProps) {
    const { setUserTypeSelected } = props;

    return (
        <div className="bg-slate-100 shadow-md p-4 rounded-md">
            <p className="mb-4 text-slate-400">Que quieres generar?</p>
            <RadioGroup defaultValue="username" onValueChange={(value) => setUserTypeSelected(value)}>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="username" id="r3" />
                    <Label htmlFor="r3">Usuario</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="r4" />
                    <Label htmlFor="r4">Correo electrónico</Label>
                </div>
            </RadioGroup>
        </div>
    );
}