import React from 'react';

import { useIntl } from '@edx/frontend-platform/i18n';
import { Alert, Button } from '@openedx/paragon';

import { instructorDashboardUrl } from 'data/services/lms/urls';
import useGradebookHeaderData from './hooks';
import messages from './messages';

export const GradebookHeader = () => {
  const { formatMessage } = useIntl();
  const {
    areGradesFrozen,
    canUserViewGradebook,
    courseId,
    handleToggleViewClick,
    showBulkManagement,
    toggleViewMessage,
  } = useGradebookHeaderData();
  const dashboardUrl = instructorDashboardUrl();
  return (
    <header className="gradebook-header">
      <a href={dashboardUrl} className="gradebook-header__back-link">
        <span aria-hidden="true">← </span>
        {formatMessage(messages.backToDashboard)}
      </a>
      <div className="gradebook-header__body">
        <div className="gradebook-header__copy">
          <p className="gradebook-header__eyebrow">{formatMessage(messages.gradebook)}</p>
          <h1>{formatMessage(messages.gradebook)}</h1>
          <h2 className="text-break">{courseId}</h2>
        </div>
        {showBulkManagement && (
          <Button className="gradebook-header__toggle" variant="tertiary" onClick={handleToggleViewClick}>
            {formatMessage(toggleViewMessage)}
          </Button>
        )}
      </div>
      {areGradesFrozen && (
        <Alert variant="warning" dismissible={false} className="gradebook-header__alert">
          {formatMessage(messages.frozenWarning)}
        </Alert>
      )}
      {(canUserViewGradebook === false) && (
        <Alert variant="danger" dismissible={false} className="gradebook-header__alert">
          {formatMessage(messages.unauthorizedWarning)}
        </Alert>
      )}
    </header>
  );
};

export default GradebookHeader;
