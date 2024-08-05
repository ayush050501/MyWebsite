import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function ThemeSwitcher() {
  const [colorTheme, setColorTheme] = useState('default');

  useEffect(() => {
    document.documentElement.classList.remove('theme-orange', 'theme-blue');
    if (colorTheme !== 'default') {
      document.documentElement.classList.add(`theme-${colorTheme}`);
    }
  }, [colorTheme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Change Theme
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setColorTheme('default')}>
          Default Theme
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorTheme('orange')}>
          Orange Theme
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorTheme('blue')}>
          Blue Theme
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default ThemeSwitcher;