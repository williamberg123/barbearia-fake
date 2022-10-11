import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase';

export const getDayClientsList = async (dateString: string) => {
	const documentRef = doc(db, 'days', dateString);
	const document = await getDoc(documentRef);
	console.log(document.data());
};
