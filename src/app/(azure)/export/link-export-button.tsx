"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/use-clipboard";
import { cn } from "@/lib/utils";
import { CopyIcon, ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

const LinkExportButton = ({
  className,
  ...props
}: React.PropsWithChildren<{
  link: string;
  className?: string;
}>) => {
  const copy = useCopyToClipboard();
  return (
    <div className={cn("flex", className)}>
      <Link
        className={cn(
          buttonVariants({
            variant: "outline",
            className: "rounded-r-none bg-gray-100",
          })
        )}
        href={props.link}
        target="_blank"
      >
        <ExternalLink />
        {props.children}
      </Link>
      <Button
        variant="outline"
        size="icon"
        className="rounded-l-none border-l-0 bg-gray-100"
        onClick={() => {
          copy(props.link);
        }}
      >
        <CopyIcon />
      </Button>
    </div>
  );
};

LinkExportButton.displayName = "LinkExportButton";
export default LinkExportButton;
