import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

function Skeleton({
  className,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "rounded-md bg-stone-200/60 dark:bg-stone-800/60",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
