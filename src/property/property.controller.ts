import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  //   Put,
  // Query,
  //   UsePipes,
  //   ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
// import { idParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';

@Controller('property')
export class PropertyController {
  constructor(private propertyService: PropertyService) {
    // Don't create your dependency, instead use Dependency Injection in NestJS
    // this.propertyService = new PropertyService();
  }

  @Get()
  findAll(): any {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.propertyService.findOne(id);
  }

  @Get(':id/:slug')
  findOneWithSlug(
    @Param('id') id: string,
    @Param('slug') slug: string,
  ): string {
    return `id = ${id} and slug =${slug}`;
  }

  //   @Post()
  //   @UsePipes(
  //     new ValidationPipe({
  //       whitelist: true,
  //       forbidNonWhitelisted: false,
  //       groups: ['create'],
  //       always: true,
  //     }),
  //   )
  //   create(@Body() createPropertyDto: CreatePropertyDto) {
  //     return createPropertyDto;
  //   }

  @Post()
  create(@Body() dto: CreatePropertyDto) {
    return this.propertyService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id: number,
    @Body() body: UpdatePropertyDto,
  ) {
    return this.propertyService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIdPipe) id: number) {
    return this.propertyService.delete(id);
  }

  //   @Put(':id')
  //   update(@Param('id') id: string) {
  //     return `This will update a property with id:${id}`;
  //   }
}
