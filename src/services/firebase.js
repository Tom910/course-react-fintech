import firebaseApp from 'firebase/app';

import config from '../constants/firebase';

let instants;

export default () => {
  if (!instants) {
    instants = firebaseApp.initializeApp(config);
  }

  return instants;
};
