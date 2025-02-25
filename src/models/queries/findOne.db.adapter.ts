import { Model, ModelStatic, WhereOptions } from 'sequelize';

export const findOneQuery =
  <T extends Model>(model: ModelStatic<T>) =>
  async (where: WhereOptions<T['_attributes']>): Promise<T | null> => {
    const result = await model.findOne({ where });
    return result;
  };
