import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerKFOOD = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<KFOOD, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly addr?: string | null;
  readonly cusn?: string | null;
  readonly dsc?: string | null;
  readonly menu?: string | null;
  readonly img?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyKFOOD = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<KFOOD, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly addr?: string | null;
  readonly cusn?: string | null;
  readonly dsc?: string | null;
  readonly menu?: string | null;
  readonly img?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type KFOOD = LazyLoading extends LazyLoadingDisabled ? EagerKFOOD : LazyKFOOD

export declare const KFOOD: (new (init: ModelInit<KFOOD>) => KFOOD) & {
  copyOf(source: KFOOD, mutator: (draft: MutableModel<KFOOD>) => MutableModel<KFOOD> | void): KFOOD;
}