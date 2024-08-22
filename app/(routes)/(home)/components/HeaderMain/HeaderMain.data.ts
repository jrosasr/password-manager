import { Folder, KeyRound } from "lucide-react";
import { DataHeaderMainItemProps } from "./HeaderMain.types";

export const dataHeaderMain: DataHeaderMainItemProps[] = [
    {
        icon: KeyRound,
        text: "Contraseña",
        typeElement: 'password'
    },
    {
        icon: Folder,
        text: "Carpeta",
        typeElement: 'folder'
    },
];