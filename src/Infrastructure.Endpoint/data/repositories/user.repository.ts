import { inject, injectable } from "tsyringe";
import { User } from "../../../Domain.Endpoint/entities/user.model";
import { IUserRepository } from "../../../Domain.Endpoint/interfaces/repositories/userRepository.interface";
import { ISqlCommandOperationBuilder } from "../../interfaces/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../../interfaces/database/dbConnection.interface";
import { EntityType } from "../../utils/entityTypes";
import {
  SqlReadOperation,
  SqlWriteOperation,
} from "../../builders/sqlOperations.enum";
import { PublicUser } from "../../../Domain.Endpoint/dtos/user.dto";

@injectable()
export class UserRepository implements IUserRepository {
  private readonly _operationBuilder: ISqlCommandOperationBuilder;
  private readonly _connection: ISingletonSqlConnection;

  constructor(
    @inject("IOperationBuilder") operationBuilder: ISqlCommandOperationBuilder,
    @inject("ISingletonSqlConnection") connection: ISingletonSqlConnection
  ) {
    this._operationBuilder = operationBuilder;
    this._connection = connection;
  }

  async getAll(): Promise<PublicUser[]> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.User)
      .WithOperation(SqlReadOperation.Select)
      .BuildReader();
    const rows = await this._connection.executeQuery(readCommand);

    return rows.map(
      (row) =>
        ({
          id: row["ID"],
          name: row["NAME"],
          email: row["EMAIL"],
          areaId: row["AREA_ID"],
          roleId: row["ROLE_ID"],
        } as PublicUser)
    );
  }

  async getById(id: string): Promise<PublicUser | null> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.User)
      .WithOperation(SqlReadOperation.SelectById)
      .WithId(id)
      .BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return({
      id: row["ID"],
      name: row["NAME"],
      email: row["EMAIL"],
      areaId: row["AREA_ID"],
      roleId: row["ROLE_ID"],
    } as PublicUser);
  }

  async getByEmail(email: string): Promise<User | null> {
    const builder = this._operationBuilder!.Initialize(
      EntityType.User
    ).WithOperation(SqlReadOperation.SelectByField);

    if (!builder.WithField) throw new Error("WithField no implementado");

    const readCommand = builder.WithField("email", email).BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return new User({
      id: row["ID"],
      name: row["NAME"],
      email: row["EMAIL"],
      password: row["PASSWORD"],
      areaId: row["AREA_ID"],
      roleId: row["ROLE_ID"],
    });
  }

  async getByAreaId(areaId: string): Promise<PublicUser[]> {
    const builder = this._operationBuilder
      .Initialize(EntityType.User)
      .WithOperation(SqlReadOperation.SelectByField);

    if (!builder.WithField) {
      throw new Error("WithField no implementado");
    }

    const readCommand = builder.WithField("areaId", areaId).BuildReader();

    const rows = await this._connection.executeQuery(readCommand);
    if (!rows || rows.length === 0) return [];

    return rows.map(
      (row) =>
        ({
          id: row["ID"],
          name: row["NAME"],
          email: row["EMAIL"],
          password: row["PASSWORD"],
          areaId: row["AREA_ID"],
          roleId: row["ROLE_ID"],
        } as PublicUser)
    );
  }

  async create(user: User): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.User, user)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(user: PublicUser): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.User, user)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(user: PublicUser): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.User, user)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
}
