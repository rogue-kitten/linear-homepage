'use client';
import classNames from 'classnames';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AddLabels,
  AssignToIcon,
  BacklogIcon,
  ChangePriorityIcon,
  ChangeStatusIcon,
  DoneIcon,
  HighIcon,
  InProgressIcon,
  LabelIcon,
  LowIcon,
  MediumIcon,
  NoPriorityIcon,
  PersonIcon,
  TodoIcon,
  UrgentIcon,
} from './icons/commandBar';

const commandOptions = [
  {
    label: 'Assign to..',
    icon: AssignToIcon,
    subOptions: [
      { label: 'Jori', icon: PersonIcon },
      { label: 'Karri', icon: PersonIcon },
      { label: 'Tuomas', icon: PersonIcon },
    ],
  },
  {
    label: 'Change status...',
    icon: ChangeStatusIcon,
    subOptions: [
      { label: 'Backlog', icon: BacklogIcon },
      { label: 'Todo', icon: TodoIcon },
      { label: 'In Progress', icon: InProgressIcon },
      { label: 'Done', icon: DoneIcon },
    ],
  },
  {
    label: 'Change priority...',
    icon: ChangePriorityIcon,
    subOptions: [
      { label: 'No priority', icon: NoPriorityIcon },
      { label: 'Urgent', icon: UrgentIcon },
      { label: 'High', icon: HighIcon },
      { label: 'Medium', icon: MediumIcon },
      { label: 'Low', icon: LowIcon },
    ],
  },
  {
    label: 'Add labels...',
    icon: AddLabels,
    subOptions: [
      { label: 'Bug', icon: () => <LabelIcon type='bug' /> },
      { label: 'Feature', icon: () => <LabelIcon type='feature' /> },
      { label: 'Improvement', icon: () => <LabelIcon type='improvement' /> },
    ],
  },
] as const;

export const CommandMenu = () => {
  const commandMenuRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  useEffect(() => {
    const toggleState = (e: MouseEvent) => {
      const isMenuButton =
        e.target instanceof Element &&
        (e.target.classList.contains('command-menu') ||
          e.target.parentElement?.classList.contains('command-menu'));

      const clickedInside =
        isMenuButton || commandMenuRef.current?.contains(e.target as Node);

      setOpened(clickedInside ? true : false);

      // if the user clicks outside, then set the state back to the home state
      if (!clickedInside) setSelectedOption(null);
    };

    window.addEventListener('click', toggleState);

    return () => {
      window.removeEventListener('click', toggleState);
    };
  }, []);

  const currentOption = useMemo(() => {
    const options =
      selectedOption === null
        ? commandOptions
        : commandOptions[selectedOption].subOptions;

    if (searchValue === '') return options;

    return [...options].filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [selectedOption, searchValue]);

  return (
    <div
      ref={commandMenuRef}
      className={classNames(
        'shadow-[rgba(0,0,0,0.35)_0px_7px_32px;] absolute left-1/2 flex w-[90vw] max-w-[64rem] -translate-x-1/2 flex-col items-start rounded-lg border border-white-a10 bg-white-a10 transition-[transform,opacity] duration-200',
        opened
          ? 'opened translate-y-6 opacity-100'
          : 'translate-y-[12.8rem] opacity-60'
      )}
    >
      <span className='ml-4 mr-2 mt-2 rounded-md bg-white-a05 px-2 text-xs leading-10 text-white-a50'>
        LIN-111 Walkway lighting
      </span>
      <input
        className='w-full bg-transparent p-5 text-lg outline-none'
        placeholder='Type a command to search...'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className='flex w-full flex-col text-sm'>
        {currentOption.map(({ label, icon: Icon, ...props }, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              // if the modal is not open, don't do anything, wait for it to open
              // event would then bubble up to the document and then the modal will open
              if (!opened) return;

              const clickedRoot = 'subOptions' in props;
              setSelectedOption(clickedRoot ? idx : null);
              if (!clickedRoot) {
                setOpened(false);
                // stopping this event from bubbling up to the window since we already have attached an onclick handler to that event. We do this to prevent the menu from reopening again
                e.stopPropagation();
              }
            }}
            className='command-menu flex h-[4.8rem] items-center gap-3 px-5 text-white first:bg-white-a15 hover:bg-white-a05'
          >
            <Icon />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};
