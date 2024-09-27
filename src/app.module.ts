import {Module} from '@nestjs/common';
import {EmpanadasModule} from './empanadas/empanadas.module';
import {DatabaseProvider} from "./empanadas/database/database.config";

@Module({
    imports: [EmpanadasModule, DatabaseProvider.get()],
    controllers: [],
    providers: [],
})
export class AppModule {
}
