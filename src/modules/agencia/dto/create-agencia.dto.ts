import { ApiModelProperty } from '@nestjs/swagger';

export class CreateAgenciaDto {
  @ApiModelProperty({enum: ['BANCO_DO_BRASIL', 'CAIXA_ECONOMICA_FEDERAL']})
  readonly banco: String;

  @ApiModelProperty()
  readonly codAgencia: number;

  @ApiModelProperty()
  readonly endereco: string;
}
