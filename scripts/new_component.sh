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

log "Creating index.js for ${COMPONENT}";

cat > "$DIRECTORY/index.js" <<- EOM
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ${COMPONENT} = props => {
  return (
    <View style={styles.container}>
    </View>
  );
}

${COMPONENT}.propTypes = {
  
};

${COMPONENT}.defaultProps = {

};

export default ${COMPONENT};
EOM

log "Creating styles.js for ${COMPONENT}";

cat > "$DIRECTORY/styles.js" <<- EOM
import { StyleSheet } from 'react-native';

import { fonts, colors, metrics } from '../../styles';

export default styles = StyleSheet({
    container: {
      flex: 1,
    }
});
EOM

success "Component ${COMPONENT} created successfully at '${DIRECTORY}'.";
