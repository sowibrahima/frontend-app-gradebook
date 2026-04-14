import React from 'react';

import { Button } from '@openedx/paragon';

import usePageButtonsData from './hooks';

export const PageButtons = () => {
  const { prev, next } = usePageButtonsData();

  return (
    <div className="gradebook-page-buttons">
      <Button
        className="gradebook-page-buttons__button"
        variant="outline-primary"
        disabled={prev.disabled}
        onClick={prev.onClick}
      >
        {prev.text}
      </Button>
      <Button
        className="gradebook-page-buttons__button"
        variant="outline-primary"
        disabled={next.disabled}
        onClick={next.onClick}
      >
        {next.text}
      </Button>
    </div>
  );
};

PageButtons.propTypes = {};

export default PageButtons;
