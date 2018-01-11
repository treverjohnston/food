'use strict';
const yelp = require('yelp-fusion');
const apiKey = 'mjcB8YxIQoX7cMBCvQ1_nagDAqIhXR0pBuuL_J2CYF5YD3j5E3BH8FEu_tGO9n996_Rcgb7Mz1jBY45NjdRGXWPQx9PFBn6Pr295djBnZsfpFF3seaZCq5TMIDxJWnYx'
const client = yelp.client(apiKey);

console.log('here')

module.exports = {
    Place: {
        path: '/places',
        reqType: 'post',
        method(req, res, next) {
            let action = 'Find Places'
            client.search({
                term: 'Food',
                latitude: req.body.lat,
                longitude: req.body.lng
            }).then(response => {
                // console.log(response.jsonBody.businesses[0].name);
                res.send(handleResponse(action, response.jsonBody.businesses))
                // return res(handleResponse(action, response))
                
            }).catch(e => {
                console.log(e);
                return next(handleResponse(action, null, e))
            });

        }
    },

}


function handleResponse(action, data, error) {
    var response = {
        action: action,
        data: data
    }
    if (error) {
        response.error = error
    }
    return response
}