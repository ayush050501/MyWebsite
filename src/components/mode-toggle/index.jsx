import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useTheme } from '@/components/theme-provider';

const ToggleMode = () => {
    const { setTheme } = useTheme();
    return (
        <>
            <Button variant="ghost" size="icon">
                <Sun
                    className="h-[1.2rem] w-[1.2rem] text-primary rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 "
                    onClick={() => setTheme('dark')}
                />
                <Moon
                    className="absolute h-[1.2rem] w-[1.2rem] text-primary rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    onClick={() => setTheme('light')}
                />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </>
    );
};

export default ToggleMode;
