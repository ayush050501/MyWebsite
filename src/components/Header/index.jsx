import React from 'react';
import { Button } from '@/components/ui/button';
import ToggleMode from '@/components/mode-toggle';
import ThemeSwitcher from '@/components/themes';
const Header = () => {
    return (
        <>
            <div className="flex justify-between items-center h-full mx-4">
                <Button>ayush</Button>
                <div className="flex items-center h-full gap-2">
                    <ToggleMode />
                    <ThemeSwitcher />
                </div>
            </div>
        </>
    );
};

export default Header;
