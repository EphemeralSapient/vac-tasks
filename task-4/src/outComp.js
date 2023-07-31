import { Component } from 'react'
import In from './In';
class Out extends Component {


    render() {
        return(
            <div>
                This is {this.props.out}
                <In in={this.props.in} />
            </div>
        );
    }
}
export default Out;