import pg from './db';
import builder from '../../library/builder';

class BaseModel {
  constructor() {
    this.db = pg;
    this.builder = builder;
  }
}

export default BaseModel;
