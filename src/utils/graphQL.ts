import { ExplorerRoute } from '@/types/explorer-nav.types';
import {
  GraphQLSchema,
  GraphQLType,
  OperationTypeNode,
  isEnumType,
  isInputObjectType,
  isObjectType,
  isScalarType,
  isUnionType,
} from 'graphql';

const getLastOfType = (type: GraphQLType): GraphQLType => {
  if ('ofType' in type) {
    return getLastOfType(type.ofType);
  }
  return type;
};

const checkTypes = (type: GraphQLType) => {
  if (isScalarType(type)) return ExplorerRoute.ArgsType;
  if (isEnumType(type)) return ExplorerRoute.EnumType;
  if (isObjectType(type) || isInputObjectType(type)) return ExplorerRoute.FieldType;
  if (isUnionType(type)) return ExplorerRoute.UnionType;
  else return ExplorerRoute.ArgsType;
};

const getRootTypeFields = (schema: GraphQLSchema, type: OperationTypeNode) => {
  return schema.getRootType(type)?.getFields();
};

export { checkTypes, getLastOfType, getRootTypeFields };
