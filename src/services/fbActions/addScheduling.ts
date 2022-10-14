import { addDoc, collection } from 'firebase/firestore';
import { FieldValues } from 'react-hook-form';
import { db } from '../Firebase';

export const addNewScheduling = async (data: FieldValues, hour: string) => {
	const { date_selection, client_name } = data;

	const collectionRef = collection(db, 'days', date_selection, 'scheduling');

	await addDoc(collectionRef, {
		hour,
		client_name,
	});
};
