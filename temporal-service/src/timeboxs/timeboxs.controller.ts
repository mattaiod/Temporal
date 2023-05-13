import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimeboxsService } from './timeboxs.service';
import { CreateTimeboxDto } from './dto/create-timebox.dto';
import { UpdateTimeboxDto } from './dto/update-timebox.dto';

@Controller('timeboxs')
export class TimeboxsController {
  constructor(private readonly timeboxsService: TimeboxsService) {}

  @Post()
  create(@Body() createTimeboxDto: CreateTimeboxDto) {
    return this.timeboxsService.create(createTimeboxDto);
  }

  @Get()
  findAll() {
    return this.timeboxsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timeboxsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimeboxDto: UpdateTimeboxDto) {
    return this.timeboxsService.update(+id, updateTimeboxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timeboxsService.remove(+id);
  }
}
