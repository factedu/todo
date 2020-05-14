import * as firebase from 'firebase';
import 'firebase/firestore';

import { firebaseConfig } from './../constants/firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export  default firebase;