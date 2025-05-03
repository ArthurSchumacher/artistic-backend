import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import * as SibApiV3Sdk from 'sib-api-v3-typescript';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
  private apiInstance: SibApiV3Sdk.TransactionalEmailsApi;

  constructor(private readonly configService: ConfigService) {
      const apiKey = this.configService.get<string>('SENDINBLUE_API_KEY');
      this.apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
      if (!apiKey) {
          throw new Error('SENDINBLUE_API_KEY is missing from configuration');
      }

      this.apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, apiKey);
  }

  async create(dto: CreateEmailDto) {
      const sendSmtpEmail = {
          subject: dto.subject,
          sender: {
              name: dto.name,
              email: dto.email
          },
          htmlContent: dto.message,
          to: [{ email: "artistictechnologies.0@gmail.com" }],
      };

      try {
          const data = await this.apiInstance.sendTransacEmail(sendSmtpEmail);
          return { message: 'Email sent', data };
      } catch (error) {
          console.error(`Error sending email: ${error.message}`);
          throw error;
      }
  }

}
