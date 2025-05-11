import React from 'react';
import { counterItems } from '../constants';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // only animate once
    threshold: 0.5,     // 30% of the section must be visible
  });

  return (
    <div id='counter' ref={ref} className='padding-x-lg xl:mt-0 mt-52'>
      <div className='mx-auto grid-4-cols'>
        {counterItems.map((item, index) => (
          <div key={index} className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>
            <div className="counter-number text-white text-5xl font-bold mb-2">
              {inView && (
                <CountUp end={item.value} suffix={item.suffix} duration={2} />
              )}
            </div>
            <div className='text-white-50 text-lg'>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
