// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMockApi = require('../../../app/controller/mockApi');

declare module 'egg' {
  interface IController {
    mockApi: ExportMockApi;
  }
}
