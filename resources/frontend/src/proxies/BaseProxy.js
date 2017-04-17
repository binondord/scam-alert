import Vue from 'vue';

class BaseProxy {
  /**
   * The constructor of the BaseProxy.
   *
   * @param {string} endpoint   The endpoint being used.
   * @param {Object} parameters The parameters for the request.
   */
  constructor(endpoint, parameters = {}) {
    this.endpoint = endpoint;
    this.parameters = parameters;
  }

  /**
   * Method used to set the query parameters.
   *
   * @param {Object} parameters The given parameters.
   *
   * @returns {BaseProxy} The instance of the proxy.
   */
  setParameters(parameters) {
    Object.keys(parameters).forEach((key) => {
      this.parameters[key] = parameters[key];
    });

    return this;
  }

  /**
   * Method used to set a single parameter.
   *
   * @param {string} parameter The given parameter.
   * @param {*} value The value to be set.
   *
   * @returns {BaseProxy} The instance of the proxy.
   */
  setParameter(parameter, value) {
    this.parameters[parameter] = value;

    return this;
  }

  /**
   * Method used to remove all the parameters.
   *
   * @param {Array} parameters The given parameters.
   *
   * @returns {BaseProxy} The instance of the proxy.
   */
  removeParameters(parameters) {
    parameters.forEach((parameter) => {
      delete this.parameters[parameter];
    });

    return this;
  }

  /**
   * Method used to remove a single parameter.
   *
   * @param {string} parameter The given parameter.
   *
   * @returns {BaseProxy} The instance of the proxy.
   */
  removeParameter(parameter) {
    delete this.parameters[parameter];

    return this;
  }

  /**
   * The method used to perform an AJAX-request.
   *
   * @param {string} requestType The request type.
   * @param {string} url         The URL for the request.
   *
   * @returns {Promise} The result in a promise.
   */
  submit(requestType, url) {
    return new Promise((resolve, reject) => {
      Vue.$http[requestType](url + this.getParameterString())
        .then(({ data }) => {
          resolve(data);
        })
        .catch((response) => {
          reject(response);
        });
    });
  }

  /**
   * Method used to fetch all items from the API.
   *
   * @returns {Promise} The result in a promise.
   */
  all() {
    return this.submit('get', `/${this.endpoint}`);
  }

  /**
   * Method used to fetch a single item from the API.
   *
   * @param {int} id The given identifier.
   *
   * @returns {Promise} The result in a promise.
   */
  find(id) {
    return this.submit('get', `/${this.endpoint}/${id}`);
  }

  /**
   * Method used to transform a parameters object to a parameters string.
   *
   * @returns {string} The parameter string.
   */
  getParameterString() {
    const keys = Object.keys(this.parameters);

    const parameterStrings = keys
      .filter(key => !!this.parameters[key])
      .map(key => `${key}=${this.parameters[key]}`);

    return parameterStrings.length === 0 ? '' : `?${parameterStrings.join('&')}`;
  }
}

export default BaseProxy;
