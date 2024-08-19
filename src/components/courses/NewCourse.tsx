'use client';

import { useEffect, useState } from 'react';

import { useLayoutContext } from '../../../context/LayoutContext';
import { Certification } from './course-creation/Certification';
import { Completed } from './course-creation/completed';
import { Curriculum } from './course-creation/curriculum/curriculum';
import { Finish } from './course-creation/finish';
import { CourseOverview } from './course-creation/overview';
import { Price } from './course-creation/price';
import { Resources } from './course-creation/resources/resources';

export type CourseCreationStep =
  | 'overview'
  | 'curriculum'
  | 'resources'
  | 'cert-template'
  | 'pricing'
  | 'finish'
  | 'completed';

export const NewCourse = () => {
  const { dispatch } = useLayoutContext();

  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'defaultSidebar' });
  }, [dispatch]);

  const [step, setStep] = useState<CourseCreationStep>('overview');

  const updateStep = (newStep: CourseCreationStep) => {
    setStep(newStep);
  };

  return (
    <>
      <div>
        <div className="steps">
          {<RenderStep updateStep={updateStep} step={step} />}
        </div>
      </div>
    </>
  );
};

const RenderStep = ({
  step,
  updateStep,
}: {
  step: CourseCreationStep;
  updateStep: any;
}) => {
  switch (step) {
    case 'overview':
      return <CourseOverview updateStep={updateStep} />;
    case 'curriculum':
      return <Curriculum updateStep={updateStep} />;
    case 'resources':
      return <Resources updateStep={updateStep} />;
    case 'cert-template':
      return <Certification updateStep={updateStep} />;
    case 'pricing':
      return <Price updateStep={updateStep} />;
    case 'finish':
      return <Finish updateStep={updateStep} />;
    case 'completed':
      return <Completed />;
    default:
      return <CourseOverview updateStep={updateStep} />;
  }
};
