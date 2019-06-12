import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiModelProperty()
  readonly nome: string;

  @ApiModelProperty()
  readonly cep: string;

  @ApiModelProperty({enum: ['BANCO_DO_BRASIL', 'CAIXA_ECONOMICA_FEDERAL']})
  readonly banco: string;

  @ApiModelProperty()
  readonly agencia: string;

  @ApiModelProperty()
  readonly conta: number;
}
