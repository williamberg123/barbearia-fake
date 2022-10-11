export default function Form({ children, onSubmit }: { children: any, onSubmit: () => void }) {
	return (
		<form onSubmit={onSubmit}>
			{children}
		</form>
	);
}
