/* eslint-disable react/sort-comp, react/button-has-type, import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';

import BulkManagementControls from './BulkManagementControls';
import EditModal from './EditModal';
import FilterBadges from './FilterBadges';
import FilteredUsersLabel from './FilteredUsersLabel';
import FilterMenuToggle from './FilterMenuToggle';
import GradebookTable from './GradebookTable';
import ImportSuccessToast from './ImportSuccessToast';
import InterventionsReport from './InterventionsReport';
import PageButtons from './PageButtons';
import ScoreViewInput from './ScoreViewInput';
import SearchControls from './SearchControls';
import SpinnerIcon from './SpinnerIcon';
import StatusAlerts from './StatusAlerts';

import useGradesViewData from './hooks';

export const GradesView = ({ updateQueryParams }) => {
  const {
    stepHeadings,
    handleFilterBadgeClose,
  } = useGradesViewData({ updateQueryParams });

  return (
    <div className="gradebook-view">
      <SpinnerIcon />

      <InterventionsReport />
      <section className="gradebook-panel gradebook-panel--filters">
        <div className="gradebook-panel__header">
          <h3 className="step-message-1">
            {stepHeadings.filter}
          </h3>
        </div>

        <div className="gradebook-toolbar">
          <FilterMenuToggle />
          <SearchControls />
        </div>

        <FilterBadges handleClose={handleFilterBadgeClose} />
        <StatusAlerts />
      </section>

      <section className="gradebook-panel gradebook-panel--grades">
        <div className="gradebook-panel__header gradebook-panel__header--split">
          <div className="gradebook-panel__heading-group">
            <h3>{stepHeadings.gradebook}</h3>
            <div className="gradebook-results-label">
              <FilteredUsersLabel />
            </div>
          </div>
          <div className="gradebook-scorebar">
            <ScoreViewInput />
            <BulkManagementControls />
          </div>
        </div>

        <GradebookTable />

        <PageButtons />
      </section>
      <EditModal />

      <ImportSuccessToast />
    </div>
  );
};

GradesView.propTypes = {
  updateQueryParams: PropTypes.func.isRequired,
};

export default GradesView;
