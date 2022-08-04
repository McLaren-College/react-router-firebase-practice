import { db } from './firebase-config';
import { addDoc, collection, onSnapshot, query } from 'firebase/firestore'

// Add New Message
async function addMsg(data) {
    try {
        let newDocRef = await addDoc(collection(db, 'mails'), data)
        return newDocRef.id;
    } catch (e) {
        return null;
    }
}

// get messages in realtime 
async function getMessages(setStateCallback) {
    onSnapshot(query(collection(db, 'mails')), (querySnapshot) => {
        const messages = [];
        querySnapshot.forEach(doc => {
            let data = doc.data()
            data.id = doc.id;
            messages.push(data)
        })
        setStateCallback(messages);
    });

}

export { addMsg, getMessages }