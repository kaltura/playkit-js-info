import {h, Component} from 'preact';
import * as styles from './info.scss';
import {CloseButton} from '../close-button';

export interface InfoProps {
  onClick: () => void;
  entryName: string;
  description: string;
  broadcastedDate: string;
}

export class Info extends Component<InfoProps> {
  render(props: InfoProps) {
    const {onClick, entryName, description, broadcastedDate} = props;
    return (
      <div className={[styles.root, 'kaltura-info__root'].join(' ')}>
        <CloseButton onClick={onClick} />
        <div className={[styles.broadcastDate, 'kaltura-info__broadcast-date', broadcastedDate ? '' : 'hidden'].join(' ')}>{broadcastedDate}</div>
        <div className={[styles.entryName, 'kaltura-info__entry-name'].join(' ')}>{entryName}</div>
        <div className={[styles.entryDescription, 'kaltura-info__entry-description'].join(' ')} dangerouslySetInnerHTML={{__html: description}} />
      </div>
    );
  }
}
