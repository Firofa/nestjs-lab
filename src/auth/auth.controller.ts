import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { RefreshAuthGuard } from './guards/refresh-auth/refresh-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth/jwt-auth.guard';
import { Public } from './decorators/public.decorator';

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

  @Public()
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: RequestWithUser) {
    return this.authService.login(parseInt(req.user.id));
  }

  @UseGuards(RefreshAuthGuard)
  @Post('refresh')
  refreshToken(@Req() req: RequestWithUser) {
    return this.authService.refreshToken(parseInt(req.user.id));
  }

  @UseGuards(JwtAuthGuard)
  @Post('signout')
  signOut(@Req() req: RequestWithUser) {
    return this.authService.signOut(parseInt(req.user.id));
  }
}
