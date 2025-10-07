import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Request } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

export interface AuthenticatedRequest extends Request {
    user?: any;
}

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register')
    async register(@Body() dto: RegisterDto) {
        return this.authService.register(dto.email, dto.password);
    }

    @Post('login')
    async login(@Body() dto: LoginDto) {
        const user = await this.authService.validateUser(dto.email, dto.password);
        if (!user) return { message: 'Invalid credentials' };
        return this.authService.login(user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('refresh')
    async refresh(@Req() req: AuthenticatedRequest) {
        const user = req.user;
        return this.authService.refresh(user.sub, user.refreshToken);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('logout')
    async logout(@Req() req: AuthenticatedRequest) {
        const user = req.user;
        await this.authService.logout(user.sub);
        return { message: 'Logged out successfully' };
    }
}
