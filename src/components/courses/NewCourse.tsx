'use client';

import { useEffect } from 'react';

import { useStep } from '../../../context/CourseCreationContext';
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

  const { state } = useStep();
  const { currentStep } = state;

  return (
    <>
      <div>
        <div className="steps">{<RenderStep currentStep={currentStep} />}</div>
      </div>
    </>
  );
};

const RenderStep = ({ currentStep }: { currentStep: number }) => {
  switch (currentStep) {
    case 0:
      return <CourseOverview />;
    case 1:
      return <Curriculum />;
    case 2:
      return <Resources />;
    case 3:
      return <Certification />;
    case 4:
      return <Price />;
    case 5:
      return <Finish />;
    case 6:
      return <Completed />;
    default:
      return <CourseOverview />;
  }
};
