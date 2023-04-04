export function textEllipsis(text?: string, letterLimits = 9999, ellipsis = '...') {
	if (!text) return '';

	if (text.length <= letterLimits) return text;

	return text.slice(0, letterLimits).concat(ellipsis);
}
