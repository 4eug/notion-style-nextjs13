'use client';
import Link from 'next/link';
import classNames from 'classnames';
import { Container, HeaderContainer } from '../molecules/container';
import { Button } from '../molecules/button';
import { Menu, X } from 'lucide-react';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Logo } from '../molecules/Icons/logo';

function DesktopNav() {
  return (
    <nav
      className={classNames(
        'fixed left-0 w-full overflow-auto md:relative md:top-0 '
      )}
    >
      <ul
        className={classNames(
          'lg:flex h-full lg:flex-row hidden text-[16px] md:items-center lg:ml-6 gap-8'
        )}
      >
        <li>
          <Link href="#">Pricing</Link>
        </li>
        <li>
          <Link href="#">Resources</Link>
        </li>

        <li>
          <Link href="#">Solutions</Link>
        </li>
        <li>
          <Link href="#">Product</Link>
        </li>
      </ul>
    </nav>
  );
}

function MobileNav() {
  return (
    <Popover>
      <Popover.Button className="group flex items-center lg:hidden">
        <Menu size={24} />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 " />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl border bg-white p-8 "
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <X />
              </Popover.Button>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 flex-col space-y-5 text-[20px]">
                <li>
                  <Link href="#">Pricing</Link>
                </li>
                <li>
                  <Link href="#">Resources</Link>
                </li>

                <li>
                  <Link href="#">Solutions</Link>
                </li>
                <li>
                  <Link href="#">Product</Link>
                </li>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-white">
      <Container>
        <HeaderContainer className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <div className="">
            <DesktopNav />
          </div>

          <div className="ml-auto lg:flex h-full hidden text-[16px] items-center">
            <Link className="mr-6 " href="#">
              Log in
            </Link>
            <Button className="bg-black text-white" size="sm">
              Get Started
            </Button>
          </div>
          <MobileNav />
        </HeaderContainer>
      </Container>
    </header>
  );
};
