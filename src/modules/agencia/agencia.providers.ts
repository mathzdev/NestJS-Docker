import { Connection } from 'mongoose';

import { AgenciaSchema } from './schemas/agencia.schema';

export const agenciaProviders = [
  {
    provide: 'AgenciaModelToken',
    useFactory: (connection: Connection) =>
      connection.model('Agencia', AgenciaSchema),
    inject: ['DbConnectionToken']
  }
];
