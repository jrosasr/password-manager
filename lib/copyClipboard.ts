import { toast } from "@/components/ui/use-toast";

export const copyClipboard = (value: string, name?: string) => {
    navigator.clipboard.writeText(value);
    toast({
        title: `✓ ${name ?? "Copiado!"}`,
    }) 
}