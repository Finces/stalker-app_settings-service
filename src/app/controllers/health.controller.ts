import { Get, JsonController } from 'routing-controllers';
import { Service } from 'typedi';

@Service()
@JsonController('/health')
export class HealthController {
  @Get('/')
  get(): string {
    return 'ok';
  }
}
