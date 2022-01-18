import axios from 'axios';
import { ApiHost } from './Constant';

const RootApi = axios.create({
  baseURL: ApiHost,
});

export { RootApi as default };
