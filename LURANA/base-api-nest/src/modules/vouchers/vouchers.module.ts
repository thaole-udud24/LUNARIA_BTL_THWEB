import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VouchersService } from './vouchers.service';
import { VouchersController } from './vouchers.controller';
import { VouchersAdminController } from './vouchers.admin.controller';
import { Voucher, VoucherSchema } from './schemas/voucher.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Voucher.name, schema: VoucherSchema }]),
  ],
  controllers: [VouchersController, VouchersAdminController],
  providers: [VouchersService],
  exports: [VouchersService],
})
export class VouchersModule {}
