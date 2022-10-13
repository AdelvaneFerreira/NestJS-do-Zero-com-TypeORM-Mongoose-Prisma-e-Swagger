import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll(@Res() res) {
    return res.status(HttpStatus.OK).json(this.coursesService.findAll());
    
  }

  @Get(':id')
  findOne(@Param('id') id:string) {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() CreateCourseDto: CreateCourseDto) {
    return this.coursesService.create(CreateCourseDto);
  }

  @Patch(':id')
  update(@Param('id') id:string, @Body() UpdateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, UpdateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id:string) {
    return this.coursesService.remove(id);
  }
}
