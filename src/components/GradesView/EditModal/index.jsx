import React from 'react';

import {
  Button,
  Alert,
  ModalDialog,
  ActionRow,
} from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';

import OverrideTable from './OverrideTable';
import ModalHeaders from './ModalHeaders';
import useEditModalData from './hooks';
import messages from './messages';

/**
 * <EditModal />
 * Wrapper component for the modal that allows editing the grade for an individual
 * unit, for a given student.
 * Provides a StatusAlert with override fetch errors if any are found, an OverrideTable
 * (with appropriate headers) for managing the actual override, and a submit button for
 * adjusting the grade.
 * (also provides a close button that clears the modal state)
 */
export const EditModal = () => {
  const { formatMessage } = useIntl();
  const {
    onClose,
    error,
    handleAdjustedGradeClick,
    isOpen,
  } = useEditModalData();

  return (
    <ModalDialog
      title={formatMessage(messages.title)}
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      hasCloseButton
      isFullscreenOnMobile
      className="grade-edit-modal"
    >
      <ModalDialog.Body>
        <div className="grade-edit-modal__body">
          <ModalHeaders />
          <Alert variant="danger" show={!!error} dismissible={false} className="grade-edit-modal__alert">
            {error}
          </Alert>
          <OverrideTable />
          <div className="grade-edit-modal__notes">
            <p className="grade-edit-modal__note">{formatMessage(messages.visibility)}</p>
            <p className="grade-edit-modal__note">{formatMessage(messages.saveVisibility)}</p>
          </div>
        </div>
      </ModalDialog.Body>

      <ModalDialog.Footer>
        <ActionRow className="grade-edit-modal__actions">
          <ModalDialog.CloseButton variant="tertiary" className="grade-edit-modal__cancel">
            {formatMessage(messages.closeText)}
          </ModalDialog.CloseButton>
          <Button variant="primary" className="grade-edit-modal__save" onClick={handleAdjustedGradeClick}>
            {formatMessage(messages.saveGrade)}
          </Button>
        </ActionRow>
      </ModalDialog.Footer>
    </ModalDialog>
  );
};

export default EditModal;
