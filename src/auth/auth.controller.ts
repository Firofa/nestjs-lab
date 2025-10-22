import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';

// Buat interface untuk request dengan user
interface RequestWithUser extends Request {
  user: {
    id: string;
    // tambahkan property lain jika diperlukan
    email?: string;
    username?: string;
  };
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: RequestWithUser) {
    const token = this.authService.login(parseInt(req.user.id));
    return { id: req.user.id, token };
  }
}
