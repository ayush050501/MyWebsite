import React from 'react';
import ToggleMode from '@/components/mode-toggle';
import ThemeSwitcher from '@/components/themes';
import { Separator } from '@/components/ui/separator';
import SideNav from '../sideNav';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';
const Header = () => {
    return (
        <>
            <div className="flex flex-col h-[60px]">
                <div className="flex items-center h-full justify-between gap-2 mx-4">
                    <div>
                        <Sheet>
                            <SheetTrigger className="sm:hidden">
                                <Menu className="h-5 w-5 text-primary" />
                            </SheetTrigger>
                            <SheetContent>
                                <SideNav />
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="flex items-center h-full justify-end gap-2 mx-4">
                        <ToggleMode />
                        <ThemeSwitcher />
                    </div>
                </div>
                <Separator />
            </div>
        </>
    );
};

export default Header;
