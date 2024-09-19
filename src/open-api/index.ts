import { productsSwagger } from './products';
import { UsersSwagger } from './users';

const paths = { ...productsSwagger, ...UsersSwagger };

export default paths;
