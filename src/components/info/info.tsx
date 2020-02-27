import {h, Component} from 'preact';
import * as styles from './info.scss';
import {getContribLogger} from '@playkit-js-contrib/common';
import {CloseButton} from '../close-button';

export interface InfoProps {
  onClick: () => void;
  entryName: string;
  description: string;
  broadcastedDate: string;
}

const logger = getContribLogger({
  class: 'Info',
  module: 'info-plugin',
});

export class Info extends Component<InfoProps> {
  componentDidMount(): void {
    logger.trace('Info plugin mount', {
      method: 'componentDidMount',
    });
  }

  render(props: InfoProps) {
    const {onClick, entryName, description, broadcastedDate} = props;
    return (
      <div className={styles.root}>
        <CloseButton onClick={onClick} />
        {broadcastedDate && (
          <div className={styles.broadcastedDate}>{broadcastedDate}</div>
        )}
        <div className={styles.entryName}>{entryName}</div>
        <div className={styles.entryDescription}>{description}</div>
      </div>
    );
  }
}
