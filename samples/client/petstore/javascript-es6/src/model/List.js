/**
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The List model module.
* @module model/List
* @version 1.0.0
*/
export default class List {
    /**
    * Constructs a new <code>List</code>.
    * @alias module:model/List
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>List</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/List} obj Optional instance to populate.
    * @return {module:model/List} The populated <code>List</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new List();

            
            
            

            if (data.hasOwnProperty('123-list')) {
                obj['123-list'] = ApiClient.convertToType(data['123-list'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} 123-list
    */
    123-list = undefined;








}

