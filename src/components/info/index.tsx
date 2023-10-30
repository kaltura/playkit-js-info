import {h, Component, VNode} from 'preact';
import * as styles from './info.scss';
import * as sanitizeHtml from 'sanitize-html';
import {OverlayPortal} from '@playkit-js/common/dist/hoc/overlay-portal';
const {
  components: {PLAYER_SIZE},
  redux: {connect}
} = KalturaPlayer.ui;
const {Overlay} = KalturaPlayer.ui.components;
const {Text} = KalturaPlayer.ui.preacti18n;

export interface InfoProps {
  onClick: () => void;
  entryName: string;
  description: string;
  creator: string;
  updatedAt: VNode;
  views: string;
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
  renderMediaInfo = () => {
    const {creator, updatedAt, views} = this.props;
    const mediaInfo = [creator, views, updatedAt];
    if (!mediaInfo.every(v => v)) {
      return null;
    }
    const dataTestIds = ['creator', 'views', 'updatedAt'];
    return (
      <div className={styles.mediaInfo} data-testid="mediaInfo">
        {mediaInfo.map((val, index) => {
          if (!val) {
            return null;
          }
          return (
            <div key={index} className={styles.mediaInfoBlock} data-testid={dataTestIds[index]}>
              {index === 0 ? <Text id="info.creator">By </Text> : null}
              {val}
              {index === 1 ? <Text id="info.views"> views</Text> : null}
            </div>
          );
        })}
      </div>
    );
  };

  render(props: MergedProps) {
    const {onClick, entryName, description, playerSize = ''} = props;
    if (playerSize === PLAYER_SIZE.TINY) {
      return null;
    }
    return (
      <OverlayPortal>
        <Overlay open onClose={onClick}>
          <div className={[styles.infoRoot, styles[playerSize]].join(' ')} data-testid="infoRoot">
            <div className={styles.entryName} data-testid="entryName">
              {entryName}
            </div>
            {this.renderMediaInfo()}
            {description && (
              <div data-testid="entryDescription" className={styles.entryDescription} dangerouslySetInnerHTML={{__html: sanitizeHtml(description)}} />
            )}
          </div>
        </Overlay>
      </OverlayPortal>
    );
  }
}
