import request from '@/utils/request'

export function getGalleryContent(params) {
	return request({
		method: 'GET',
		url: '/gallery/content',
		params: params
	})
}

export function upload(data) {
	return request({
		method: 'POST',
		url: '/gallery/upload',
		data: data
	})
}
