/**
 * Created by yuyr on 2017/1/12.
 */
import React,{Component} from 'react';
import config from './config.json';

import styles from './Greeter.css';

class GreeterReact extends Component{
    render(){
        return(
            <div className={styles.root}>
                {config.greetText}
            </div>
        );
    }
}
export default GreeterReact;