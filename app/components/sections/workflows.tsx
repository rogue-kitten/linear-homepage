import { Features } from '../features';
import { Integrations } from '../integrations';

export const Workflows = () => {
  return (
    <div>
      <Features color='' secondaryColor='62,36,118'>
        <h3 className='text-gradient z-[2] mb-4 pb-3 text-center text-7xl font-medium tracking-tight md:mb-11 md:text-9xl'>
          Linear workflows. <br />
          Exponential Results.
        </h3>
        <Integrations />
      </Features>
    </div>
  );
};
