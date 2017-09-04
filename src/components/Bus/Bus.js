import Avatar from 'material-ui/Avatar'
import { stringHSLColorHash } from '../../services/colorService'

          <Avatar style={{
            height: 64,
            width: 64,
            backgroundColor: `hsl(${stringHSLColorHash(this.props.match.params.routeID)}, 100%, 33%)`,
            fontSize: 25,
            cursor: 'default',
          }}>
            {this.props.match.params.routeID}
          </Avatar>
