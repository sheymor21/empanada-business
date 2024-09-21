import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpanadaDto } from './create-empanada.dto';

export class UpdateEmpanadaDto extends PartialType(CreateEmpanadaDto) {}
