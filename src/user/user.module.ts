import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './user.entity';

@Module({
	imports: [MikroOrmModule.forFeature({ entities: [User] })],
	providers: [UserService],
	controllers: [],
	exports: [UserService]
})
export class UserModule {}
