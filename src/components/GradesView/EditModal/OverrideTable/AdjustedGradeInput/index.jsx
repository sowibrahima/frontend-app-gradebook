import React from 'react';

import { Form } from '@openedx/paragon';

import useAdjustedGradeInputData from './hooks';

/**
 * <AdjustedGradeInput />
 * Input control for adjusting the grade of a unit
 * displays an "/ ${possibleGrade} if there is one in the data model.
 */
export const AdjustedGradeInput = () => {
  const {
    value,
    onChange,
    hintText,
  } = useAdjustedGradeInputData();
  return (
    <span className="grade-edit-modal__adjusted-grade">
      <Form.Control
        type="text"
        name="adjustedGradeValue"
        value={value}
        onChange={onChange}
        className="grade-edit-modal__input grade-edit-modal__input--grade"
      />
      <span className="grade-edit-modal__grade-hint">{hintText}</span>
    </span>
  );
};

AdjustedGradeInput.propTypes = {};

export default AdjustedGradeInput;
