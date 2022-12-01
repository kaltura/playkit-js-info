import {h, Component} from 'preact';
import * as styles from './info.scss';
import * as sanitizeHtml from 'sanitize-html';
import { OverlayPortal } from '@playkit-js/common';
const {
  components: {PLAYER_SIZE},
  redux: {connect}
} = KalturaPlayer.ui;
const {Overlay} = KalturaPlayer.ui.components;

export interface InfoProps {
  onClick: () => void;
  entryName: string;
  description: string;
  broadcastedDate: string;
}
interface ConnectProps {
  playerSize?: string;
}

type MergedProps = InfoProps & ConnectProps;

const mapStateToProps = (state: Record<string, any>) => ({
  playerSize: state.shell.playerSize
});
@connect(mapStateToProps)
export class Info extends Component<MergedProps> {
  render(props: MergedProps) {
    const {onClick, entryName, description, broadcastedDate, playerSize = ''} = props;
    if (playerSize === PLAYER_SIZE.TINY) {
      return null;
    }
    return (
        <OverlayPortal>
            <Overlay open onClose={onClick}>
                <div className={[styles.infoRoot, styles[playerSize]].join(' ')}>
                  {broadcastedDate && <div className={styles.broadcastDate}>{broadcastedDate}</div>}
                  <div className={styles.entryName}>{entryName}</div>
                  {description && <div className={styles.entryDescription}
                                       dangerouslySetInnerHTML={{__html: sanitizeHtml(description)}}/>}
                </div>
            </Overlay>
        </OverlayPortal>
    );
  }
}
