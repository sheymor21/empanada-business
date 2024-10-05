import {Module} from '@nestjs/common';
import {EmpanadasModule} from './empanadas/empanadas.module';
import {DatabaseProvider} from "./database/database.config";
import {OrderModule} from './order/order.module';

@Module({
    imports: [EmpanadasModule, OrderModule, DatabaseProvider.get()],
    controllers: [],
    providers: [],
})
export class AppModule {
}
