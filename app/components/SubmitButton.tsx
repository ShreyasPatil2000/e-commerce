"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

interface buttonProps {
  text: string;
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
}

export function SubmitButton({ text, variant }: buttonProps ) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <div>
          <Button disabled variant={variant}>
            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            Please Wait
          </Button>
        </div>
      ) : (
        <Button variant={variant} type="submit">
          {text}
        </Button>
      )}
    </>
  );
}
