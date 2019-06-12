import * as mongoose from 'mongoose';

export const UsuarioSchema = new mongoose.Schema(
  {
    nome: String,
    cep: String,
    banco: { type: String, enum : ['BANCO_DO_BRASIL','CAIXA_ECONOMICA_FEDERAL'], default: 'BANCO_DO_BRASIL' },
    agencia: { type: mongoose.Schema.Types.ObjectId, ref: 'agencia' },
    conta: Number
  },
  {
    collection: 'usuarios'
  }
);
