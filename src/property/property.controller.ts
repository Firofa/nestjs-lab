import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';

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

  @Post()
  create(@Body() body: { name: string; type: string }) {
    return body;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `This will update a property with id:${id}`;
  }
}
