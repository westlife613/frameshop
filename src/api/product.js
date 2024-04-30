import request from '@/utils/request'

export function getColor() {
	return request({
		method: 'GET',
		url: '/product/getColor'
	})
}

export function getFrame() {
	return request({
		method: 'GET',
		url: '/product/getFrame'
	})
}


export function priceCalculate(params) {
	return request({
		method: 'POST',
		url: '/product/priceCalculate ',
		params: params
	})
}
