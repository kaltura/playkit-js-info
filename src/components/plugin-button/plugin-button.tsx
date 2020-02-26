const {h} = KalturaPlayer.ui.preact;
import * as styles from './plugin-button.scss';

export const PluginButton = () => (
  <div className={styles.pluginButton} role="button" tabIndex={1} />
);
