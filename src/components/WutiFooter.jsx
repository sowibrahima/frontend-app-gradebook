import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from './GradebookFilters/messages';

const WutiFooter = () => {
  const { formatMessage } = useIntl();
  const year = new Date().getFullYear();

  return (
    <footer className="wuti-footer">
      <div className="wuti-footer__inner">
        <p className="wuti-footer__copy">
          © {year} WutiSkill Inc. {formatMessage(messages.footerRights)}
        </p>
        <nav className="wuti-footer__nav" aria-label={formatMessage(messages.footerNav)}>
          <a href="/help" className="wuti-footer__link">
            {formatMessage(messages.footerHelp)}
          </a>
          <a href="/terms" className="wuti-footer__link">
            {formatMessage(messages.footerTerms)}
          </a>
          <a href="/privacy" className="wuti-footer__link">
            {formatMessage(messages.footerPrivacy)}
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default WutiFooter;
