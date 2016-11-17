import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters.js';

module.exports = {
    id : 'com.ewaypayments',

    form : [
        {type : 'string', name : 'customerId'},
    ],

	// @see List of countries in https://eway.io/ (though some countries are not supported by the API version we use)
    countries : [
        'AU', 'HK', 'MY', 'NZ', 'SG'
    ],
	
	fields: [],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify,
};