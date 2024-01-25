import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

import logoNavBar from '../images/home/Module 1 - Header 970x60025.png'

function Navbar() {
    return (
        <nav className="flex flex-col items-center">

            <div className="flex flex-row bg bg-white items-center">
                <img src={logoNavBar} alt='Logo' />
                <input type='text' className='h-[30px] p-1 border-2 border-gray-400 rounded-lg' />
            </div>

            <div className="flex flex-row bg-[#389CD6] justify-around w-full">
                <Menu >
                    <MenuHandler className='bg-transparent'>
                        <Button>About Us</Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>Brand Philosophy</MenuItem>
                        <MenuItem>Product Technology</MenuItem>
                    </MenuList>
                </Menu>

                <Menu >
                    <MenuHandler className='bg-transparent'>
                        <Button>Our Products</Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>All Products</MenuItem>
                        <MenuItem>Intibiome Wellness</MenuItem>
                        <MenuItem>Intibiome Active</MenuItem>
                        <MenuItem>Intibiome Agrecar</MenuItem>
                    </MenuList>
                </Menu>

                <Menu >
                    <MenuHandler className='bg-transparent'>
                        <Button>Intimate Health</Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>Article 1</MenuItem>
                        <MenuItem>Article 2</MenuItem>
                        <MenuItem>Article 3</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                    </MenuList>
                </Menu>

                <Menu >
                    <MenuHandler className='bg-transparent'>
                        <Button>Contact Us</Button>
                    </MenuHandler>
                </Menu>

            </div>

        </nav>
    );
}

export default Navbar;
