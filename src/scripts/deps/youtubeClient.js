import privates from './privates';
import 'whatwg-fetch';

export function buildYTAPIRequest(path, params) {
	const keys = Object.keys(params);

	return keys.reduce((previous, current) => {
		return previous + '&'
			+ encodeURIComponent(current.toString())
			+ '='
			+ encodeURIComponent(params[current].toString())
	}, 'https://www.googleapis.com/youtube/v3/' + path + '/?key=' + privates.YTKey);
}

export function getLatestVideo(cb) {
	const request = buildYTAPIRequest('search', {
		channelId: privates.YTChannelID,
		maxResults: 1,
		part: 'snippet',
		type: 'video',
		order: 'date'
	});

	fetch(request)
		.then((response) => response.json())
		.then((data) => {
			if (data.items && data.items.length > 0) {
				cb(data.items[0]);
			}
		});
}