'use client';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { ReactNode } from 'react';
import { useStore } from '../store/useStore';
import Welcome from './Welcome';
import ParticipantManager from './ParticipantManager/ParticipantManager';
import Transactions from './Transactions';

const steps = [
  'Welcome',
  'Add Participants and contributions',
  'Transactions',
];

export default function HorizontalLinearStepper() {
  const { activeStep, setActiveStep } = useStore();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const stepOptions: Record<
    number,
    { component: JSX.Element; buttonText: string }
  > = {
    0: {
      component: <Welcome />,
      buttonText: 'Add participants',
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
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: ReactNode;
          } = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                sx={{ flexDirection: 'column', gap: '2px' }}
                {...labelProps}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <>
        {stepOptions[activeStep].component}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            pt: 2,
          }}
        >
          <Button
            color='inherit'
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />

          <Button
            onClick={
              activeStep === steps.length - 1
                ? handleReset
                : handleNext
            }
          >
            {stepOptions[activeStep].buttonText}
          </Button>
        </Box>
      </>
    </Box>
  );
}
