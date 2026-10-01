import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/theme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-0 rounded-full border border-default bg-surface p-0.5 shadow-sm sm:gap-1 sm:p-1">
      <Button
        size="sm"
        variant={theme === "light" ? "primary" : "ghost"}
        isIconOnly
        className="size-8 min-w-8 p-0 sm:size-9 sm:min-w-9"
        onPress={() => setTheme("light")}
      >
        <Sun className="size-4" />
      </Button>
      <Button
        size="sm"
        variant={theme === "dark" ? "primary" : "ghost"}
        isIconOnly
        className="size-8 min-w-8 p-0 sm:size-9 sm:min-w-9"
        onPress={() => setTheme("dark")}
      >
        <Moon className="size-4" />
      </Button>
    </div>
  );
}
