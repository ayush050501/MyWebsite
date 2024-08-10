import React from 'react';
import ToggleMode from '@/components/mode-toggle';
import ThemeSwitcher from '@/components/themes';
import { Separator } from '@/components/ui/separator';
const Header = () => {
    return (
        <>
            <div className="flex flex-col h-[60px]">
                <div className="flex items-center h-full justify-end gap-2 mx-4">
                    <ToggleMode />
                    <ThemeSwitcher />
                </div>
                <Separator/>
            </div>
        </>
    );
};

export default Header;
