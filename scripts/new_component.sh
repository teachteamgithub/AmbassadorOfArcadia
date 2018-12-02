#!/usr/bin/env bash

# Variables
GREEN='\033[00;32m';
WHITE='\033[01;37m';
END=$'\e[0m';
YELLOW='\033[00;33m';
CYAN='\033[00;36m';
COMPONENT=$1;
DIRECTORY=src/components/${COMPONENT};

# Functions
function log() {
  printf "\n${WHITE}%s${END}\n" "$*";
}

function success() {
  printf "\n${GREEN}%s${END}\n" "$*";
}

function warning() {
  printf "\n${YELLOW}%s${END}\n" "$*";
}

function info() {
  printf "\n${CYAN}%s${END}\n" "$*";
}

if [ $# -lt 1 ]; then
    echo "You need to provide the name COMPONENT";
    exit 0;
fi

if [ -d "$DIRECTORY" ]; then
    log "$DIRECTORY already exists";
    exit 0;
fi

log "Creating ${COMPONENT} folder";

mkdir src/components/${COMPONENT};

log "Creating index.jsx for ${COMPONENT}";

cat > "$DIRECTORY/index.jsx" <<- EOM
import ${COMPONENT} from '${COMPONENT}.jsx';

export default ${COMPONENT};
EOM

log "Creating ${COMPONENT}.jsx for ${COMPONENT}";

cat > "$DIRECTORY/${COMPONENT}.jsx" <<- EOM
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './${COMPONENT}.styles';

const ${COMPONENT} = props => {
  return (
    <View style={styles.container}>
      // TODO:
    </View>
  );
}

${COMPONENT}.propTypes = {
  
};

${COMPONENT}.defaultProps = {

};

export default ${COMPONENT};
EOM

log "Creating ${COMPONENT}.styles.jsx for ${COMPONENT}";

cat > "$DIRECTORY/${COMPONENT}.styles.jsx" <<- EOM
import { StyleSheet } from 'react-native';

import { fonts, colors, metrics } from '../../styles';

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
});

export default styles;
EOM

log "Creating ${COMPONENT}.test.jsx";

cat > "$DIRECTORY/${COMPONENT}.test.jsx" <<- EOM
import React from 'react';
import enzymeHelpers from '../../../__tests__/helpers';
import ${COMPONENT} from '${COMPONENT}';

describe('Testing ${COMPONENT} Component', () => {
  it('should render correctly', () => {
    const wrapper = enzymeHelpers.shallow(<${COMPONENT} />);

    expect(wrapper).toMatchSnapshot();
  });
});
EOM

success "Component ${COMPONENT} created successfully at '${DIRECTORY}'.";
