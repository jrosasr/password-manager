"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { dataHeaderMain } from "./HeaderMain.data";
import { useState } from "react";
import { FormAddElement } from "../FormAddElement";
import { HeaderMainProps } from "./HeaderMain.types";

export function HeaderMain(props: HeaderMainProps) {
  const { userId } = props;
  const [typeElement, setTypeElement] = useState<'password' | 'folder' | ''>();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const closeDialogAndDropdown = () => {
      setOpenDialog(false);
      setOpenDropdown(false);
  }
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-semibold text-xl md:text-3xl">
        Todas las cajas fuertes
      </h1>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
          <DropdownMenuTrigger asChild>
            <Button>
              Nueva <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-0">
            <DropdownMenuLabel>
              <DialogTrigger asChild>
                <div className="flex flex-col">
                  {dataHeaderMain.map(({ icon: Icon, text, typeElement }) => (
                    <Button
                      key={text}
                      className="justify-start"
                      variant="ghost"
                      onClick={() => setTypeElement(typeElement)}
                    >
                      <Icon className="mr-2 w-4 h-4" />
                      {text}
                    </Button>
                  ))}
                </div>
              </DialogTrigger>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent className="sm:max-w-[825px] h-[85vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>Nueva caja fuerte</DialogTitle>
          </DialogHeader>
          {typeElement === 'password' && <FormAddElement userId={userId} closeDialog={closeDialogAndDropdown} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
