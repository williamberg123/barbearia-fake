export const generateDateString = (days?: number) => {
	const milliseconds_per_day = 1000 * 60 * 60 * 24;
	const today = new Date();
	let date: Date;

	if (!days) {
		date = today;
	} else {
		const t = today.getTime();
		date = new Date(t + (milliseconds_per_day * days));
	}

	const dayNumber = date.getDate();
	const monthNumber = date.getMonth();
	const yearNumber = date.getFullYear();

	return `${dayNumber}${monthNumber}${yearNumber}`;
};
