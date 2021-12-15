import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './user.entity';
import { UserController } from './user.controller';

@Module({
	imports: [MikroOrmModule.forFeature({ entities: [User] })],
	providers: [UserService],
	controllers: [UserController],
	exports: [UserService]
})
export class UserModule {}
