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

  async findOne(id: string): Promise<Agencia> {
    return await this.agenciaModel.findById(id).exec();
  }

  async update(id: string, updateAgenciaDto: CreateAgenciaDto): Promise<Agencia> {
    return await this.agenciaModel.findByIdAndUpdate(id, updateAgenciaDto);
  }

  async delete(id: string) {
    await this.agenciaModel.findOneAndRemove(id).exec();
  }
}
