import { Injectable } from '@nestjs/common';
import { CreateTimeboxDto } from './dto/create-timebox.dto';
import { UpdateTimeboxDto } from './dto/update-timebox.dto';

@Injectable()
export class TimeboxsService {
  create(createTimeboxDto: CreateTimeboxDto) {
    return 'This action adds a new timebox';
  }

  findAll() {
    return `This action returns all timeboxs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} timebox`;
  }

  update(id: number, updateTimeboxDto: UpdateTimeboxDto) {
    return `This action updates a #${id} timebox`;
  }

  remove(id: number) {
    return `This action removes a #${id} timebox`;
  }
}
