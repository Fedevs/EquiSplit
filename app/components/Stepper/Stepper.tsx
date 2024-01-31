'use client';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useStore } from '@/app/store/useStore';
import Welcome from '@/app/components/Welcome/Welcome';
import ParticipantManager from '@/app/components/ParticipantManager/ParticipantManager';
import Transactions from '@/app/components/Transactions/Transactions';

const steps = [
  'Welcome',
  'Add information',
  'Transactions',
];

export default function HorizontalLinearStepper() {
  const { activeStep, setActiveStep, reset } = useStore();
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 480);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [isMobile]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    reset();
  };

  const stepOptions: Record<
    number,
    { component: JSX.Element; buttonText: string }
  > = {
    0: {
      component: <Welcome />,
      buttonText: 'Next',
    },
    1: {
      component: <ParticipantManager />,
      buttonText: 'Calculate',
    },
    2: {
      component: <Transactions />,
      buttonText: 'Restart',
    },
  };

  return (
    <Box
      sx={{ width: '100%' }}
      data-testid='stepper'
      className='relative py-4 flex flex-col justify-between'
    >
      <div className='flex flex-col gap-5'>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel />
              </Step>
            );
          })}
        </Stepper>
        <div className='w-full mb-[70px]'>
          {stepOptions[activeStep].component}
        </div>
      </div>

      <Box className='fixed m-0 bottom-0 flex justify-around items-center w-full max-w-screen-md bg-white z-2 py-3'>
        <Button
          className=''
          color='inherit'
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>

        <Button
          className='transition duration-300 ease text-white bg-blue-500 hover:bg-gray-700 rounded-lg text-sm px-5 py-2.5'
          onClick={
            activeStep === steps.length - 1
              ? handleReset
              : handleNext
          }
        >
          {stepOptions[activeStep].buttonText}
        </Button>
      </Box>
    </Box>
  );
}
