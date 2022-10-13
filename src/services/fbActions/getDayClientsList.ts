import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase';

export const getDayClientsList = async (dateString: string) => {
	const docRef = doc(db, 'days', dateString);
	const document = await getDoc(docRef);
	console.log(document);
};
