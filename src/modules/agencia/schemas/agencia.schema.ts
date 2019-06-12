import * as mongoose from 'mongoose';

export const AgenciaSchema = new mongoose.Schema(
  {
    banco: { type: String, enum : ['BANCO_DO_BRASIL','CAIXA_ECONOMICA_FEDERAL'], default: 'BANCO_DO_BRASIL' },
    codAgencia: Number,
    endereco: String
  },
  {
    collection: 'agencia'
  }
);
