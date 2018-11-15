import { AsyncStorage } from 'react-native';

const saveData = (key, value) => {
    AsyncStorage.setItem(key, value)
        .then(res => res)
        .catch(err => console.warn('Erro ao salvar dado: ', err));
}

const getData = key => {
    let result = ''
    AsyncStorage.getItem(key, (err, item) => result = item);

    return result;
}

export default { saveData, getData };
