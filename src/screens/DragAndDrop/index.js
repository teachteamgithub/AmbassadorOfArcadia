import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Draggable from 'react-native-draggable';

import styles from './styles';

const img = require('../../assets/images/levels/emotionalRecognition/levelOne/man-happy.png');

class DrapAndDrop extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.dropArea}>
                    <Text style={styles.title}>Arraste para esta área a criança que está feliz</Text>
                </View>
                <View style={styles.dragArea}>
                    <Draggable
                        renderShape='image'
                        imageSource={img}
                        renderSize={250}
                        offsetX={120} offsetY={0}
                        reverse={false}
                        //pressDragRelease={this._changeFace}
                        //longPressDrag={() => console.log('long press')}
                        //pressDrag={() => console.log('press drag')}
                        //pressInDrag={() => console.log('in press')}
                        pressOutDrag={() => console.log('out press')}
                    />
                </View>
            </View>
        );
    }
}

export default DrapAndDrop;