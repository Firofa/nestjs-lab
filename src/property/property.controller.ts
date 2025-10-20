import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  //   Put,
  Query,
  //   UsePipes,
  //   ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
// import { idParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { HeaderDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';

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
  findOne(
    @Param('id', ParseIntPipe) id: string,
    @Query('sort', ParseBoolPipe) sort,
  ): any {
    return this.propertyService.findOne();
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
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertyService.create();
  }

  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id: string,
    @Body() body: CreatePropertyDto,
    @RequestHeader(HeaderDto) header: HeaderDto,
  ) {
    return this.propertyService.update();
  }

  //   @Put(':id')
  //   update(@Param('id') id: string) {
  //     return `This will update a property with id:${id}`;
  //   }
}
