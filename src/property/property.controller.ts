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

@Controller('property')
export class PropertyController {
  @Get()
  findAll(): string {
    return 'All Properties';
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: string,
    @Query('sort', ParseBoolPipe) sort,
  ): string {
    console.log(`Property with ID: ${id}`);
    console.log(`Propery of 'sort' ${sort}`);
    return '';
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
    return createPropertyDto;
  }

  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id: string,
    @Body() body: CreatePropertyDto,
    @RequestHeader(HeaderDto) header: HeaderDto,
  ) {
    return {
      message: 'Header valid',
      header,
    };
  }

  //   @Put(':id')
  //   update(@Param('id') id: string) {
  //     return `This will update a property with id:${id}`;
  //   }
}
