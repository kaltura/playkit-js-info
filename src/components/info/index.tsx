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
// @ts-ignore
const {withKeyboardA11y} = KalturaPlayer.ui.utils;

export interface InfoProps {
  onClick: () => void;
  entryName: string;
  description: string;
  creator: string;
  createdAt: VNode;
  plays: string;
}
interface ConnectProps {
  playerSize?: string;
}
interface KeyboardA11yProps {
  handleKeyDown?: () => void;
  setIsModal?: (isModel: boolean) => void;
  addAccessibleChild?: (element: HTMLElement) => void;
}

type MergedProps = InfoProps & ConnectProps & KeyboardA11yProps;

const mapStateToProps = (state: Record<string, any>) => ({
  playerSize: state.shell.playerSize
});
@connect(mapStateToProps)
@withKeyboardA11y
export class Info extends Component<MergedProps> {
  renderMediaInfo = () => {
    const {creator, createdAt, plays} = this.props;
    const mediaInfo = [creator, plays, createdAt];
    if (!mediaInfo.some(v => v)) {
      return null;
    }
    const dataTestIds = ['creator', 'plays', 'createdAt'];
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
              {index === 1 ? <Text id="info.plays"> plays</Text> : null}
            </div>
          );
        })}
      </div>
    );
  };

  componentDidMount(): void {
    this.props.setIsModal && this.props.setIsModal(true);
  }

  render(props: MergedProps) {
    const {onClick, entryName, description, playerSize = '',handleKeyDown, addAccessibleChild} = props;
    if (playerSize === PLAYER_SIZE.TINY) {
      return null;
    }
    return (
      <OverlayPortal>
        <Overlay open onClose={onClick} addAccessibleChild={addAccessibleChild} handleKeyDown={handleKeyDown}>
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
