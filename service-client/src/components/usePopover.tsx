import { Popover, Transition } from "@headlessui/react";

export default function usePopover({ btn, children }: any) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button>{btn}</Popover.Button>

          {open && (
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Popover.Panel className="absolute z-10">
                {children}
              </Popover.Panel>
            </Transition>
          )}
        </>
      )}
    </Popover>
  );
}
