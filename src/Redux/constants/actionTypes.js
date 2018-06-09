import keyMirror from 'keymirror';

export const actionTypes = keyMirror({
	
	REQUEST_LOGIN: null,
	RECEIVED_LOGIN: null,
	ERROR_LOGIN: null,

	REQUEST_LOGOUT: null,

	REQUEST_REGISTER: null,
	RECEIVED_REGISTER: null,
	ERROR_REGISTER: null,

	CLEAR_FORM_STATUS: null,

	CLEAR_INPUT: null,

	REQUEST_USERS: null,
	RECEIVED_USERS: null,
	ERROR_USERS: null,

	REQUEST_USER: null,
	RECEIVED_USER: null,
	ERROR_USER: null,

	REQUEST_PROFILE: null,
	RECEIVED_PROFILE: null,
	ERROR_PROFILE: null,

	REQUEST_UPDATE_PROFILE: null,
	RECEIVED_UPDATE_PROFILE: null,
	ERROR_UPDATE_PROFILE: null,

	REQUEST_UPLOAD_IMAGE: null,
	RECEIVED_UPLOAD_IMAGE: null,
	ERROR_UPLOAD_IMAGE: null,

	REQUEST_POSTS: null,
	RECEIVED_POSTS: null,
	ERROR_POSTS: null,

	REQUEST_SINGLE_POST: null,
	RECEIVED_SINGLE_POST: null,
	ERROR_SINGLE_POST: null,

	REQUEST_NEW_POST: null,
	RECEIVED_NEW_POST: null,
	ERROR_NEW_POST: null,
});
