import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import NutcacheEnum from '../support/nutcache-enum';
import UrlHelper from './url-helper';
import i18n from '../i18n';

export async function GetCurrentCompany() {
  const path = window.location.pathname.substr(1);
  const siteIdentifierFromUrl = path.substr(0, path.indexOf('/'));
  if (siteIdentifierFromUrl !== localStorage.getItem('site_identifier')) {
    const url = `${window.location.origin}/webapi/companies/filtered`;
    const fetchParameters = {
      'method': 'POST',
      'content-Type': 'application/json; charset=utf-8',
      'headers': {
        'api-version': '4',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Accept-Language': i18n.language,
      },
      'body': JSON.stringify({
        filter_rules: [
          {
            property: 'site_identifier',
            operator: 'eq',
            value: siteIdentifierFromUrl,
          },
        ],
      }),
    };

    const result = await fetch(url, fetchParameters);
    if (result.status === NutcacheEnum.HttpStatus.Unauthorized) {
      window.location.href = UrlHelper.getUrl('Account', 'LogOff');
      return;
    }
    const response = await result.json();
    if (response && response.companies) {
      localStorage.setItem('guid', response.companies[0].guid);
      localStorage.setItem('site_identifier', response.companies[0].site_identifier);
      localStorage.setItem('company_id', response.companies[0].id);
    } else {
      localStorage.removeItem('guid');
      localStorage.removeItem('site_identifier');
      localStorage.removeItem('company_id');
    }
  }
  return localStorage.getItem('guid');
}

const APIRequestHelper = {
  async sendRequest(httpMethod, action, payload, noAwait) {
    const url = `${window.location.origin}/webapi/${action}`;
    const fetchParameters = {
      method: httpMethod,
      headers: {
        'api-version': '4',
        'content-Type': 'application/json; charset=utf-8',
        'OrganizationGuid': await GetCurrentCompany(),
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Accept-Language': i18n.language,
      },
    };
    if (payload) {
      fetchParameters.body = JSON.stringify(payload);
    }

    try {
      if (noAwait) {
        return fetch(url, fetchParameters);
      }
      const result = await fetch(url, fetchParameters);
      if (result.status === NutcacheEnum.HttpStatus.Unauthorized) {
        window.location.href = UrlHelper.getUrl('Account', 'LogOff');
        return;
      }
      const response = await result.json();

      return {
        data: response,
        StatusCode: result.status,
        isSuccess:
          result.status === NutcacheEnum.HttpStatus.OK ||
          result.status === NutcacheEnum.HttpStatus.Created ||
          result.status === NutcacheEnum.HttpStatus.Accepted ||
          result.status === NutcacheEnum.HttpStatus.NoContent,
      };
    } catch (error) {
      return {
        data: null,
        StatusCode: NutcacheEnum.HttpStatus.InternalServerError,
        isSuccess: false,
      };
    }
  },

  async uploadFile(action, file) {
    const url = `${window.location.origin}/webapi/${action}`;

    // Do not set the content-type
    const fetchParameters = {
      method: 'POST',
      headers: {
        'api-version': '4',
        'OrganizationGuid': await GetCurrentCompany(),
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Accept-Language': i18n.language,
      },
    };

    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      fetchParameters.body = formData;
    }

    const result = await fetch(url, fetchParameters);
    if (result.status === NutcacheEnum.HttpStatus.Unauthorized) {
      window.location.href = UrlHelper.getUrl('Account', 'LogOff');
      return;
    }
    const response = result.status === NutcacheEnum.HttpStatus.EntityTooLarge ? null : await result.json();
    return {
      data: response,
      StatusCode: result.status,
      isSuccess:
        result.status === NutcacheEnum.HttpStatus.OK ||
        result.status === NutcacheEnum.HttpStatus.Created ||
        result.status === NutcacheEnum.HttpStatus.Accepted ||
        result.status === NutcacheEnum.HttpStatus.NoContent,
    };
  },

  getActionPayload(actionsHeader, actionName) {
    const value = `{"${actionsHeader}" : [{ "type": "action", "key": "${actionName}", "value": "true"}]}`;
    return JSON.parse(value);
  },

  async getDataManager(httpMethod, action, query, offline) {
    const url = `${window.location.origin}/webapi/${action}`;
    const dataManager = new DataManager({
      requestType: httpMethod,
      url,
      adaptor: new UrlAdaptor(),
      crossDomain: true,
      offline: offline ?? !query,
      headers: [
        { 'api-version': '4' },
        { OrganizationGuid: await GetCurrentCompany() },
        { Authorization: `Bearer ${localStorage.getItem('token')}` },
        { 'Accept-Language': i18n.language },
      ],
    });

    if (query) {
      const result = await dataManager.executeQuery(query);
      return result.result;
    }
    return dataManager;
  },
};

export default APIRequestHelper;
