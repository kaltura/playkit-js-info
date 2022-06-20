import {h} from 'preact';
import * as styles from './close-button.scss';
import {A11yWrapper, OnClick} from '../../a11y-wrapper/a11y-wrapper';

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton = (props: CloseButtonProps) => (
  <A11yWrapper onClick={props.onClick}>
    <div className={[styles.closeButton, 'kaltura-info__close-button'].join(' ')} role="button" tabIndex={1} />
  </A11yWrapper>
);
