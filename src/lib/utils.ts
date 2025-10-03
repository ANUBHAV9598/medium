import clsx from "clsx";

// Optionally, add type support for Tailwind or extra functionality
export const cn = (...classes: (string | undefined | false | null)[]) => {
    return clsx(...classes);
};
