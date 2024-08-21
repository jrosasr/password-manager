"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";
import { copyClipboard } from "@/lib/copyClipboard";
import { Element } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Copy, MoreHorizontal, User } from "lucide-react";

export type ColumnProps = Element;

export const columns: ColumnDef<ColumnProps>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "typeElement",
    header: "Tipo de elemento",
  },
  {
    accessorKey: "urlWebsite",
    header: "Url del sitio web",
  },
  {
    accessorKey: "directory",
    header: "Directorio",
  },
  {
    accessorKey: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      const password = row.original.password;
      const username = row.original.username;

      const onEditElement = () => {
        window.location.href = `/element/${row.original.id}`
      };

      return (
        <div className="flex justify-center items-center gap-2">
          {password && (
            <Copy
              className="w-4 h-4 cursor-pointer"
              onClick={() => copyClipboard(password, "Contraseña copiada!")}
            />
          )}
          {username && (
            <User
              className="w-4 h-4 cursor-pointer"
              onClick={() => copyClipboard(username, "Usuario copiado!")}
            />
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-0 w-8 h-8">
                <span className="sr-only">Abrir Menu</span>
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                Acciones
              </DropdownMenuLabel>
              <DropdownMenuItem onClick={onEditElement}>Editar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
