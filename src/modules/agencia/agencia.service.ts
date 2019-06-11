import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Agencia } from './interfaces/agencia.interface';
import { CreateAgenciaDto } from './dto/create-agencia.dto';

@Injectable()
export class AgenciaService {
  constructor(
    @Inject('AgenciaModelToken') private readonly agenciaModel: Model<Agencia>
  ) {}

  async create(createAgenciaDto: CreateAgenciaDto): Promise<Agencia> {
    const createdAgencia = new this.agenciaModel(createAgenciaDto);
    return await createdAgencia.save();
  }

  async findAll(): Promise<Agencia[]> {
    return await this.agenciaModel.find().exec();
  }
}
