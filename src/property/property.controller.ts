import {
  Body,
  Controller,
  Get,
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
    @Param('id', ParseIdPipe) id,
    @Body()
    body: CreatePropertyDto,
  ) {
    return body;
  }

  //   @Put(':id')
  //   update(@Param('id') id: string) {
  //     return `This will update a property with id:${id}`;
  //   }
}
