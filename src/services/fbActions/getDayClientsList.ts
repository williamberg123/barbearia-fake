import { getDocs, collection, DocumentData } from 'firebase/firestore';
import { SchedulingType } from '../../@types/scheduling';
import { db } from '../Firebase';

export const getDayClientsList = async (dateString: string) => {
	const docRef = collection(db, 'days', dateString, 'scheduling');
	const document = await getDocs(docRef);

	const array: SchedulingType[] = [];

	document.forEach((item: DocumentData) => {
		array.push(item.data());
	});

	return array;
};
