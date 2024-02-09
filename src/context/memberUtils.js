import { db } from '../firebase';
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';

const colRef = collection(db, 'members');

// const getList = async (gymIds) => {
//   const colQuery = query(colRef, where('gymId', 'in', gymIds));
//   const snap = await getDocs(colQuery);
//   return snap.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));
// };

const create = async (data) => {
  try {
    const docRef = await addDoc(collection(db, `Events/${data.EventId}/Members`), data);
    return docRef;
  } catch (error) {
    console.error('Error creating subscription:', error);
    throw error;
  }
};

const makeDefaultGym = (uid, gymId) => {
  const docRef = doc(db, 'users', uid);
  return updateDoc(docRef, { gymId });
};

const deleteSubscription = async (subscriptionId) => {
  try {
    const subscriptionDocRef = doc(db, 'subscription', subscriptionId);
    await deleteDoc(subscriptionDocRef);
  } catch (error) {
    console.error('Error deleting subscription:', error);
    throw error;
  }
};
export { create, makeDefaultGym, deleteSubscription };