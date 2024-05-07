import request from '@/utils/request'

export function generateOrder(params) {
	return request({
		method: 'POST',
		url: '/order/generateOrder',
		params: {
              "productType":2,
            //   3种产品，0:photo p，1：canvas,"2fap"
              "surfaceTypeId": 0,
            //   photo paper type : 0;luster,1:matte
              "framing": 0,
              "stretch": 0,
              "width": 8,
              "height": 10,
              "unit": "inch"
            }

	})
}
