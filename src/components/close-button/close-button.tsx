const {h} = KalturaPlayer.ui.preact;
import * as styles from './close-button.scss';

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton = (props: CloseButtonProps) => (
  <div
    className={[styles.closeButton, 'kaltura-info__close-button'].join(' ')}
    role="button"
    tabIndex={1}
    onClick={props.onClick}
  />
);
