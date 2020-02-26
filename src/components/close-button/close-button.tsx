const {h} = KalturaPlayer.ui.preact;
import * as styles from './close-button.scss';

export const CloseButton = () => (
  <div className={styles.closeButton} role="button" tabIndex={1} />
);
