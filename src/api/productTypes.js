import {
  withToken, groupFetchJson, makeConfig, baseUrl,
} from './api';
import config from '../../sunrise.config';

const productTypes = {
  getItem: withToken(
    ({ access_token: accessToken }) => groupFetchJson(
      `${baseUrl}/product-types/key=main`,
      makeConfig(accessToken),
    ),
  ),
  translations: () => productTypes.getItem().then(
    productType => config.facetSearches.map(
      ({ name }) => productType.attributes.find(
        a => a.name === name,
      ),
    ).reduce(
      (result, { name, label, type }) => ({
        name,
        label: label.de,
        values: type.name === 'lenum' ? type.values : [],
      }), new Map(),
    ),
  ),
};

export default productTypes;
