const listenersMap = {};

function addListener(eventName, listener) {
	listenersMap[eventName] = listenersMap[eventName] || [];
	listenersMap[eventName].push(listener);
}

function removeListener(eventName, listener) {
	let lis = listenersMap[eventName];
	if (!lis) return;

	for (let i = lis.length - 1; i >= 0; i--) {
		if (lis[i] === listener) {
			lis.splice(i, 1);
			break;
		}
	}
}

function removeAllListeners(eventName) {
	listenersMap[eventName] = [];
}

function notify(eventName, ...params) {
	let listeners = listenersMap[eventName];
	if (!listeners) return false;
	listeners.forEach(fnc => {
		fnc(...params);
	});
	return true;
}

export default {
	addListener,
	removeListener,
	removeAllListeners,
	notify,
};