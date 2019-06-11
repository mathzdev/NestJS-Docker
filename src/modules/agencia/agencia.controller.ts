import { Body, Controller, Get, Post } from '@nestjs/common';

import { AgenciaService } from './agencia.service';
import { CreateAgenciaDto } from './dto/create-agencia.dto';
import { Agencia } from './interfaces/agencia.interface';

@Controller('agencia')
export class AgenciaController {
  constructor(private readonly agenciaService: AgenciaService) {}

  @Post()
  async create(@Body() createContactDto: CreateAgenciaDto) {
    this.agenciaService.create(createContactDto);
  }

  @Get()
  async findAll(): Promise<Agencia[]> {
    return this.agenciaService.findAll();
  }
}
