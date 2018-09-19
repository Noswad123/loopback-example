import { ApplicationConfig } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
declare const TodoListApplication_base: {
    new (...args: any[]): {
        [x: string]: any;
        projectRoot: string;
        bootOptions?: import("@loopback/boot/src/interfaces").BootOptions | undefined;
        boot(): Promise<void>;
        booters(...booterCls: import("@loopback/context/src/value-promise").Constructor<import("@loopback/boot/src/interfaces").Booter>[]): import("@loopback/context/src/binding").Binding<any>[];
        component(component: import("@loopback/context/src/value-promise").Constructor<{}>): void;
        mountComponentBooters(component: import("@loopback/context/src/value-promise").Constructor<{}>): void;
    };
} & {
    new (...args: any[]): {
        [x: string]: any;
        serviceProvider<S>(provider: import("@loopback/service-proxy/src/mixins/service.mixin").Class<import("@loopback/context/src/provider").Provider<S>>): void;
        component(component: import("@loopback/service-proxy/src/mixins/service.mixin").Class<{}>): void;
        mountComponentServices(component: import("@loopback/service-proxy/src/mixins/service.mixin").Class<{}>): void;
    };
} & {
    new (...args: any[]): {
        [x: string]: any;
        repository(repo: import("@loopback/repository/src/common-types").Class<import("@loopback/repository/src/repositories/repository").Repository<any>>): void;
        getRepository<R extends import("@loopback/repository/src/repositories/repository").Repository<any>>(repo: import("@loopback/repository/src/common-types").Class<R>): Promise<R>;
        dataSource(dataSource: import("@loopback/repository/node_modules/loopback-datasource-juggler/types/datasource").DataSource | import("@loopback/repository/src/common-types").Class<import("@loopback/repository/node_modules/loopback-datasource-juggler/types/datasource").DataSource>, name?: string | undefined): void;
        component(component: import("@loopback/repository/src/common-types").Class<{}>): void;
        mountComponentRepositories(component: import("@loopback/repository/src/common-types").Class<{}>): void;
    };
} & typeof RestApplication;
export declare class TodoListApplication extends TodoListApplication_base {
    constructor(options?: ApplicationConfig);
}
export {};
