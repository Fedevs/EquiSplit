'use client';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';
import ParticipantsList from './ParticipantsList';
import { useStore } from '../store/useStore';
import Welcome from './Welcome';

const steps = [
  'Welcome',
  'Participants',
  'Contributions',
  'Transactions',
];

export default function HorizontalLinearStepper() {
  const { participants, activeStep, setActiveStep } =
    useStore();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const stepComponents: Record<number, JSX.Element> = {
    0: <Welcome />,
    1: <ParticipantsList name={participants[0].name} />,
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
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              pt: 2,
            }}
          >
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          {/* Renderizar aca */}
          {stepComponents[activeStep]}
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

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1
                ? 'Finish'
                : 'Next'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
