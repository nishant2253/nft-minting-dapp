import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Define variant classes for the image component
const imageVariants = cva("", {
  variants: {
    rounded: {
      true: "rounded-lg", // Apply rounded-lg if rounded is true
    },
  },
  defaultVariants: {
    rounded: false, // Default is not rounded
  },
});

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, VariantProps<typeof imageVariants> {}

// Define the Image component with forwarding ref
const Image = React.forwardRef<HTMLImageElement, ImageProps>(({ className, rounded, ...props }, ref) => {
  return (
    <img
      className={cn(imageVariants({ rounded, className }))}
      ref={ref}
      {...props} // Spread the remaining props to the img element
    />
  );
});

Image.displayName = "Image"; // Set display name for debugging

export { Image, imageVariants };
