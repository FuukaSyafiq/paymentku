import { HttpService } from '@nestjs/axios';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AccessTokenGuardGuard } from '../access-token-guard/access-token-guard.guard';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';

@Controller('/api/v1')
export class TransactionalController {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  private async forwardRequest(
    method: 'GET' | 'POST' | 'DELETE',
    path: string,
    req: any,
    data?: any,
  ): Promise<AxiosResponse<any>> {
    const headers = {
      'X-Request-Id': crypto.randomUUID(),
      'X-Internal-Secret': this.configService.get<string>('INTERNAL_SECRET'),
      'X-Userid': req.user_id,
    };

    const url = this.configService.get<string>('TRANSACTIONAL_SVC') + path;
    const options = { headers };

    try {
      switch (method) {
        case 'GET':
          return await firstValueFrom(this.httpService.get(url, options));
        case 'POST':
          return await firstValueFrom(
            this.httpService.post(url, data, options),
          );
        case 'DELETE':
          return await firstValueFrom(this.httpService.delete(url, options));
        default:
          throw new Error('Unsupported method');
      }
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private async handleRequest(
    method: 'GET' | 'POST' | 'DELETE',
    basePath: string,
    req: any,
    id?: string,
    body?: any,
  ) {
    const path = id ? `${basePath}/${id}` : basePath;
    const result = await this.forwardRequest(method, path, req, body);
    return result.data;
  }

  // === HISTORY TOPUP ===
  @UseGuards(AccessTokenGuardGuard)
  @Get('history/topup')
  getHistoryTopup(@Req() req) {
    return this.handleRequest('GET', '/history/topup', req);
  }

  @UseGuards(AccessTokenGuardGuard)
  @Delete('history/topup')
  deleteHistoryTopup(@Req() req) {
    return this.handleRequest('DELETE', '/history/topup', req);
  }

  @UseGuards(AccessTokenGuardGuard)
  @Get('history/topup/:id')
  getHistoryTopupById(@Req() req, @Param('id') id: string) {
    return this.handleRequest('GET', '/history/topup', req, id);
  }

  @UseGuards(AccessTokenGuardGuard)
  @Delete('history/topup/:id')
  deleteHistoryTopupById(@Req() req, @Param('id') id: string) {
    return this.handleRequest('DELETE', '/history/topup', req, id);
  }

  // === HISTORY TRANSFER ===
  @UseGuards(AccessTokenGuardGuard)
  @Get('history/transfer')
  getHistoryTransfer(@Req() req) {
    return this.handleRequest('GET', '/history/transfer', req);
  }

  @UseGuards(AccessTokenGuardGuard)
  @Delete('history/transfer')
  deleteHistoryTransfer(@Req() req) {
    return this.handleRequest('DELETE', '/history/transfer', req);
  }

  @UseGuards(AccessTokenGuardGuard)
  @Get('history/transfer/:id')
  getHistoryTransferById(@Req() req, @Param('id') id: string) {
    return this.handleRequest('GET', '/history/transfer', req, id);
  }

  @UseGuards(AccessTokenGuardGuard)
  @Delete('history/transfer/:id')
  deleteHistoryTransferById(@Req() req, @Param('id') id: string) {
    return this.handleRequest('DELETE', '/history/transfer', req, id);
  }

  // === TRANSACTIONS ===
  @UseGuards(AccessTokenGuardGuard)
  @Post('transaction/topup')
  topup(@Req() req, @Body() body: any) {
    return this.handleRequest(
      'POST',
      '/transaction/topup',
      req,
      undefined,
      body,
    );
  }

  @UseGuards(AccessTokenGuardGuard)
  @Post('transaction/transfer')
  transfer(@Req() req, @Body() body: any) {
    return this.handleRequest(
      'POST',
      '/transaction/transfer',
      req,
      undefined,
      body,
    );
  }

  // === GRAPH  ===
  @UseGuards(AccessTokenGuardGuard)
  @Get('/graph/income')
  getIncome(@Req() req) {
    return this.handleRequest(
      'GET',
      '/graph/income',
      req,
      undefined,
      undefined,
    );
  }
  @UseGuards(AccessTokenGuardGuard)
  @Get('/graph/outcome')
  getOutcome(@Req() req) {
    return this.handleRequest(
      'GET',
      '/graph/outcome',
      req,
      undefined,
      undefined,
    );
  }
}
