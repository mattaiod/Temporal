import { PartialType } from '@nestjs/mapped-types';
import { CreateTimeboxDto } from './create-timebox.dto';

export class UpdateTimeboxDto extends PartialType(CreateTimeboxDto) {}
