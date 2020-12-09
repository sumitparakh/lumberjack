import { InjectionToken } from '@angular/core';

import { isClass } from '@internal/test-util';

import {
  LumberjackConfig,
  lumberjackConfigToken,
  LumberjackFormatFunction,
  LumberjackLogDriverConfig,
  lumberjackLogDriverConfigToken,
  LumberjackModule,
  LumberjackOptions,
} from './index';

describe('Configuration API', () => {
  describe('Interfaces', () => {
    it('exposes LumberjackConfig', () => {
      const value: LumberjackConfig | undefined = undefined;

      expect(value).toBeUndefined();
    });

    it('exposes LumberjackLogDriverConfig', () => {
      const value: LumberjackLogDriverConfig | undefined = undefined;

      expect(value).toBeUndefined();
    });
  });

  describe('Types', () => {
    it('exposes LumberjackFormatFunction', () => {
      const value: LumberjackFormatFunction | undefined = undefined;

      expect(value).toBeUndefined();
    });

    it('exposes LumberjackOptions', () => {
      const value: LumberjackOptions | undefined = undefined;

      expect(value).toBeUndefined();
    });
  });

  describe('Angular modules', () => {
    it(`exposes ${LumberjackModule.name}`, () => {
      const sut = LumberjackModule;

      expect(isClass(sut)).withContext(`${sut.name} is not a class`).toBeTrue();
    });
  });

  describe('Dependency injection tokens', () => {
    it('exposes lumberjackConfigToken', () => {
      const sut = lumberjackConfigToken;

      expect(sut).toBeInstanceOf(InjectionToken);
    });

    it('exposes lumberjackLogDriverConfigToken', () => {
      const sut = lumberjackLogDriverConfigToken;

      expect(sut).toBeInstanceOf(InjectionToken);
    });
  });
});