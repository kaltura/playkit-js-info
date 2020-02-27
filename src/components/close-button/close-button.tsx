const {h} = KalturaPlayer.ui.preact;
import * as styles from './close-button.scss';

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton = (props: CloseButtonProps) => (
  <div
    className={styles.closeButton}
    role="button"
    tabIndex={1}
    onClick={props.onClick}
  />
);
