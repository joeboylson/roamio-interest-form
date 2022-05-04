import { Firestore } from "firebase/firestore";
import { addDoc, collection, writeBatch, doc } from 'firebase/firestore';

function useCrud<T>(db:Firestore | undefined, collectionName:string | undefined) {

  if (!db || !collectionName) {
    return {
      addOne: function<T>() { return null; },
      addMany: function<T>() { return null; }
    }
  }

  const _catch = (error:unknown) => {
    console.error({ error });
    return null;
  };

  const _return = (data?:unknown) => {
    if (data) return function() { return data };
    else { return data; }
  }

  const addOne = (one:T) => {
    addDoc(collection(db, 'submissions'), { ...one })
    .then(_return)
    .catch(_catch)
  };

  const addMany = (many:T[]) => {
    const batch = writeBatch(db);

    const docRefs = many.map((one) => {
      const _ref = doc(collection(db, "submissions"))
      batch.set(_ref, { ...one });
      return _ref;
    });

    batch.commit().then(() => docRefs).catch(_catch)
  };

  return { addOne, addMany }

}

export { useCrud };