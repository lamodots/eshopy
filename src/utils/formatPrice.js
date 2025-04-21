export function formatPrice(price) {
	const formatter = Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'NGN',
	}).format(price);
	return formatter;
}
