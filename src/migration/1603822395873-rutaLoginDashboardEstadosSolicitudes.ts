import {MigrationInterface, QueryRunner} from "typeorm";

export class rutaLoginDashboardEstadosSolicitudes1603822395873 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        if (process.env.NODE_ENV !== "test") {
            await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/estadosDeSolicitud', 'POST');`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta = '/v3/estadosDeSolicitud';`);
    }

}