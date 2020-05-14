import firebase from './firebase.service';

const db = firebase.firestore();
const todoRef = db.collection('todo');

/**Exported methods */

const add = (date,title,description)=>{
    const data = {
        date,
        title,
        description,
        owner: firebase.auth().currentUser.uid,
        createdAt:firebase.firestore.FieldValue.serverTimestamp()
    };
    return todoRef.add(data);
};

const list = (date)=>{
    console.log(date);
    return todoRef
    .where('owner','==',firebase.auth().currentUser.uid)
    .where('date','==',date)
    .get().then(querySnapshot=>{
        const data = [];
        querySnapshot.forEach(doc=>{
            const d = {
                id:doc.id,
                ...doc.data()
            };
            data.push(d);
        });
        return data;
    })
};

const TodoService = {
    add,
    list
};

export default TodoService; 