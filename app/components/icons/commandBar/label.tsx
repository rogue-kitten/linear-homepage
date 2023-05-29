import classNames from 'classnames';

type LabelType = 'bug' | 'feature' | 'improvement';

const typeClassNames = {
  bug: 'bg-[#eb5757]',
  feature: 'bg-[#bb87fc]',
  improvement: 'bg-[#4da7fc]',
};

export const LabelIcon = ({ type }: { type: LabelType }) => (
  <div
    className={classNames(
      'pointer-events-none flex h-[0.9rem] w-[0.9rem] select-none items-center justify-center rounded-full',
      typeClassNames[type]
    )}
  />
);
