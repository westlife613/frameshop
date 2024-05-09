import request from '@/utils/request'

export function generateOrder(params) {
	return request({
		method: 'POST',
		url: '/order/generateOrder ',
		params: params
	})
}
